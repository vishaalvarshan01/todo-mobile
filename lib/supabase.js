import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://elhrcrqahrsszishvhdw.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsaHJjcnFhaHJzc3ppc2h2aGR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM2NjQ3MjMsImV4cCI6MjA0OTI0MDcyM30.6eS7qUfzEQOAMAGK9x1G2Epytt9pYvCK7u_esopxGiM";

export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});
