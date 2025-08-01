"use client"

import { useEffect } from "react"

interface PerformanceMetric {
  name: string
  value: number
  rating: "good" | "needs-improvement" | "poor"
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === "undefined" || process.env.NODE_ENV !== "production") {
      return
    }

    // Web Vitals monitoring
    const reportWebVitals = (metric: PerformanceMetric) => {
      // Log to console in development
      if (process.env.NODE_ENV === "development") {
        console.log("Web Vital:", metric)
      }

      // Send to analytics service in production
      if (typeof window.gtag !== "undefined") {
        window.gtag("event", metric.name, {
          custom_map: { metric_id: "web_vitals" },
          value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
          event_category: "Web Vitals",
          event_label: metric.rating,
          non_interaction: true,
        })
      }
    }

    // Dynamic import of web-vitals (optional - only if installed)
    const loadWebVitals = async () => {
      try {
        const webVitals = await import("web-vitals")
        if (webVitals.getCLS) webVitals.getCLS(reportWebVitals)
        if (webVitals.getFID) webVitals.getFID(reportWebVitals)
        if (webVitals.getFCP) webVitals.getFCP(reportWebVitals)
        if (webVitals.getLCP) webVitals.getLCP(reportWebVitals)
        if (webVitals.getTTFB) webVitals.getTTFB(reportWebVitals)
      } catch (error) {
        // web-vitals not installed, skip monitoring
        console.log("Web Vitals monitoring not available")
      }
    }

    loadWebVitals()
  }, [])

  return null
}
