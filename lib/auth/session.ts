import { createServerSupabaseClient } from "@/lib/clients/supabase-server";
import { prisma } from "@/lib/clients/prisma";

export type SessionUser = {
  id: string;
  email?: string;
};

export type SessionWithProfile = SessionUser & {
  profile: {
    id: string;
    firstName: string;
    lastName: string;
    phone: string | null;
    avatarUrl: string | null;
  } | null;
};

/**
 * Returns the current Supabase auth user (id and email) or null if not signed in.
 * Use in Server Components and Server Actions.
 */
export async function getSessionUser(): Promise<SessionUser | null> {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) return null;
  return { id: user.id, email: user.email ?? undefined };
}

/**
 * Returns the current user id from Supabase session, or null.
 * Convenience for pages that only need the owner/user id.
 */
export async function getCurrentUserId(): Promise<string | null> {
  const user = await getSessionUser();
  return user?.id ?? null;
}

/**
 * Returns the current auth user plus their profile from public.profiles.
 * Use for navbar, layout, or any place that needs display name or avatar.
 */
export async function getSessionWithProfile(): Promise<SessionWithProfile | null> {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) return null;

  const profile = await prisma.profile.findUnique({
    where: { id: user.id },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      phone: true,
      avatarUrl: true,
    },
  });

  return {
    id: user.id,
    email: user.email ?? undefined,
    profile: profile
      ? {
          id: profile.id,
          firstName: profile.firstName,
          lastName: profile.lastName,
          phone: profile.phone,
          avatarUrl: profile.avatarUrl,
        }
      : null,
  };
}
