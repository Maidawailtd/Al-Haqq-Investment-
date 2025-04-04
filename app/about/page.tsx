import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Award, TrendingUp, Shield, CheckCircle } from "lucide-react"

export const metadata = {
  title: "About Us - Alhagg Investment",
  description: "Learn about Alhagg Investment's history, mission, values, and our dedicated team of financial experts.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Alhagg Investment</h1>
                <p className="max-w-[600px] text-slate-500 md:text-xl/relaxed">
                  We are a leading investment firm dedicated to helping our clients achieve their financial goals
                  through expert guidance and personalized strategies.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Alhagg Investment Office"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex items-center justify-center order-last lg:order-first">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Alhagg Investment History"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
                <p className="text-slate-500 md:text-lg/relaxed">
                  Founded in 2008, Alhagg Investment was established with a clear mission: to provide accessible,
                  transparent, and effective investment solutions to individuals and businesses alike.
                </p>
                <p className="text-slate-500 md:text-lg/relaxed">
                  What began as a small team of passionate financial experts has grown into a trusted investment firm
                  with a global presence, serving thousands of clients across different markets.
                </p>
                <p className="text-slate-500 md:text-lg/relaxed">
                  Throughout our journey, we've remained committed to our core values of integrity, excellence, and
                  client-centricity, ensuring that every investment decision we make is aligned with our clients' best
                  interests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission & Values</h2>
              <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Guiding principles that drive everything we do at Alhagg Investment.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {[
              {
                title: "Integrity",
                description:
                  "We uphold the highest ethical standards in all our dealings, ensuring transparency and honesty in every interaction.",
                icon: <Shield className="h-10 w-10 text-emerald-600" />,
              },
              {
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, constantly improving our services to deliver the best results for our clients.",
                icon: <Award className="h-10 w-10 text-emerald-600" />,
              },
              {
                title: "Client-Centricity",
                description:
                  "Our clients are at the heart of our business. We tailor our services to meet their unique needs and goals.",
                icon: <Users className="h-10 w-10 text-emerald-600" />,
              },
              {
                title: "Innovation",
                description:
                  "We embrace innovation and leverage cutting-edge technology to enhance our investment strategies and client experience.",
                icon: <TrendingUp className="h-10 w-10 text-emerald-600" />,
              },
              {
                title: "Responsibility",
                description:
                  "We take responsibility for our actions and decisions, ensuring sustainable and responsible investment practices.",
                icon: <CheckCircle className="h-10 w-10 text-emerald-600" />,
              },
              {
                title: "Collaboration",
                description:
                  "We believe in the power of collaboration, working closely with our clients and partners to achieve shared goals.",
                icon: <Users className="h-10 w-10 text-emerald-600" />,
              },
            ].map((value, index) => (
              <div key={index} className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                {value.icon}
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-sm text-slate-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Team</h2>
              <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team of experienced professionals is dedicated to helping you achieve your financial goals.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {[
              {
                name: "Ahmed Alhagg",
                role: "Founder & CEO",
                bio: "With over 25 years of experience in the financial industry, Ahmed leads our team with vision and expertise.",
              },
              {
                name: "Sarah Johnson",
                role: "Chief Investment Officer",
                bio: "Sarah brings 15 years of investment management experience, specializing in portfolio optimization and risk management.",
              },
              {
                name: "Michael Chen",
                role: "Head of Wealth Management",
                bio: "Michael has helped hundreds of high-net-worth individuals achieve their financial goals over his 12-year career.",
              },
              {
                name: "Jessica Williams",
                role: "Director of Retirement Planning",
                bio: "Jessica's expertise in retirement planning has helped countless clients secure their financial future.",
              },
              {
                name: "David Thompson",
                role: "Head of Research",
                bio: "David leads our research team, providing data-driven insights that inform our investment strategies.",
              },
              {
                name: "Olivia Martinez",
                role: "Client Relations Manager",
                bio: "Olivia ensures our clients receive personalized service and support throughout their investment journey.",
              },
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="h-24 w-24 rounded-full bg-slate-200 flex items-center justify-center">
                  <Users className="h-12 w-12 text-slate-600" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm font-medium text-emerald-600">{member.role}</p>
                  <p className="mt-2 text-sm text-slate-500">{member.bio}</p>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Start Your Investment Journey?
              </h2>
              <p className="max-w-[700px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team of experts is ready to help you achieve your financial goals.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="bg-emerald-600 hover:bg-emerald-700">Contact Us</Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="border-slate-300 text-white hover:bg-slate-800">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

