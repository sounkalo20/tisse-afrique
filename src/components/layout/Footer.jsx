import { Facebook, Instagram, Linkedin, X, Mail, Phone, MapPin } from 'lucide-react'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from "next/link"

function Footer() {
  return (
    <footer className="w-full" style={{ backgroundColor: "#1C2C49" }}>
      <div className="container mx-auto px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Logo et description */}
        <div className="lg:col-span-2">
          <div className="flex items-center mb-4">
            <Image 
              src="/logo.png" 
              alt="Mali Mode" 
              width={40} 
              height={40} 
              className="mr-2"
            />
            <h3 className="text-xl font-bold" style={{ color: "#D4AF37" }}>Mali Mode</h3>
          </div>
          <p className="text-sm mb-6" style={{ color: "#FDF8F2", opacity: 0.8 }}>
            Votre destination pour une mode africaine authentique et élégante, inspirée par la richesse culturelle du Mali.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <MapPin size={18} className="mr-3" style={{ color: "#D4AF37" }} />
              <span className="text-sm" style={{ color: "#FDF8F2", opacity: 0.8 }}>Bamako, Mali</span>
            </div>
            <div className="flex items-center">
              <Phone size={18} className="mr-3" style={{ color: "#D4AF37" }} />
              <span className="text-sm" style={{ color: "#FDF8F2", opacity: 0.8 }}>+223 00 00 00 00</span>
            </div>
            <div className="flex items-center">
              <Mail size={18} className="mr-3" style={{ color: "#D4AF37" }} />
              <span className="text-sm" style={{ color: "#FDF8F2", opacity: 0.8 }}>contact@malimode.ml</span>
            </div>
          </div>
        </div>

        {/* Liens Rapides */}
        <div>
          <h3 className="text-lg font-semibold mb-4" style={{ color: "#D4AF37" }}>Navigation</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="text-sm hover:underline transition-all" style={{ color: "#FDF8F2", opacity: 0.8 }}>Accueil</Link></li>
            <li><Link href="/shop" className="text-sm hover:underline transition-all" style={{ color: "#FDF8F2", opacity: 0.8 }}>Boutique</Link></li>
            <li><Link href="/collections" className="text-sm hover:underline transition-all" style={{ color: "#FDF8F2", opacity: 0.8 }}>Collections</Link></li>
            <li><Link href="/about" className="text-sm hover:underline transition-all" style={{ color: "#FDF8F2", opacity: 0.8 }}>Notre Histoire</Link></li>
            <li><Link href="/blog" className="text-sm hover:underline transition-all" style={{ color: "#FDF8F2", opacity: 0.8 }}>Blog</Link></li>
          </ul>
        </div>

        {/* Service Client */}
        <div>
          <h3 className="text-lg font-semibold mb-4" style={{ color: "#D4AF37" }}>Service Client</h3>
          <ul className="space-y-3">
            <li><Link href="/contact" className="text-sm hover:underline transition-all" style={{ color: "#FDF8F2", opacity: 0.8 }}>Contactez-nous</Link></li>
            <li><Link href="/shipping-returns" className="text-sm hover:underline transition-all" style={{ color: "#FDF8F2", opacity: 0.8 }}>Livraison & Retours</Link></li>
            <li><Link href="/faq" className="text-sm hover:underline transition-all" style={{ color: "#FDF8F2", opacity: 0.8 }}>FAQ</Link></li>
            <li><Link href="/size-guide" className="text-sm hover:underline transition-all" style={{ color: "#FDF8F2", opacity: 0.8 }}>Guide des Tailles</Link></li>
            <li><Link href="/privacy" className="text-sm hover:underline transition-all" style={{ color: "#FDF8F2", opacity: 0.8 }}>Confidentialité</Link></li>
          </ul>
        </div>

        {/* Newsletter et Réseaux sociaux */}
        <div>
          <h3 className="text-lg font-semibold mb-4" style={{ color: "#D4AF37" }}>Newsletter</h3>
          <p className="text-sm mb-4" style={{ color: "#FDF8F2", opacity: 0.8 }}>
            Abonnez-vous pour recevoir nos offres exclusives et les dernières collections.
          </p>
          
          <form className="flex gap-2 mb-6">
            <Input
              type="email"
              placeholder="Votre email"
              className="flex-grow text-sm bg-white/10 border-none focus:ring-1 focus:ring-[#D4AF37] placeholder-gray-400"
              style={{ color: "#FDF8F2" }}
            />
            <Button 
              type="submit" 
              className="text-sm"
              style={{ backgroundColor: "#CC6B2C", color: "#FDF8F2" }}
            >
              OK
            </Button>
          </form>

          <div>
            <h4 className="text-sm font-semibold mb-3" style={{ color: "#D4AF37" }}>Suivez-nous</h4>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-all" style={{ color: "#FDF8F2" }}>
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-all" style={{ color: "#FDF8F2" }}>
                <Instagram size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-all" style={{ color: "#FDF8F2" }}>
                <X size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-all" style={{ color: "#FDF8F2" }}>
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Paiements et copyright */}
      <div className="border-t border-white/10 pt-8 pb-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-4 flex-wrap justify-center">
              <Image src="/images/OM.png" alt="Orange Money" width={80} height={25} className=" p-1 rounded" />
              <Image src="/images/Moov_Money.png" alt="Moov Money" width={80} height={25} className=" p-1 rounded" />
              <Image src="/images/wave.png" alt="Wave" width={80} height={25} className=" p-1 rounded" />
            </div>

            <div className="text-center md:text-right">
              <p className="text-xs" style={{ color: "#FDF8F2", opacity: 0.6 }}>
                &copy; {new Date().getFullYear()} Mali Mode. Tous droits réservés.
              </p>
              <div className="flex gap-4 justify-center md:justify-end mt-2">
                <Link href="/cgv" className="text-xs hover:underline" style={{ color: "#FDF8F2", opacity: 0.6 }}>CGV</Link>
                <Link href="/privacy" className="text-xs hover:underline" style={{ color: "#FDF8F2", opacity: 0.6 }}>Confidentialité</Link>
                <Link href="/legal" className="text-xs hover:underline" style={{ color: "#FDF8F2", opacity: 0.6 }}>Mentions légales</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer