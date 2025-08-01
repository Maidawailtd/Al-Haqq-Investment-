import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Shield, PieChart, Calculator, Users, BarChart3 } from "lucide-react"

const services = [
  {
    title: "Portfolio Management",
    description:
      "Comprehensive portfolio management services tailored to your risk tolerance and investment objectives.",
    icon: PieChart,
    features: ["Asset Allocation", "Risk Management", "Performance Monitoring"],
    color: "text-blue-600",
  },
  {
    title: "Wealth Planning",
    description: "Strategic wealth planning to help you build, preserve, and transfer wealth across generations.",
    icon: TrendingUp,
    features: ["Estate Planning", "Tax Optimization", "Retirement Planning"],
    color: "text-green-600",
  },
  {
    title: "Risk Assessment",
    description: "Thorough risk analysis and mitigation strategies to protect your investments from market volatility.",
    icon: Shield,
    features: ["Market Analysis", "Stress Testing", "Hedging Strategies"],
    color: "text-red-600",
  },
  {
    title: "Financial Analysis",
    description: "In-depth financial analysis and reporting to keep you informed about your investment performance.",
    icon: Calculator,
    features: ["Performance Reports", "Market Research", "Investment Analytics"],
    color: "text-purple-600",
  },
  {
    title: "Advisory Services",
    description: "Personalized investment advisory services from our team of experienced financial professionals.",
    icon: Users,
    features: ["Personal Consultation", "Investment Strategy", "Market Insights"],
    color: "text-orange-600",
  },
  {
    title: "Market Research",
    description: "Comprehensive market research and analysis to identify investment opportunities and trends.",
    icon: BarChart3,
    features: ["Sector Analysis", "Economic Forecasting", "Investment Opportunities"],
    color: "text-teal-600",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-32 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">Our Investment Services</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-balance">
            We offer a comprehensive range of investment services designed to meet your unique financial needs and help
            you achieve your investment goals.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={`service-${index}`}
                className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted/50 ${service.color} mb-4`}
                  >
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
