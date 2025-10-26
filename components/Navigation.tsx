"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "Services", path: "#services" },
    { name: "Portfolio", path: "#portfolio" },
    { name: "About", path: "#about" },
    { name: "Contact", path: "#contact" },
  ]

  const NavLinks = ({ mobile = false, onClick = () => {} }) => (
    <>
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.path}
          onClick={onClick}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary text-muted-foreground",
            mobile && "block py-2 px-4 text-base",
          )}
        >
          {item.name}
        </a>
      ))}
    </>
  )

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent",
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img
              src="/placeholder.svg?height=80&width=200"
              alt="AZMA TECH"
              className="h-20 w-auto bg-gradient-to-r from-primary/10 to-white/20 backdrop-blur-sm px-4 py-2 rounded-lg"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex">
            <Button variant="hero" size="sm" asChild>
              <a href="#contact">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col space-y-4 mt-8">
                <NavLinks mobile onClick={() => setIsOpen(false)} />
                <div className="pt-4">
                  <Button variant="hero" size="sm" className="w-full" asChild>
                    <a href="#contact" onClick={() => setIsOpen(false)}>
                      Get Started
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
