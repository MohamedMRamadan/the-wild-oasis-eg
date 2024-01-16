import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qqqorhsjarzabkxnuage.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxcW9yaHNqYXJ6YWJreG51YWdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2MTU3NjAsImV4cCI6MjAxOTE5MTc2MH0.e4qn7xuZfEGkWgcHAoagUtHevi2OVlnQwJoT-V5h0Jk`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
