import { createClient } from "@supabase/supabase-js";
// "https://esm.sh/@supabase/supabase-js";
const supabaseUrl = "https://cnodjienyjfzitzjzxxp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNub2RqaWVueWpmeml0emp6eHhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyNDE2NTIsImV4cCI6MjAyODgxNzY1Mn0.KtVtjoFGN_6cf3l97KbTQ6UtoygGerMiHzaXUEYSmdk";

export const supabase = createClient(supabaseUrl, supabaseKey);
