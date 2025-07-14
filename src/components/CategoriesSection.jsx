"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featuredCategories = [
    {
        name: "Prêt-à-Porter",
        image: "/images/new_image3.jpeg",
        link: "/shop/pret-a-porter",
        description: "Des silhouettes modernes inspirées de notre héritage"
    },
    {
        name: "Accessoires",
        image: "/images/new_image4.jpeg",
        link: "/shop/accessoires",
        description: "Des pièces uniques pour compléter votre style"
    },
    {
        name: "Tissus Premium",
        image: "/images/new_image5.jpeg",
        link: "/shop/tissus",
        description: "Des matières nobles sélectionnées avec soin"
    },
    {
        name: "Collections Limitées",
        image: "/images/new_image6.jpeg",
        link: "/shop/collections",
        description: "Des éditions exclusives en quantité limitée"
    }
];

const CategoriesSection = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
                <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-gold-500 mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-primary-500 mix-blend-multiply filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Heading with animated underline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-4">
                        Nos Collections
                    </h2>
                    <div className="flex justify-center">
                        <motion.div
                            className="h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent w-32"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        />
                    </div>
                </motion.div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100,
                                damping: 10
                            }}
                            className="relative group"
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                                {/* Image with parallax effect */}
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative h-80 overflow-hidden"
                                >
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        priority={index < 2}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                                </motion.div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                                    <motion.h3
                                        className="text-2xl font-bold text-white mb-2"
                                        initial={{ y: 20 }}
                                        whileInView={{ y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                    >
                                        {category.name}
                                    </motion.h3>

                                    <motion.p
                                        className="text-white/90 mb-4 text-sm"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                    >
                                        {category.description}
                                    </motion.p>

                                    {/* Animated CTA */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + index * 0.1 }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <Link
                                            href={category.link}
                                            className="inline-flex items-center text-[#D4AF37] font-medium group"
                                        >
                                            Découvrir
                                            <motion.span
                                                className="ml-2 inline-block"
                                                animate={{
                                                    x: [0, 5, 0],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            >
                                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                            </motion.span>
                                        </Link>
                                    </motion.div>
                                </div>

                                {/* Hover effect */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-500/30 transition-all duration-500 rounded-2xl pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <Link
                        href="/collections"
                        className="inline-flex items-center px-8 py-4 bg-[#D4AF37] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                        Voir toutes nos collections
                        <motion.span
                            className="ml-3 inline-block"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </motion.span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default CategoriesSection;