import { getSupabase } from "../lib/supabase.js";

export async function createApplication(data) {
  const supabase = getSupabase();

  const { error } = await supabase.from("applications").insert({
    name: data.name,
    phone: data.phone,
    company: data.company,
  });

  if (error) {
    const wrapped = new Error("Failed to save application");
    wrapped.cause = error;
    throw wrapped;
  }
}
