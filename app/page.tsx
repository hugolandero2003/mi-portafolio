"use client";

import { motion } from "framer-motion";
import { 
  Github, ExternalLink, Terminal, Code2, Sparkles, 
  Cpu, Layers, Mail, Linkedin, ChevronRight 
} from "lucide-react";
import Link from 'next/link';

export default function Home() {
  
  const NavLinks = [
    { name: "INICIO", href: "#inicio" },
    { name: "PROYECTOS", href: "#proyectos" },
    { name: "HABILIDADES", href: "#habilidades" },
  ];

  const proyectos = [
    { title: "AI Dashboard", desc: "SaaS con IA integrada", tech: ["Next.js", "OpenAI"] },
    { title: "E-Commerce", desc: "Tienda online escalable", tech: ["TypeScript", "Stripe"] }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* Fondo Animado */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      {/* NAVBAR FIJO */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 bg-black/20">
        <div className="flex justify-between items-center p-6 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center text-black">
              <Terminal size={20} />
            </div>
            <span>PORTAFOLIO HALM</span>
          </motion.div>
          
          <div className="hidden md:flex gap-8 text-xs font-bold tracking-widest text-gray-400">
            {NavLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-cyan-400 transition-colors uppercase">
                {link.name}
              </a>
            ))}
            <a href="#contacto" className="px-5 py-2 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20 hover:bg-cyan-500/20 transition-all">
              CONTACTO
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8">
        
        {/* SECCIÓN 1: INICIO (HERO) */}
        <section id="inicio" className="min-h-screen flex flex-col items-center justify-center text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black mb-8 tracking-[.2em]">
              <Sparkles size={14} /> DISPONIBLE PARA NUEVOS RETOS
            </div>
            <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.9]">
              CÓDIGO QUE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                COBRA VIDA
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-12">
              Arquitecto de software fullstack. Transformando ideas en experiencias digitales impecables.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#proyectos" className="px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-cyan-400 transition-colors flex items-center gap-2">
                VER PROYECTOS <ChevronRight size={18} />
              </a>
            </div>
          </motion.div>
        </section>

        {/* SECCIÓN 2: PROYECTOS */}
        <section id="proyectos" className="py-24">
          <div className="flex items-center gap-6 mb-16 text-xs font-black tracking-[0.3em] text-gray-500">
            <div className="h-[1px] w-20 bg-cyan-500" />
            <h2>TRABAJOS_SELECCIONADOS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {proyectos.map((p, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="group bg-white/5 border border-white/5 p-8 rounded-[2rem] hover:border-cyan-500/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex justify-between mb-8">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-cyan-400">
                      <Layers size={24} />
                    </div>
                    <div className="flex gap-4 text-gray-500">
                      <Github size={20} className="hover:text-white cursor-pointer" />
                      <ExternalLink size={20} className="hover:text-white cursor-pointer" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{p.title}</h3>
                  <p className="text-gray-400 mb-8">{p.desc}</p>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex gap-2">
                    {p.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-black rounded-lg border border-white/10 text-[10px] text-gray-500">{t}</span>
                    ))}
                  </div>

                  {/* ESTA ES LA PARTE CLAVE DEL ENLACE */}
                 {p.title === "AI Dashboard" ? (
                    <Link href="/dashboard">
                      <button className="w-full py-3 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20 hover:bg-cyan-500 hover:text-black transition-all font-bold text-xs tracking-widest">
                        VER SAAS IA
                      </button>
                    </Link>
                  ) : p.title === "E-Commerce" ? (
                    <Link href="/ecommerce">
                      <button className="w-full py-3 bg-purple-500/10 text-purple-400 rounded-xl border border-purple-500/20 hover:bg-purple-500 hover:text-white transition-all font-bold text-xs tracking-widest">
                        VER TIENDA LUXE
                      </button>
                    </Link>
                  ) : null}

                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECCIÓN 3: HABILIDADES */}
        <section id="habilidades" className="py-24 px-4">
        <div className="max-w-6xl mx-auto bg-white/5 border border-white/5 rounded-[3rem] p-8 md:p-12 text-center">
          <h2 className="text-4xl font-black mb-16 italic tracking-tighter text-white uppercase">
            TECH_STACK
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {[
              { name: "React", level: 90 },
              { name: "Node.js", level: 85 },
              { name: "TypeScript", level: 80 },
              { name: "Next.js", level: 88 },
              { name: "PostgreSQL", level: 75 },
              { name: "Docker", level: 70 },
              { name: "AWS", level: 65 },
              { name: "Framer Motion", level: 95 },
            ].map((skill) => (
              <div key={skill.name} className="space-y-4 text-left group">
                <div className="flex justify-between items-end px-1">
                  <span className="font-bold text-gray-200 text-lg group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-cyan-500 font-mono text-sm font-bold">
                    {skill.level}%
                  </span>
                </div>

          {/* Contenedor de la barra */}
          <div className="relative h-3 w-full bg-black/40 rounded-full border border-white/5 overflow-hidden">
            {/* Relleno animado */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-cyan-600 to-blue-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.4)]"
            />
          </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* SECCIÓN 4: CONTACTO */}
        <section id="contacto" className="py-24 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">¿TIENES UNA IDEA? <br /> <span className="text-gray-500 hover:text-cyan-400 transition-colors cursor-pointer italic">HABLEMOS.</span></h2>
          <div className="flex justify-center gap-8 mt-12">
            <a href="mailto:muskhugo65@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Mail size={20} /> EMAIL
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} /> LINKEDIN
            </a>
          </div>
        </section>

      </main>

      <footer className="p-10 text-center text-gray-600 text-[10px] tracking-widest border-t border-white/5">
        © 2026 DESARROLLADO POR HALM
      </footer>
    </div>
  );
}