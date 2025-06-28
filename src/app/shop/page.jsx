"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  SlidersHorizontal,
  Star,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Couleurs définies
const colors = {
  primary: "#CC6B2C",
  dark: "#1C2C49",
  gold: "#D4AF37",
  light: "#FDF8F2",
  artisan: "#8C2F20",
};

// --- Données Statiques (pour l'exemple) ---
const allProducts = [
  { id: 1, name: "Robe Bogolan Traditionnelle", image: "/images/shop/robe.jpg", price: "45 000 XOF", category: "Robes Femmes", rating: 5, reviews: 12, badge: "Nouveau" },
  { id: 2, name: "Ensemble Bazin Riche Homme", image: "/images/shop/bazin_homme.jpg", price: "60 000 XOF", category: "Tenues Hommes", rating: 4, reviews: 8 },
  { id: 3, name: "Tunique Femme Wax Moderne", image: "/images/shop/tunique_femme.jpg", price: "32 000 XOF", category: "Tuniques Femmes", rating: 4, reviews: 15, badge: "Populaire" },
  { id: 4, name: "Boubou Coton Teint", image: "/images/shop/tunique_home.png", price: "55 000 XOF", category: "Boubous Hommes", rating: 5, reviews: 6 },
  { id: 5, name: "Jupe Longue Pagnes Multicolores", image: "/images/shop/robe.jpg", price: "28 000 XOF", category: "Jupes Femmes", rating: 4, reviews: 20 },
  { id: 6, name: "Chemise Homme Motifs Kassena", image: "/images/shop/bazin_homme.jpg", price: "38 000 XOF", category: "Chemises Hommes", rating: 5, reviews: 9 },
  { id: 7, name: "Tenue Enfant Bogolan", image: "/images/shop/tunique_femme.jpg", price: "25 000 XOF", category: "Mode Enfants", rating: 5, reviews: 7 },
  { id: 8, name: "Pochette Cuir Ethnique", image: "/images/shop/tunique_home.png", price: "18 000 XOF", category: "Accessoires", rating: 4, reviews: 30, badge: "Meilleure vente" },
  { id: 9, name: "Robe Bazin Brodée", image: "/images/shop/robe.jpg", price: "70 000 XOF", category: "Robes Femmes", rating: 5, reviews: 10 },
  { id: 10, name: "Sandales Cuir et Tissu", image: "/images/shop/bazin_homme.jpg", price: "22 000 XOF", category: "Accessoires", rating: 4, reviews: 18 },
  { id: 11, name: "Ensemble Femme Pagne Brodé", image: "/images/shop/tunique_femme.jpg", price: "50 000 XOF", category: "Ensembles Femmes", rating: 4, reviews: 14 },
  { id: 12, name: "Gilet Homme Faso Dan Fani", image: "/images/shop/tunique_home.png", price: "40 000 XOF", category: "Gilets Hommes", rating: 5, reviews: 5 },
  { id: 13, name: "Robe Coton Indigo", image: "/images/shop/robe.jpg", price: "48 000 XOF", category: "Robes Femmes", rating: 4, reviews: 9 },
  { id: 14, name: "Ensemble 3 pièces Bazin Homme", image: "/images/shop/bazin_homme.jpg", price: "75 000 XOF", category: "Tenues Hommes", rating: 5, reviews: 11, badge: "Top Vente" },
  { id: 15, name: "Tunique Wax Courte", image: "/images/shop/tunique_femme.jpg", price: "29 000 XOF", category: "Tuniques Femmes", rating: 4, reviews: 22 },
  { id: 16, name: "Boubou Royal Brodé", image: "/images/shop/tunique_home.png", price: "80 000 XOF", category: "Boubous Hommes", rating: 5, reviews: 7 },
  { id: 17, name: "Jupe Midi Bogolan", image: "/images/shop/robe.jpg", price: "35 000 XOF", category: "Jupes Femmes", rating: 4, reviews: 16 },
  { id: 18, name: "Chemise Homme Bogolan Moderne", image: "/images/shop/bazin_homme.jpg", price: "42 000 XOF", category: "Chemises Hommes", rating: 5, reviews: 10 },
  { id: 19, name: "Combinaison Enfant Wax", image: "/images/shop/tunique_femme.jpg", price: "28 000 XOF", category: "Mode Enfants", rating: 4, reviews: 8 },
  { id: 20, name: "Collier Perles Traditionnelles", image: "/images/shop/tunique_home.png", price: "15 000 XOF", category: "Accessoires", rating: 5, reviews: 25 },
];

const ProductCard = ({ product }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    whileHover={{ translateY: -5 }}
    className="bg-white rounded-lg shadow-sm overflow-hidden group transition-all duration-300 cursor-pointer flex flex-col h-full border border-gray-100 hover:shadow-md"
  >
    <Link href={`/product/1`} className="block">
      <div className="relative w-full h-72 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span 
            className="absolute top-3 left-3 text-white text-xs font-semibold px-3 py-1 rounded-full"
            style={{ backgroundColor: colors.primary }}
          >
            {product.badge}
          </span>
        )}
      </div>
    </Link>
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-lg font-semibold mb-1 line-clamp-2" style={{ color: colors.dark }}>
        <Link href={`/product/${product.id}`} className="hover:text-primary transition-colors">
          {product.name}
        </Link>
      </h3>
      <p className="text-sm text-gray-500 mb-2">{product.category}</p>
      <div className="flex items-center mb-2" style={{ color: colors.gold }}>
        {Array(product.rating).fill(0).map((_, i) => <Star key={i} fill="currentColor" strokeWidth={0} size={16} />)}
        {Array(5 - product.rating).fill(0).map((_, i) => <Star key={i} stroke="currentColor" fill="none" size={16} />)}
        <span className="text-gray-500 text-xs ml-2">({product.reviews})</span>
      </div>
      <p className="font-bold text-xl mb-4 mt-auto" style={{ color: colors.primary }}>{product.price}</p>
      <Button 
        className="w-full transition-colors duration-300"
        style={{ backgroundColor: colors.dark, color: colors.light }}
      >
        Ajouter au panier
      </Button>
    </div>
  </motion.div>
);


const categories = ["Robes Femmes", "Tenues Hommes", "Tuniques Femmes", "Boubous Hommes", "Jupes Femmes", "Chemises Hommes", "Mode Enfants", "Accessoires", "Ensembles Femmes", "Gilets Hommes"];
const colorsList = ["Rouge", "Bleu", "Jaune", "Vert", "Noir", "Blanc", "Motifs"];
const materials = ["Bogolan", "Bazin", "Wax", "Coton", "Faso Dan Fani", "Lin"];
const sizes = ["XS", "S", "M", "L", "XL", "XXL", "Taille Unique"];

export default function ShopPage() {
  const [filters, setFilters] = useState({
    category: [],
    color: [],
    material: [],
    size: [],
    price: [0, 100000],
    rating: 0,
    search: "",
  });
  const [sortOption, setSortOption] = useState("default");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const handleCheckboxChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const currentValues = prevFilters[filterType];
      if (currentValues.includes(value)) {
        return { ...prevFilters, [filterType]: currentValues.filter((item) => item !== value) };
      } else {
        return { ...prevFilters, [filterType]: [...currentValues, value] };
      }
    });
  };

  const handlePriceChange = (value) => {
    setFilters((prevFilters) => ({ ...prevFilters, price: value }));
  };

  const handleRatingChange = (value) => {
    setFilters((prevFilters) => ({ ...prevFilters, rating: value }));
  };

  const handleSearchChange = (e) => {
    setFilters((prevFilters) => ({ ...prevFilters, search: e.target.value }));
  };

  const applyFiltersAndSort = () => {
    let filteredProducts = allProducts.filter((product) => {
      if (filters.category.length > 0 && !filters.category.includes(product.category)) {
        return false;
      }
      const productPrice = parseInt(product.price.replace(/\sXOF/, '').replace(/\s/g, ''));
      if (productPrice < filters.price[0] || productPrice > filters.price[1]) {
        return false;
      }
      if (product.rating < filters.rating) {
        return false;
      }
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        if (!product.name.toLowerCase().includes(searchTerm) && !product.category.toLowerCase().includes(searchTerm)) {
          return false;
        }
      }
      return true;
    });

    if (sortOption === "price-asc") {
      filteredProducts.sort((a, b) => parseInt(a.price.replace(/\sXOF/, '').replace(/\s/g, '')) - parseInt(b.price.replace(/\sXOF/, '').replace(/\s/g, '')));
    } else if (sortOption === "price-desc") {
      filteredProducts.sort((a, b) => parseInt(b.price.replace(/\sXOF/, '').replace(/\s/g, '')) - parseInt(a.price.replace(/\sXOF/, '').replace(/\s/g, '')));
    } else if (sortOption === "name-asc") {
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "name-desc") {
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOption === "rating-desc") {
      filteredProducts.sort((a, b) => b.rating - a.rating);
    }

    return filteredProducts;
  };

  const filteredAndSortedProducts = applyFiltersAndSort();

  const resetFilters = () => {
    setFilters({ 
      category: [], 
      color: [], 
      material: [], 
      size: [], 
      price: [0, 100000], 
      rating: 0, 
      search: "" 
    });
  };

  return (
    <div className="font-sans min-h-screen flex flex-col" style={{ backgroundColor: colors.light }}>
      <main className="flex-1 container mx-auto px-4 md:px-6 py-8 md:py-12 flex flex-col lg:flex-row gap-8">
        {/* --- Bouton Filtres Mobile --- */}
        <Button 
          onClick={() => setMobileFiltersOpen(true)}
          className="lg:hidden mb-4 flex items-center gap-2"
          style={{ backgroundColor: colors.primary, color: colors.light }}
        >
          <Filter size={18} /> Filtres
        </Button>

        {/* --- Zone de Filtres (Mobile Overlay) --- */}
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 lg:hidden">
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween' }}
              className="absolute top-0 left-0 h-full w-4/5 max-w-sm bg-white p-6 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold" style={{ color: colors.dark }}>
                  <Filter className="inline mr-2" /> Filtres
                </h2>
                <button 
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Rechercher un produit..."
                    className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300"
                    value={filters.search}
                    onChange={handleSearchChange}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>

                <Accordion type="multiple" defaultValue={["category", "price", "rating"]} className="w-full">
                  {/* Filtre par Catégorie */}
                  <AccordionItem value="category">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline" style={{ color: colors.dark }}>
                      Catégories
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-4 space-y-2 max-h-60 overflow-y-auto">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={`category-${category}`}
                            checked={filters.category.includes(category)}
                            onCheckedChange={() => handleCheckboxChange("category", category)}
                            className="data-[state=checked]:bg-primary data-[state=checked]:text-white"
                          />
                          <label htmlFor={`category-${category}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                            {category}
                          </label>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>

                  {/* Filtre par Prix */}
                  <AccordionItem value="price">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline" style={{ color: colors.dark }}>
                      Prix
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-4">
                      <Slider
                        min={0}
                        max={100000}
                        step={1000}
                        value={filters.price}
                        onValueChange={handlePriceChange}
                        className="w-[95%] [&>span:first-child]:bg-primary [&>span:first-child>span]:bg-dark"
                      />
                      <div className="flex justify-between text-sm mt-2 text-gray-600">
                        <span>{filters.price[0]} XOF</span>
                        <span>{filters.price[1]} XOF</span>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Autres filtres... */}
                </Accordion>

                <div className="flex gap-2">
                  <Button
                    onClick={resetFilters}
                    className="flex-1 bg-gray-200 hover:bg-gray-300"
                    style={{ color: colors.dark }}
                  >
                    Réinitialiser
                  </Button>
                  <Button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="flex-1"
                    style={{ backgroundColor: colors.primary, color: colors.light }}
                  >
                    Appliquer
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* --- Zone de Filtres (Desktop) --- */}
        <motion.aside
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:block lg:w-1/4 bg-white p-6 rounded-lg shadow-sm border border-gray-100 lg:sticky lg:top-24 lg:self-start h-fit"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center" style={{ color: colors.dark }}>
            <Filter className="mr-2" /> Filtres
          </h2>

          <div className="relative mb-6">
            <Input
              type="text"
              placeholder="Rechercher un produit..."
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300"
              value={filters.search}
              onChange={handleSearchChange}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>

          <Accordion type="multiple" defaultValue={["category", "price", "rating"]} className="w-full">
            {/* Filtre par Catégorie */}
            <AccordionItem value="category">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline" style={{ color: colors.dark }}>
                Catégories
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4 space-y-2 max-h-60 overflow-y-auto">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category}`}
                      checked={filters.category.includes(category)}
                      onCheckedChange={() => handleCheckboxChange("category", category)}
                      className="data-[state=checked]:bg-primary data-[state=checked]:text-white"
                    />
                    <label htmlFor={`category-${category}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                      {category}
                    </label>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>

            {/* Filtre par Prix */}
            <AccordionItem value="price">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline" style={{ color: colors.dark }}>
                Prix
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4">
                <Slider
                  min={0}
                  max={100000}
                  step={1000}
                  value={filters.price}
                  onValueChange={handlePriceChange}
                  className="w-[95%] [&>span:first-child]:bg-primary [&>span:first-child>span]:bg-dark"
                />
                <div className="flex justify-between text-sm mt-2 text-gray-600">
                  <span>{filters.price[0]} XOF</span>
                  <span>{filters.price[1]} XOF</span>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Filtre par Note */}
            <AccordionItem value="rating">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline" style={{ color: colors.dark }}>
                Note client
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4 space-y-2">
                {[5, 4, 3].map((starCount) => (
                  <div key={starCount} className="flex items-center space-x-2">
                    <Checkbox
                      id={`rating-${starCount}`}
                      checked={filters.rating === starCount}
                      onCheckedChange={() => handleRatingChange(filters.rating === starCount ? 0 : starCount)}
                      className="data-[state=checked]:bg-primary data-[state=checked]:text-white"
                    />
                    <label htmlFor={`rating-${starCount}`} className="flex items-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer" style={{ color: colors.gold }}>
                      {Array(starCount).fill(0).map((_, i) => <Star key={i} fill="currentColor" strokeWidth={0} size={16} />)}
                      <span className="text-gray-700 ml-1">& Up</span>
                    </label>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>

            {/* Autres filtres... */}
          </Accordion>

          <Button
            onClick={resetFilters}
            className="w-full mt-6 bg-gray-200 hover:bg-gray-300"
            style={{ color: colors.dark }}
          >
            Réinitialiser les filtres
          </Button>
        </motion.aside>

        {/* --- Grille de Produits --- */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
            <h1 className="text-2xl md:text-3xl font-bold" style={{ color: colors.dark }}>
              Nos Vêtements Africains ({filteredAndSortedProducts.length} articles)
            </h1>
            <div className="flex items-center space-x-2">
              <span className="text-gray-700 text-sm md:text-base">Trier par:</span>
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-[180px] bg-white border border-gray-300">
                  <SelectValue placeholder="Pertinence" />
                </SelectTrigger>
                <SelectContent className="bg-white shadow-lg">
                  <SelectItem value="default">Pertinence</SelectItem>
                  <SelectItem value="price-asc">Prix : Croissant</SelectItem>
                  <SelectItem value="price-desc">Prix : Décroissant</SelectItem>
                  <SelectItem value="name-asc">Nom : A-Z</SelectItem>
                  <SelectItem value="name-desc">Nom : Z-A</SelectItem>
                  <SelectItem value="rating-desc">Meilleures notes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Filtres actifs */}
          {(filters.category.length > 0 || filters.rating > 0 || filters.search) && (
            <div className="mb-6 flex flex-wrap gap-2">
              {filters.category.map(cat => (
                <span 
                  key={cat} 
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800"
                >
                  {cat}
                  <button 
                    onClick={() => handleCheckboxChange("category", cat)}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
              {filters.rating > 0 && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
                  {filters.rating}+ étoiles
                  <button 
                    onClick={() => handleRatingChange(0)}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    <X size={14} />
                  </button>
                </span>
              )}
              {filters.search && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
                  "{filters.search}"
                  <button 
                    onClick={() => setFilters(prev => ({ ...prev, search: "" }))}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    <X size={14} />
                  </button>
                </span>
              )}
              <button 
                onClick={resetFilters}
                className="text-sm text-primary hover:underline"
              >
                Tout effacer
              </button>
            </div>
          )}

          {filteredAndSortedProducts.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredAndSortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-20 text-gray-600 text-lg"
            >
              <SlidersHorizontal size={48} className="mx-auto mb-4" style={{ color: colors.primary }} />
              Aucun produit ne correspond à vos critères de recherche ou de filtre.
              <Button 
                onClick={resetFilters}
                className="mt-6"
                style={{ backgroundColor: colors.primary, color: colors.light }}
              >
                Réinitialiser les filtres
              </Button>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}