import { createClient } from "@supabase/supabase-js";
import { supabaseDataProvider } from "ra-supabase";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_API_KEY = import.meta.env.VITE_SUPABASE_API_KEY;
const SUPABASE_SCHEMA = import.meta.env.VITE_SUPABASE_SCHEMA;

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY, {
    db: {
        schema: SUPABASE_SCHEMA
    }
});

const dataProvider = supabaseDataProvider({
    supabaseClient: supabase,
    instanceUrl: SUPABASE_URL,
    apiKey: SUPABASE_API_KEY,
    schema: () => SUPABASE_SCHEMA,
});

export default dataProvider