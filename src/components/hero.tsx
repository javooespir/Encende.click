"use client";

import { Fragment } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, MessageCircle, Scissors } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const WHATSAPP_URL =
  "https://wa.me/541131462214?text=Hola%21+Me+interesa+saber+m%C3%A1s+sobre+tener+mi+p%C3%A1gina+web.";

const fade: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

const stats = [
  { value: "47+", label: "negocios online" },
  { value: "12", label: "rubros distintos" },
  { value: "5 días", label: "entrega promedio" },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 min-h-[90vh] flex items-center overflow-hidden">
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `radial-gradient(circle, oklch(0.268 0.073 241 / 0.12) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/40 to-background" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-sm font-semibold mb-8 text-accent"
            variants={fade}
            initial="hidden"
            animate="show"
            custom={0}
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Páginas para negocios reales
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6"
            variants={fade}
            initial="hidden"
            animate="show"
            custom={1}
          >
            Tu negocio existe.
            <br />
            <span className="text-accent">Que te encuentren.</span>
          </motion.h1>

          <motion.p
            className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg"
            variants={fade}
            initial="hidden"
            animate="show"
            custom={2}
          >
            Para la peluquería que pierde turnos porque el teléfono no para.
            Para el restaurante que imprime la carta cada vez que cambia el menú.
            Para el taller que no aparece en Google.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-10"
            variants={fade}
            initial="hidden"
            animate="show"
            custom={3}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-accent hover:bg-accent/90 text-accent-foreground gap-2 shadow-lg shadow-accent/20"
              )}
            >
              <MessageCircle className="w-4 h-4" />
              Hablar por WhatsApp
            </a>
            <a
              href="#posibilidades"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-primary/30 text-primary hover:bg-primary/5 gap-2"
              )}
            >
              Ver posibilidades
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Social proof stats */}
          <motion.div
            className="flex items-center gap-6 sm:gap-8"
            variants={fade}
            initial="hidden"
            animate="show"
            custom={4}
          >
            {stats.map((stat, i) => (
              <Fragment key={stat.label}>
                {i > 0 && <div className="w-px h-10 bg-border" />}
                <div>
                  <p className="text-xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </Fragment>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hidden lg:flex justify-end"
          variants={fade}
          initial="hidden"
          animate="show"
          custom={5}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative w-full max-w-[480px]">
      <div className="bg-white rounded-2xl shadow-2xl border border-border overflow-hidden">
        {/* Browser chrome */}
        <div className="bg-muted px-4 py-3 flex items-center gap-2 border-b border-border">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-300" />
            <div className="w-3 h-3 rounded-full bg-yellow-300" />
            <div className="w-3 h-3 rounded-full bg-green-300" />
          </div>
          <div className="flex-1 mx-3 bg-background rounded-md h-6 flex items-center px-3">
            <span className="text-xs text-muted-foreground">barbariaelcapo.com</span>
          </div>
        </div>

        {/* Barbershop website mockup */}
        <div className="bg-[#111] p-6">
          {/* Nav */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-amber-400 rounded flex items-center justify-center">
                <Scissors className="w-3 h-3 text-black" />
              </div>
              <span className="text-white text-xs font-bold tracking-wide">BARBER EL CAPO</span>
            </div>
            <div className="bg-amber-400 rounded px-2 py-1 cursor-pointer">
              <span className="text-black text-xs font-semibold">Reservar</span>
            </div>
          </div>

          {/* Hero */}
          <div className="mb-6">
            <p className="text-amber-400 text-[10px] uppercase tracking-widest mb-2">Barbería · Villa Urquiza</p>
            <h3 className="text-white text-lg font-bold leading-tight mb-2">
              Tu corte.<br />Tu estilo.
            </h3>
            <p className="text-white/50 text-[11px] leading-relaxed mb-4">
              Reservá tu turno online, a cualquier hora.
            </p>
            <div className="flex gap-2">
              <div className="bg-amber-400 rounded-lg px-3 py-1.5">
                <span className="text-black text-[11px] font-semibold">Turno online</span>
              </div>
              <div className="border border-white/20 rounded-lg px-3 py-1.5">
                <span className="text-white/70 text-[11px]">Servicios</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Corte", price: "$3.500" },
              { label: "Barba", price: "$2.000" },
              { label: "Combo", price: "$5.000" },
            ].map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-lg p-2.5">
                <p className="text-white text-[11px] font-medium mb-1">{s.label}</p>
                <p className="text-amber-400 text-[10px] font-bold">{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        className="absolute -bottom-4 -left-6 bg-accent rounded-xl shadow-lg px-4 py-3 flex items-center gap-3"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white text-sm font-bold">
          ✓
        </div>
        <div>
          <p className="text-white text-xs font-semibold">Listo en días</p>
          <p className="text-white/80 text-xs">Sin tecnicismos</p>
        </div>
      </motion.div>

      <div className="absolute -z-10 top-8 right-8 w-full h-full bg-primary/10 rounded-2xl" />
    </div>
  );
}
