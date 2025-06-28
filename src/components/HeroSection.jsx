"use client";

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const heroSlides = [
  {
    image: "/images/landing_5.jpg",
    title: "L'Élégance Malienne au Quotidien",
    subtitle: "Découvrez nos collections uniques inspirées par l'artisanat ancestral.",
    cta: "Découvrir la Collection",
    link: "/shop",
  },
  {
    image: "/images/landing_7.jpg",
    title: "Authenticité et Savoir-Faire",
    subtitle: "Des tissus Bogolan et Bazin teints à la main, pour vous.",
    cta: "Explorer les Tissus",
    link: "/tissus",
  },
  {
    image: "/images/landing_3.jpg",
    title: "Modernité et Tradition",
    subtitle: "Des designs contemporains qui célèbrent notre héritage culturel.",
    cta: "Voir les Nouveautés",
    link: "/new-arrivals",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNext = () => {
    controls.start("exit").then(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      controls.start("enter");
    });
  };

  const handlePrev = () => {
    controls.start("exit").then(() => {
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
      controls.start("enter");
    });
  };

  const goToSlide = (index) => {
    controls.start("exit").then(() => {
      setCurrentSlide(index);
      controls.start("enter");
    });
  };

  const slideVariants = {
    enter: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-[#D4AF37] w-6' : 'bg-white/50'}`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-300"
        aria-label="Slide précédent"
      >
        <ChevronRight className="rotate-180" size={24} />
      </button>
      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-300"
        aria-label="Slide suivant"
      >
        <ChevronRight size={24} />
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          variants={slideVariants}
          initial="exit"
          animate="enter"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              fill
              priority={currentSlide === 0}
              className="object-cover"
              quality={100}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <motion.div 
            className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-8 mx-auto max-w-7xl"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4 max-w-4xl"
            >
              {heroSlides[currentSlide].title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-white max-w-2xl mb-8"
            >
              {heroSlides[currentSlide].subtitle}
            </motion.p>

            <motion.div variants={itemVariants}>
              <Button
                asChild
                className="px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ 
                  backgroundColor: "#D4AF37",
                  color: "#1C2C49"
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={heroSlides[currentSlide].link}>
                  {heroSlides[currentSlide].cta} <ChevronRight className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Overlay gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent z-10" />
    </section>
  );
};

export default HeroSection;