import { createClient } from '@supabase/supabase-js'


export const supabase = createClient (
    "https://zuddgdwfmvrukvzpyifd.supabase.co", 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1ZGRnZHdmbXZydWt2enB5aWZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAyNzIxNTAsImV4cCI6MTk3NTg0ODE1MH0.DTvbAV7Csza6C5dcZg0LfQBOlIXPCOnuaiFLFpZerIs"
)