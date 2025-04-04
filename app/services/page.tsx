import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TrendingUp, Shield, BarChart3, Users, ChevronRight, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Services - Alhagg Investment",
  description:
    "Explore our comprehensive range of investment services designed to help you achieve your financial goals.",
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Investment Services</h1>
              <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed">
                Comprehensive investment solutions tailored to your unique financial goals and circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Stocks & ETFs",
                description:
                  "Access a diverse range of stocks and ETFs with our expert guidance to build a balanced portfolio aligned with your investment goals.",
                icon: <TrendingUp className="h-10 w-10 text-emerald-600" />,
                features: [
                  "Personalized stock selection",
                  "ETF portfolio strategies",
                  "Regular performance reviews",
                  "Market trend analysis",
                ],
              },
              {
                title: "Retirement Planning",
                description:
                  "Secure your future with our comprehensive retirement planning services designed to provide financial stability in your golden years.",
                icon: <Shield className="h-10 w-10 text-emerald-600" />,
                features: [
                  "401(k) optimization",
                  "IRA management",
                  "Retirement income strategies",
                  "Social Security planning",
                ],
              },
              {
                title: "Portfolio Management",
                description:
                  "Let our experts manage your portfolio to maximize returns and minimize risk through strategic asset allocation and diversification.",
                icon: <BarChart3 className="h-10 w-10 text-emerald-600" />,
                features: [
                  "Strategic asset allocation",
                  "Risk management",
                  "Performance monitoring",
                  "Regular portfolio rebalancing",
                ],
              },
              {
                title: "Wealth Management",
                description:
                  "Comprehensive wealth management solutions for high-net-worth individuals focusing on preservation and growth of assets.",
                icon: <Users className="h-10 w-10 text-emerald-600" />,
                features: [
                  "Estate planning",
                  "Tax optimization",
                  "Philanthropic strategies",
                  "Multi-generational wealth transfer",
                ],
              },
              {
                title: "Real Estate Investment",
                description:
                  "Diversify your portfolio with our real estate investment opportunities, from REITs to direct property investments.",
                icon: <TrendingUp className="h-10 w-10 text-emerald-600" />,
                features: [
                  "REIT investments",
                  "Commercial property analysis",
                  "Residential real estate opportunities",
                  "Real estate market research",
                ],
              },
              {
                title: "Financial Advisory",
                description:
                  "Get personalized financial advice from our team of experienced advisors to navigate complex financial decisions with confidence.",
                icon: <Shield className="h-10 w-10 text-emerald-600" />,
                features: [
                  "Financial goal setting",
                  "Debt management strategies",
                  "Education funding planning",
                  "Major life transition planning",
                ],
              },
            ].map((service, index) => (
              <div key={index} className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex items-center space-x-4">
                  {service.icon}
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-sm text-slate-500">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-flex items-center text-sm font-medium text-emerald-600 mt-auto">
                  Learn more
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Investment Process</h2>
              <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A systematic approach to help you achieve your financial goals.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {[
              {
                step: "1",
                title: "Discovery",
                description: "We begin by understanding your financial goals, risk tolerance, and investment timeline.",
              },
              {
                step: "2",
                title: "Strategy Development",
                description: "Our experts develop a personalized investment strategy aligned with your objectives.",
              },
              {
                step: "3",
                title: "Implementation",
                description: "We execute your investment plan with precision and attention to detail.",
              },
              {
                step: "4",
                title: "Monitoring & Adjustment",
                description:
                  "We continuously monitor your portfolio and make adjustments as needed to optimize performance.",
              },
            ].map((process, index) => (
              <div key={index} className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold">{process.title}</h3>
                <p className="text-sm text-slate-500 text-center">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Transparent Pricing</h2>
              <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We believe in transparent pricing with no hidden fees.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
            {[
              {
                title: "Basic",
                price: "$99",
                description: "Perfect for beginners looking to start their investment journey.",
                features: [
                  "Basic portfolio management",
                  "Quarterly portfolio review",
                  "Email support",
                  "Educational resources",
                ],
              },
              {
                title: "Premium",
                price: "$299",
                description: "Ideal for investors seeking comprehensive investment solutions.",
                features: [
                  "Advanced portfolio management",
                  "Monthly portfolio review",
                  "Priority email & phone support",
                  "Personalized investment strategy",
                  "Retirement planning",
                ],
                highlighted: true,
              },
              {
                title: "Elite",
                price: "$599",
                description: "Designed for high-net-worth individuals with complex financial needs.",
                features: [
                  "Comprehensive wealth management",
                  "Weekly portfolio review",
                  "24/7 dedicated advisor",
                  "Custom investment strategy",
                  "Tax optimization",
                  "Estate planning",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`flex flex-col space-y-4 rounded-lg border p-6 shadow-sm ${
                  plan.highlighted ? "border-emerald-600 ring-1 ring-emerald-600" : ""
                }`}
              >
                {plan.highlighted && (
                  <div className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-600 w-fit mx-auto">
                    Most Popular
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-xl font-bold">{plan.title}</h3>
                  <div className="mt-2 flex items-baseline justify-center">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-sm text-slate-500">/month</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">{plan.description}</p>
                </div>
                <ul className="space-y-2 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button
                    className={`w-full ${plan.highlighted ? "bg-emerald-600 hover:bg-emerald-700" : ""}`}
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center text-sm text-slate-500">
            <p>All plans include a 14-day free trial. No credit card required.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Start Your Investment Journey?
              </h2>
              <p className="max-w-[700px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Schedule a consultation with one of our investment advisors today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="bg-emerald-600 hover:bg-emerald-700">Schedule Consultation</Button>
              </Link>
              <Link href="/register">
                <Button variant="outline" className="border-slate-300 text-white hover:bg-slate-800">
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

