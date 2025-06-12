import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pscsittwrgivsgaedevh.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzY3NpdHR3cmdpdnNnYWVkZXZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxMzU3NDIsImV4cCI6MjA2MjcxMTc0Mn0.J3_wABcSQIqBlpXtckCkhG6OOigtTvchbsmFYOYqO84'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type DiceRoll = {
  id: string
  value: number
  user_id: string
  created_at: string
}
