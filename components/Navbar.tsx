"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Why Match", href: "/#" },
    { label: "How it Works", href: "/#" },
    { label: "Download", href: "/#" },
    { label: "FAQ", href: "/#" },
  ]

  return (
    <div
      className={`sticky top-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md border-b"
          : "bg-gradient-to-l from-[#9F250D] via-[#87190B] to-[#621108]"
      }`}
    >
      <div className="flex flex-row items-center justify-between px-6 md:px-10 py-3">
        <div>
          <h1 className={`text-2xl font-extrabold ${scrolled ? "text-[#85180B]" : "text-white"}`}>
            Mahram
          </h1>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-4">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.label}>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link className={scrolled ? "text-black/60" : "text-white/60"} href={link.href}>
                    {link.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button
            variant="nav"
            className={scrolled ? "text-white bg-[#85180B] hover:bg-[#9C2D1F] hover:text-white" : "text-white"}
          >
            Log in
          </Button>

          <button
            className={`md:hidden p-2 rounded-md ${scrolled ? "text-[#85180B]" : "text-white"}`}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        } ${scrolled ? "bg-white/90 backdrop-blur-md" : "bg-[#7A1A0D]"}`}
      >
        <div className="flex flex-col px-6 py-3 gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium ${scrolled ? "text-black/70" : "text-white/80"}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}