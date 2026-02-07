import { NextResponse, type NextRequest } from "next/server";
import { createServerSupabaseClient } from "../clients/supabase-server";

/**
 * Refreshes Supabase auth session and returns a response with updated cookies.
 * Call this in middleware so Server Components see an up-to-date session.
 */
export async function updateSession(request: NextRequest) {
  const supabaseResponse = NextResponse.next({ request });

  const supabase = await createServerSupabaseClient();

  // Refreshes session and writes updated cookies to supabaseResponse
  await supabase.auth.getUser();

  return supabaseResponse;
}
