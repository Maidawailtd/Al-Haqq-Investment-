import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { TrendingUp, Shield, BarChart3, Users, ChevronRight, ArrowRight, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Secure Your Financial Future with Alhagg Investment
                </h1>
                <p className="max-w-[600px] text-slate-300 md:text-xl">
                  Expert investment solutions tailored to your goals. Start your journey to financial freedom today.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Start Investing
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="border-slate-300 text-white hover:bg-slate-700">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-04-03%2010.01.32%20-%20A%20luxurious%20and%20modern%20financial-themed%20image%20for%20Alhaqq%20Investment.%20The%20scene%20showcases%20a%20futuristic%20city%20skyline%20with%20golden%20financial%20graphs%20overla-xdbeh44YHJ9HRryhEGAOkgbeuXMrmc.webp"
                alt="Alhagg Investment Office"
                width={600}
                height={400}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-slate-900">$2.5B+</h3>
              <p className="text-sm font-medium text-slate-500">Assets Under Management</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-slate-900">15+</h3>
              <p className="text-sm font-medium text-slate-500">Years of Experience</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-slate-900">10k+</h3>
              <p className="text-sm font-medium text-slate-500">Satisfied Clients</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-slate-900">24/7</h3>
              <p className="text-sm font-medium text-slate-500">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Services */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Investment Services</h2>
              <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our range of investment solutions designed to help you achieve your financial goals.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {[
              {
                title: "Stocks & ETFs",
                description: "Invest in a diverse range of stocks and ETFs with our expert guidance.",
                icon: <TrendingUp className="h-10 w-10 text-emerald-600" />,
              },
              {
                title: "Retirement Planning",
                description: "Secure your future with our comprehensive retirement planning services.",
                icon: <Shield className="h-10 w-10 text-emerald-600" />,
              },
              {
                title: "Portfolio Management",
                description: "Let our experts manage your portfolio to maximize returns and minimize risk.",
                icon: <BarChart3 className="h-10 w-10 text-emerald-600" />,
              },
              {
                title: "Wealth Management",
                description: "Comprehensive wealth management solutions for high-net-worth individuals.",
                icon: <Users className="h-10 w-10 text-emerald-600" />,
              },
              {
                title: "Real Estate Investment",
                description: "Diversify your portfolio with our real estate investment opportunities.",
                icon: <TrendingUp className="h-10 w-10 text-emerald-600" />,
              },
              {
                title: "Financial Advisory",
                description: "Get personalized financial advice from our team of experienced advisors.",
                icon: <Shield className="h-10 w-10 text-emerald-600" />,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md"
              >
                {service.icon}
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-sm text-slate-500">{service.description}</p>
                <Link href="/services" className="inline-flex items-center text-sm font-medium text-emerald-600">
                  Learn more
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex items-center justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-04-03%2010.02.53%20-%20An%20elegant%20and%20modern%20financial%20consulting%20office%20for%20Alhaqq%20Investment.%20The%20office%20features%20a%20sleek%20glass%20desk%20with%20a%20digital%20stock%20market%20display%2C%20l-amixnxBCGMnhxxDIobLBrO52o4rdMf.webp"
                alt="Alhagg Investment Office"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Alhagg Investment</h2>
                <p className="max-w-[600px] text-slate-500 md:text-xl/relaxed">
                  We combine industry expertise with personalized service to deliver exceptional investment solutions.
                </p>
              </div>
              <ul className="grid gap-4">
                {[
                  "Expert financial advisors with decades of experience",
                  "Personalized investment strategies tailored to your goals",
                  "Transparent fee structure with no hidden costs",
                  "Cutting-edge technology for portfolio tracking and management",
                  "Comprehensive risk assessment and management",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/about">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">About Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
              <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our satisfied clients about their experience with Alhagg Investment.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {[
              {
                name: "Sarah Johnson",
                role: "Entrepreneur",
                testimonial:
                  "Alhagg Investment has transformed my financial future. Their expert advice and personalized approach have helped me achieve my investment goals.",
              },
              {
                name: "Michael Chen",
                role: "Retired Professional",
                testimonial:
                  "I've been with Alhagg Investment for over 10 years, and they've consistently delivered excellent returns while keeping my retirement funds secure.",
              },
              {
                name: "Jessica Williams",
                role: "Business Owner",
                testimonial:
                  "The team at Alhagg Investment understands my business needs and has created a custom investment strategy that has exceeded my expectations.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center">
                  <Users className="h-6 w-6 text-slate-600" />
                </div>
                <p className="text-sm text-slate-500 italic">"{testimonial.testimonial}"</p>
                <div className="text-center">
                  <h4 className="text-base font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your Investment Journey?
              </h2>
              <p className="max-w-[700px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of satisfied clients who have achieved their financial goals with Alhagg Investment.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register">
                <Button className="bg-emerald-600 hover:bg-emerald-700">Open an Account</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-slate-300 text-white hover:bg-slate-800">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

