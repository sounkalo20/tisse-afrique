'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Crown, Palette, Hand, Gem, Mail, CalendarDays, ArrowRight } from 'lucide-react';

// --- Composants de base avec votre palette ---
const Button = ({ children, className, ...props }) => (
    <motion.button
        className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
        whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(212, 175, 55, 0.3)' }}
        whileTap={{ scale: 0.95 }}
        {...props}
    >
        {children}
    </motion.button>
);

const Card = ({ children, className, ...props }) => (
    <motion.div
        className={`bg-white p-6 rounded-xl shadow-lg border border-[#D4AF37]/20 ${className}`}
        whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(212, 175, 55, 0.1)' }}
        transition={{ duration: 0.3 }}
        {...props}
    >
        {children}
    </motion.div>
);

// --- Animations ---
const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

// --- Sections ---
const HeroSection = () => {
    return (
        <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden bg-white">
            {/* Fallback image si la vidéo ne charge pas */}
            <div className="absolute inset-0 bg-[#D4AF37]/10 z-0 flex items-center justify-center">
                <img
                    src="/images/hero-fallback.jpg"
                    alt="HK STYLE - Mode Malienne"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-10"
                aria-label="Vidéo de fond d'une couturière ou d'un mannequin africain"
                onError={(e) => {
                    e.target.style.display = 'none';
                    document.querySelector('.hero-fallback').style.display = 'block';
                }}
            >
                <source src="/videos/video_landing1.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas les vidéos HTML5.
            </video>

            <div className="absolute inset-0 bg-[#D4AF37]/30 z-20"></div> {/* Overlay doré */}

            <motion.div
                className="relative z-30 text-white p-4 max-w-4xl mx-auto"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
                    variants={textVariants}
                    style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
                >
                    HK STYLE — L'élégance malienne entre tradition et modernité
                </motion.h1>
                <motion.p
                    className="text-xl md:text-2xl mb-8 font-light"
                    variants={textVariants}
                    style={{ textShadow: '0 1px 5px rgba(0,0,0,0.2)' }}
                >
                    L'art de la couture africaine, sublimé par une touche contemporaine.
                </motion.p>
                <motion.div variants={textVariants}>
                    <Button
                        className="bg-[#D4AF37] text-white hover:bg-[#D4AF37]/90"
                        style={{ boxShadow: '0 4px 15px rgba(212, 175, 55, 0.5)' }}
                    >
                        Découvrir notre univers <ArrowRight className="inline-block ml-2 w-5 h-5" />
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
};

const OurStory = () => {
    const storyPoints = [
        { year: "2010", title: "Les Débuts", description: "Fondation de HK STYLE avec une vision : fusionner l'héritage textile malien avec le design contemporain." },
        { year: "2015", title: "Reconnaissance Locale", description: "Expansion de l'atelier et premières collaborations avec des artisans locaux." },
        { year: "2020", title: "Rayonnement International", description: "Présentation de nos collections sur des scènes internationales." },
        { year: "Aujourd'hui", title: "Innovation Continue", description: "Exploration de nouvelles techniques tout en restant fidèles à nos racines." },
    ];

    const keywords = ["Passion", "Savoir-faire", "Héritage", "Excellence"];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={textVariants}
                    style={{ color: '#D4AF37' }}
                >
                    Notre Histoire
                </motion.h2>

                <div className="relative mb-16">
                    {/* Timeline Line dorée */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#D4AF37] rounded-full hidden md:block"></div>

                    <div className="relative z-10">
                        {storyPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                className={`flex items-center w-full my-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.4 }}
                                variants={textVariants}
                            >
                                <div className="w-full md:w-1/2 p-4">
                                    <div className={`text-right md:text-left ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <h3 className="text-2xl font-semibold mb-2" style={{ color: '#D4AF37' }}>{point.year}</h3>
                                        <p className="text-xl font-medium mb-2 text-gray-800">{point.title}</p>
                                        <p className="text-gray-600">{point.description}</p>
                                    </div>
                                </div>
                                <div className="hidden md:block w-0 md:w-1/2 relative">
                                    <div
                                        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 border-white shadow-md"
                                        style={{ backgroundColor: '#D4AF37' }}
                                    ></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    className="flex flex-wrap justify-center gap-4 mt-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={staggerContainer}
                >
                    {keywords.map((keyword, index) => (
                        <motion.span
                            key={index}
                            className="text-lg md:text-xl font-semibold px-6 py-3 rounded-full shadow-md"
                            variants={textVariants}
                            style={{
                                backgroundColor: '#D4AF37',
                                color: 'white'
                            }}
                        >
                            {keyword}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const OurValues = () => {
    const values = [
        { icon: <Palette className="w-10 h-10 mb-4" style={{ color: '#D4AF37' }} />, title: "Créativité", description: "Fusion de l'art ancestral et des tendances modernes." },
        { icon: <Hand className="w-10 h-10 mb-4" style={{ color: '#D4AF37' }} />, title: "Excellence Artisanale", description: "Travail méticuleux pour une qualité inégalée." },
        { icon: <Crown className="w-10 h-10 mb-4" style={{ color: '#D4AF37' }} />, title: "Fierté Culturelle", description: "Célébration de la richesse de l'héritage africain." },
        { icon: <Gem className="w-10 h-10 mb-4" style={{ color: '#D4AF37' }} />, title: "Élégance Moderne", description: "Sophistication intemporelle adaptée au style contemporain." },
    ];

    return (
        <section className="py-20 bg-[#F9F9F9]">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={textVariants}
                    style={{ color: '#D4AF37' }}
                >
                    Nos Valeurs
                </motion.h2>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                >
                    {values.map((value, index) => (
                        <Card key={index} className="text-center">
                            {value.icon}
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">{value.title}</h3>
                            <p className="text-gray-600">{value.description}</p>
                        </Card>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const OurCraftsmanship = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={textVariants}
                    style={{ color: '#D4AF37' }}
                >
                    Notre Savoir-Faire
                </motion.h2>
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        className="md:w-1/2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={textVariants}
                    >
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Chez HK STYLE, chaque création est une œuvre d'art façonnée avec attention aux détails et respect pour les techniques artisanales ancestrales.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            Nos tailleurs et couturières, véritables maîtres de leur art, mettent leur passion au service de chaque coupe et broderie.
                        </p>
                        <Button
                            className="hover:bg-[#D4AF37]/90"
                            style={{
                                backgroundColor: '#D4AF37',
                                color: 'white',
                                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.5)'
                            }}
                        >
                            Voir nos créations <ArrowRight className="inline-block ml-2 w-5 h-5" />
                        </Button>
                    </motion.div>
                    <motion.div
                        className="md:w-1/2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={imageVariants}
                    >
                        <img
                            src="/images/new_image3.jpeg"
                            alt="Tailleur au travail chez HK STYLE"
                            className="rounded-xl shadow-xl w-[400px] h-[300px] object-cover border-4 border-[#D4AF37]/30 mx-auto"
                        />

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const CallToActionSection = () => {
    return (
        <section className="relative py-24 text-center overflow-hidden" style={{ backgroundColor: '#D4AF37' }}>
            <motion.div
                className="absolute inset-0 z-0 opacity-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zm0-30V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            ></motion.div>

            <motion.div
                className="relative z-10 max-w-3xl mx-auto px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={staggerContainer}
            >
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white"
                    variants={textVariants}
                >
                    Envie d'un modèle unique ?
                </motion.h2>
                <motion.p
                    className="text-xl md:text-2xl mb-8 font-light text-white/90"
                    variants={textVariants}
                >
                    Laissez nos artisans créer la pièce de vos rêves, conçue sur mesure pour vous.
                </motion.p>
                <motion.div variants={textVariants}>
                    <Button
                        className="bg-white hover:bg-gray-100"
                        style={{ color: '#D4AF37' }}
                    >
                        Prendre rendez-vous <CalendarDays className="inline-block ml-2 w-5 h-5" />
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
};

const NewsletterSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
                <motion.h2
                    className="text-3xl font-bold mb-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={textVariants}
                    style={{ color: '#D4AF37' }}
                >
                    Rejoignez la communauté HK STYLE
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-600 mb-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={textVariants}
                >
                    Recevez nos dernières collections, offres exclusives et actualités.
                </motion.p>
                <motion.form
                    className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={staggerContainer}
                >
                    <motion.input
                        type="email"
                        placeholder="Votre adresse email"
                        className="flex-grow px-5 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all duration-200 shadow-sm w-full md:w-auto"
                        aria-label="Votre adresse email"
                        variants={textVariants}
                    />
                    <motion.div variants={textVariants}>
                        <Button
                            type="submit"
                            className="hover:bg-[#D4AF37]/90 w-full md:w-auto"
                            style={{
                                backgroundColor: '#D4AF37',
                                color: 'white',
                                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.5)'
                            }}
                        >
                            S'inscrire <Mail className="inline-block ml-2 w-5 h-5" />
                        </Button>
                    </motion.div>
                </motion.form>
            </div>
        </section>
    );
};

export default function AboutPage() {
    return (
        <div className="font-sans antialiased bg-white">
            <HeroSection />
            <OurStory />
            <OurValues />
            <OurCraftsmanship />
            <CallToActionSection />
            <NewsletterSection />
        </div>
    );
}