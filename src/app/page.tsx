"use client";

import { motion } from "framer-motion";
import { Play, Calendar, MapPin, Music2, Disc3 } from "lucide-react";

const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.24 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.54-1.02.72-1.56.42z" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.169a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
  </svg>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-[#0077c8] selection:text-white">
      {/* Navbar / Top Bar */}
      <nav className="absolute top-0 w-full p-6 z-50 flex justify-between items-center">
        <div className="font-black text-2xl tracking-tighter uppercase">
          <span className="text-[#0077c8]">Tapa</span> D'Orella
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-4">
            <a href="#onososon" className="text-sm font-bold uppercase tracking-wider hover:text-[#0077c8] transition-colors">O Noso Son</a>
            <a href="#musica" className="text-sm font-bold uppercase tracking-wider hover:text-[#0077c8] transition-colors">Música</a>
            <a href="#contacto" className="text-sm font-bold uppercase tracking-wider hover:text-[#0077c8] transition-colors">Contacto</a>
          </div>
          {/* Social Icons */}
          <div className="flex items-center gap-4 border-l border-white/20 pl-6">
            <a href="https://open.spotify.com/intl-es/artist/5gnwOgI9I8nq2FGA0XAooJ" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077c8] transition-colors hover:scale-110 transform">
              <SpotifyIcon className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@TapaDOrella" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077c8] transition-colors hover:scale-110 transform">
              <YoutubeIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/hero-bg.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 flex-1 pt-8 pb-16 flex flex-col justify-between items-center text-center">
          
          {/* Bloque Superior (Letrero + Título) */}
          <div className="flex flex-col items-center mt-0">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-2 inline-flex items-center gap-2 px-6 py-3 border-4 border-[#0077c8] bg-[#0077c8]/10 backdrop-blur-md"
            >
              <MapPin className="w-6 h-6 text-[#0077c8]" />
              <span className="font-mono text-lg font-black tracking-widest uppercase text-white drop-shadow-md">
                Verín - As Neves
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none"
            >
              Tapa <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077c8] to-blue-300">D'Orella</span>
            </motion.h1>
          </div>

          {/* Bloque Inferior (Párrafo + CTAs) */}
          <div className="flex flex-col items-center pb-10 md:pb-16">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-2xl text-neutral-200 max-w-4xl font-medium mb-8 drop-shadow-xl"
            >
              Unha das propostas musicais máis irreverentes e festivas da actualidade. <br />
              Non vimos só a tocar, vimos a montar a festa.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a href="#musica" className="px-8 py-4 bg-[#0077c8] hover:bg-blue-600 text-white font-black uppercase tracking-wider flex items-center justify-center gap-3 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,119,200,0.5)]">
                <Play className="w-6 h-6 fill-current" />
                Escoitar Agora
              </a>
              <a href="#contacto" className="px-8 py-4 bg-white hover:bg-neutral-200 text-black font-black uppercase tracking-wider flex items-center justify-center gap-3 transition-all hover:scale-105">
                <Calendar className="w-6 h-6" />
                Contratación
              </a>
            </motion.div>
          </div>
        </div>

        {/* Redes Banner Incrustado (Opción B) */}
        <div className="absolute bottom-0 w-full z-30 bg-[#0077c8] py-4 border-t border-white/10 shadow-2xl">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 gap-y-4">
              
              <div className="flex items-center gap-4 md:gap-6">
                <span className="font-black uppercase tracking-widest text-sm text-neutral-900 hidden lg:block">O Grupo:</span>
                <a href="https://www.instagram.com/tapadorella/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-950 transition-colors flex items-center gap-2">
                  <InstagramIcon className="w-6 h-6 md:w-5 md:h-5" /> <span className="font-mono text-xs uppercase font-bold tracking-widest lg:hidden">@tapadorella</span>
                </a>
                <a href="https://www.youtube.com/@TapaDOrella" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-950 transition-colors flex items-center gap-2">
                  <YoutubeIcon className="w-6 h-6 md:w-5 md:h-5" />
                </a>
                <a href="https://open.spotify.com/intl-es/artist/5gnwOgI9I8nq2FGA0XAooJ" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-950 transition-colors flex items-center gap-2">
                  <SpotifyIcon className="w-6 h-6 md:w-5 md:h-5" />
                </a>
              </div>
              
              <div className="hidden lg:block w-px h-6 bg-white/30"></div>
              
              <div className="flex items-center gap-2 md:gap-4">
                <span className="font-black uppercase tracking-widest text-sm text-neutral-900 hidden lg:block">Pappaquino:</span>
                <a href="https://www.instagram.com/pappaquino/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-950 transition-colors flex items-center gap-2">
                  <InstagramIcon className="w-5 h-5 md:w-4 md:h-4" /> <span className="font-mono text-xs uppercase font-bold tracking-widest">@pappaquino</span>
                </a>
              </div>

              <div className="hidden md:block w-px h-6 bg-white/30"></div>

              <div className="flex items-center gap-2 md:gap-4">
                <span className="font-black uppercase tracking-widest text-sm text-neutral-900 hidden lg:block">Willow GHZ:</span>
                <a href="https://www.instagram.com/willow_ghz/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-950 transition-colors flex items-center gap-2">
                  <InstagramIcon className="w-5 h-5 md:w-4 md:h-4" /> <span className="font-mono text-xs uppercase font-bold tracking-widest">@willow_ghz</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section id="onososon" className="py-24 bg-neutral-950 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-white">
                O Noso <span className="text-[#0077c8]">Son</span>
              </h2>
              
              <div className="space-y-6 text-xl text-neutral-400 font-medium leading-relaxed">
                <p>
                  <strong className="text-white">Tapa d'Orella</strong> é o proxecto musical creado por Pappaquino (Joaquín Limia, Verín) e Willow GHZ (Darío Burgos, As Neves). 
                </p>
                <p>
                  Nace cunha premisa moi sinxela e directa: <span className="text-white">dous colegas facendo música para gozar, bailar e pasalo ben.</span>
                </p>
                <p>
                  A nosa proposta é unha mestura explosiva e sen prexuízos. Combinamos a enerxía e os ritmos da música urbana co ska, o reggae e a esencia máis festeira da típica música de orquestra (cumbia, merengue). Unha identidade sonora clara e feita para a festa.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-md mx-auto lg:max-w-none"
            >
              {/* Marco decorativo */}
              <div className="absolute -inset-4 border-2 border-[#0077c8]/30 transform translate-x-4 translate-y-4" />
              <div className="absolute -inset-4 border-2 border-[#0077c8] transform -translate-x-2 -translate-y-2" />
              
              {/* Imagen real */}
              <div className="relative aspect-[4/3] w-full bg-neutral-900 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src="/directo.jpeg" 
                  alt="Tapa D'Orella en directo" 
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Música Section */}
      <section id="musica" className="py-24 bg-neutral-900 border-t border-white/5">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-white">
              Escoita e <span className="text-[#0077c8]">Descobre</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Track 1: Novedad */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-neutral-950 border border-white/10 p-6 flex flex-col hover:border-[#0077c8]/50 transition-colors"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-[#0077c8] text-white text-xs font-bold uppercase tracking-widest px-2 py-1">Último Lanzamento</span>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-2">A mais mellor</h3>
              <p className="text-neutral-400 mb-6 flex-grow">O noso traballo máis recente. Pura enerxía.</p>
              
              {/* Reproductor Spotify */}
              <iframe 
                style={{ borderRadius: "12px" }} 
                src="https://open.spotify.com/embed/track/0KWc3HFixq9g4YWq4He0MR?utm_source=generator&si=40371a8be5094132" 
                width="100%" 
                height="152" 
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                className="w-full"
              ></iframe>
            </motion.div>

            {/* Track 2: Validación */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-neutral-950 border border-white/10 p-6 flex flex-col hover:border-[#0077c8]/50 transition-colors"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-white text-black text-xs font-bold uppercase tracking-widest px-2 py-1 flex items-center gap-1">
                  <Disc3 className="w-3 h-3" /> +194K Escoitas
                </span>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-2">O Menos Malo</h3>
              <p className="text-neutral-400 mb-6 flex-grow">O tema co que comezou todo e o favorito do público.</p>
              
              {/* Reproductor Spotify */}
              <iframe 
                style={{ borderRadius: "12px" }} 
                src="https://open.spotify.com/embed/track/68tZGXcgxWGs4SezCeJElv?utm_source=generator&si=e6c14d1b614b4ec9" 
                width="100%" 
                height="152" 
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                className="w-full"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Xira Section */}
      <section id="xira" className="hidden py-24 bg-neutral-900 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-white">
              Próximos <span className="text-[#0077c8]">Concertos</span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-4">
            {/* Placeholder Rows */}
            {[1, 2, 3].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row items-center justify-between p-6 bg-neutral-950 border border-white/5 hover:border-[#0077c8]/50 transition-colors group"
              >
                <div className="flex flex-col md:flex-row items-center md:gap-8 w-full md:w-auto text-center md:text-left mb-6 md:mb-0">
                  <div className="text-[#0077c8] font-mono text-xl font-bold tracking-widest mb-2 md:mb-0">
                    [ DATA ]
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase text-white group-hover:text-[#0077c8] transition-colors">[ NOME DO EVENTO ]</h3>
                    <p className="text-neutral-500 font-mono text-sm uppercase tracking-wider">[ LUGAR / CIDADE ]</p>
                  </div>
                </div>
                <a href="#contacto" className="px-6 py-3 bg-white/5 hover:bg-white text-white hover:text-black font-bold uppercase tracking-widest text-xs transition-colors border border-white/10 w-full md:w-auto text-center shrink-0">
                  Máis Info
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
             <p className="text-neutral-500 font-mono text-sm uppercase tracking-widest">Máis datas por anunciar proximamente...</p>
          </div>
        </div>
      </section>
      
      {/* Contacto Section */}
      <section id="contacto" className="py-32 bg-neutral-950 relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          
          <div className="text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16 text-white"
            >
              Contratación e <span className="text-[#0077c8]">Contacto</span>
            </motion.h2>

            <motion.a 
              href="mailto:contratacions@tapadeorella.com"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block text-2xl md:text-4xl lg:text-5xl font-black text-white hover:text-[#0077c8] transition-colors border-b-4 border-[#0077c8] pb-2 lowercase"
            >
              contratacions@tapadeorella.com
            </motion.a>
          </div>

          <div className="mt-32 text-center text-neutral-600 text-xs font-mono uppercase tracking-widest border-t border-white/5 pt-8">
            © {new Date().getFullYear()} Tapa D'Orella. Todos os dereitos reservados.
          </div>
        </div>
      </section>
      
    </main>
  );
}
