"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { User, Heart, Search, Menu, X, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CartSheet } from "./CartSheet";

// Couleurs définies
const colors = {
  primary: "#CC6B2C",
  dark: "#1C2C49",
  gold: "#D4AF37",
  light: "#FDF8F2",
  artisan: "#8C2F20",
};

const NavLink = ({ href, children }) => (
  <Link 
    href={href} 
    className="text-sm font-medium transition-colors hover:text-primary relative group"
    style={{ color: colors.dark }}
  >
    {children}
    <span 
      className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
      style={{ backgroundColor: colors.primary }}
    ></span>
  </Link>
);

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 border-b" style={{ borderColor: colors.light }}>
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/logo.png" 
              alt="Logo Mali Mode" 
              width={40} 
              height={40} 
              className="rounded-full border"
              style={{ borderColor: colors.gold }}
            />
            <span 
              className="text-xl font-bold hidden sm:block"
              style={{ color: colors.dark }}
            >
              Mali Mode
            </span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink href="/">Accueil</NavLink>
            <NavLink href="/shop">Boutique</NavLink>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Button (mobile) */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setSearchOpen(!searchOpen)}
              style={{ color: colors.dark }}
            >
              {searchOpen ? <X size={20} /> : <Search size={20} />}
            </Button>

            {/* Search Input (desktop) */}
            <div className="hidden lg:block relative w-64">
              <Input
                type="text"
                placeholder="Rechercher..."
                className="pl-10 pr-4 py-2 text-sm border-none rounded-full"
                style={{ backgroundColor: colors.light }}
              />
              <Search 
                className="absolute left-3 top-1/2 transform -translate-y-1/2" 
                size={18} 
                style={{ color: colors.primary }}
              />
            </div>

            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              style={{ color: colors.dark }}
            >
              <Heart size={20} />
              <span className="sr-only">Favoris</span>
              <span 
                className="absolute top-0 right-0 w-4 h-4 flex items-center justify-center text-xs rounded-full"
                style={{ backgroundColor: colors.primary, color: colors.light }}
              >
                3
              </span>
            </Button>

            <Button 
              variant="ghost" 
              size="icon"
              style={{ color: colors.dark }}
            >
              <User size={20} />
              <span className="sr-only">Mon compte</span>
            </Button>

            <CartSheet />

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button 
                  variant="ghost" 
                  size="icon"
                  style={{ color: colors.dark }}
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-full sm:w-96 p-0 flex flex-col"
                style={{ backgroundColor: colors.light }}
              >
                <div className="p-4 border-b flex justify-between items-center">
                  <Link 
                    href="/" 
                    className="flex items-center space-x-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Image 
                      src="/logo.png" 
                      alt="Logo Mali Mode" 
                      width={32} 
                      height={32} 
                      className="rounded-full border"
                      style={{ borderColor: colors.gold }}
                    />
                    <span 
                      className="text-lg font-bold"
                      style={{ color: colors.dark }}
                    >
                      Mali Mode
                    </span>
                  </Link>
                </div>
                
                <nav className="flex-1 overflow-y-auto p-6 space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: colors.primary }}>
                      Navigation
                    </h3>
                    <Link 
                      href="/" 
                      className="block py-2 text-base font-medium"
                      style={{ color: colors.dark }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Accueil
                    </Link>
                    <Link 
                      href="/shop" 
                      className="block py-2 text-base font-medium"
                      style={{ color: colors.dark }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Boutique
                    </Link>
                    
                  </div>

                  
                </nav>

                <div className="p-6 border-t">
                  <div className="flex gap-4 mb-6">
                    <a href="#" className="p-2 rounded-full" style={{ backgroundColor: colors.dark, color: colors.light }}>
                      <Facebook size={18} />
                    </a>
                    <a href="#" className="p-2 rounded-full" style={{ backgroundColor: colors.dark, color: colors.light }}>
                      <Instagram size={18} />
                    </a>
                    <a href="#" className="p-2 rounded-full" style={{ backgroundColor: colors.dark, color: colors.light }}>
                      <X size={18} />
                    </a>
                  </div>
                  <p className="text-xs" style={{ color: colors.dark, opacity: 0.7 }}>
                    © {new Date().getFullYear()} Mali Mode. Tous droits réservés.
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="lg:hidden pb-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Rechercher produits..."
                className="pl-10 pr-4 py-2 text-sm w-full rounded-full"
                style={{ backgroundColor: colors.light }}
              />
              <Search 
                className="absolute left-3 top-1/2 transform -translate-y-1/2" 
                size={18} 
                style={{ color: colors.primary }}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}