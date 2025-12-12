"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl md:text-2xl text-foreground">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Image alt="Bellefood Logo" width={50} height={50} src="/icon.png" className="rounded-full text-primary-foreground" />
          </div>
          <span>Bellefood</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/menu" className="text-foreground/80 hover:text-foreground transition">
            Menu
          </Link>
          <Link href="#gallery" className="text-foreground/80 hover:text-foreground transition">
            Gallery
          </Link>
          <Link href="#about" className="text-foreground/80 hover:text-foreground transition">
            About
          </Link>
          <Link href="#contact" className="text-foreground/80 hover:text-foreground transition">
            Contact
          </Link>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Order Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-4 py-3 space-y-2">
            <Link href="#menu" className="block py-2 text-foreground/80 hover:text-foreground">
              Menu
            </Link>
            <Link href="#gallery" className="block py-2 text-foreground/80 hover:text-foreground">
              Gallery
            </Link>
            <Link href="#about" className="block py-2 text-foreground/80 hover:text-foreground">
              About
            </Link>
            <Link href="#contact" className="block py-2 text-foreground/80 hover:text-foreground">
              Contact
            </Link>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Order Now</Button>
          </div>
        </div>
      )}
    </header>
  )
}
