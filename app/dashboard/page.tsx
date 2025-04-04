import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PortfolioOverview } from "@/components/portfolio/portfolio-overview"
import { MarketAnalysis } from "@/components/market/market-analysis"
import { TrendingUp, TrendingDown, Plus } from "lucide-react"

export const metadata = {
  title: "Dashboard - Alhagg Investment",
  description: "View and manage your investment portfolio with Alhagg Investment's comprehensive dashboard.",
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 space-y-8 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="mr-2 h-4 w-4" />
              Add Investment
            </Button>
          </div>
        </div>

        <PortfolioOverview />

        <MarketAnalysis />

        {/* Recent Investments */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Recent Investments</CardTitle>
              <CardDescription>Your most recent investment activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {[
                  {
                    name: "Apple Inc. (AAPL)",
                    type: "Stock",
                    amount: "$5,000.00",
                    date: "Apr 1, 2025",
                    performance: "+3.2%",
                    trend: "up",
                  },
                  {
                    name: "S&P 500 ETF (SPY)",
                    type: "ETF",
                    amount: "$10,000.00",
                    date: "Mar 15, 2025",
                    performance: "+2.8%",
                    trend: "up",
                  },
                  {
                    name: "Microsoft Corp. (MSFT)",
                    type: "Stock",
                    amount: "$4,500.00",
                    date: "Mar 10, 2025",
                    performance: "+5.1%",
                    trend: "up",
                  },
                  {
                    name: "Tesla Inc. (TSLA)",
                    type: "Stock",
                    amount: "$3,000.00",
                    date: "Mar 5, 2025",
                    performance: "-1.2%",
                    trend: "down",
                  },
                  {
                    name: "Corporate Bond Fund",
                    type: "Bond",
                    amount: "$7,500.00",
                    date: "Feb 28, 2025",
                    performance: "+0.8%",
                    trend: "up",
                  },
                ].map((investment, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-100">
                      {investment.trend === "up" ? (
                        <TrendingUp className="h-4 w-4 text-emerald-500" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-500" />
                      )}
                    </div>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">{investment.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {investment.type} • {investment.date}
                      </p>
                    </div>
                    <div className="ml-auto font-medium">{investment.amount}</div>
                    <div
                      className={`ml-4 font-medium ${investment.trend === "up" ? "text-emerald-500" : "text-red-500"}`}
                    >
                      {investment.performance}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline">View All Investments</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

