import Header from "@/components/ui/header";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const superbaseClient = async (supabaseAccessToken) => {
  const supabase = createClient(supabaseUrl, supabaseKey, {
    global: {
      Header: {
        Authoriztion: `Bearer ${supabaseAccessToken}`,
      },
    },
  });
  return supabase;
};

export default supabase;
