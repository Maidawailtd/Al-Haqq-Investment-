import { getSupabaseServerClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import InvestmentSummary from "@/components/dashboard/investment-summary"
import RecentTransactions from "@/components/dashboard/recent-transactions"

export default async function DashboardPage() {
  const supabase = getSupabaseServerClient()

  // Check if user is authenticated
  const {
    data: { session },
  } = await supabase.auth.getSession()
  if (!session) {
    redirect("/login")
  }

  // Get user data
  const { data: userData } = await supabase.from("users").select("*").eq("id", session.user.id).single()

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2">Welcome, {userData?.full_name || "Investor"}</h1>
        <p className="text-gray-600 mb-8">Here's an overview of your investments and recent activities</p>

        <div className="space-y-8">
          {/* Investment Summary */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Your Investment Portfolio</h2>
            <InvestmentSummary />
          </section>

          {/* Recent Transactions */}
          <section>
            <RecentTransactions />
          </section>
        </div>
      </div>
    </div>
  )
}
