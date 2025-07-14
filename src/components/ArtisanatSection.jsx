'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const colors = {
    dark: '#1E1E1E',
    light: '#FFFFFF',
    gold: '#C8A15C',
};

export default function ArtisanatSection() {
    return (
        <section className="relative bg-white py-24 overflow-hidden">
            {/* Arrière-plan décoratif flou */}
            <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-yellow-200 opacity-30 rounded-full blur-3xl z-0 animate-pulse-slow" />
            <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-orange-300 opacity-30 rounded-full blur-2xl z-0 animate-pulse-slower" />

            <div className="container mx-auto px-6 grid lg:grid-cols-2 items-center gap-16 relative z-10">
                {/* Texte avec animation */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
                        Célébrons l&apos;Artisanat <span style={{ color: colors.gold }}>Malien</span>
                    </h2>
                    <p className="text-lg text-gray-700 mb-5">
                        Chez <strong>Mali Mode</strong>, chaque vêtement est un fragment d’histoire. Nos collections sont tissées avec passion, inspirées par le Bogolan, le Bazin et les mains expertes de nos artisans.
                    </p>
                    <p className="text-lg text-gray-700 mb-8">
                        En soutenant nos créations, vous valorisez un patrimoine ancestral et soutenez une mode plus éthique, locale et durable.
                    </p>

                    {/* Call-to-Action avec animation lumineuse */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block group"
                    >
                        <Button
                            asChild
                            className="relative px-8 py-4 rounded-full font-semibold text-lg shadow-xl transition-all duration-300"
                            style={{ backgroundColor: colors.dark, color: colors.light }}
                        >
                            <Link href="/about">
                                <span className="relative z-10">🌟 Découvrir notre histoire</span>
                                <span
                                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
                                    style={{ backgroundColor: colors.gold }}
                                ></span>
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Image animée */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                    className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl"
                >
                    <Image
                        src="/images/new_image4.jpeg"
                        alt="Artisan malien"
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-700 ease-in-out hover:scale-105"
                    />
                    <div className="absolute inset-0 border-4 border-yellow-400 rounded-3xl pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}
