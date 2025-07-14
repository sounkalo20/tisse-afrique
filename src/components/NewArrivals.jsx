"use client";

import { motion, useAnimation } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import ProductCard from "./PrduvtCard";

const NewArrivalsSection = () => {
    const newArrivals = [
        { id: 1, name: "Robe Bogolan Éclat", image: "/images/new_image3.jpeg", price: "45 000 XOF", badge: "Nouveau" },
        { id: 2, name: "Ensemble Bazin Royal", image: "/images/new_image4.jpeg", price: "60 000 XOF" },
        { id: 3, name: "Tunique Homme Kente", image: "/images/new_image5.jpeg", price: "38 000 XOF", badge: "Populaire" },
        { id: 4, name: "Jupe Pagnes Fleuris", image: "/images/new_image6.jpeg", price: "25 000 XOF" },
        { id: 5, name: "Chemise Batik Safari", image: "/images/new_image2.jpeg", price: "32 000 XOF" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const controls = useAnimation();
    const sliderRef = useRef(null);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === newArrivals.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? newArrivals.length - 1 : prev - 1));
    };

    useEffect(() => {
        controls.start({
            x: -currentIndex * 320,
            transition: { type: "spring", stiffness: 300, damping: 30 }
        });
    }, [currentIndex, controls]);

    return (
        <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
            {/* Éléments décoratifs animés */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.03 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
            >
                <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-gold-500 mix-blend-multiply filter blur-[100px]"></div>
                <div className="absolute bottom-1/3 right-20 w-96 h-96 rounded-full bg-primary-500 mix-blend-multiply filter blur-[100px]"></div>
            </motion.div>

            <div className="container mx-auto px-4 relative z-10">
                {/* En-tête centré */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-3">
                        Nos Nouveautés
                    </h2>
                    <motion.p
                        className="text-lg text-[#D4AF37] max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Découvrez les dernières pièces ajoutées à notre collection
                    </motion.p>
                </motion.div>

                {/* Carrousel personnalisé */}
                <div className="relative">
                    {/* Conteneur du carrousel */}
                    <div className="relative overflow-hidden w-full">
                        <motion.div
                            ref={sliderRef}
                            className="flex gap-6"
                            animate={controls}
                            drag="x"
                            dragConstraints={{ right: 0, left: 0 }}
                            dragElastic={0.1}
                            onDragEnd={(e, { offset, velocity }) => {
                                if (offset.x > 100 || velocity.x > 800) {
                                    prevSlide();
                                } else if (offset.x < -100 || velocity.x < -800) {
                                    nextSlide();
                                }
                            }}
                        >
                            {newArrivals.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    className="flex-shrink-0 w-[280px] sm:w-[320px]"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    whileHover={{ y: -10 }}
                                >
                                    <ProductCard
                                        product={product}
                                        showCTA
                                        animationDelay={index * 0.1 + 0.3}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Boutons de navigation centrés en bas */}
                    <div className="flex justify-center gap-3 mt-8">
                        <button
                            onClick={prevSlide}
                            aria-label="Précédent"
                            className="p-3 rounded-full bg-[#D4AF37] text-white hover:bg-[#C19D2E] transition-colors shadow-md"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            aria-label="Suivant"
                            className="p-3 rounded-full bg-[#D4AF37] text-white hover:bg-[#C19D2E] transition-colors shadow-md"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* CTA mobile */}
                <motion.div
                    className="mt-12 text-center md:hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <Link
                        href="/new-arrivals"
                        className="inline-flex items-center px-6 py-3 bg-[#D4AF37] text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all"
                    >
                        Explorer toutes les nouveautés
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default NewArrivalsSection;