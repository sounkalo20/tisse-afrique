// app/product/[id]/page.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

// Lucide React Icons
import {
  ShoppingCart,
  User,
  Heart,
  Search,
  Menu,
  Star,
  Plus,
  Minus,
  Truck,
  Package,
  Ruler,
  Paintbrush,
  MessageSquareText,
  Facebook,
  Instagram,
  X,
  Linkedin,
  Check,
  ChevronRight
} from "lucide-react";

// Shadcn/ui Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// --- Couleurs personnalisées ---
const colors = {
  primary: '#CC6B2C',       // Couleur primaire (boutons, éléments culturels)
  dark: '#1C2C49',         // Fond sombre ou texte principal
  gold: '#D4AF37',         // Détails luxueux, titres, effets au survol
  light: '#FDF8F2',        // Fond clair principal
  artisan: '#8C2F20',      // Zones artisanales ou alertes douces
};

// --- Données Statiques (simplifiées pour l'exemple) ---
const allProducts = [
  {
    id: "1",
    name: "Robe Bogolan Traditionnelle",
    images: [
      "/images/shop/robe.jpg",
      "/images/shop/bazin_homme.jpg",
      "/images/shop/tunique_femme.jpg",
      "/images/shop/tunique_home.png",
    ],
    price: "45 000 XOF",
    category: "Robes Femmes",
    description: "Une robe Bogolan authentique, fabriquée à la main au Mali. Ce tissu en coton, teint avec des pigments naturels et des motifs ancestraux, est unique en son genre. Confortable et élégante, elle est parfaite pour toutes les occasions, du quotidien aux événements spéciaux. Chaque pièce est une œuvre d'art, reflétant le riche héritage culturel malien.",
    details: [
      { label: "Matière", value: "100% Coton (Bogolan)" },
      { label: "Coupe", value: "Ample, droite" },
      { label: "Entretien", value: "Lavage à la main ou nettoyage à sec recommandé" },
      { label: "Origine", value: "Mali, Fabriqué à la main" },
    ],
    sizes: ["S", "M", "L", "XL", "Taille Unique"],
    colors: [
      { name: "Original", hex: "#4a3c2f", image: "/images/shop/robe-bogolan-1.jpg" },
      { name: "Bleu Indigo", hex: "#2f3c4a", image: "/images/product-detail/robe-bogolan-indigo.jpg" },
      { name: "Rouge Terre", hex: "#a0522d", image: "/images/product-detail/robe-bogolan-red.jpg" },
    ],
    rating: 5,
    reviewsCount: 12,
    reviews: [
      { id: 1, author: "Aïcha Diallo", rating: 5, date: "15 juin 2025", text: "Cette robe est un chef-d'œuvre ! La qualité du Bogolan est incroyable et les motifs sont superbes. Je suis ravie de mon achat." },
      { id: 2, author: "Mariam Cissé", rating: 5, date: "10 juin 2025", text: "Magnifique et très confortable. Reçue rapidement au Mali. C'est un vrai trésor." },
    ],
  },
  // ... autres produits
];

export default function ProductPage() {
  const params = useParams();
  const productId = params.id;
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const foundProduct = allProducts.find((p) => p.id === productId);
    setProduct(foundProduct);
    if (foundProduct) {
      setSelectedSize(foundProduct.sizes[0] || "");
      setSelectedColor(foundProduct.colors[0]?.name || "");
    }
  }, [productId]);

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <main className="flex-1 container mx-auto px-4 md:px-6 py-12 flex justify-center items-center">
          <p className="text-xl text-gray-700">Chargement du produit...</p>
        </main>
      </div>
    );
  }

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleColorChange = (colorName) => {
    setSelectedColor(colorName);
    const color = product.colors.find(c => c.name === colorName);
    if (color && color.image) {
      const imageIndex = product.images.indexOf(color.image);
      setActiveImage(imageIndex !== -1 ? imageIndex : 0);
    }
  };

  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col bg-[#FDF8F2]">
      <main className="flex-1 container mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Fil d'Ariane */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center">
          <Link href="/" className="hover:text-[#CC6B2C] transition-colors">Accueil</Link>
          <ChevronRight size={16} className="mx-2 text-gray-400" />
          <Link href="/shop" className="hover:text-[#CC6B2C] transition-colors">Boutique</Link>
          <ChevronRight size={16} className="mx-2 text-gray-400" />
          <span className="font-semibold text-[#1C2C49]">{product.name}</span>
        </nav>

        {/* Section Principale Produit */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
          {/* Galerie d'Images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg bg-gray-50">
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                fill
                className="object-contain transition-opacity duration-300"
                priority
              />
            </div>

            <Carousel className="w-full">
              <CarouselContent>
                {product.images.map((img, index) => (
                  <CarouselItem key={index} className="basis-1/4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`relative aspect-square cursor-pointer rounded-md overflow-hidden border-2 ${
                        index === activeImage ? "border-[#D4AF37]" : "border-gray-200"
                      } transition-all duration-200`}
                      onClick={() => setActiveImage(index)}
                    >
                      <Image
                        src={img}
                        alt={`Vue ${index + 1} de ${product.name}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
              <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
            </Carousel>
          </motion.div>

          {/* Détails Produit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl font-bold text-[#1C2C49] mb-2">{product.name}</h1>
              <p className="text-2xl font-semibold text-[#CC6B2C]">{product.price}</p>
              <div className="flex items-center mt-3">
                <div className="flex text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      fill={i < product.rating ? "currentColor" : "none"}
                      strokeWidth={i < product.rating ? 0 : 1.5}
                      size={20}
                    />
                  ))}
                </div>
                <span className="text-gray-600 ml-2 text-sm">
                  ({product.reviewsCount} avis) • <Link href="#reviews" className="underline hover:text-[#CC6B2C]">Voir les avis</Link>
                </span>
              </div>
            </div>

            {/* Options de Couleur */}
            {product.colors?.length > 0 && (
              <div>
                <Label className="block text-lg font-medium text-[#1C2C49] mb-2">
                  Couleur: <span className="font-normal">{selectedColor}</span>
                </Label>
                <RadioGroup
                  value={selectedColor}
                  onValueChange={handleColorChange}
                  className="flex flex-wrap gap-3"
                >
                  {product.colors.map((color) => (
                    <div key={color.name} className="flex items-center">
                      <RadioGroupItem
                        value={color.name}
                        id={`color-${color.name}`}
                        className="sr-only"
                      />
                      <Label
                        htmlFor={`color-${color.name}`}
                        className={`flex items-center justify-center w-10 h-10 rounded-full border-2 cursor-pointer transition-all ${
                          selectedColor === color.name
                            ? "border-[#D4AF37] ring-2 ring-[#D4AF37]"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      >
                        {selectedColor === color.name && (
                          <Check className="text-white" size={16} />
                        )}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {/* Options de Taille */}
            {product.sizes?.length > 0 && (
              <div>
                <div className="flex justify-between items-center mb-2">
                  <Label className="block text-lg font-medium text-[#1C2C49]">
                    Taille: <span className="font-normal">{selectedSize}</span>
                  </Label>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="link" className="text-[#CC6B2C] hover:text-[#8C2F20] p-0 h-auto text-sm">
                        <Ruler className="inline mr-1" size={16} /> Guide des tailles
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md bg-white rounded-lg">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-bold text-[#1C2C49]">Guide des Tailles</DialogTitle>
                      </DialogHeader>
                      <div className="mt-4 text-sm text-gray-700">
                        <p className="mb-4">Consultez notre guide pour trouver la taille parfaite.</p>
                        {/* Contenu du guide */}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <RadioGroup
                  value={selectedSize}
                  onValueChange={setSelectedSize}
                  className="flex flex-wrap gap-2"
                >
                  {product.sizes.map((size) => (
                    <div key={size} className="flex items-center">
                      <RadioGroupItem
                        value={size}
                        id={`size-${size}`}
                        className="sr-only"
                      />
                      <Label
                        htmlFor={`size-${size}`}
                        className={`flex items-center justify-center w-12 h-10 rounded-md border cursor-pointer transition-all ${
                          selectedSize === size
                            ? "bg-[#CC6B2C] text-white border-[#CC6B2C]"
                            : "bg-white border-gray-300 hover:border-[#CC6B2C]"
                        }`}
                      >
                        {size}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {/* Quantité */}
            <div>
              <Label className="block text-lg font-medium text-[#1C2C49] mb-2">Quantité</Label>
              <div className="flex items-center border border-gray-300 rounded-md w-32">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleQuantityChange("decrement")}
                  className="rounded-r-none hover:bg-gray-100"
                >
                  <Minus size={16} />
                </Button>
                <Input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="text-center border-x border-gray-300 focus-visible:ring-0"
                  min="1"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleQuantityChange("increment")}
                  className="rounded-l-none hover:bg-gray-100"
                >
                  <Plus size={16} />
                </Button>
              </div>
            </div>

            {/* Boutons d'Action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="flex-1 bg-[#CC6B2C] hover:bg-[#8C2F20] text-white h-12 text-lg">
                <ShoppingCart className="mr-2" /> Ajouter au panier
              </Button>
              <Button variant="outline" className="flex-1 border-[#CC6B2C] text-[#CC6B2C] hover:bg-[#FDF8F2] h-12 text-lg">
                Acheter maintenant
              </Button>
            </div>

            {/* Services */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
              {[
                { icon: <Truck size={20} />, text: "Livraison rapide" },
                { icon: <Package size={20} />, text: "Retours faciles" },
                { icon: <Paintbrush size={20} />, text: "Fait main" },
                { icon: <MessageSquareText size={20} />, text: "Support 24/7" },
              ].map((service, i) => (
                <div key={i} className="flex items-center text-sm text-gray-700">
                  <span className="text-[#D4AF37] mr-2">{service.icon}</span>
                  {service.text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Onglets Description/Détails/Avis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100"
        >
          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-3 bg-gray-50 gap-1 p-1 rounded-lg">
              {[
                { value: "description", label: "Description" },
                { value: "details", label: "Détails" },
                { value: "reviews", label: `Avis (${product.reviewsCount})` },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="data-[state=active]:bg-[#CC6B2C] data-[state=active]:text-white rounded-md py-2 transition-colors"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value="description" className="mt-6 text-gray-700 leading-relaxed">
              <p>{product.description}</p>
            </TabsContent>
            
            <TabsContent value="details" className="mt-6">
              <ul className="space-y-3">
                {product.details.map((detail, i) => (
                  <li key={i} className="flex">
                    <span className="font-medium text-[#1C2C49] min-w-[120px]">{detail.label}:</span>
                    <span className="text-gray-700">{detail.value}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6" id="reviews">
              <h3 className="text-xl font-bold text-[#1C2C49] mb-6">Avis clients</h3>
              {product.reviews.length > 0 ? (
                <div className="space-y-6">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="flex items-center mb-2">
                        <span className="font-medium text-[#1C2C49] mr-3">{review.author}</span>
                        <div className="flex text-[#D4AF37]">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              fill={i < review.rating ? "currentColor" : "none"}
                              strokeWidth={i < review.rating ? 0 : 1.5}
                              size={16}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-1">{review.date}</p>
                      <p className="text-gray-700 mt-2">{review.text}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">Aucun avis pour ce produit.</p>
              )}
              <Button className="mt-8 bg-[#CC6B2C] hover:bg-[#8C2F20]">
                Écrire un avis
              </Button>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
    </div>
  );
}