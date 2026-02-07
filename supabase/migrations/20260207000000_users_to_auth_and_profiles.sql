-- Migrate custom users table to auth.users + public.profiles
-- Run in Supabase Dashboard → SQL Editor (or via Supabase CLI).
-- Uses a single transaction so you can roll back on error.

BEGIN;

-- Ensure pgcrypto is available for bcrypt (Supabase has it by default)
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- ---------------------------------------------------------------------------
-- 1.1 Create public.profiles table (references auth.users)
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL DEFAULT '',
  last_name TEXT NOT NULL DEFAULT '',
  phone TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE public.profiles IS 'Public profile data; identity lives in auth.users';

-- ---------------------------------------------------------------------------
-- 1.2 Trigger: create profile on new auth.users signup
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, first_name, last_name, phone, created_at, updated_at)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'first_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'last_name', ''),
    NEW.raw_user_meta_data->>'phone',
    now(),
    now()
  );
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ---------------------------------------------------------------------------
-- 1.3 Migrate existing public.users into auth.users + profiles
-- Temporary password: "ChangeMe123!" — users must use "Forgot password" to set a real one.
-- ---------------------------------------------------------------------------
DO $$
DECLARE
  _user RECORD;
  _instance_id UUID;
  _temp_password TEXT := 'ChangeMe123!';
  _encrypted_pw TEXT;
BEGIN
  -- Supabase hosted projects have one row in auth.instances; use its id for instance_id
  SELECT id INTO _instance_id FROM auth.instances LIMIT 1;
  IF _instance_id IS NULL THEN
    RAISE EXCEPTION 'No auth.instances row found; ensure Supabase Auth is initialized';
  END IF;

  _encrypted_pw := crypt(_temp_password, gen_salt('bf'));

  FOR _user IN SELECT id, email, first_name, last_name, phone, created_at, updated_at FROM public.users
  LOOP
    INSERT INTO auth.users (
      id,
      instance_id,
      aud,
      role,
      email,
      encrypted_password,
      email_confirmed_at,
      raw_user_meta_data,
      raw_app_meta_data,
      created_at,
      updated_at
    ) VALUES (
      _user.id,
      _instance_id,
      'authenticated',
      'authenticated',
      _user.email,
      _encrypted_pw,
      now(),
      jsonb_build_object(
        'first_name', _user.first_name,
        'last_name', _user.last_name,
        'phone', _user.phone
      ),
      '{}'::jsonb,
      _user.created_at,
      _user.updated_at
    )
    ON CONFLICT (id) DO NOTHING;

    INSERT INTO public.profiles (id, first_name, last_name, phone, created_at, updated_at)
    VALUES (
      _user.id,
      COALESCE(_user.first_name, ''),
      COALESCE(_user.last_name, ''),
      _user.phone,
      _user.created_at,
      _user.updated_at
    )
    ON CONFLICT (id) DO UPDATE SET
      first_name = EXCLUDED.first_name,
      last_name = EXCLUDED.last_name,
      phone = EXCLUDED.phone,
      updated_at = EXCLUDED.updated_at;
  END LOOP;
END $$;

-- ---------------------------------------------------------------------------
-- 1.4 Point FKs to profiles and drop old users table
-- ---------------------------------------------------------------------------
ALTER TABLE public.properties
  DROP CONSTRAINT IF EXISTS properties_owner_id_fkey;

ALTER TABLE public.tenants
  DROP CONSTRAINT IF EXISTS tenants_owner_id_fkey;

ALTER TABLE public.financial_transactions
  DROP CONSTRAINT IF EXISTS financial_transactions_user_id_fkey;

ALTER TABLE public.documents
  DROP CONSTRAINT IF EXISTS documents_user_id_fkey;

ALTER TABLE public.properties
  ADD CONSTRAINT properties_owner_id_fkey
  FOREIGN KEY (owner_id) REFERENCES public.profiles(id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE public.tenants
  ADD CONSTRAINT tenants_owner_id_fkey
  FOREIGN KEY (owner_id) REFERENCES public.profiles(id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE public.financial_transactions
  ADD CONSTRAINT financial_transactions_user_id_fkey
  FOREIGN KEY (user_id) REFERENCES public.profiles(id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE public.documents
  ADD CONSTRAINT documents_user_id_fkey
  FOREIGN KEY (user_id) REFERENCES public.profiles(id) ON DELETE CASCADE ON UPDATE CASCADE;

DROP TABLE IF EXISTS public.users;

-- ---------------------------------------------------------------------------
-- 1.5 RLS on profiles
-- ---------------------------------------------------------------------------
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own profile" ON public.profiles;
CREATE POLICY "Users can read own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- Insert is done by trigger only; no policy needed for INSERT from app.

COMMIT;
