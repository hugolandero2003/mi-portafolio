"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, MessageSquare, BarChart3, Settings, 
  Plus, Search, BrainCircuit, Trash2, ArrowLeft 
} from "lucide-react";
import Link from "next/link";

export default function AIDashboard() {
  const [inputs, setInputs] = useState([
    { id: 1, text: "Me encanta el nuevo diseño", sentiment: "Positivo", score: 98 },
    { id: 2, text: "El sistema está un poco lento hoy", sentiment: "Neutral", score: 45 },
  ]);
  const [newText, setNewText] = useState("");

  const addAnalysis = () => {
    if (!newText) return;
    const newItem = {
      id: Date.now(),
      text: newText,
      sentiment: Math.random() > 0.5 ? "Positivo" : "Negativo",
      score: Math.floor(Math.random() * 100)
    };
    setInputs([newItem, ...inputs]);
    setNewText("");
  };

  const deleteItem = (id: number) => setInputs(inputs.filter(item => item.id !== id));

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans flex">
      
      {/* SIDEBAR */}
      <aside className="w-64 border-r border-slate-800 p-6 hidden md:flex flex-col gap-8 bg-[#030712]">
        <div className="flex items-center gap-3 text-cyan-400 font-bold text-xl">
          <BrainCircuit size={28} /> AI.ANALYTICS
        </div>
        <nav className="flex flex-col gap-2">
          <div className="flex items-center gap-3 p-3 bg-cyan-500/10 text-cyan-400 rounded-lg cursor-pointer">
            <LayoutDashboard size={20} /> Dashboard
          </div>
          <div className="flex items-center gap-3 p-3 text-slate-500 hover:bg-white/5 rounded-lg cursor-pointer transition-all">
            <MessageSquare size={20} /> Análisis
          </div>
          <div className="flex items-center gap-3 p-3 text-slate-500 hover:bg-white/5 rounded-lg cursor-pointer transition-all">
            <BarChart3 size={20} /> Reportes
          </div>
        </nav>
        <Link href="/" className="mt-auto flex items-center gap-2 text-slate-500 hover:text-white transition-colors">
          <ArrowLeft size={18} /> Volver al Portafolio
        </Link>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-4 md:p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold">Dashboard de IA</h1>
            <p className="text-slate-500">Analiza el sentimiento de tus usuarios en tiempo real.</p>
          </div>
          <div className="flex gap-3">
            <div className="bg-slate-900 border border-slate-800 rounded-full px-4 py-2 flex items-center gap-2">
              <Search size={18} className="text-slate-500" />
              <input type="text" placeholder="Buscar..." className="bg-transparent outline-none text-sm" />
            </div>
          </div>
        </header>

        {/* STATS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { label: "Análisis Totales", val: "1,284", color: "text-blue-400" },
            { label: "Promedio Sentimiento", val: "82%", color: "text-cyan-400" },
            { label: "IA Status", val: "Online", color: "text-emerald-400" }
          ].map((stat, i) => (
            <div key={i} className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm">
              <p className="text-slate-500 text-sm mb-1">{stat.label}</p>
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.val}</p>
            </div>
          ))}
        </div>

        {/* CRUD SECTION */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-md">
          <div className="flex gap-4 mb-8">
            <input 
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              placeholder="Ingresa un comentario para analizar..."
              className="flex-1 bg-black/40 border border-slate-700 rounded-xl px-4 outline-none focus:border-cyan-500 transition-all"
            />
            <button 
              onClick={addAnalysis}
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-all active:scale-95"
            >
              <Plus size={20} /> ANALIZAR
            </button>
          </div>

          <div className="space-y-4">
            <AnimatePresence>
              {inputs.map((item) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${item.sentiment === "Positivo" ? "bg-emerald-500" : "bg-red-500"}`} />
                    <p className="font-medium">{item.text}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-mono text-slate-500">SCORE: {item.score}</span>
                    <button onClick={() => deleteItem(item.id)} className="text-slate-600 hover:text-red-400 transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}