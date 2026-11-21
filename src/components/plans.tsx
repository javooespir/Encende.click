"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  MessageCircle,
  Globe,
  Wrench,
  BellRing,
  type LucideIcon,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useWhatsAppNumber, buildWaUrl } from "@/hooks/use-whatsapp";

// Precios en dólares. Un solo lugar para tocarlos.
const PRECIOS = {
  Presencia: "150",
  Herramienta: "200",
  Conectado: "250",
} as const;

interface MiniStat {
  value: string;
  label: string;
}

interface Plan {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  tier: "basic" | "mid" | "featured";
  name: string;
  tagline: string;
  priceFrom: string;
  description: string;
  miniStats: MiniStat[];
  features: string[];
  tags: string[];
  cta: string;
  highlight: boolean;
  badge: string | null;
}

const plans: Plan[] = [
  {
    icon: Globe,
    iconBg: "bg-primary/8",
    iconColor: "text-primary",
    tier: "basic",
    name: "Presencia",
    tagline: "Tu negocio en internet",
    priceFrom: PRECIOS.Presencia,
    description:
      "Una página profesional que muestra quién sos, qué hacés y cómo contactarte. Para el negocio que todavía no existe online.",
    miniStats: [
      { value: "5 días", label: "Online" },
      { value: "100%", label: "Personalizado" },
    ],
    features: [
      "Diseño personalizado para tu rubro",
      "Secciones de servicios y precios",
      "Botón de WhatsApp y mail",
      "1 año de dominio gratis incluido",
      "1 mes de soporte: todo arreglo sin costo",
      "Optimizado para celular",
    ],
    tags: ["Web a medida", "WhatsApp", "Mail", "Celular"],
    cta: "Pedir presupuesto",
    highlight: false,
    badge: null,
  },
  {
    icon: Wrench,
    iconBg: "bg-accent/10",
    iconColor: "text-amber-700",
    tier: "mid",
    name: "Herramienta",
    tagline: "Automatizá un proceso manual",
    priceFrom: PRECIOS.Herramienta,
    description:
      "Una función digital que reemplaza algo que hoy hacés a mano. Turnos online, menú QR o catálogo — sin necesidad de una web completa.",
    miniStats: [
      { value: "24/7", label: "Disponible" },
      { value: "0 h", label: "Llamadas" },
    ],
    features: [
      "Turnos online / menú QR / catálogo",
      "Tus clientes hacen todo solos",
      "Sin papel, sin llamadas perdidas",
      "Actualizaciones en tiempo real",
      "Panel de administración de reservas/turnos",
      "1 año de dominio gratis incluido",
      "1 mes de soporte: todo arreglo sin costo",
    ],
    tags: ["Turnos online", "Menú QR", "Catálogo", "Calendar"],
    cta: "Pedir presupuesto",
    highlight: false,
    badge: null,
  },
  {
    icon: BellRing,
    iconBg: "bg-white/15",
    iconColor: "text-accent",
    tier: "featured",
    name: "Conectado",
    tagline: "Todo en uno, sin que tengas que hacer nada",
    priceFrom: PRECIOS.Conectado,
    description:
      "La web completa más la herramienta que necesitás, con avisos automáticos cada vez que entra un cliente. Vos seguís trabajando — nosotros te avisamos.",
    miniStats: [
      { value: "0 h", label: "Gestión manual" },
      { value: "Auto", label: "Notificaciones" },
      { value: "24/7", label: "Disponible" },
    ],
    features: [
      "Página web completa + herramienta incluida",
      "Integración completa con WhatsApp",
      "Mensajes preescritos y personalizados por reserva",
      "Ping a Gmail por cada reserva nueva",
      "Panel de administración de reservas/turnos",
      "1 año de dominio gratis incluido",
      "1 mes de soporte: todo arreglo sin costo",
    ],
    tags: ["WA integrado", "Gmail ping", "Calendar", "24/7"],
    cta: "Pedir presupuesto",
    highlight: true,
    badge: "Más elegido",
  },
];

function cardClass(plan: Plan) {
  if (plan.highlight)
    return "bg-primary border-primary shadow-2xl shadow-primary/30 md:-mt-6 md:mb-6";
  if (plan.tier === "mid")
    return "bg-white border-accent/25 shadow-md shadow-accent/8 hover:shadow-lg";
  return "bg-white border-border shadow-sm hover:border-primary/20 hover:shadow-md";
}

export default function Plans() {
  const waNumber = useWhatsAppNumber();
  return (
    <section id="planes" className="py-24 px-4 sm:px-6 bg-background relative overflow-hidden">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, oklch(0.268 0.073 241 / 0.07) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-amber-700 font-semibold text-sm uppercase tracking-wider mb-3">
            Planes
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            ¿Qué nivel necesita tu negocio?
          </h2>
          <p className="text-muted-foreground text-lg">
            Empezás con lo que necesitás hoy. Podés sumar más cuando quieras.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className={cn(
                "relative flex flex-col rounded-2xl border p-8 transition-all duration-300",
                cardClass(plan)
              )}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div
                className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center mb-5",
                  plan.iconBg
                )}
              >
                <plan.icon className={cn("w-5 h-5", plan.iconColor)} />
              </div>

              <div className="mb-6">
                <h3
                  className={cn(
                    "text-xl font-bold mb-1",
                    plan.highlight ? "text-white" : "text-primary"
                  )}
                >
                  {plan.name}
                </h3>
                <p
                  className={cn(
                    "text-sm font-medium mb-4",
                    plan.highlight ? "text-accent" : "text-amber-700"
                  )}
                >
                  {plan.tagline}
                </p>

                {/* Precio */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span
                    className={cn(
                      "text-xs font-medium uppercase tracking-wide",
                      plan.highlight ? "text-white/50" : "text-muted-foreground"
                    )}
                  >
                    Desde
                  </span>
                  <span
                    className={cn(
                      "text-3xl font-bold leading-none",
                      plan.highlight ? "text-white" : "text-primary"
                    )}
                  >
                    USD {plan.priceFrom}
                  </span>
                </div>
                <p
                  className={cn(
                    "text-xs mb-4",
                    plan.highlight ? "text-white/45" : "text-muted-foreground/80"
                  )}
                >
                  Pago único. Sin mensualidad. Un mes de soporte incluido.
                </p>

                <p
                  className={cn(
                    "text-sm leading-relaxed min-h-[72px]",
                    plan.highlight ? "text-white/70" : "text-muted-foreground"
                  )}
                >
                  {plan.description}
                </p>
              </div>

              {/* Mini stats */}
              <div className={cn(
                "grid gap-2 mb-5",
                plan.miniStats.length === 3 ? "grid-cols-3" : "grid-cols-2"
              )}>
                {plan.miniStats.map((s) => (
                  <div
                    key={s.label}
                    className={cn(
                      "rounded-xl p-2.5 text-center",
                      plan.highlight
                        ? "bg-white/8 border border-white/10"
                        : "bg-primary/5 border border-primary/10"
                    )}
                  >
                    <p className={cn(
                      "text-base font-bold leading-none mb-1",
                      plan.highlight ? "text-accent" : "text-primary"
                    )}>
                      {s.value}
                    </p>
                    <p className={cn(
                      "text-[10px] uppercase tracking-wide leading-tight",
                      plan.highlight ? "text-white/40" : "text-muted-foreground/70"
                    )}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <ul className="flex flex-col gap-3 mb-5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2
                      className={cn(
                        "w-4 h-4 mt-0.5 shrink-0",
                        plan.highlight ? "text-accent" : "text-amber-700"
                      )}
                    />
                    <span
                      className={cn(
                        "text-sm",
                        plan.highlight ? "text-white/80" : "text-foreground"
                      )}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {plan.tags.map((tag) => (
                  <span
                    key={tag}
                    className={cn(
                      "text-[11px] font-medium rounded-full px-2.5 py-0.5",
                      plan.highlight
                        ? "bg-white/8 border border-white/12 text-white/55"
                        : "bg-primary/6 border border-primary/12 text-primary/60"
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={buildWaUrl(waNumber, `Hola! Me interesa el plan ${plan.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full justify-center gap-2",
                  plan.highlight
                    ? "bg-accent hover:bg-accent/90 text-white"
                    : "bg-primary hover:bg-primary/90 text-primary-foreground"
                )}
              >
                <MessageCircle className="w-4 h-4" />
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
