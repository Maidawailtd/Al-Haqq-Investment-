import { Suspense } from "react"
import type { Metadata } from "next"
import Header from "@/components/layout/header"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ServicesSection from "@/components/sections/services-section"
import ContactSection from "@/components/sections/contact-section"
import Footer from "@/components/layout/footer"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Alhagg Investment - Your trusted partner in financial growth and investment success.",
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<LoadingSpinner />}>
          <HeroSection />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
