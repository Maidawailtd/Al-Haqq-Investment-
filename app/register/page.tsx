import RegisterForm from "@/components/auth/register-form"
import { getSupabaseServerClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export default async function RegisterPage() {
  const supabase = getSupabaseServerClient()

  // Check if user is already logged in
  const {
    data: { session },
  } = await supabase.auth.getSession()
  if (session) {
    redirect("/dashboard")
  }

  return (
    <div className="container mx-auto px-4 py-16 flex justify-center">
      <RegisterForm />
    </div>
  )
}
