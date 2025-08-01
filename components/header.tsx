"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-bold">
          My Website
        </a>

        <nav className="hidden md:flex space-x-4">
          <a href="/" className="hover:text-gray-500">
            Home
          </a>
          <a href="/about" className="hover:text-gray-500">
            About
          </a>
          <a href="/services" className="hover:text-gray-500">
            Services
          </a>
          <a href="/contact" className="hover:text-gray-500">
            Contact
          </a>
        </nav>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4"
              aria-label="Close navigation menu"
            >
              X
            </Button>
            <nav className="flex flex-col items-center space-y-4">
              <a href="/" className="hover:text-gray-500">
                Home
              </a>
              <a href="/about" className="hover:text-gray-500">
                About
              </a>
              <a href="/services" className="hover:text-gray-500">
                Services
              </a>
              <a href="/contact" className="hover:text-gray-500">
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
