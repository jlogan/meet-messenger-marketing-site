import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

/**
 * Same Supabase project as meet-messenger. Lazily created so the rest of the site
 * still loads if env is missing (the login form will show an error on submit).
 */
export function getMarketingSupabase(): SupabaseClient {
  if (client) return client;
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) {
    throw new Error(
      "Missing VITE_SUPABASE_URL or VITE_SUPABASE_PUBLISHABLE_KEY. Copy values from meet-messenger .env into .env.local.",
    );
  }
  client = createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
  return client;
}

export function getAppBaseUrl(): string {
  const raw = import.meta.env.VITE_APP_URL ?? "http://localhost:8080";
  return raw.replace(/\/$/, "");
}
