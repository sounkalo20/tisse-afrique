"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Heart, Eye } from "lucide-react";

const ProductCard = ({ product, showCTA = true, animationDelay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: animationDelay, duration: 0.5 }}
            className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
        >
            {/* Badge */}
            {product.badge && (
                <motion.span
                    className="absolute top-4 left-4 z-10 px-3 py-1 text-xs font-bold rounded-full bg-white text-gold-600 shadow-sm"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: animationDelay + 0.2 }}
                >
                    {product.badge}
                </motion.span>
            )}

            {/* Image container */}
            <div className="relative aspect-square overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Quick actions overlay */}
                <motion.div
                    className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-white rounded-full shadow-md text-gray-800 hover:text-gold-600 transition-colors"
                        aria-label="Voir les détails"
                    >
                        <Eye className="h-5 w-5" />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-white rounded-full shadow-md text-gray-800 hover:text-red-500 transition-colors"
                        aria-label="Ajouter aux favoris"
                    >
                        <Heart className="h-5 w-5" />
                    </motion.button>
                </motion.div>
            </div>

            {/* Product info */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
                    {product.name}
                </h3>
                <p className="text-gold-600 font-bold text-lg mb-3">
                    {product.price}
                </p>

                {/* CTA Button */}
                {showCTA && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: animationDelay + 0.3 }}
                    >
                        <Link href={`/products/${product.id}`} legacyBehavior>
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center justify-center w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#D4AF37] transition-all"
                            >
                                <ShoppingBag className="mr-2 h-4 w-4" />
                                Ajouter au panier
                            </motion.a>
                        </Link>
                    </motion.div>
                )}
            </div>

            {/* Hover effect */}
            <motion.div
                className="absolute inset-0 border-2 border-transparent group-hover:border-gold-300/50 rounded-xl pointer-events-none transition-all duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
            />
        </motion.div>
    );
};

export default ProductCard;