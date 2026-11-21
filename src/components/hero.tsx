"use client";

import { Fragment, useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  CalendarCheck,
  Wallet,
  ShoppingBag,
  Package,
  Dumbbell,
  type LucideIcon,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useWhatsAppNumber, buildWaUrl } from "@/hooks/use-whatsapp";

import shotAmapola from "../../public/images/casos/amapola.png";
import shotDbs from "../../public/images/casos/dbs.png";
import shotChispa from "../../public/images/casos/chispa.png";
import shotEleve from "../../public/images/casos/eleve.png";
import shotTerra from "../../public/images/casos/terra.png";
import pillLocal from "../../public/images/pills/local.png";
import pillBurger from "../../public/images/pills/burger.png";
import pillGym from "../../public/images/pills/gym.png";

const WA_TEXT = "Hola! Me interesa saber más sobre tener mi página web.";

const EASE = [0.16, 1, 0.3, 1] as const;
const ROTATE_MS = 3200;

/* Cada frase del titular va sincronizada con un cliente real: la captura de
   su sitio pasa al frente y aparece el aviso de lo que la página hizo sola. */
interface Escena {
  frase: string;
  cliente: string;
  dominio: string;
  shot: StaticImageData;
  dot: string;
  aviso: { icon: LucideIcon; titulo: string; detalle: string };
}

const escenas: Escena[] = [
  {
    frase: "toma turnos",
    cliente: "Amapola Studio",
    dominio: "amapolastudio.online",
    shot: shotAmapola,
    dot: "bg-fuchsia-400",
    aviso: { icon: CalendarCheck, titulo: "Turno nuevo", detalle: "Lifting de pestañas · Jue 10:00" },
  },
  {
    frase: "cobra la seña",
    cliente: "DBS Esculpidas",
    dominio: "dbsesculpidas.com",
    shot: shotDbs,
    dot: "bg-rose-400",
    aviso: { icon: Wallet, titulo: "Seña recibida", detalle: "Uñas esculpidas · Mié 14:00" },
  },
  {
    frase: "recibe pedidos",
    cliente: "Chispa La Burga",
    dominio: "chispalaburga.com",
    shot: shotChispa,
    dot: "bg-amber-400",
    aviso: { icon: ShoppingBag, titulo: "Pedido nuevo", detalle: "2× Cheesepa · Delivery" },
  },
  {
    frase: "vende sola",
    cliente: "Elevé",
    dominio: "eleveimportados.com.ar",
    shot: shotEleve,
    dot: "bg-slate-300",
    aviso: { icon: Package, titulo: "Venta nueva", detalle: "2 perfumes · Envío a domicilio" },
  },
  {
    frase: "suma socios",
    cliente: "Terra Fitness",
    dominio: "terrafitness.com.ar",
    shot: shotTerra,
    dot: "bg-lime-400",
    aviso: { icon: Dumbbell, titulo: "Consulta nueva", detalle: "Plan mensual · Clases grupales" },
  },
];

const stats = [
  { value: "5 días", label: "entrega promedio" },
  { value: "1 mes", label: "soporte incluido" },
  { value: "100%", label: "personalizado para vos" },
];

/* Foto de un cliente real incrustada en la línea de texto. Decorativa:
   la frase se lee igual sin ella. */
function Pill({ src }: { src: StaticImageData }) {
  return (
    <Image
      src={src}
      alt=""
      aria-hidden="true"
      className="inline-block align-middle mx-1 -translate-y-[1px] h-[1.45em] w-[2.4em] rounded-full object-cover ring-1 ring-primary/10 shadow-sm"
    />
  );
}

/* Posición de cada tarjeta del mazo según su distancia a la activa. */
function posicion(d: number) {
  if (d === 0) return { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 };
  if (d === 1) return { x: 30, y: -42, scale: 0.93, rotate: 3, opacity: 0.9 };
  if (d === 2) return { x: 56, y: -78, scale: 0.86, rotate: 6, opacity: 0.6 };
  return { x: 74, y: -100, scale: 0.8, rotate: 8, opacity: 0 };
}

export default function Hero() {
  const waNumber = useWhatsAppNumber();
  const waUrl = buildWaUrl(waNumber, WA_TEXT);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = escenas.length;
  const escena = escenas[active];

  useEffect(() => {
    if (reduce || paused) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % n), ROTATE_MS);
    return () => clearTimeout(id);
  }, [active, reduce, paused, n]);

  const t = reduce ? { duration: 0 } : { duration: 0.6, ease: EASE };

  return (
    <section className="relative pt-28 sm:pt-32 pb-10 sm:pb-20 px-4 sm:px-6 lg:min-h-[92vh] flex items-center overflow-hidden">
      {/* Grilla de puntos con fade radial */}
      <div
        className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.268 0.073 241 / 0.14) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Luz ámbar que se mueve detrás del mazo */}
      <div
        aria-hidden="true"
        className="hero-aurora absolute -z-10 top-[18%] right-[-10%] w-[620px] h-[620px] rounded-full bg-accent/25 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="hero-aurora-2 absolute -z-10 bottom-[-20%] left-[-15%] w-[520px] h-[520px] rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-12 items-center">
        {/* Texto */}
        <div>
          <div
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/25 rounded-full px-4 py-1.5 text-sm font-semibold mb-7 text-amber-700 reveal"
            style={{ animationDelay: "0s" }}
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Páginas que trabajan por vos
          </div>

          <h1
            className="text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.1rem] font-bold text-primary mb-6 reveal"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="sr-only">
              Una página que toma turnos, cobra la seña, recibe pedidos, vende sola y
              suma socios mientras vos trabajás.
            </span>
            <span aria-hidden="true">
              Una página que
              <span className="relative block overflow-hidden pb-2 -mb-2">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={escena.frase}
                    className="relative inline-block text-accent"
                    initial={{ y: "105%", opacity: 0, filter: "blur(8px)" }}
                    animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: "-105%", opacity: 0, filter: "blur(8px)" }}
                    transition={reduce ? { duration: 0 } : { duration: 0.45, ease: EASE }}
                  >
                    {escena.frase}
                    <svg
                      className="absolute left-0 -bottom-1 w-full h-[0.28em] text-accent/60"
                      viewBox="0 0 200 12"
                      preserveAspectRatio="none"
                      fill="none"
                    >
                      <motion.path
                        d="M2 9 C 50 2, 120 2, 198 7"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: reduce ? 1 : 0 }}
                        animate={{ pathLength: 1 }}
                        transition={reduce ? { duration: 0 } : { duration: 0.7, delay: 0.25, ease: EASE }}
                      />
                    </svg>
                  </motion.span>
                </AnimatePresence>
              </span>
              mientras vos trabajás.
            </span>
          </h1>

          <p
            className="text-lg text-muted-foreground leading-relaxed mb-9 max-w-xl reveal"
            style={{ animationDelay: "0.2s" }}
          >
            Que te encuentren es solo el principio. Armamos la página que le saca el
            problema de encima al estudio de uñas <Pill src={pillLocal} /> que pierde
            turnos, a la hamburguesería <Pill src={pillBurger} /> que reimprime la
            carta y al gimnasio <Pill src={pillGym} /> que contesta lo mismo todo el día.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 mb-5 reveal"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "group relative overflow-hidden bg-accent hover:bg-accent/90 text-accent-foreground gap-2 shadow-lg shadow-accent/25"
              )}
            >
              <span
                aria-hidden="true"
                className="hero-shine pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/45 to-transparent skew-x-[-20deg]"
              />
              <MessageCircle className="w-4 h-4" />
              Quiero una así
            </a>
            <a
              href="#trabajo-real"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-primary/30 text-primary hover:bg-primary/5 gap-2"
              )}
            >
              Ver lo que hicimos
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mb-10 reveal" style={{ animationDelay: "0.35s" }}>
            <a
              href="#posibilidades"
              className="group inline-flex items-center gap-2 text-amber-700 font-semibold text-sm hover:text-amber-800 transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              ¿Qué podría hacer la tuya?
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

          <div
            className="flex items-center gap-4 sm:gap-10 reveal"
            style={{ animationDelay: "0.4s" }}
          >
            {stats.map((stat, i) => (
              <Fragment key={stat.label}>
                {i > 0 && <div className="w-px h-12 bg-border" />}
                <div>
                  <p className="text-2xl sm:text-4xl font-bold text-primary leading-none whitespace-nowrap">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1.5">{stat.label}</p>
                </div>
              </Fragment>
            ))}
          </div>
        </div>

        {/* Mazo de sitios reales */}
        <div
          className="relative w-full max-w-[540px] mx-auto lg:mr-0 pt-24 pr-14 sm:pr-20 pb-10 reveal"
          style={{ animationDelay: "0.25s" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            role="group"
            aria-label="Sitios reales hechos por Encendé"
            className="relative"
          >
            {/* Separador invisible que le da alto al mazo */}
            <div className="invisible" aria-hidden="true">
              <div className="h-8" />
              <div className="aspect-[16/10]" />
            </div>

            {escenas.map((e, i) => {
              const d = (i - active + n) % n;
              return (
                <motion.div
                  key={e.cliente}
                  className="absolute inset-x-0 top-0 origin-bottom-left rounded-xl overflow-hidden border border-border bg-white shadow-2xl shadow-primary/20"
                  style={{ zIndex: n - d }}
                  initial={false}
                  animate={posicion(d)}
                  transition={t}
                  aria-hidden={d !== 0}
                >
                  <div className="h-8 bg-muted px-3 flex items-center gap-2 border-b border-border">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-300" />
                    </div>
                    <div className="flex-1 mx-2 bg-background rounded h-5 flex items-center px-2.5 overflow-hidden">
                      <span className="text-[11px] text-muted-foreground truncate">{e.dominio}</span>
                    </div>
                  </div>
                  <Image
                    src={e.shot}
                    alt={`Sitio de ${e.cliente}, hecho por Encendé`}
                    placeholder="blur"
                    priority={i === 0}
                    sizes="(max-width: 1024px) 92vw, 540px"
                    className="w-full aspect-[16/10] object-cover object-top"
                  />
                </motion.div>
              );
            })}

            {/* Aviso de lo que la página hizo sola */}
            <div className="absolute -left-2 sm:-left-8 -bottom-8 z-20" aria-live="polite">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={escena.cliente}
                  className="flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur border border-border shadow-xl shadow-primary/15 pl-3 pr-4 py-2.5 min-w-[230px]"
                  initial={{ opacity: 0, y: 16, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={reduce ? { duration: 0 } : { duration: 0.4, delay: 0.2, ease: EASE }}
                >
                  <span className="w-9 h-9 rounded-xl bg-accent/15 text-amber-700 flex items-center justify-center shrink-0">
                    <escena.aviso.icon className="w-4.5 h-4.5" />
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-primary">
                        {escena.aviso.titulo}
                      </span>
                      <span className="text-[10px] text-muted-foreground">ahora</span>
                    </span>
                    <span className="block text-xs text-muted-foreground truncate">
                      {escena.aviso.detalle}
                    </span>
                  </span>
                  <span className={cn("ml-1 w-2 h-2 rounded-full shrink-0", escena.dot)} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Selector: también sirve para ver cada sitio a mano */}
          <div className="mt-14 flex items-center gap-2">
            {escenas.map((e, i) => (
              <button
                key={e.cliente}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Mostrar ${e.cliente}`}
                aria-pressed={i === active}
                className="group relative h-11 flex items-center"
              >
                <span
                  className={cn(
                    "block h-1.5 rounded-full transition-all duration-500",
                    i === active ? "w-10 bg-accent" : "w-4 bg-primary/15 group-hover:bg-primary/30"
                  )}
                />
              </button>
            ))}
            <span className="ml-3 text-xs text-muted-foreground truncate">
              {escena.cliente} · sitio en vivo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
