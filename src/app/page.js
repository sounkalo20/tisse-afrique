"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Heart,
  Shield,
  Handshake,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import NewArrivalsSection from "@/components/NewArrivals";
import ArtisanatSection from "@/components/ArtisanatSection";
import NewsletterSection from "@/components/NewsletterSection";

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


  return (
    <div className="font-sans" style={{ backgroundColor: colors.light }}>
      <main className="overflow-hidden">
        {/* --- Hero Banner --- */}
        <HeroSection />

        {/* --- Valeurs --- */}
        <section className="py-20 relative overflow-hidden" style={{ backgroundColor: colors.dark }}>
          {/* Fond animé */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-purple-500 to-transparent animate-pulse"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <SectionHeading
              style={{ color: colors.light }}
              className="mb-16 text-center"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="inline-block text-[#D4AF37] font-bold text-4xl md:text-5xl mb-4"
              >
                L&lsquo;Excellence à Chaque Étape
              </motion.span>
            </SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
                  className="bg-white rounded-xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4"
                  style={{ borderTopColor: colors.primary }}
                >
                  <motion.div
                    className="flex justify-center mb-6"
                    style={{ color: colors.primary }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {React.cloneElement(value.icon, { size: 48 })}
                  </motion.div>

                  <h3
                    className="text-2xl font-extrabold mb-4 bg-clip-text text-transparent"
                    style={{
                      color: colors.dark,
                      backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`
                    }}
                  >
                    {value.title}
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Call-to-action animé */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring" }}
              className="mt-20 text-center"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  boxShadow: [
                    `0 4px 14px 0 rgba(${colors.primaryRGB}, 0.3)`,
                    `0 6px 20px 0 rgba(${colors.primaryRGB}, 0.4)`,
                    `0 4px 14px 0 rgba(${colors.primaryRGB}, 0.3)`
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block"
              >
                <button
                  className="px-12 py-4 rounded-full text-white font-bold text-lg tracking-wide uppercase"
                  style={{
                    background: `linear-gradient(45deg, ${colors.primary}, ${colors.secondary})`,
                    boxShadow: `0 4px 14px 0 rgba(${colors.primaryRGB}, 0.3)`
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center">
                    Commander Maintenant
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 animate-bounce-horizontal"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-6 text-gray-300 italic"
              >
                Satisfaction garantie ou remboursé
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* --- Catégories --- */}
        <CategoriesSection />

        {/* --- Nouveautés --- */}
        {/* <section className="py-16" style={{ backgroundColor: colors.light }}>
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
        </section> */}
        <NewArrivalsSection />

        {/* --- Notre Histoire --- */}
        <ArtisanatSection />

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
        {/* <section className="py-16" style={{ backgroundColor: colors.primary }}>
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
        </section> */}
        <NewsletterSection />

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
                    src="/images/new_image3.jpeg"
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
                    src="/images/new_image4.jpeg"
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
                    src="/images/new_image5.jpeg"
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
                    src="/images/new_image6.jpeg"
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