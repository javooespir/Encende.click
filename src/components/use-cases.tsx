"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scissors,
  Utensils,
  Wrench,
  ShoppingBag,
  Dumbbell,
  Briefcase,
  Globe,
  Sparkles,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useWhatsAppNumber, buildWaUrl } from "@/hooks/use-whatsapp";

const WA_TEXT = "Hola! Me interesa saber más sobre tener mi página web.";

interface Case {
  icon: LucideIcon;
  type: string;
  short: string;
  description: string;
  features: string[];
  gradientFrom: string;
  iconBg: string;
  iconColor: string;
  checkColor: string;
}

const cases: Case[] = [
  {
    icon: Sparkles,
    type: "Uñas / Pestañas",
    short: "Agenda que trabaja sola",
    description:
      "Tus clientas reservan su turno cuando quieren. Vos llegás y sabés exactamente qué tratamiento tiene cada una, sin llamar a nadie.",
    features: [
      "Reserva de turnos online 24/7",
      "Descripción del tratamiento por turno",
      "Recordatorio por WhatsApp",
      "Galería de trabajos y resultados",
    ],
    gradientFrom: "from-fuchsia-50 to-purple-50",
    iconBg: "bg-fuchsia-100",
    iconColor: "text-fuchsia-600",
    checkColor: "text-fuchsia-500",
  },
  {
    icon: Scissors,
    type: "Peluquería",
    short: "Turnos sin teléfono",
    description:
      "Tus clientes reservan solos, a cualquier hora. El teléfono deja de interrumpirte mientras trabajás.",
    features: [
      "Reserva de turnos online 24/7",
      "Galería de cortes y trabajos",
      "Lista de servicios y precios",
      "Botón directo a WhatsApp",
    ],
    gradientFrom: "from-rose-50 to-pink-50",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    checkColor: "text-rose-500",
  },
  {
    icon: Utensils,
    type: "Restaurante",
    short: "Menú QR digital",
    description:
      "Actualizás precios hoy y en 5 minutos está online. Sin imprimir nada, sin costos extra.",
    features: [
      "Menú digital con código QR",
      "Actualización instantánea de precios",
      "Fotos de platos y ambiente",
      "Reservas y pedidos por WhatsApp",
    ],
    gradientFrom: "from-orange-50 to-amber-50",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    checkColor: "text-orange-500",
  },
  {
    icon: ShoppingBag,
    type: "Tienda / Local",
    short: "Tu catálogo online",
    description:
      "Mostrás todo lo que tenés. Los clientes ven precios y te escriben directo por WhatsApp para pedir.",
    features: [
      "Catálogo de productos con fotos",
      "Precios siempre actualizados",
      "Pedidos por WhatsApp en un click",
      "Información de envíos y pagos",
    ],
    gradientFrom: "from-violet-50 to-purple-50",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    checkColor: "text-violet-500",
  },
  {
    icon: Dumbbell,
    type: "Gimnasio / Profe",
    short: "Todo en un lugar",
    description:
      "Horarios, clases y precios sin que tengas que contestar 50 veces la misma pregunta por Instagram.",
    features: [
      "Horarios de clases actualizados",
      "Planes y precios de membresía",
      "Foto y bio del profe",
      "WhatsApp para inscripciones",
    ],
    gradientFrom: "from-green-50 to-emerald-50",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    checkColor: "text-green-500",
  },
  {
    icon: Briefcase,
    type: "Profesional",
    short: "Credibilidad online",
    description:
      "Una presencia que transmite seriedad antes de la primera reunión. Te diferenciás solo con existir bien online.",
    features: [
      "Perfil profesional completo",
      "Áreas de especialización",
      "Formulario de consulta",
      "Credenciales y trayectoria",
    ],
    gradientFrom: "from-indigo-50 to-blue-50",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    checkColor: "text-indigo-500",
  },
  {
    icon: Wrench,
    type: "Taller / Mecánica",
    short: "Aparecé en Google",
    description:
      "Cuando alguien busca 'taller mecánico cerca' — tu negocio aparece. Con dirección, horario y contacto.",
    features: [
      "Posicionamiento en Google Maps",
      "Horarios y días de atención",
      "Lista de servicios con precios",
      "Formulario de consulta o WhatsApp",
    ],
    gradientFrom: "from-slate-50 to-zinc-50",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    checkColor: "text-slate-500",
  },
  {
    icon: Globe,
    type: "Cualquier negocio",
    short: "Empezá por acá",
    description:
      "Si hoy anotás pedidos a mano, mandás precios por mensaje o atendés sin parar — hay una forma más fácil.",
    features: [
      "Presencia profesional online",
      "Contacto directo con tus clientes",
      "Sin tecnicismos ni complicaciones",
      "Listo en días, no en meses",
    ],
    gradientFrom: "from-teal-50 to-cyan-50",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    checkColor: "text-teal-500",
  },
];

export default function UseCases() {
  const [active, setActive] = useState(0);
  const current = cases[active];
  const waNumber = useWhatsAppNumber();
  const waUrl = buildWaUrl(waNumber, WA_TEXT);

  return (
    <section id="posibilidades" className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-amber-700 font-semibold text-sm uppercase tracking-wider mb-3">
            Posibilidades
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            ¿Para qué te serviría una página web?
          </h2>
          <p className="text-muted-foreground text-lg">
            Depende de tu negocio. Elegí el tuyo y te mostramos qué se puede
            hacer.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Tab list */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 shrink-0 lg:w-52">
            {cases.map((c, i) => {
              const Icon = c.icon;
              return (
                <button
                  key={c.type}
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 shrink-0 whitespace-nowrap lg:whitespace-normal",
                    active === i
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="text-sm font-medium">{c.type}</span>
                </button>
              );
            })}
          </div>

          {/* Content panel */}
          <div className="flex-1 min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className={cn(
                  "h-full rounded-2xl p-8 bg-gradient-to-br border border-border",
                  current.gradientFrom
                )}
              >
                <div className="flex flex-col sm:flex-row gap-8">
                  <div className="flex-1">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center mb-5",
                        current.iconBg
                      )}
                    >
                      <current.icon className={cn("w-6 h-6", current.iconColor)} />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      {current.type}
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                      {current.short}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-8 text-base max-w-sm">
                      {current.description}
                    </p>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ size: "sm" }),
                        "bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
                      )}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Hablamos por WhatsApp
                    </a>
                  </div>

                  <div className="sm:w-64 shrink-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                      Tu página incluye
                    </p>
                    <ul className="space-y-3">
                      {current.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <CheckCircle2
                            className={cn(
                              "w-5 h-5 shrink-0 mt-0.5",
                              current.checkColor
                            )}
                          />
                          <span className="text-sm text-foreground leading-relaxed">
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
