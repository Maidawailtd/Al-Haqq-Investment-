"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, TrendingUp, User, LogOut } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { user, logout } = useAuth()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <TrendingUp className="h-6 w-6 text-emerald-600" />
            <span className="font-bold text-xl">Alhagg Investment</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className={`text-sm font-medium hover:text-emerald-600 transition-colors ${
              pathname === "/" ? "text-emerald-600" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium hover:text-emerald-600 transition-colors ${
              pathname === "/about" ? "text-emerald-600" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`text-sm font-medium hover:text-emerald-600 transition-colors ${
              pathname === "/services" ? "text-emerald-600" : ""
            }`}
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className={`text-sm font-medium hover:text-emerald-600 transition-colors ${
              pathname === "/portfolio" ? "text-emerald-600" : ""
            }`}
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium hover:text-emerald-600 transition-colors ${
              pathname === "/contact" ? "text-emerald-600" : ""
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-9 gap-2">
                  <User className="h-4 w-4" />
                  <span>{user.name}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/portfolio">Portfolio</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => logout()} className="text-red-600">
                  <LogOut className="h-4 w-4 mr-2" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link href="/login">
                <Button variant="outline" className="h-9">
                  Log In
                </Button>
              </Link>
              <Link href="/register">
                <Button className="h-9 bg-emerald-600 hover:bg-emerald-700">Register</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t" id="mobile-menu">
          <div className="container py-4 flex flex-col gap-4">
            <Link
              href="/"
              className={`text-sm font-medium hover:text-emerald-600 transition-colors py-2 ${
                pathname === "/" ? "text-emerald-600" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium hover:text-emerald-600 transition-colors py-2 ${
                pathname === "/about" ? "text-emerald-600" : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`text-sm font-medium hover:text-emerald-600 transition-colors py-2 ${
                pathname === "/services" ? "text-emerald-600" : ""
              }`}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className={`text-sm font-medium hover:text-emerald-600 transition-colors py-2 ${
                pathname === "/portfolio" ? "text-emerald-600" : ""
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium hover:text-emerald-600 transition-colors py-2 ${
                pathname === "/contact" ? "text-emerald-600" : ""
              }`}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              {user ? (
                <>
                  <Link href="/dashboard">
                    <Button variant="outline" className="w-full justify-start">
                      <User className="h-4 w-4 mr-2" />
                      Dashboard
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full justify-start text-red-600" onClick={() => logout()}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="outline" className="w-full">
                      Log In
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Register</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

