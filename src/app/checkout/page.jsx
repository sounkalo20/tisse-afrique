"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Lucide React Icons
import {
  MapPin,
  Truck,
  CreditCard,
  Wallet,
  CheckCircle,
  CircleDollarSign,
  Banknote,
  Smartphone,
  Info,
  ChevronRight,
  ShoppingCart,
  User,
  Heart,
  Search,
  Menu,
  ShoppingBag,
} from "lucide-react";

// Shadcn/ui Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const mockCartItems = [
  {
    id: "robe-bogolan-traditionnelle",
    name: "Robe Bogolan Traditionnelle",
    image: "/images/shop/tunique_home.png",
    price: 45000,
    size: "M",
    color: "Original",
    quantity: 1,
  },
  {
    id: "ensemble-bazin-riche-homme",
    name: "Ensemble Bazin Riche Homme",
    image: "/images/shop/bazin_homme.jpg",
    price: 60000,
    size: "L",
    color: "Bleu Ciel",
    quantity: 2,
  },
];

export default function CheckoutPage() {
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "Mali",
    zipCode: "",
  });

  const [deliveryMethod, setDeliveryMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("mobileMoney");
  const [mobileMoneyProvider, setMobileMoneyProvider] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVC, setCardCVC] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);

  const cartItems = mockCartItems;
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingCost = deliveryMethod === "express" ? 5000 : deliveryMethod === "standard" ? 2500 : 0;
  const total = subtotal + shippingCost;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-ML', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [id]: value }));
  };

  const handlePayment = (e) => {
    e.preventDefault();
    console.log("Informations de livraison:", shippingInfo);
    console.log("Méthode de livraison:", deliveryMethod);
    console.log("Méthode de paiement:", paymentMethod);
    if (paymentMethod === "mobileMoney") {
      console.log("Opérateur Mobile Money:", mobileMoneyProvider);
    } else if (paymentMethod === "card") {
      console.log("Numéro de carte:", cardNumber);
      console.log("Expiration:", cardExpiry);
      console.log("CVC:", cardCVC);
    }
    console.log("Total à payer:", formatPrice(total));
    alert(`Paiement de ${formatPrice(total)} en cours de traitement via ${paymentMethod}...`);
  };

  return (
    <div className="font-sans text-[#1C2C49] bg-[#FDF8F2] min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 md:px-6 py-8 md:py-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-[#1C2C49] text-center mb-10 relative"
        >
          <span className="relative inline-block">
            Finalisez Votre Commande
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#D4AF37] transform translate-y-1"></span>
          </span>
        </motion.h1>

        <form onSubmit={handlePayment} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* --- Colonne Principale --- */}
          <div className="lg:col-span-2 space-y-8">
            {/* Section Informations de Livraison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-[#FDF8F2]"
            >
              <h2 className="text-2xl font-bold text-[#1C2C49] mb-6 flex items-center">
                <MapPin className="mr-3 text-[#CC6B2C]" size={28} />
                <span className="relative">
                  Informations de Livraison
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] transform translate-y-1"></span>
                </span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="firstName" className="mb-2 block text-[#1C2C49]">Prénom</Label>
                  <Input 
                    id="firstName" 
                    value={shippingInfo.firstName} 
                    onChange={handleInputChange} 
                    placeholder="Votre prénom" 
                    required 
                    className="border-[#1C2C49]/20 focus:border-[#CC6B2C] focus:ring-[#CC6B2C]/50"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="mb-2 block text-[#1C2C49]">Nom</Label>
                  <Input 
                    id="lastName" 
                    value={shippingInfo.lastName} 
                    onChange={handleInputChange} 
                    placeholder="Votre nom" 
                    required 
                    className="border-[#1C2C49]/20 focus:border-[#CC6B2C] focus:ring-[#CC6B2C]/50"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="email" className="mb-2 block text-[#1C2C49]">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={shippingInfo.email} 
                    onChange={handleInputChange} 
                    placeholder="votre.email@exemple.com" 
                    required 
                    className="border-[#1C2C49]/20 focus:border-[#CC6B2C] focus:ring-[#CC6B2C]/50"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="mb-2 block text-[#1C2C49]">Téléphone</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    value={shippingInfo.phone} 
                    onChange={handleInputChange} 
                    placeholder="+223 XX XX XX XX" 
                    required 
                    className="border-[#1C2C49]/20 focus:border-[#CC6B2C] focus:ring-[#CC6B2C]/50"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <Label htmlFor="address" className="mb-2 block text-[#1C2C49]">Adresse complète</Label>
                <Input 
                  id="address" 
                  value={shippingInfo.address} 
                  onChange={handleInputChange} 
                  placeholder="Ex: Rue 123, Porte 456, Hamdallaye" 
                  required 
                  className="border-[#1C2C49]/20 focus:border-[#CC6B2C] focus:ring-[#CC6B2C]/50"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city" className="mb-2 block text-[#1C2C49]">Ville</Label>
                  <Select 
                    value={shippingInfo.city} 
                    onValueChange={(value) => setShippingInfo(prev => ({ ...prev, city: value }))} 
                    required
                  >
                    <SelectTrigger className="w-full border-[#1C2C49]/20 focus:border-[#CC6B2C] focus:ring-[#CC6B2C]/50">
                      <SelectValue placeholder="Sélectionnez votre ville" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-[#1C2C49]/10">
                      <SelectItem value="Bamako" className="hover:bg-[#FDF8F2] focus:bg-[#FDF8F2]">Bamako</SelectItem>
                      <SelectItem value="Sikasso" className="hover:bg-[#FDF8F2] focus:bg-[#FDF8F2]">Sikasso</SelectItem>
                      <SelectItem value="Ségou" className="hover:bg-[#FDF8F2] focus:bg-[#FDF8F2]">Ségou</SelectItem>
                      <SelectItem value="Mopti" className="hover:bg-[#FDF8F2] focus:bg-[#FDF8F2]">Mopti</SelectItem>
                      <SelectItem value="Kayes" className="hover:bg-[#FDF8F2] focus:bg-[#FDF8F2]">Kayes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="country" className="mb-2 block text-[#1C2C49]">Pays</Label>
                  <Input 
                    id="country" 
                    value={shippingInfo.country} 
                    onChange={handleInputChange} 
                    disabled 
                    className="bg-[#FDF8F2] cursor-not-allowed border-[#1C2C49]/20"
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-2 mt-6">
                <Checkbox 
                  id="saveInfo" 
                  checked={saveInfo} 
                  onCheckedChange={setSaveInfo} 
                  className="data-[state=checked]:bg-[#CC6B2C] data-[state=checked]:text-white border-[#1C2C49]/30"
                />
                <Label htmlFor="saveInfo" className="cursor-pointer text-[#1C2C49]">Enregistrer mes informations pour la prochaine fois</Label>
              </div>
            </motion.div>

            {/* Section Mode de Livraison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-[#FDF8F2]"
            >
              <h2 className="text-2xl font-bold text-[#1C2C49] mb-6 flex items-center">
                <Truck className="mr-3 text-[#CC6B2C]" size={28} />
                <span className="relative">
                  Mode de Livraison
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] transform translate-y-1"></span>
                </span>
              </h2>
              
              <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod} className="space-y-4">
                <Label htmlFor="standard" className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-[#FDF8F2] transition-colors has-[:checked]:border-[#CC6B2C] has-[:checked]:ring-1 has-[:checked]:ring-[#CC6B2C] border-[#1C2C49]/20">
                  <RadioGroupItem value="standard" id="standard" className="mr-3 text-[#CC6B2C] border-[#1C2C49]/30" />
                  <div>
                    <p className="font-semibold text-lg text-[#1C2C49]">Livraison Standard</p>
                    <p className="text-sm text-[#1C2C49]/80">Délai estimé : 3-5 jours ouvrables. <span className="font-bold text-[#8C2F20]">{formatPrice(2500)}</span></p>
                  </div>
                </Label>
                
                <Label htmlFor="express" className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-[#FDF8F2] transition-colors has-[:checked]:border-[#CC6B2C] has-[:checked]:ring-1 has-[:checked]:ring-[#CC6B2C] border-[#1C2C49]/20">
                  <RadioGroupItem value="express" id="express" className="mr-3 text-[#CC6B2C] border-[#1C2C49]/30" />
                  <div>
                    <p className="font-semibold text-lg text-[#1C2C49]">Livraison Express</p>
                    <p className="text-sm text-[#1C2C49]/80">Délai estimé : 1-2 jours ouvrables. <span className="font-bold text-[#8C2F20]">{formatPrice(5000)}</span></p>
                  </div>
                </Label>
                
                <Label htmlFor="pickup" className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-[#FDF8F2] transition-colors has-[:checked]:border-[#CC6B2C] has-[:checked]:ring-1 has-[:checked]:ring-[#CC6B2C] border-[#1C2C49]/20">
                  <RadioGroupItem value="pickup" id="pickup" className="mr-3 text-[#CC6B2C] border-[#1C2C49]/30" />
                  <div>
                    <p className="font-semibold text-lg text-[#1C2C49]">Retrait en Boutique</p>
                    <p className="text-sm text-[#1C2C49]/80">Disponible sous 24h. <span className="font-bold text-[#8C2F20]">Gratuit</span></p>
                    <p className="text-xs text-[#1C2C49]/60 mt-1">Adresse : Avenue de l'Indépendance, Immeuble MaliMode, Bamako</p>
                  </div>
                </Label>
              </RadioGroup>
            </motion.div>

            {/* Section Informations de Paiement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-[#FDF8F2]"
            >
              <h2 className="text-2xl font-bold text-[#1C2C49] mb-6 flex items-center">
                <CreditCard className="mr-3 text-[#CC6B2C]" size={28} />
                <span className="relative">
                  Informations de Paiement
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] transform translate-y-1"></span>
                </span>
              </h2>
              
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                {/* Paiement Mobile Money */}
                <Label htmlFor="mobileMoney" className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-[#FDF8F2] transition-colors has-[:checked]:border-[#CC6B2C] has-[:checked]:ring-1 has-[:checked]:ring-[#CC6B2C] border-[#1C2C49]/20">
                  <RadioGroupItem value="mobileMoney" id="mobileMoney" className="mr-3 text-[#CC6B2C] border-[#1C2C49]/30" />
                  <div className="flex items-center">
                    <Smartphone className="mr-2 text-[#1C2C49]/80" size={20} />
                    <p className="font-semibold text-lg text-[#1C2C49]">Mobile Money</p>
                  </div>
                </Label>
                
                {paymentMethod === "mobileMoney" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-[#FDF8F2] rounded-lg border border-[#1C2C49]/10 ml-8"
                  >
                    <Label htmlFor="mobileMoneyProvider" className="mb-2 block text-[#1C2C49]">Choisissez votre opérateur</Label>
                    <Select value={mobileMoneyProvider} onValueChange={setMobileMoneyProvider} required={paymentMethod === "mobileMoney"}>
                      <SelectTrigger className="w-full border-[#1C2C49]/20 focus:border-[#CC6B2C] focus:ring-[#CC6B2C]/50">
                        <SelectValue placeholder="Opérateur Mobile Money" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border border-[#1C2C49]/10">
                        <SelectItem value="orange" className="hover:bg-[#FDF8F2] focus:bg-[#FDF8F2]">Orange Money</SelectItem>
                        <SelectItem value="moov" className="hover:bg-[#FDF8F2] focus:bg-[#FDF8F2]">Moov Money</SelectItem>
                        <SelectItem value="mtn" className="hover:bg-[#FDF8F2] focus:bg-[#FDF8F2]">MTN MoMo</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-[#1C2C49]/80 mt-3 flex items-center">
                      <Info size={16} className="mr-2 text-[#D4AF37]" />
                      Vous serez redirigé vers une page sécurisée pour finaliser la transaction.
                    </p>
                  </motion.div>
                )}

                {/* Paiement par Carte Bancaire */}
                <Label htmlFor="card" className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-[#FDF8F2] transition-colors has-[:checked]:border-[#CC6B2C] has-[:checked]:ring-1 has-[:checked]:ring-[#CC6B2C] border-[#1C2C49]/20">
                  <RadioGroupItem value="card" id="card" className="mr-3 text-[#CC6B2C] border-[#1C2C49]/30" />
                  <div className="flex items-center">
                    <CreditCard className="mr-2 text-[#1C2C49]/80" size={20} />
                    <p className="font-semibold text-lg text-[#1C2C49]">Carte Bancaire</p>
                  
                  </div>
                </Label>
                
                {paymentMethod === "card" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-[#FDF8F2] rounded-lg border border-[#1C2C49]/10 ml-8 space-y-4"
                  >
                    <div>
                      <Label htmlFor="cardNumber" className="mb-2 block text-[#1C2C49]">Numéro de carte</Label>
                      <Input 
                        id="cardNumber" 
                        type="text" 
                        value={cardNumber} 
                        onChange={(e) => setCardNumber(e.target.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim())} 
                        placeholder="XXXX XXXX XXXX XXXX" 
                        maxLength="19" 
                        required={paymentMethod === "card"} 
                        className="border-[#1C2C49]/20 focus:border-[#CC6B2C] focus:ring-[#CC6B2C]/50"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="cardExpiry" className="mb-2 block text-[#1C2C49]">Date d'expiration</Label>
                        <Input 
                          id="cardExpiry" 
                          type="text" 
                          value={cardExpiry} 
                          onChange={(e) => setCardExpiry(e.target.value.replace(/(\d{2})(\d{2})/, '$1/$2').substring(0, 5))} 
                          placeholder="MM/AA" 
                          maxLength="5" 
                          required={paymentMethod === "card"} 
                          className="border-[#1C2C49]/20 focus:border-[#CC6B2C] focus:ring-[#CC6B2C]/50"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="cardCVC" className="mb-2 block flex items-center text-[#1C2C49]">
                          CVC
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-6 w-6 ml-1 text-[#1C2C49]/50 hover:text-[#CC6B2C]">
                                <Info size={16} />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-64 text-sm bg-white p-3 rounded-lg shadow-lg border border-[#1C2C49]/10">
                              Le code de sécurité à 3 ou 4 chiffres situé au dos de votre carte.
                            </PopoverContent>
                          </Popover>
                        </Label>
                        <Input 
                          id="cardCVC" 
                          type="text" 
                          value={cardCVC} 
                          onChange={(e) => setCardCVC(e.target.value.replace(/\D/g, ''))} 
                          placeholder="XXX" 
                          maxLength="4" 
                          required={paymentMethod === "card"} 
                          className="border-[#1C2C49]/20 focus:border-[#CC6B2C] focus:ring-[#CC6B2C]/50"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Paiement à la Livraison */}
                <Label htmlFor="cashOnDelivery" className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-[#FDF8F2] transition-colors has-[:checked]:border-[#CC6B2C] has-[:checked]:ring-1 has-[:checked]:ring-[#CC6B2C] border-[#1C2C49]/20">
                  <RadioGroupItem value="cashOnDelivery" id="cashOnDelivery" className="mr-3 text-[#CC6B2C] border-[#1C2C49]/30" />
                  <div className="flex items-center">
                    <Banknote className="mr-2 text-[#1C2C49]/80" size={20} />
                    <p className="font-semibold text-lg text-[#1C2C49]">Paiement à la Livraison</p>
                  </div>
                </Label>
                
                {paymentMethod === "cashOnDelivery" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-[#8C2F20]/10 rounded-lg border border-[#8C2F20]/20 ml-8 text-[#8C2F20] flex items-start"
                  >
                    <Info size={20} className="mr-3 flex-shrink-0" />
                    <p className="text-sm">
                      Veuillez préparer le montant exact en espèces pour le livreur. 
                      Ce mode de paiement est disponible uniquement pour les livraisons au Mali.
                    </p>
                  </motion.div>
                )}
              </RadioGroup>
            </motion.div>
          </div>

          {/* --- Colonne Résumé de Commande --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-1 bg-white p-6 md:p-8 rounded-xl shadow-sm border border-[#FDF8F2] h-fit lg:sticky lg:top-24"
          >
            <h2 className="text-2xl font-bold text-[#1C2C49] mb-6 flex items-center">
              <ShoppingBag className="mr-3 text-[#CC6B2C]" size={28} />
              <span className="relative">
                Résumé de Commande
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] transform translate-y-1"></span>
              </span>
            </h2>

            <div className="space-y-4 mb-6 max-h-96 overflow-y-auto pr-2">
              {cartItems.map((item) => (
                <motion.div 
                  key={item.id} 
                  className="flex items-center space-x-4 p-2 hover:bg-[#FDF8F2] rounded-lg transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden border border-[#1C2C49]/10">
                    <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" />
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold text-[#1C2C49] line-clamp-1">{item.name}</p>
                    <p className="text-sm text-[#1C2C49]/70">{item.size} / {item.color} - Qty: {item.quantity}</p>
                  </div>
                  <p className="font-bold text-[#1C2C49] flex-shrink-0">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </motion.div>
              ))}
            </div>

            <Separator className="my-6 bg-[#1C2C49]/10" />

            <div className="space-y-3 text-lg mb-6">
              <div className="flex justify-between text-[#1C2C49]">
                <span>Total articles:</span>
                <span className="font-semibold">{formatPrice(subtotal)}</span>
              </div>
              
              <div className="flex justify-between text-[#1C2C49]">
                <span>Livraison ({deliveryMethod === "standard" ? "Standard" : deliveryMethod === "express" ? "Express" : "Retrait"}):</span>
                <span className="font-semibold">{formatPrice(shippingCost)}</span>
              </div>
              
              <div className="flex justify-between text-2xl font-bold text-[#1C2C49] pt-4 border-t border-[#1C2C49]/10 mt-4">
                <span>Total à payer:</span>
                <span className="text-[#D4AF37]">{formatPrice(total)}</span>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-[#CC6B2C] hover:bg-[#8C2F20] text-white text-xl py-7 rounded-lg font-bold shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <CheckCircle className="mr-3" /> Confirmer la commande
            </Button>
            
            <p className="text-center text-sm text-[#1C2C49]/80 mt-4">
              En confirmant, vous acceptez nos{' '}
              <Link href="/cgv" className="text-[#CC6B2C] hover:underline font-medium">
                Conditions Générales de Vente
              </Link>.
            </p>
          </motion.div>
        </form>
      </main>
    </div>
  );
}