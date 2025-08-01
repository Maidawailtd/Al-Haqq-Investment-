import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted/20 py-20 sm:py-32">
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center rounded-full border px-4 py-2 text-sm">
            <TrendingUp className="mr-2 h-4 w-4 text-primary" />
            Professional Investment Services
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            Your Trusted Partner in{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Financial Growth
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground text-balance">
            Alhagg Investment provides innovative and sustainable investment solutions. Our team of experts is committed
            to helping you achieve your financial goals with personalized strategies and professional guidance.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>

        <div className="mt-16 flow-root sm:mt-24">
          <div className="relative rounded-xl bg-muted/5 p-2 ring-1 ring-inset ring-muted/10 lg:rounded-2xl lg:p-4">
            <Image
              src="/placeholder.svg?height=600&width=1200&text=Investment+Dashboard"
              alt="Alhagg Investment Dashboard - Professional investment management platform"
              width={1200}
              height={600}
              className="rounded-md shadow-2xl ring-1 ring-muted/10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
