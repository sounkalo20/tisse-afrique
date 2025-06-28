"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Truck,
  Star,
  Instagram,
  Heart,
  Shield,
  Handshake,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import HeroSection from "@/components/HeroSection";

// Couleurs définies
const colors = {
  primary: "#CC6B2C",
  dark: "#1C2C49",
  gold: "#D4AF37",
  light: "#FDF8F2",
  artisan: "#8C2F20",
};

const SectionHeading = ({ children }) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6 }}
    className="text-3xl md:text-4xl font-bold text-center mb-12 relative pb-4"
    style={{ color: colors.dark }}
  >
    {children}
    <span
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full"
      style={{ backgroundColor: colors.gold }}
    ></span>
  </motion.h2>
);

const ProductCard = ({ product }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-gray-100"
  >
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
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-1" style={{ color: colors.dark }}>{product.name}</h3>
      <p className="font-bold text-xl mb-2" style={{ color: colors.gold }}>{product.price}</p>
      <Button
        className="w-full transition-colors duration-300"
        style={{ backgroundColor: colors.primary, color: colors.light }}
      >
        Ajouter au panier
      </Button>
    </div>
  </motion.div>
);

const heroSlides = [
  {
    image: "/images/landing_1.jpg",
    title: "L'Élégance Malienne au Quotidien",
    subtitle: "Découvrez nos collections uniques inspirées par l'artisanat ancestral.",
    cta: "Découvrir la Collection",
    link: "/shop",
  },
  {
    image: "/images/landing_2.jpg",
    title: "Authenticité et Savoir-Faire",
    subtitle: "Des tissus Bogolan et Bazin teints à la main, pour vous.",
    cta: "Explorer les Tissus",
    link: "/tissus",
  },
];

const featuredCategories = [
  { name: "Robes Bogolan", image: "/images/collection_robe_bogolan.jpg", link: "/category/bogolan" },
  { name: "Tenues Homme Bazin", image: "/images/collection_bazin_homme.jpg", link: "/category/homme-bazin" },
  { name: "Accessoires Traditionnels", image: "/images/collection_accesoire.jpg", link: "/category/accessoires" },
  { name: "Mode Enfant", image: "/images/collection_enfant.jpg", link: "/category/enfant" },
];

const newArrivals = [
  { id: 1, name: "Robe Bogolan Éclat", image: "/images/robe_bogolan.jpg", price: "45 000 XOF", badge: "Nouveau" },
  { id: 2, name: "Ensemble Bazin Royal", image: "/images/ensemble_bazin.jpg", price: "60 000 XOF" },
  { id: 3, name: "Tunique Homme Kente", image: "/images/tunique_home.png", price: "38 000 XOF", badge: "Populaire" },
  { id: 4, name: "Jupe Pagnes Fleuris", image: "/images/jupe_pagne.jpg", price: "25 000 XOF" },
  { id: 5, name: "Chemise Batik Safari", image: "/images/chemise_batik.jpg", price: "32 000 XOF" },
];

const testimonials = [
  {
    id: 1,
    name: "Aïcha Diallo",
    text: "Absolument magnifique ! La qualité des tissus est exceptionnelle et la coupe parfaite. Je recommande vivement !",
    stars: 5,
  },
  {
    id: 2,
    name: "Moussa Traoré",
    text: "J'ai acheté une tenue pour un mariage, et j'ai reçu tellement de compliments. Le service client est aussi excellent.",
    stars: 5,
  },
  {
    id: 3,
    name: "Fatoumata Coulibaly",
    text: "Enfin un site qui met en valeur la vraie mode malienne ! Livraison rapide et emballage soigné.",
    stars: 4,
  },
  {
    id: 4,
    name: "Aïcha Diallo",
    text: "Absolument magnifique ! La qualité des tissus est exceptionnelle et la coupe parfaite. Je recommande vivement !",
    stars: 5,
  },
  {
    id: 5,
    name: "Moussa Traoré",
    text: "J'ai acheté une tenue pour un mariage, et j'ai reçu tellement de compliments. Le service client est aussi excellent.",
    stars: 5,
  },
  {
    id: 6,
    name: "Fatoumata Coulibaly",
    text: "Enfin un site qui met en valeur la vraie mode malienne ! Livraison rapide et emballage soigné.",
    stars: 4,
  },
];

const values = [
  {
    icon: <Handshake size={48} />,
    title: "Artisanat Local",
    description: "Collaboration directe avec les artisans maliens pour préserver les techniques traditionnelles."
  },
  {
    icon: <Heart size={48} />,
    title: "Qualité Exceptionnelle",
    description: "Matières premières sélectionnées avec soin pour une durabilité optimale."
  },
  {
    icon: <Shield size={48} />,
    title: "Commerce Équitable",
    description: "Rémunération juste des artisans et respect des conditions de travail."
  }
];

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="font-sans" style={{ backgroundColor: colors.light }}>
      <main className="overflow-hidden">
        {/* --- Hero Banner --- */}
        <HeroSection />

        {/* --- Valeurs --- */}
        <section className="py-16" style={{ backgroundColor: colors.dark }}>
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading style={{ color: colors.light }}>Nos Valeurs</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 text-center shadow-lg"
                >
                  <div className="flex justify-center mb-4" style={{ color: colors.primary }}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: colors.dark }}>{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Catégories --- */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading>Nos Collections</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <Link href={category.link}>
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={400}
                      height={300}
                      className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                      <h3
                        className="text-2xl font-bold text-white group-hover:text-gold transition-colors duration-300"
                        style={{ color: colors.light }}
                      >
                        {category.name}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Nouveautés --- */}
        <section className="py-16" style={{ backgroundColor: colors.light }}>
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading>Nouveautés</SectionHeading>
            <Carousel
              opts={{ align: "start" }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {newArrivals.map((product, index) => (
                  <CarouselItem key={product.id} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <ProductCard product={product} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* --- Notre Histoire --- */}
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6" style={{ color: colors.dark }}>
                L&apos;Artisanat Malien à l&apos;Honneur
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Chez Mali Mode, nous célébrons la richesse et la diversité de l&apos;artisanat textile malien. Chaque pièce raconte une histoire, celle de générations de savoir-faire transmis, de pigments naturels et de motifs symboliques.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Nous travaillons en étroite collaboration avec des artisans locaux, garantissant des créations authentiques, éthiques et durables. Du mythique Bogolan au luxueux Bazin, nos vêtements sont un hommage à la culture malienne.
              </p>
              <Button
                asChild
                className="px-8 py-3 rounded-full transition-colors duration-300"
                style={{ backgroundColor: colors.dark, color: colors.light }}
              >
                <Link href="/about">Découvrir notre histoire</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 flex justify-center"
            >
              <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/artisanat_malien.jpg"
                  alt="Artisan Malien au travail"
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 border-4" style={{ borderColor: colors.gold }}></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Témoignages --- */}
        <section className="py-16" style={{ backgroundColor: colors.light }}>
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading>Ils nous font confiance</SectionHeading>
            <Carousel
              opts={{ align: "start", loop: true }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="p-4"
                    >
                      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                        <CardContent className="flex flex-col items-center text-center p-6 h-full">
                          <div className="flex mb-4" style={{ color: colors.gold }}>
                            {[...Array(testimonial.stars)].map((_, i) => (
                              <Star key={i} fill="currentColor" strokeWidth={0} size={20} />
                            ))}
                          </div>
                          <p className="italic text-gray-700 mb-4 flex-grow">&ldquo;{testimonial.text}&ldquo;</p>
                          <p className="font-semibold" style={{ color: colors.dark }}>- {testimonial.name}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-8" />
              <CarouselNext className="-right-8" />
            </Carousel>
          </div>
        </section>

        {/* --- Newsletter --- */}
        <section className="py-16" style={{ backgroundColor: colors.primary }}>
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Restez informés</h2>
              <p className="text-white mb-6">
                Abonnez-vous à notre newsletter pour recevoir nos dernières collections, offres exclusives et inspirations.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Votre email"
                  className="flex-grow py-3 px-4 rounded-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  className="py-3 px-6 rounded-full"
                  style={{ backgroundColor: colors.dark, color: colors.light }}
                >
                  S&quot;abonner
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-[#FDF8F2]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Partie texte */}
              <div className="md:w-1/2 space-y-6">
                <span className="inline-block px-4 py-2 rounded-full bg-[#CC6B2C]/10 text-[#CC6B2C] font-medium">
                  Artisanat d&quot;Excellence
                </span>

                <h2 className="text-4xl md:text-5xl font-bold text-[#1C2C49]">
                  L&apos;Art du <span className="text-[#D4AF37]">Textile Malien</span> Réinventé
                </h2>

                <p className="text-lg text-[#1C2C49]/90">
                  Chaque pièce raconte une histoire, tissée avec les techniques ancestrales
                  de nos artisans et sublimée par un design contemporain.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/collection" className="px-8 py-3 rounded-lg bg-[#CC6B2C] text-white font-medium hover:bg-[#8C2F20] transition-colors text-center">
                    Découvrir la Collection
                  </Link>
                  <Link href="/savoir-faire" className="px-8 py-3 rounded-lg border border-[#1C2C49] text-[#1C2C49] font-medium hover:bg-[#1C2C49]/5 transition-colors text-center">
                    Notre Savoir-Faire
                  </Link>
                </div>
              </div>

              {/* Galerie d'images */}
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative aspect-square overflow-hidden rounded-xl shadow-lg"
                >
                  <Image
                    src="/images/artisant_travaillant.jpg"
                    alt="Artisan travaillant le bogolan"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C2C49]/70 via-transparent to-transparent flex items-end p-4">
                    <span className="text-white font-medium">Bogolan Traditionnel</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative aspect-square overflow-hidden rounded-xl shadow-lg"
                >
                  <Image
                    src="/images/collection_moderne.jpg"
                    alt="Collection moderne en bazin"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C2C49]/70 via-transparent to-transparent flex items-end p-4">
                    <span className="text-white font-medium">Bazin Contemporain</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative aspect-square overflow-hidden rounded-xl shadow-lg"
                >
                  <Image
                    src="/images/model-mali-mode.jpg"
                    alt="Modèle portant une création MaliMode"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C2C49]/70 via-transparent to-transparent flex items-end p-4">
                    <span className="text-white font-medium">Création Signature</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative aspect-square overflow-hidden rounded-xl shadow-lg group"
                >
                  <Image
                    src="/images/atelier.jpg"
                    alt="Atelier de tissage"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#D4AF37]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link href="/ateliers" className="text-[#1C2C49] font-bold text-lg">
                      Visiter nos Ateliers →
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bandeau d'artisans */}
            <div className="mt-16 bg-[#8C2F20]/90 text-white rounded-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Rencontrez nos Artisans</h3>
                  <p className="max-w-2xl">
                    Découvrez les mains talentueuses qui donnent vie à chaque pièce avec passion et expertise.
                  </p>
                </div>
                <Link
                  href="/artisans"
                  className="px-6 py-3 rounded-lg bg-[#D4AF37] text-[#1C2C49] font-medium hover:bg-[#FDF8F2] transition-colors whitespace-nowrap"
                >
                  Voir leur Travail
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}