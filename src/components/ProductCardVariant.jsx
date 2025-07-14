import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardTitle } from '@/components/ui/card';



// Design 3: Minimalist Card with Outline Accent
export const ProductCardMinimal = ({ product }) => (
  <motion.div
    initial={{ scale: 0.97 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.3 }}
    whileHover={{ borderColor: '#FFD700', scale: 1.02 }}
    className="bg-white rounded-lg overflow-hidden group flex flex-col h-full border border-gray-200 shadow-none hover:shadow-lg"
  >
    <Link href={`/product/${product.id}`}> 
      <div className="relative w-full h-64">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="group-hover:opacity-90 transition-opacity duration-400"
        />
        {product.badge && <span className="absolute top-2 right-2 text-xs bg-yellow-300 text-gray-800 px-2 py-1 rounded-full">{product.badge}</span>}
      </div>
    </Link>
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-base font-medium mb-1 line-clamp-2 text-gray-800">{product.name}</h3>
      <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">{product.category}</p>
      <div className="flex items-center mb-2 text-yellow-400">
        {[...Array(product.rating)].map((_, i) => <Star key={i} fill="currentColor" strokeWidth={0} size={14} />)}
        {[...Array(5 - product.rating)].map((_, i) => <Star key={i} stroke="currentColor" fill="none" size={14} />)}
        <span className="text-gray-400 text-xs ml-2">{product.reviews} avis</span>
      </div>
      <div className="mt-auto flex justify-between items-center">
        <span className="text-lg font-semibold text-gray-900">{product.price}</span>
        <Button variant="outline" className="text-sm px-3 py-1 rounded">Ajout</Button>
      </div>
    </div>
  </motion.div>
);


export const ProductCardMinimal2 = ({ product }) => (
  <motion.div
    initial={{ scale: 0.97 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.3 }}
    whileHover={{ borderColor: '#ffae00', scale: 1.02 }}
    className="bg-white px-3 py-4 rounded-sm overflow-hidden group flex flex-col h-full border border-gray-200 shadow-none hover:shadow-lg"
  >
    <Link href={`/product/${product.id}`}> 
      <div className="relative w-full h-64">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="group-hover:opacity-90 transition-opacity duration-400"
        />
        {product.badge && <span className="absolute top-2 right-2 text-xs bg-orange-400 text-white px-2 py-1 rounded-sm">{product.badge}</span>}
      </div>
    </Link>
    <div className=" py-2 flex flex-col items-start flex-grow">
        <div className='mb-4'>
            <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">{product.category}</p>
            <h3 className="text-md font-medium mb-1 line-clamp-2 text-black">{product.name}</h3>
        </div>
        
      <div className="mt-auto w-full flex  flex-col justify-between items-start">
        <span className="text-lg font-semibold text-orange-400">{product.price}</span>
            <Button variant="outline" className="text-sm w-full px-3 py-1 rounded">Commandez <ArrowRight/></Button>
      </div>
    </div>
  </motion.div>
);

export const ProductCardSimple = ({ product }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl border p-4 w-[280px] flex flex-col gap-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Badge */}
      {product.isNew && (
        <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded w-fit">
          NEW
        </span>
      )}

      {/* Image */}
      <div className="w-full h-40 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full object-contain"
        />
      </div>

      {/* Infos */}
      <div className="flex flex-col gap-1">
        <p className="text-sm text-gray-500">{product.brand}</p>
        <p className="text-base font-medium text-gray-800">{product.name}</p>
        <p className="text-lg font-bold text-black">£{product.price}</p>
      </div>

      {/* Boutons */}
      <div className="flex items-center justify-between mt-2">
        <Button className="flex items-center gap-2">
          ADD TO CART
          <ShoppingCart className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
};

// 4. Flip Card
export const ProductCardVariant4 = ({ product }) => (
  <motion.div initial={{ rotateY: 0 }} whileHover={{ rotateY: 180 }} className="w-64 h-80 perspective">
    <div className="relative w-full h-full transition-transform duration-700 preserve-3d">
      <div className="absolute backface-hidden w-full h-full">
        <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" />
      </div>
      <div className="absolute rotateY-180 backface-hidden bg-white p-4 flex flex-col justify-between">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.category}</p>
        <span className="text-lg font-bold">{product.price}</span>
      </div>
    </div>
  </motion.div>
);

// 5. Circular Image
export const ProductCardVariant5 = ({ product }) => (
  <Card className="text-center rounded-full p-6 shadow-md hover:shadow-lg transition">
    <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden">
      <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" />
    </div>
    <CardTitle className="mt-4 text-lg">{product.name}</CardTitle>
    <CardFooter className="justify-center">
      <span className="text-xl font-bold">{product.price}</span>
    </CardFooter>
  </Card>
);

// 9. Badge Bottom
export const ProductCardVariant9 = ({ product }) => (
  <Card className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition">
    <Link href={`/product/${product.id}`}> 
      <Image src={product.image} alt={product.name} width={400} height={200} objectFit="cover" />
    </Link>
    <div className="absolute bottom-0 w-full bg-white/90 p-4 backdrop-blur-sm">
      <h3 className="font-semibold">{product.name}</h3>
      <span className="text-sm text-gray-600">{product.price}</span>
    </div>
  </Card>
);

// 10. Sliding Info
export const ProductCardVariant10 = ({ product }) => (
  <motion.div className="overflow-hidden rounded-xl shadow" initial="rest" whileHover="hover" animate="rest">
    <Link href={`/product/${product.id}`}> 
      <motion.div variants={{ rest:{ scale:1 }, hover:{ scale:1.05 } }} transition={{ duration:0.5 }} className="relative h-64 w-full">
        <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" />
        <motion.div variants={{ rest:{ y:'100%' }, hover:{ y:0 } }} transition={{ duration:0.4 }} className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
          <h3 className="text-white font-bold">{product.name}</h3>
          <span className="text-sm text-gray-300">{product.price}</span>
        </motion.div>
      </motion.div>
    </Link>
  </motion.div>
);

export const ProductCardModern = ({ product }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    whileHover={{
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      y: -5
    }}
    className="bg-white rounded-xl overflow-hidden group flex flex-col h-full border border-gray-100 shadow-sm transition-all duration-300 ease-in-out"
  >
    <Link href={`/product/${product.id}`} className="block relative w-full h-72 overflow-hidden">
      <Image
        src={product.image}
        alt={product.name}
        layout="fill"
        objectFit="cover"
        className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
      />
      {product.badge && (
        <span className="absolute top-3 left-3 text-xs font-semibold bg-blue-500 text-white px-3 py-1 rounded-full shadow-md">
          {product.badge}
        </span>
      )}
    </Link>
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="text-lg font-semibold mb-1 line-clamp-2 text-gray-800 leading-tight">
        {product.name}
      </h3>
      <p className="text-sm text-gray-500 mb-3 font-light">{product.category}</p>
      <div className="flex items-center mb-3 text-yellow-500">
        {[...Array(product.rating)].map((_, i) => (
          <Star key={i} fill="currentColor" strokeWidth={0} size={16} />
        ))}
        {[...Array(5 - product.rating)].map((_, i) => (
          <Star key={i} stroke="currentColor" fill="none" size={16} />
        ))}
        <span className="text-gray-400 text-xs ml-2">({product.reviews} avis)</span>
      </div>
      <div className="mt-auto flex justify-between items-center pt-3 border-t border-gray-100">
        <span className="text-xl font-bold text-gray-900">{product.price}</span>
        <Button
          variant="default"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md transition-colors duration-200"
        >
          Ajouter au panier
        </Button>
      </div>
    </div>
  </motion.div>
);
