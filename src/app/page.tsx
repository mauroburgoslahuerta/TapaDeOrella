import Image from "next/image";
import { Play, Calendar, MapPin, Disc3 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SocialBanner } from "@/components/SocialBanner";
import { YoutubeIcon } from "@/components/SocialIcons";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-brand-blue selection:text-white">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] md:h-screen w-full flex flex-col overflow-hidden bg-neutral-950">
        {/* Desktop Background */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src="/hero-bg.jpeg"
            alt="Tapa D'Orella en directo"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
        </div>

        {/* Mobile Background */}
        <div className="absolute top-0 left-0 w-full z-0 block md:hidden">
          <Image
            src="/hero-bg.jpeg"
            alt="Tapa D'Orella en directo"
            width={1200}
            height={675}
            className="w-full h-auto object-contain opacity-90 mt-16"
            priority
          />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-neutral-950 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 flex-1 pt-[38vh] sm:pt-[45vh] md:pt-8 pb-16 md:pb-36 flex flex-col justify-between items-center text-center">
          {/* Top Block (Badge + Title) */}
          <div className="flex flex-col items-center mt-0">
            <AnimatedSection
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-4 inline-flex items-center gap-2 px-6 py-3 border-4 border-brand-blue bg-brand-blue/10 backdrop-blur-md"
            >
              <MapPin className="w-5 h-5 md:w-6 md:h-6 text-brand-blue" />
              <span className="font-mono text-sm md:text-lg font-black tracking-widest uppercase text-white drop-shadow-md">
                Verín - As Neves
              </span>
            </AnimatedSection>

            <AnimatedSection
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display uppercase tracking-tighter leading-none">
                Tapa{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-300">
                  D&apos;Orella
                </span>
              </h1>
            </AnimatedSection>
          </div>

          {/* Bottom Block (Copy + CTAs) */}
          <div className="flex flex-col items-center">
            <AnimatedSection
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg md:text-2xl text-neutral-200 max-w-4xl font-medium mb-8 drop-shadow-xl">
                <span className="inline-block">
                  Sexan benvidos ao espectáculo festivo-musical mais grande do
                  país!
                </span>
                <br />
                <span className="inline-block mt-2 md:mt-1">
                  Non vimos só a tocar, vimos a montar a festa.
                </span>
              </p>
            </AnimatedSection>

            <AnimatedSection
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="#musica"
                className="w-full sm:w-auto px-8 py-4 bg-brand-blue hover:bg-blue-600 text-white font-black uppercase tracking-wider flex items-center justify-center gap-3 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,119,200,0.5)]"
              >
                <Play className="w-6 h-6 fill-current" />
                Escoitar Agora
              </a>
              <a
                href="#contacto"
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-neutral-200 text-black font-black uppercase tracking-wider flex items-center justify-center gap-3 transition-all hover:scale-105"
              >
                <Calendar className="w-6 h-6" />
                Contratación
              </a>
            </AnimatedSection>
          </div>
        </div>

        {/* Social Banner — anchored to bottom of hero (desktop only) */}
        <SocialBanner className="absolute bottom-0 left-0 z-20 hidden md:block border-t border-white/10 shadow-2xl" />
      </section>

      {/* ── Bio ──────────────────────────────────────────────── */}
      <section
        id="onososon"
        className="py-24 bg-neutral-950 relative overflow-hidden"
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter mb-8 text-white">
                O Noso <span className="text-brand-blue">Son</span>
              </h2>

              <div className="space-y-6 text-xl text-neutral-400 font-medium leading-relaxed">
                <p>
                  <strong className="text-white">Tapa d&apos;Orella</strong> é o
                  proxecto musical creado por Pappaquino (Joaquín Limia, Verín) e
                  Willow GHZ (Darío Burgos, As Neves).
                </p>
                <p>
                  Nace cunha premisa moi sinxela e directa:{" "}
                  <span className="text-white">
                    dous colegas facendo música para gozar, bailar e pasalo ben.
                  </span>
                </p>
                <p>
                  A nosa proposta é unha mestura explosiva e sen prexuízos.
                  Combinamos a enerxía e os ritmos da música urbana co ska, o
                  reggae e a esencia máis festeira da típica música de orquestra
                  (cumbia, merengue). Unha identidade sonora clara e feita para a
                  festa.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-md mx-auto lg:max-w-none"
            >
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-brand-blue/30 transform translate-x-4 translate-y-4" />
              <div className="absolute -inset-4 border-2 border-brand-blue transform -translate-x-2 -translate-y-2" />

              <div className="relative aspect-[4/3] w-full bg-neutral-900 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                  src="/directo.jpeg"
                  alt="Tapa D'Orella en directo"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Música ───────────────────────────────────────────── */}
      <section
        id="musica"
        className="py-24 bg-neutral-900 border-t border-white/5"
      >
        <div className="container mx-auto px-6">
          <AnimatedSection
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter mb-4 text-white">
              Escoita e <span className="text-brand-blue">Descobre</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Track 1: Latest Release */}
            <AnimatedSection
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-neutral-950 border border-white/10 p-6 flex flex-col hover:border-brand-blue/50 transition-colors"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-brand-blue text-white text-xs font-bold uppercase tracking-widest px-2 py-1">
                  Último Lanzamento
                </span>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-2">
                A mais mellor
              </h3>
              <p className="text-neutral-400 mb-6 flex-grow">
                O noso traballo máis recente.
              </p>

              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/0KWc3HFixq9g4YWq4He0MR?utm_source=generator&si=40371a8be5094132"
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="w-full border-0"
              />
            </AnimatedSection>

            {/* Track 2: Fan Favourite */}
            <AnimatedSection
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-neutral-950 border border-white/10 p-6 flex flex-col hover:border-brand-blue/50 transition-colors"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-white text-black text-xs font-bold uppercase tracking-widest px-2 py-1 flex items-center gap-1">
                  <Disc3 className="w-3 h-3" /> +194K Escoitas
                </span>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-2">
                O Menos Malo
              </h3>
              <p className="text-neutral-400 mb-6 flex-grow">
                O tema co que comezou todo e o favorito do público.
              </p>

              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/68tZGXcgxWGs4SezCeJElv?utm_source=generator&si=e6c14d1b614b4ec9"
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="w-full border-0"
              />
            </AnimatedSection>
          </div>

          {/* YouTube Video */}
          <AnimatedSection
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-4xl mx-auto"
          >
            <div className="bg-neutral-950 border border-white/10 p-6 hover:border-brand-blue/50 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-2 py-1 flex items-center gap-1">
                  <YoutubeIcon className="w-3 h-3" /> Videoclip
                </span>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-4">
                O Menos Malo
              </h3>
              <div className="relative w-full aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/EsMT5lpQUW8"
                  className="absolute inset-0 w-full h-full border-0 rounded-sm"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  title="Tapa d'Orella — O Menos Malo (Videoclip)"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Xira (Concert Dates Image) ───────────────────────── */}
      {/* 
      <section
        id="xira"
        className="py-24 bg-neutral-950 border-t border-white/5"
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <AnimatedSection
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter mb-4 text-white">
              <span className="text-brand-blue">Concertos</span>
            </h2>
          </AnimatedSection>

          // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          //  Para engadir a imaxe de concertos:
          //  1. Garda a imaxe como  public/xira.png
          //  2. Descomenta todo este bloque <section id="xira">
          // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          
          <AnimatedSection
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mt-12"
          >
            <div className="relative w-full max-w-2xl">
              <Image
                src="/xira.png"
                alt="Datas de concertos de Tapa D'Orella"
                width={720}
                height={1280}
                className="w-full h-auto"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
      */}

      {/* ── Social Banner (Mobile Only - Bottom) ────────────── */}
      <SocialBanner className="md:hidden border-t border-white/10 shadow-2xl relative z-20" />

      {/* ── Contacto ─────────────────────────────────────────── */}
      <section
        id="contacto"
        className="py-32 bg-neutral-950 relative border-t border-white/5"
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center">
            <AnimatedSection
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter mb-16 text-white">
                Contratación e{" "}
                <span className="text-brand-blue">Contacto</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a
                href="mailto:contratacions@tapadeorella.com"
                className="inline-block text-2xl md:text-4xl lg:text-5xl font-black text-white hover:text-brand-blue transition-colors border-b-4 border-brand-blue pb-2 lowercase"
              >
                contratacions@tapadeorella.com
              </a>
            </AnimatedSection>
          </div>

          <div className="mt-32 text-center text-neutral-600 text-xs font-mono uppercase tracking-widest border-t border-white/5 pt-8">
            © {new Date().getFullYear()} Tapa D&apos;Orella. Todos os dereitos
            reservados.
          </div>
        </div>
      </section>
    </main>
  );
}
