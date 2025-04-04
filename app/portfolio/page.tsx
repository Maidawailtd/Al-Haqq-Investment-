import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, BarChart, PieChart, ArrowUpRight, Filter, Download, Plus } from "lucide-react"

export const metadata = {
  title: "Portfolio - Alhagg Investment",
  description: "View and manage your investment portfolio with detailed performance metrics and asset allocation.",
}

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Portfolio</h2>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="mr-2 h-4 w-4" />
              Add Investment
            </Button>
          </div>
        </div>

        {/* Portfolio Summary */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Value</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$245,465.00</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-500 flex items-center">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  +20.1%
                </span>{" "}
                since inception
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Annual Return</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15.4%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-500 flex items-center">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  +2.3%
                </span>{" "}
                vs. benchmark
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Risk Level</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Moderate</div>
              <p className="text-xs text-muted-foreground">Based on your investment profile</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Diversification Score</CardTitle>
              <PieChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8.5/10</div>
              <p className="text-xs text-muted-foreground">Well-diversified portfolio</p>
            </CardContent>
          </Card>
        </div>

        {/* Portfolio Performance Chart */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Performance History</CardTitle>
              <CardDescription>Your portfolio performance over time</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="h-[300px] w-full bg-slate-100 rounded-md flex items-center justify-center">
                <BarChart className="h-16 w-16 text-slate-300" />
                <span className="sr-only">Portfolio performance chart</span>
              </div>
            </CardContent>
          </Card>

          {/* Asset Allocation */}
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Asset Allocation</CardTitle>
              <CardDescription>Current distribution of your investments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full bg-slate-100 rounded-md flex items-center justify-center">
                <PieChart className="h-16 w-16 text-slate-300" />
                <span className="sr-only">Asset allocation chart</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Portfolio Holdings */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Holdings</CardTitle>
              <CardDescription>A detailed breakdown of your current investments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-7 bg-slate-50 p-4 font-medium">
                  <div>Asset</div>
                  <div>Type</div>
                  <div>Quantity</div>
                  <div>Purchase Price</div>
                  <div>Current Price</div>
                  <div>Value</div>
                  <div>Performance</div>
                </div>
                <div className="divide-y">
                  {[
                    {
                      name: "Apple Inc. (AAPL)",
                      type: "Stock",
                      quantity: "25",
                      purchasePrice: "$150.00",
                      currentPrice: "$175.25",
                      value: "$4,381.25",
                      performance: "+16.8%",
                      trend: "up",
                    },
                    {
                      name: "Microsoft Corp. (MSFT)",
                      type: "Stock",
                      quantity: "15",
                      purchasePrice: "$280.00",
                      currentPrice: "$325.50",
                      value: "$4,882.50",
                      performance: "+16.3%",
                      trend: "up",
                    },
                    {
                      name: "S&P 500 ETF (SPY)",
                      type: "ETF",
                      quantity: "40",
                      purchasePrice: "$400.00",
                      currentPrice: "$450.75",
                      value: "$18,030.00",
                      performance: "+12.7%",
                      trend: "up",
                    },
                    {
                      name: "Tesla Inc. (TSLA)",
                      type: "Stock",
                      quantity: "10",
                      purchasePrice: "$900.00",
                      currentPrice: "$850.25",
                      value: "$8,502.50",
                      performance: "-5.5%",
                      trend: "down",
                    },
                    {
                      name: "Vanguard Total Bond ETF",
                      type: "Bond ETF",
                      quantity: "100",
                      purchasePrice: "$85.00",
                      currentPrice: "$82.75",
                      value: "$8,275.00",
                      performance: "-2.6%",
                      trend: "down",
                    },
                    {
                      name: "Amazon.com Inc. (AMZN)",
                      type: "Stock",
                      quantity: "12",
                      purchasePrice: "$3,200.00",
                      currentPrice: "$3,450.00",
                      value: "$41,400.00",
                      performance: "+7.8%",
                      trend: "up",
                    },
                    {
                      name: "Real Estate Investment Trust",
                      type: "REIT",
                      quantity: "200",
                      purchasePrice: "$25.00",
                      currentPrice: "$27.50",
                      value: "$5,500.00",
                      performance: "+10.0%",
                      trend: "up",
                    },
                  ].map((holding, index) => (
                    <div key={index} className="grid grid-cols-7 p-4 hover:bg-slate-50">
                      <div className="font-medium">{holding.name}</div>
                      <div>{holding.type}</div>
                      <div>{holding.quantity}</div>
                      <div>{holding.purchasePrice}</div>
                      <div>{holding.currentPrice}</div>
                      <div>{holding.value}</div>
                      <div
                        className={`flex items-center ${holding.trend === "up" ? "text-emerald-500" : "text-red-500"}`}
                      >
                        {holding.trend === "up" ? (
                          <TrendingUp className="mr-1 h-4 w-4" />
                        ) : (
                          <TrendingDown className="mr-1 h-4 w-4" />
                        )}
                        {holding.performance}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <Button variant="outline">View Detailed Report</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sector Analysis */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Sector Analysis</CardTitle>
              <CardDescription>Distribution of your investments across different sectors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full bg-slate-100 rounded-md flex items-center justify-center">
                <PieChart className="h-16 w-16 text-slate-300" />
                <span className="sr-only">Sector analysis chart</span>
              </div>
            </CardContent>
          </Card>

          {/* Geographic Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Geographic Distribution</CardTitle>
              <CardDescription>Distribution of your investments across different regions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full bg-slate-100 rounded-md flex items-center justify-center">
                <PieChart className="h-16 w-16 text-slate-300" />
                <span className="sr-only">Geographic distribution chart</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Portfolio Recommendations */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Recommendations</CardTitle>
              <CardDescription>Suggestions to optimize your portfolio based on your goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Increase Bond Allocation",
                    description:
                      "Consider increasing your bond allocation to reduce portfolio volatility and provide more stability.",
                    action: "View Bond Options",
                  },
                  {
                    title: "Diversify Technology Holdings",
                    description:
                      "Your portfolio is heavily weighted in large-cap tech stocks. Consider diversifying into mid-cap tech companies for better risk distribution.",
                    action: "Explore Tech Options",
                  },
                  {
                    title: "Add International Exposure",
                    description:
                      "Your portfolio is primarily focused on US markets. Consider adding international stocks to increase geographic diversification.",
                    action: "View International Funds",
                  },
                ].map((recommendation, index) => (
                  <div key={index} className="rounded-lg border p-4">
                    <h3 className="text-lg font-bold">{recommendation.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{recommendation.description}</p>
                    <Button variant="link" className="mt-2 p-0 h-auto text-emerald-600">
                      {recommendation.action}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

