import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-emerald-600">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
      <p className="mt-2 text-slate-500 max-w-md">
        We couldn't find the page you're looking for. The page may have been moved, deleted, or never existed.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link href="/">
          <Button className="bg-emerald-600 hover:bg-emerald-700">Return Home</Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline">Contact Support</Button>
        </Link>
      </div>
      <div className="mt-12">
        <h3 className="text-lg font-medium mb-4">You might be looking for:</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/about" className="text-emerald-600 hover:underline">
            About Us
          </Link>
          <Link href="/services" className="text-emerald-600 hover:underline">
            Our Services
          </Link>
          <Link href="/contact" className="text-emerald-600 hover:underline">
            Contact Us
          </Link>
          <Link href="/login" className="text-emerald-600 hover:underline">
            Login
          </Link>
          <Link href="/register" className="text-emerald-600 hover:underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}

