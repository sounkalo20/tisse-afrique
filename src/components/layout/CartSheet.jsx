// components/layout/CartSheet.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Lucide React Icons
import {
  X,
  Plus,
  Minus,
  ShoppingCart,
  Trash2,
  Package,
} from "lucide-react";

// Shadcn/ui Components
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

// Données fictives du panier (en production, elles viendraient d'un état global ou d'une API)
const initialCartItems = [
  {
    id: "robe-bogolan-traditionnelle",
    name: "Robe Bogolan Traditionnelle",
    image: "/images/shop/bazin_homme.jpg",
    price: 45000, // Prix en XOF (nombre pour les calculs)
    size: "M",
    color: "Original",
    quantity: 1,
  },
  {
    id: "ensemble-bazin-riche-homme",
    name: "Ensemble Bazin Riche Homme",
    image: "/images/shop/robe.jpg",
    price: 60000,
    size: "L",
    color: "Bleu Ciel",
    quantity: 2,
  },
  {
    id: "tunique-femme-wax-moderne",
    name: "Tunique Femme Wax Moderne",
    image: "/images/shop/tunique_home.png",
    price: 32000,
    size: "S",
    color: "Motifs",
    quantity: 1,
  },
];

export function CartSheet() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return; // Empêche une quantité inférieure à 1
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-ML', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const subtotal = calculateSubtotal();

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        {/* Le bouton déclencheur sera déplacé dans le Header */}
        <Button variant="ghost" size="icon" className="hover:text-mali-gold transition-colors relative">
          <ShoppingCart size={24} />
          <AnimatePresence>
            {cartItems.length > 0 && (
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center -mt-1 -mr-1"
              >
                {cartItems.length}
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="p-6 border-b border-gray-200">
          <SheetTitle className="text-2xl font-bold text-mali-dark-blue flex items-center">
            <ShoppingCart className="mr-3" /> Votre Panier
          </SheetTitle>
          <SheetDescription className="text-gray-600">
            {cartItems.length > 0
              ? `Vous avez ${cartItems.length} article(s) dans votre panier.`
              : "Votre panier est vide. Commencez vos achats !"}
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-6">
          <AnimatePresence mode="popLayout"> {/* Animer les ajouts/suppressions */}
            {cartItems.length > 0 ? (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout // Animer les changements de position
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg shadow-sm"
                  >
                    <Link href={`/product/${item.id}`} className="flex-shrink-0">
                      <div className="relative w-20 h-20 rounded-md overflow-hidden border border-gray-200">
                        <Image
                          src={item.image}
                          alt={item.name}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </Link>
                    <div className="flex-grow flex flex-col">
                      <Link href={`/product/${item.id}`} className="font-semibold text-mali-dark-blue hover:text-mali-gold text-base line-clamp-2">
                        {item.name}
                      </Link>
                      <p className="text-sm text-gray-500">
                        {item.size && `Taille: ${item.size}`} {item.color && `| Couleur: ${item.color}`}
                      </p>
                      <p className="text-mali-gold font-bold mt-1">
                        {formatPrice(item.price)}
                      </p>
                      <div className="flex items-center mt-3">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 rounded-full border-gray-300 hover:bg-gray-100"
                        >
                          <Minus size={16} />
                        </Button>
                        <Input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                          className="w-16 text-center mx-2 h-8 border-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0"
                          min="1"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 rounded-full border-gray-300 hover:bg-gray-100"
                        >
                          <Plus size={16} />
                        </Button>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:bg-red-500/10 hover:text-red-600 ml-4 flex-shrink-0"
                    >
                      <Trash2 size={20} />
                    </Button>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12 text-gray-600"
              >
                <Package size={64} className="mx-auto mb-4 text-mali-gold opacity-75" />
                <p className="text-lg mb-4">Votre panier est vide.</p>
                <Button onClick={() => setIsSheetOpen(false)} asChild className="bg-mali-gold hover:bg-mali-dark-blue text-white">
                  <Link href="/shop">Commencez vos achats</Link>
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t border-gray-200">
            <div className="flex justify-between items-center text-lg font-bold text-mali-dark-blue mb-4">
              <span>Total provisoire:</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Les frais de livraison et les taxes seront calculés à la caisse.
            </p>
            <div className="space-y-3">
              <Link
                href="/checkout"
                className="w-full flex items-center justify-center gap-2 text-lg py-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 no-underline"
                style={{ backgroundColor: '#1C2C49', color: '#CC6B2C' }}
              >
                <ShoppingCart className="mr-2" />
                Passer à la caisse
              </Link>


              <Button variant="outline" onClick={() => setIsSheetOpen(false)} className="w-full border-mali-dark-blue text-mali-dark-blue hover:bg-gray-100 text-lg py-6 rounded-lg transition-all duration-300">
                Continuer mes achats
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}