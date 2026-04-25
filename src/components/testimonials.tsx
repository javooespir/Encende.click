"use client";

import { motion, type Variants } from "framer-motion";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    initials: "MR",
    name: "Marcos R.",
    role: "Barbería, Buenos Aires",
    quote:
      "Antes perdía turnos porque estaba cortando y el teléfono no paraba. Ahora mis clientes reservan solos, a cualquier hora. No tengo que hacer nada.",
    rating: 5,
  },
  {
    initials: "LP",
    name: "Laura P.",
    role: "Restaurante, Córdoba",
    quote:
      "Subí el menú QR y paré de imprimir cartas cada vez que cambia el precio. Mis clientes lo scanean con el celular y listo. Re simple.",
    rating: 5,
  },
  {
    initials: "DF",
    name: "Diego F.",
    role: "Taller mecánico, Rosario",
    quote:
      "En tres días tenía mi página y empecé a aparecer cuando la gente buscaba un taller cerca. No lo podía creer, fue más fácil de lo que pensaba.",
    rating: 5,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Testimonios
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Lo que dicen los negocios
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="flex flex-col gap-6 p-8 rounded-2xl border border-border bg-background hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed text-[15px] flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm">
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
