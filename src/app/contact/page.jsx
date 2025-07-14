'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, SquareWhatsapp, CalendarDays, ArrowRight, Factory } from 'lucide-react';
import dynamic from 'next/dynamic';

// Chargement dynamique de la carte pour éviter les problèmes SSR
const MapWithNoSSR = dynamic(() => import('react-leaflet').then((mod) => {
  const { MapContainer, TileLayer, Marker, Popup } = mod;
  return function Map({ center, zoom }) {
    return (
      <MapContainer 
        center={center} 
        zoom={zoom} 
        style={{ height: '100%', width: '100%', borderRadius: '0.75rem' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}>
          <Popup>
            HK STYLE <br /> Showroom principal
          </Popup>
        </Marker>
      </MapContainer>
    );
  };
}), { ssr: false });

// --- Composants de base ---
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

const Input = ({ className, ...props }) => (
  <motion.input
    className={`w-full px-5 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all duration-200 shadow-sm ${className}`}
    whileFocus={{ borderColor: '#D4AF37', boxShadow: '0 0 0 3px rgba(212, 175, 55, 0.2)' }}
    {...props}
  />
);

const Textarea = ({ className, ...props }) => (
  <motion.textarea
    className={`w-full px-5 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all duration-200 shadow-sm min-h-[120px] ${className}`}
    whileFocus={{ borderColor: '#D4AF37', boxShadow: '0 0 0 3px rgba(212, 175, 55, 0.2)' }}
    {...props}
  />
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
    <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden bg-white">
      <motion.div
        className="absolute inset-0 z-0 opacity-10"
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Cpath d='M98 0h2v20h-2V0zm-2 0h2v10h-2V0zM8 0h2v10H8V0zm-2 0h2v20H6V0zM78 20h2v20h-2V20zm-2 0h2v10h-2V20zM8 20h2v10H8V20zm-2 0h2v20H6V20zM78 40h2v20h-2V40zm-2 40h2v10h-2V80zM8 40h2v10H8V40zm-2 40h2v20H6V80zM78 60h2v20h-2V60zm-2 0h2v10h-2V60zM8 60h2v10H8V60zm-2 0h2v20H6V60zM78 80h2v20h-2V80zm-2 0h2v10h-2V80zM8 80h2v10H8V80zm-2 0h2v20H6V80z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '100px 100px',
        }}
      ></motion.div>

      <motion.div
        className="relative z-10 p-4 max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
          variants={textVariants}
          style={{ color: '#D4AF37' }}
        >
          Contactez HK STYLE
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 font-light text-gray-700"
          variants={textVariants}
        >
          Nous serions ravis de discuter avec vous.
        </motion.p>
        <motion.div variants={textVariants}>
          <Button 
            className="bg-[#D4AF37] text-white hover:bg-[#C19E30]"
            style={{ boxShadow: '0 4px 20px rgba(212, 175, 55, 0.5)' }}
          >
            Prendre rendez-vous <CalendarDays className="inline-block ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous intégreriez la logique d'envoi du formulaire (par exemple, à une API)
    console.log("Formulaire soumis !");
    setIsSubmitted(true);
    // Réinitialiser le formulaire après un court délai si nécessaire
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-900"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariants}
        >
          Envoyez-nous un message
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div variants={textVariants}>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
            <Input id="firstName" type="text" placeholder="Votre prénom" required />
          </motion.div>
          <motion.div variants={textVariants}>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
            <Input id="lastName" type="text" placeholder="Votre nom" required />
          </motion.div>
          <motion.div variants={textVariants}>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <Input id="email" type="email" placeholder="votre.email@exemple.com" required />
          </motion.div>
          <motion.div variants={textVariants}>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Téléphone (optionnel)</label>
            <Input id="phone" type="tel" placeholder="+223 XX XX XX XX" />
          </motion.div>
          <motion.div className="md:col-span-2" variants={textVariants}>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Votre message</label>
            <Textarea id="message" placeholder="Écrivez votre message ici..." required />
          </motion.div>
          <motion.div className="md:col-span-2 text-center" variants={textVariants}>
            <Button type="submit" className="bg-[#D4AF37] text-white hover:bg-[#C19E30]">
              Envoyer le message <Send className="inline-block ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.form>

        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-8 p-4 bg-green-100 text-green-700 rounded-lg text-center font-medium"
          >
            Message envoyé avec succès ! Nous vous répondrons bientôt.
          </motion.div>
        )}
      </div>
    </section>
  );
};

const ContactInfoSection = () => {
  const infoPoints = [
    { icon: <MapPin className="w-8 h-8 text-[#D4AF37]" />, title: "Adresse du Showroom", content: "123 Rue de la Mode, Quartier Chic, Bamako, Mali" },
    { icon: <Phone className="w-8 h-8 text-[#D4AF37]" />, title: "Téléphone", content: <a href="tel:+22377777777" className="hover:underline">+223 77 77 77 77</a> },
    { icon: <Mail className="w-8 h-8 text-[#D4AF37]" />, title: "Email", content: <a href="mailto:contact@hkstyle.com" className="hover:underline">contact@hkstyle.com</a> },
    { icon: <Clock className="w-8 h-8 text-[#D4AF37]" />, title: "Horaires d'ouverture", content: "Lun - Ven: 9h - 18h | Sam: 10h - 14h" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariants}
          style={{ color: '#D4AF37' }}
        >
          Nos Coordonnées
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {infoPoints.map((info, index) => (
            <Card key={index} className="text-center p-8">
              <div className="mb-4">{info.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{info.title}</h3>
              <p className="text-gray-600">{info.content}</p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const SocialMediaSection = () => {
  const socialLinks = [
    { icon: <Facebook className="w-8 h-8" />, name: "Facebook", url: "#" },
    { icon: <Instagram className="w-8 h-8" />, name: "Instagram", url: "#" },
    { icon: <Phone className="w-8 h-8" />, name: "WhatsApp", url: "https://wa.me/22377777777" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariants}
          style={{ color: '#D4AF37' }}
        >
          Suivez-nous sur les réseaux sociaux
        </motion.h2>
        <motion.div
          className="flex justify-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#D4AF37] transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              variants={textVariants}
              aria-label={`Lien vers notre page ${link.name}`}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const MapSection = () => {
  const position = [12.65, -8]; // Coordonnées approximatives de Bamako

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariants}
          style={{ color: '#D4AF37' }}
        >
          Où nous trouver
        </motion.h2>
        <motion.div
          className="relative w-full h-96 rounded-xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <MapWithNoSSR center={position} zoom={13} />
          <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-md z-[1000]">
            <a 
              href="https://www.google.com/maps?q=12.65,-8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm flex items-center text-[#D4AF37]"
            >
              <MapPin className="w-4 h-4 mr-1" /> Ouvrir dans Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FinalCTASection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-[#D4AF37] to-[#C19E30] text-white text-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zm0-30V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '60px 60px',
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
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          variants={textVariants}
        >
          Besoin d'un conseil couture personnalisé ?
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl mb-8 font-light"
          variants={textVariants}
        >
          Nos stylistes sont à votre écoute pour vous guider dans vos choix.
        </motion.p>
        <motion.div variants={textVariants}>
          <Button className="bg-white text-[#D4AF37] hover:bg-gray-100">
            Parler à un styliste <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default function ContactPage() {
  return (
    <div className="font-inter antialiased">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      
      <HeroSection />
      <ContactForm />
      <ContactInfoSection />
      <SocialMediaSection />
      <MapSection />
      <FinalCTASection />
    </div>
  );
}