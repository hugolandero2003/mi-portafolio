"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, X, ArrowLeft, Star, Plus } from "lucide-react";
import Link from "next/link";

export default function EcommerceProject() {
  const [cartCount, setCartCount] = useState(0);
  const [showCart, setShowCart] = useState(false);

  const products = [
    { id: 1, name: "Neon Headphones", price: "$299", img: "🎧" },
    { id: 2, name: "Cyber Watch", price: "$450", img: "⌚" },
    { id: 3, name: "Quantum Speaker", price: "$120", img: "🔊" },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* HEADER E-COM */}
      <nav className="flex justify-between items-center p-8 border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors">
          <ArrowLeft size={20} /> Volver
        </Link>
        <div className="text-2xl font-black tracking-tighter">LUXE.STORE</div>
        <button 
          onClick={() => setShowCart(true)}
          className="relative p-2 bg-black text-white rounded-full transition-transform active:scale-90"
        >
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
              {cartCount}
            </span>
          )}
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-8 py-16">
        <header className="mb-16">
          <h1 className="text-5xl font-black mb-4">EDICIÓN LIMITADA</h1>
          <p className="text-gray-500">Diseño futurista. Rendimiento inigualable.</p>
        </header>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product) => (
            <motion.div key={product.id} className="group">
              <div className="aspect-square bg-gray-50 rounded-[2rem] flex items-center justify-center text-8xl group-hover:bg-gray-100 transition-colors relative overflow-hidden">
                {product.img}
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setCartCount(cartCount + 1)}
                  className="absolute bottom-6 right-6 bg-black text-white p-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Plus size={24} />
                </motion.button>
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <div className="flex gap-1 text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                </div>
                <p className="text-xl font-medium text-gray-400">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* MINI CART DRAWER (SIMULADO) */}
      <AnimatePresence>
        {showCart && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowCart(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]" 
            />
            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              className="fixed right-0 top-0 h-full w-full md:w-[400px] bg-white z-[70] shadow-2xl p-10 flex flex-col"
            >
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl font-black">TU CARRITO</h2>
                <button onClick={() => setShowCart(false)}><X size={24} /></button>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
                <ShoppingBag size={48} className="mb-4 opacity-20" />
                <p>Tienes {cartCount} artículos seleccionados</p>
              </div>
              <button className="w-full bg-black text-white py-5 rounded-2xl font-bold tracking-widest hover:bg-gray-900 transition-colors">
                CHECKOUT — TOTAL: ${(cartCount * 250).toLocaleString()}
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}