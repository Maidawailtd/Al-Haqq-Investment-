// Performance utilities
export const performanceConfig = {
  // Bundle size thresholds (in KB)
  bundleSize: {
    warning: 500,
    error: 1000,
  },

  // Core Web Vitals thresholds
  webVitals: {
    LCP: { good: 2500, poor: 4000 }, // Largest Contentful Paint
    FID: { good: 100, poor: 300 }, // First Input Delay
    CLS: { good: 0.1, poor: 0.25 }, // Cumulative Layout Shift
    FCP: { good: 1800, poor: 3000 }, // First Contentful Paint
    TTFB: { good: 800, poor: 1800 }, // Time to First Byte
  },
}

export function getPerformanceRating(metric: string, value: number): "good" | "needs-improvement" | "poor" {
  const thresholds = performanceConfig.webVitals[metric as keyof typeof performanceConfig.webVitals]

  if (!thresholds) return "good"

  if (value <= thresholds.good) return "good"
  if (value <= thresholds.poor) return "needs-improvement"
  return "poor"
}

// Performance monitoring hook
export function usePerformanceMonitoring() {
  if (typeof window === "undefined") return

  // Monitor bundle loading
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === "navigation") {
        console.log("Navigation timing:", entry)
      }
    }
  })

  observer.observe({ entryTypes: ["navigation", "resource"] })

  return () => observer.disconnect()
}
