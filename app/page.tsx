"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Terminal, Code2, Sparkles, Cpu, Layers } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* Orbes de Luz Animados al Fondo */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 font-bold text-xl tracking-tighter"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center text-black">
            <Terminal size={20} />
          </div>
          <span>HALM PORTAFOLIO</span>
        </motion.div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#proyectos" className="hover:text-cyan-400 transition-colors">PROYECTOS</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">SOBRE MÍ</a>
          <a href="#" className="px-5 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all">CONTACTO</a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8">
        {/* HERO SECTION */}
        <section className="py-20 md:py-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-8">
              <Sparkles size={14} /> LISTO PARA CONSTRUIR EL FUTURO
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-tight">
              CÓDIGO QUE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                COBRA VIDA
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
              Desarrollador Fullstack especializado en experiencias digitales de alto rendimiento. 
              Fusionando diseño minimalista con arquitectura de software robusta.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-black font-black rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:bg-cyan-400 transition-colors"
              >
                EXPLORAR TRABAJO
              </motion.button>
              <button className="px-10 py-5 border border-white/10 rounded-2xl hover:bg-white/5 transition-all font-bold text-gray-300">
                VER GITHUB
              </button>
            </div>
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="proyectos" className="py-20">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-3xl font-black tracking-tight">PROYECTOS_SELECCIONADOS</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative bg-[#0a0a0a] border border-white/5 p-1 rounded-[2.5rem] overflow-hidden hover:border-cyan-500/50 transition-colors"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      {i === 1 ? <Cpu size={28} /> : <Layers size={28} />}
                    </div>
                    <div className="flex gap-4">
                      <Github className="text-gray-500 hover:text-white cursor-pointer" size={22} />
                      <ExternalLink className="text-gray-500 hover:text-white cursor-pointer" size={22} />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                    {i === 1 ? "AI Dashboard SaaS" : "Plataforma E-Learning"}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    Desarrollo de una interfaz intuitiva con integración de APIs en tiempo real y optimización de base de datos SQL.
                  </p>
                  
                  <div className="flex gap-3">
                    {["Next.js", "TypeScript", "PostgreSQL"].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold tracking-widest text-gray-500 border border-white/5">
                        {tech.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
