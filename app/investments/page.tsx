import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Check, HelpCircle } from "lucide-react"

export default function InvestmentsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-emerald-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Investment Options</h1>
            <p className="text-xl">
              Discover our range of Shariah-compliant investment opportunities designed to help you achieve your
              financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Investments</TabsTrigger>
                <TabsTrigger value="sukuk">Sukuk</TabsTrigger>
                <TabsTrigger value="equity">Equity</TabsTrigger>
                <TabsTrigger value="realestate">Real Estate</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-16">
              {/* Sukuk Fund */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1">
                  <h2 className="text-3xl font-bold mb-4">Sukuk Fund</h2>
                  <p className="text-gray-600 mb-6">
                    Our Sukuk Fund invests in a diversified portfolio of Islamic bonds issued by sovereign entities,
                    financial institutions, and corporations.
                  </p>
                  <div className="bg-emerald-50 p-4 rounded-lg mb-6">
                    <h3 className="font-semibold text-lg mb-2">Key Benefits</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                        <span>Stable income through regular profit distributions</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                        <span>Lower volatility compared to equity investments</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                        <span>Diversification across multiple issuers and sectors</span>
                      </li>
                    </ul>
                  </div>
                  <Button asChild className="bg-emerald-700 hover:bg-emerald-800">
                    <Link href="/register">Invest Now</Link>
                  </Button>
                </div>
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Sukuk Fund Details</CardTitle>
                      <CardDescription>Fixed income Shariah-compliant investment certificates</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border-l-4 border-emerald-500 pl-4">
                            <p className="text-sm text-gray-500">Minimum Investment</p>
                            <p className="text-xl font-semibold">$5,000</p>
                          </div>
                          <div className="border-l-4 border-emerald-500 pl-4">
                            <p className="text-sm text-gray-500">Expected Annual Return</p>
                            <p className="text-xl font-semibold">5-7%</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border-l-4 border-emerald-500 pl-4">
                            <p className="text-sm text-gray-500">Risk Profile</p>
                            <p className="text-xl font-semibold">Low</p>
                          </div>
                          <div className="border-l-4 border-emerald-500 pl-4">
                            <p className="text-sm text-gray-500">Profit Distribution</p>
                            <p className="text-xl font-semibold">Quarterly</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border-l-4 border-emerald-500 pl-4">
                            <p className="text-sm text-gray-500">Minimum Period</p>
                            <p className="text-xl font-semibold">1 Year</p>
                          </div>
                          <div className="border-l-4 border-emerald-500 pl-4">
                            <p className="text-sm text-gray-500">Early Withdrawal Fee</p>
                            <p className="text-xl font-semibold">None</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Ethical Equity Fund */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1">
                  <h2 className="text-3xl font-bold mb-4">Ethical Equity Fund</h2>
                  <p className="text-gray-600 mb-6">
                    Our Ethical Equity Fund invests in a diversified portfolio of Shariah-compliant stocks across
                    various sectors and regions.
                  </p>
                  <div className="bg-emerald-50 p-4 rounded-lg mb-6">
                    <h3 className="font-semibold text-lg mb-2">Key Benefits</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                        <span>Higher potential returns compared to fixed income</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                        <span>Global diversification across multiple markets</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                        <span>Strict ethical screening process</span>
                      </li>
                    </ul>
                  </div>
                  <Button asChild className="bg-emerald-700 hover:bg-emerald-800">
                    <Link href="/register">Invest Now</Link>
                  </Button>
                </div>
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Ethical Equity Fund Details</CardTitle>
                      <CardDescription>Diversified portfolio of Shariah-compliant stocks</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border-l-4 border-emerald-500 pl-4">
                            <p className="text-sm text-gray-500">Minimum Investment</p>
                            <p className="text-xl font-semibold">$10,000</p>
                          </div>
                          <div className="border-l-4 border-emerald-500 pl-4">
                            <p className="text-sm text-gray-500">Expected Annual Return</p>
                            <p className="text-xl font-semibold">8-12%</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border-l-4 border-emerald-500 pl-4">
                            <p className="text-sm text-gray-500">Risk Profile</p>
                            <p className="text-xl font-semibold">Medium</p>
                          </div>
                          <div className="border-l-4 border-emerald-500 pl-4">
                            <p className="text-sm text-gray-500">Profit Distribution</p>
                            <p className="text-xl font-semibold">Bi-annual</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border-l-4 border-emerald-500 pl-4">
                            <p className="text-sm text-gray-500">Minimum Period</p>
                            <p className="text-xl font-semibold">3 Years</p>
                          </div>
                          <div className="border-l-4 border-emerald-500 pl-4">
                            <p className="text-sm text-gray-500">Additional Benefits</p>
                            <p className="text-xl font-semibold">Market Reports</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Real Estate Fund */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1">
                  <h2 className="text-3xl font-bold mb-4">Real Estate Fund</h2>
                  <p className="text-gray-600 mb-6">
                    Our Real Estate Fund invests in Shariah-compliant commercial properties in prime locations across
                    the Middle East and beyond.
                  </p>
                  <div className="bg-emerald-50 p-4 rounded-lg mb-6">
                    <h3 className="font-semibold text-lg mb-2">Key Benefits</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                        <span>Potential for capital appreciation and rental income</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                        <span>Hedge against inflation through real asset ownership</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                        <span>Professional property management and maintenance</span>
                      </li>
                    </ul>
                  </div>
                  <Button asChild className="bg-emerald-700 hover:bg-emerald-800">
                    <Link href="/register">Invest Now</Link>
                  </Button>
                </div>
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Real Estate Fund Details</CardTitle>
                      <CardDescription>Investment in Shariah-compliant commercial properties</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border-l-4 border-emerald-500 pl-4">
                            <p className="text-sm text-gray-500">Minimum Investment</p>
                            <p className="text-xl font-semibold">$25,000</p>
                          </div>
                          <div className="border-l-4 border-emerald-500 pl-4">
                            <p className="text-sm text-gray-500">Expected Annual Return</p>
                            <p className="text-xl font-semibold">10-15%</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border-l-4 border-emerald-500 pl-4">
                            <p className="text-sm text-gray-500">Risk Profile</p>
                            <p className="text-xl font-semibold">Medium-High</p>
                          </div>
                          <div className="border-l-4 border-emerald-500 pl-4">
                            <p className="text-sm text-gray-500">Profit Distribution</p>
                            <p className="text-xl font-semibold">Annual</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border-l-4 border-emerald-500 pl-4">
                            <p className="text-sm text-gray-500">Minimum Period</p>
                            <p className="text-xl font-semibold">5 Years</p>
                          </div>
                          <div className="border-l-4 border-emerald-500 pl-4">
                            <p className="text-sm text-gray-500">Additional Benefits</p>
                            <p className="text-xl font-semibold">Quarterly Updates</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="sukuk">
              {/* Sukuk Fund Content - Simplified for brevity */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1">
                  <h2 className="text-3xl font-bold mb-4">Sukuk Fund</h2>
                  <p className="text-gray-600 mb-6">
                    Our Sukuk Fund invests in a diversified portfolio of Islamic bonds issued by sovereign entities,
                    financial institutions, and corporations.
                  </p>
                  <Button asChild className="bg-emerald-700 hover:bg-emerald-800">
                    <Link href="/register">Invest Now</Link>
                  </Button>
                </div>
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Sukuk Fund Details</CardTitle>
                      <CardDescription>Fixed income Shariah-compliant investment certificates</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Minimum Investment: $5,000</p>
                      <p>Expected Annual Return: 5-7%</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="equity">
              {/* Equity Fund Content - Simplified for brevity */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1">
                  <h2 className="text-3xl font-bold mb-4">Ethical Equity Fund</h2>
                  <p className="text-gray-600 mb-6">
                    Our Ethical Equity Fund invests in a diversified portfolio of Shariah-compliant stocks across
                    various sectors and regions.
                  </p>
                  <Button asChild className="bg-emerald-700 hover:bg-emerald-800">
                    <Link href="/register">Invest Now</Link>
                  </Button>
                </div>
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Ethical Equity Fund Details</CardTitle>
                      <CardDescription>Diversified portfolio of Shariah-compliant stocks</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Minimum Investment: $10,000</p>
                      <p>Expected Annual Return: 8-12%</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="realestate">
              {/* Real Estate Fund Content - Simplified for brevity */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1">
                  <h2 className="text-3xl font-bold mb-4">Real Estate Fund</h2>
                  <p className="text-gray-600 mb-6">
                    Our Real Estate Fund invests in Shariah-compliant commercial properties in prime locations across
                    the Middle East and beyond.
                  </p>
                  <Button asChild className="bg-emerald-700 hover:bg-emerald-800">
                    <Link href="/register">Invest Now</Link>
                  </Button>
                </div>
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Real Estate Fund Details</CardTitle>
                      <CardDescription>Investment in Shariah-compliant commercial properties</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Minimum Investment: $25,000</p>
                      <p>Expected Annual Return: 10-15%</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our investment options.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader className="cursor-pointer flex flex-row items-center justify-between">
                <CardTitle className="text-xl">What makes your investments Shariah-compliant?</CardTitle>
                <HelpCircle className="h-5 w-5 text-emerald-500" />
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All our investments undergo rigorous screening by our Shariah board to ensure they comply with Islamic
                  principles. This includes avoiding investments in prohibited industries (such as alcohol, gambling,
                  and conventional banking), ensuring there is no excessive uncertainty (gharar) in contracts, and
                  avoiding interest-based (riba) transactions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="cursor-pointer flex flex-row items-center justify-between">
                <CardTitle className="text-xl">How often will I receive returns on my investment?</CardTitle>
                <HelpCircle className="h-5 w-5 text-emerald-500" />
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The frequency of profit distribution varies by investment type. Our Sukuk Fund distributes profits
                  quarterly, the Ethical Equity Fund bi-annually, and the Real Estate Fund annually. All distributions
                  are automatically credited to your account, and you can choose to reinvest or withdraw them.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="cursor-pointer flex flex-row items-center justify-between">
                <CardTitle className="text-xl">Can I withdraw my investment before the minimum period?</CardTitle>
                <HelpCircle className="h-5 w-5 text-emerald-500" />
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Early withdrawals are possible but may be subject to fees depending on the investment type and how
                  long you've been invested. The Sukuk Fund has no early withdrawal fees, while the Equity and Real
                  Estate funds have a sliding scale fee that decreases over time. Please contact our customer service
                  for specific details related to your investment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Ethical Investment Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of investors who have chosen Al Haqq for their Shariah-compliant investment needs.
          </p>
          <Button asChild size="lg" className="bg-white text-emerald-900 hover:bg-gray-100">
            <Link href="/register" className="flex items-center gap-2">
              Create Your Account <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

