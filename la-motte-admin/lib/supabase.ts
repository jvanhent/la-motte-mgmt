import { createClient } from "@supabase/supabase-js"

const supabaseUrl : string = process.env.SUPABASE_URL || 'https://server.url'
const supabaseApiKey : string = process.env.SUPABASE_API_KEY || 'key'
const supabaseSchema : string = process.env.SUPABASE_SCHEMA || 'public'

const supabase = createClient(supabaseUrl, supabaseApiKey, {
    db: {
        schema: supabaseSchema
    }
})

export default supabase