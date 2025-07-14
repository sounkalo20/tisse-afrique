"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import newsletterAnimation from "@/lottie/newsletter.json";
import { useState } from "react";
import { Check, Send } from "lucide-react";

const NewsletterSection = () => {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Votre palette de couleurs
    const colors = {
        primary: "#D4AF37", // Or
        secondary: "#FFFFFF" // Blanc
    };

    const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubscribed(true);
        setTimeout(() => setSubscribed(false), 3000);
    };

    return (
        <section className="relative py-28 overflow-hidden bg-white">
            {/* Animation Lottie en fond doré */}
            <motion.div 
                className="absolute inset-0 z-0 opacity-10"
                animate={{ opacity: [0.08, 0.12, 0.08] }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            >
                <Lottie
                    animationData={newsletterAnimation}
                    loop={true}
                    className="w-full h-full object-cover"
                    style={{ filter: "sepia(1) hue-rotate(10deg) brightness(0.9)" }}
                />
            </motion.div>

            {/* Effets de lumière dorés */}
            <motion.div 
                className="absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl"
                style={{ backgroundColor: colors.primary }}
                animate={{
                    x: [-100, 0, -100],
                    y: [-100, -50, -100],
                    opacity: [0.03, 0.08, 0.03]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                }}
            />

            {/* Contenu principal */}
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    onMouseMove={handleMouseMove}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-xl"
                    style={{
                        background: useMotionTemplate`radial-gradient(600px at ${mouseX}px ${mouseY}px, ${colors.primary}15, transparent 80%)`,
                        border: `1px solid ${colors.primary}30`,
                        backgroundColor: colors.secondary
                    }}
                >
                    <div className="relative p-10 md:p-16">
                        {/* Effet de particules dorées */}
                        <div className="absolute inset-0 overflow-hidden opacity-10">
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute rounded-full"
                                    style={{
                                        backgroundColor: colors.primary,
                                        width: Math.random() * 5 + 1 + 'px',
                                        height: Math.random() * 5 + 1 + 'px',
                                        top: Math.random() * 100 + '%',
                                        left: Math.random() * 100 + '%',
                                    }}
                                    animate={{
                                        y: [0, (Math.random() - 0.5) * 50],
                                        x: [0, (Math.random() - 0.5) * 50],
                                        opacity: [0.1, 0.4, 0.1],
                                    }}
                                    transition={{
                                        duration: Math.random() * 10 + 5,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                    }}
                                />
                            ))}
                        </div>

                        <div className="relative z-10 text-center space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                                style={{ 
                                    backgroundColor: `${colors.primary}15`,
                                    color: colors.primary
                                }}
                            >
                                <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: colors.primary }}></span>
                                <span className="text-sm font-medium">Newsletter Exclusive</span>
                            </motion.div>

                            <motion.h2
                                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                style={{ color: colors.primary }}
                            >
                                L'élégance à votre portée
                            </motion.h2>

                            <motion.p
                                className="text-xl max-w-2xl mx-auto leading-relaxed"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                style={{ color: "#666666" }}
                            >
                                Recevez nos dernières collections, conseils styling et offres privilégiées directement dans votre boîte mail.
                            </motion.p>

                            <motion.form
                                onSubmit={handleSubmit}
                                className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <div className="relative flex-grow">
                                    <Input
                                        type="email"
                                        placeholder="Votre adresse email"
                                        className="w-full py-6 px-6 rounded-xl text-lg shadow-sm focus-visible:ring-2"
                                        style={{
                                            backgroundColor: `${colors.secondary}`,
                                            color: "#333333",
                                            border: `1px solid ${colors.primary}50`,
                                            placeholder: "#999999",
                                            focusVisibleRingColor: colors.primary
                                        }}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <motion.div 
                                        className="absolute bottom-0 left-0 h-0.5"
                                        style={{ backgroundColor: colors.primary }}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '100%' }}
                                        transition={{ duration: 1.5, delay: 0.6 }}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className={`py-6 px-8 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300 overflow-hidden ${
                                        subscribed ? 'bg-emerald-500 hover:bg-emerald-600' : ''
                                    }`}
                                    size="lg"
                                    style={{
                                        backgroundColor: subscribed ? '' : colors.primary,
                                        color: subscribed ? colors.secondary : '#333333'
                                    }}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    <span className="relative z-10 flex items-center">
                                        {subscribed ? (
                                            <>
                                                <Check className="mr-2" />
                                                Merci !
                                            </>
                                        ) : (
                                            <>
                                                <Send className="mr-2" />
                                                S'abonner
                                            </>
                                        )}
                                    </span>
                                    
                                </Button>
                            </motion.form>

                            <motion.p
                                className="text-sm mt-4"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                style={{ color: "#888888" }}
                            >
                                <span style={{ opacity: 0.7 }}>Respect de votre vie privée.</span> Désabonnement en un clic.
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Confirmation flottante */}
            <motion.div
                className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 rounded-lg shadow-xl flex items-center gap-3 px-6 py-4"
                initial={{ y: 100, opacity: 0 }}
                animate={subscribed ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ type: "spring", damping: 15 }}
                style={{ 
                    backgroundColor: colors.secondary,
                    border: `1px solid ${colors.primary}30`,
                    boxShadow: `0 4px 20px ${colors.primary}20`
                }}
            >
                <div className="p-2 rounded-full" style={{ backgroundColor: `${colors.primary}20` }}>
                    <Check style={{ color: colors.primary }} />
                </div>
                <div>
                    <p className="font-medium" style={{ color: colors.primary }}>Abonnement confirmé !</p>
                    <p className="text-sm" style={{ color: "#666666" }}>Merci pour votre confiance.</p>
                </div>
            </motion.div>
        </section>
    );
};

export default NewsletterSection;