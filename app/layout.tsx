import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { PerformanceMonitor } from "@/components/analytics/performance-monitor"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export const metadata: Metadata = {
  title: {
    default: "Alhagg Investment - Professional Investment Services",
    template: "%s | Alhagg Investment",
  },
  description:
    "Leading investment firm providing innovative and sustainable investment solutions. Expert financial guidance to help you achieve your investment goals.",
  keywords: ["investment", "finance", "wealth management", "financial planning", "portfolio management"],
  authors: [{ name: "Alhagg Investment" }],
  creator: "Alhagg Investment",
  publisher: "Alhagg Investment",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://alhagg-investment.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Alhagg Investment - Professional Investment Services",
    description: "Leading investment firm providing innovative and sustainable investment solutions.",
    siteName: "Alhagg Investment",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alhagg Investment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alhagg Investment - Professional Investment Services",
    description: "Leading investment firm providing innovative and sustainable investment solutions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
          <PerformanceMonitor />
        </ThemeProvider>
      </body>
    </html>
  )
}
