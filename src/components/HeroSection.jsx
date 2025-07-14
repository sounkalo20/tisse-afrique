"use client";

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const heroContent = [
  {
    title: "L'Élégance Malienne Réinventée",
    subtitle: "Des créations uniques où tradition et modernité s'entrelacent",
    cta: "Explorer la Collection",
    link: "/shop",
  },
  {
    title: "Savoir-Faire Artisanal Exceptionnel",
    subtitle: "Chaque pièce raconte une histoire, chaque détail compte",
    cta: "Découvrir l'Artisanat",
    link: "/artisanat",
  },
  {
    title: "Luxe Authentique",
    subtitle: "Des matières nobles transformées en œuvres portables",
    cta: "Voir les Nouveautés",
    link: "/new-arrivals",
  },
];

const HeroSection = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentContent]);

  const handleNext = () => {
    controls.start("exit").then(() => {
      setCurrentContent((prev) => (prev + 1) % heroContent.length);
      controls.start("enter");
    });
  };

  const textVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1, 
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.15
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const ctaVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        delay: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 200
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.95
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/videos/video_landing4.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <Image
            src="/images/landing_fallback.jpg"
            alt="Background élégant"
            fill
            className="object-cover"
            priority

          />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-8 mx-auto max-w-7xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentContent}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="max-w-6xl"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
            >
              {heroContent[currentContent].title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-2xl md:text-3xl text-white/90 max-w-3xl mb-10 mx-auto"
              style={{ textShadow: '0 1px 5px rgba(0,0,0,0.2)' }}
            >
              {heroContent[currentContent].subtitle}
            </motion.p>

            <motion.div
              variants={ctaVariants}
              whileHover="hover"
              whileTap="tap"
              className="inline-block"
            >
              <Button
                asChild
                className="px-10 py-6 text-xl rounded-full shadow-2xl font-semibold group"
                style={{ 
                  backgroundColor: "#D4AF37",
                  color: "#1C2C49"
                }}
              >
                <Link href={heroContent[currentContent].link}>
                  <span className="flex items-center">
                    {heroContent[currentContent].cta}
                    <motion.span
                      variants={pulseVariants}
                      animate="animate"
                      className="ml-3 inline-block"
                    >
                      <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </motion.span>
                  </span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
          {heroContent.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                controls.start("exit").then(() => {
                  setCurrentContent(index);
                  controls.start("enter");
                });
              }}
              className="relative p-1"
              aria-label={`Aller au contenu ${index + 1}`}
            >
              <motion.span
                className={`block w-3 h-3 rounded-full ${currentContent === index ? 'bg-[#D4AF37]' : 'bg-white/50'}`}
                animate={{
                  scale: currentContent === index ? [1, 1.3, 1] : 1
                }}
                transition={{ duration: 0.3 }}
              />
              {currentContent === index && (
                <motion.span
                  className="absolute inset-0 border-2 border-[#D4AF37] rounded-full"
                  initial={{ scale: 1.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Overlay gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent z-10" />
    </section>
  );
};

export default HeroSection;