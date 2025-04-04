import Link from "next/link"
import { TrendingUp, Mail, Phone, MapPin } from "lucide-react"
import { SocialLinks } from "@/components/social/social-links"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-slate-900 text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-emerald-500" />
              <span className="font-bold text-xl">Alhagg Investment</span>
            </Link>
            <p className="text-sm text-slate-300">
              Providing expert investment solutions since 2008. Your trusted partner for financial growth and security.
            </p>
            <SocialLinks />
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-slate-300 hover:text-white text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white text-sm">
                  Stocks & ETFs
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white text-sm">
                  Retirement Planning
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white text-sm">
                  Portfolio Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white text-sm">
                  Wealth Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white text-sm">
                  Financial Advisory
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-emerald-500 mt-0.5" />
                <span className="text-slate-300 text-sm">123 Financial District, New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-emerald-500" />
                <span className="text-slate-300 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-emerald-500" />
                <span className="text-slate-300 text-sm">info@alhagginvestment.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-slate-300">
            &copy; {new Date().getFullYear()} Alhagg Investment. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-xs text-slate-300 hover:text-white">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-xs text-slate-300 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="text-xs text-slate-300 hover:text-white">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

