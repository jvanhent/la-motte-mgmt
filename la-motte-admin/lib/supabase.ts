import { createClient } from "@supabase/supabase-js"

const supabaseUrl : string = process.env.SUPABASE_URL!
const supabaseApiKey : string = process.env.SUPABASE_API_KEY!
const supabaseSchema : string = process.env.SUPABASE_SCHEMA!

const supabase = createClient(supabaseUrl, supabaseApiKey, {
    db: {
        schema: supabaseSchema
    }
})

export default supabase