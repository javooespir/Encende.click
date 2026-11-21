"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Globe, MessageCircle, ExternalLink } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useWhatsAppNumber, buildWaUrl } from "@/hooks/use-whatsapp";

import shotAmapola from "../../public/images/casos/amapola.png";
import shotDbs from "../../public/images/casos/dbs.png";
import shotChispa from "../../public/images/casos/chispa.png";
import shotTerra from "../../public/images/casos/terra.png";
import shotEleve from "../../public/images/casos/eleve.png";

const WA_TEXT =
  "Hola! Vi los trabajos que mostrás y me interesa algo así para mi negocio.";

type Accent = "fuchsia" | "rose" | "amber" | "lime" | "slate";

interface Caso {
  name: string;
  type: string;
  location: string;
  url: string;
  urlLabel: string;
  shot: StaticImageData;
  alt: string;
  description: string;
  stats: { value: string; label: string }[];
  tags: string[];
  accent: Accent;
}

const cases: Caso[] = [
  {
    name: "Amapola Studio",
    type: "Estética facial y corporal",
    location: "Ituzaingó, Buenos Aires",
    url: "https://amapolastudio.online",
    urlLabel: "amapolastudio.online",
    shot: shotAmapola,
    alt: "Página de Amapola Studio con su titular y el botón de reservar turno",
    description:
      "Coordinaba turnos por teléfono y perdía horas al día confirmando uno por uno. Le construimos una web con reservas 24/7, cancelación automática hasta 24h antes y confirmación por WhatsApp. Hoy Catalina llega al local y ya sabe qué tratamiento tiene cada clienta.",
    stats: [
      { value: "24/7", label: "Reservas online" },
      { value: "5.0★", label: "Google Reviews" },
      { value: "0 h", label: "Confirmaciones manuales" },
    ],
    tags: ["Reservas online", "WhatsApp", "Google Calendar", "Cancelación automática"],
    accent: "fuchsia",
  },
  {
    name: "DBS Esculpidas",
    type: "Estudio de uñas",
    location: "Ituzaingó, Buenos Aires",
    url: "https://www.dbsesculpidas.com",
    urlLabel: "dbsesculpidas.com",
    shot: shotDbs,
    alt: "Página de DBS Esculpidas con foto del estudio y el botón de reservar turno",
    description:
      "Manejaba la agenda por Instagram y WhatsApp — turnos duplicados, cancelaciones sin aviso, sin seña. Le armamos una web con turnos online, cobro de seña digital para confirmar y panel de gestión. Hoy el estudio funciona sin caos.",
    stats: [
      { value: "24/7", label: "Turnos online" },
      { value: "Seña", label: "Digital incluida" },
      { value: "0", label: "Turnos duplicados" },
    ],
    tags: ["Turnos online", "Seña digital", "WhatsApp", "Panel de admin"],
    accent: "rose",
  },
  {
    name: "Chispa La Burga",
    type: "Smash burgers",
    location: "Castelar Sur, Buenos Aires",
    url: "https://www.chispalaburga.com",
    urlLabel: "chispalaburga.com",
    shot: shotChispa,
    alt: "Menú digital de Chispa La Burga con fotos de cada hamburguesa",
    description:
      "El menú vive en la web, con foto de cada hamburguesa y precio al día. El cliente arma el pedido, elige delivery o retiro y lo manda por WhatsApp sin que nadie atienda el teléfono. Cuando cambia un precio se cambia una vez, y no se reimprime nada.",
    stats: [
      { value: "Menú", label: "Siempre al día" },
      { value: "Pedido", label: "Armado online" },
      { value: "0", label: "Cartas impresas" },
    ],
    tags: ["Menú digital", "Pedido online", "Delivery y retiro", "WhatsApp"],
    accent: "amber",
  },
  {
    name: "Terra Fitness",
    type: "Gimnasio",
    location: "Ituzaingó, Buenos Aires",
    url: "https://terrafitness.com.ar",
    urlLabel: "terrafitness.com.ar",
    shot: shotTerra,
    alt: "Página de Terra Fitness con video del gimnasio y acceso a las clases",
    description:
      "Video del gimnasio de fondo, las clases grupales con sus horarios y los planes con el precio a la vista. El que entra sabe qué se entrena, cuándo y cuánto sale, sin tener que escribir para preguntar.",
    stats: [
      { value: "Planes", label: "Precio a la vista" },
      { value: "Clases", label: "Con horarios" },
      { value: "24/7", label: "Consultas online" },
    ],
    tags: ["Clases y horarios", "Planes", "Opiniones", "Ubicación"],
    accent: "lime",
  },
  {
    name: "Elevé",
    type: "Perfumería importada",
    location: "Envíos a todo el país",
    url: "https://eleveimportados.com.ar",
    urlLabel: "eleveimportados.com.ar",
    shot: shotEleve,
    alt: "Tienda online de Elevé con su catálogo de perfumes importados",
    description:
      "Catálogo completo con carrito, envíos a todo el país y precio mayorista por cantidad. Dejó de pasar listas por WhatsApp una por una: ahora manda un link y el cliente compra solo.",
    stats: [
      { value: "Catálogo", label: "Con carrito" },
      { value: "País", label: "Envíos a todo el" },
      { value: "Mayor", label: "Precio por cantidad" },
    ],
    tags: ["Tienda online", "Catálogo", "Envíos", "Mayorista"],
    accent: "slate",
  },
];

const accentClasses: Record<Accent, { badge: string; dot: string; stat: string; tag: string }> = {
  fuchsia: {
    badge: "border-fuchsia-400/30 text-fuchsia-300 bg-fuchsia-400/10",
    dot: "bg-fuchsia-400",
    stat: "text-fuchsia-300",
    tag: "border-fuchsia-400/20 text-fuchsia-200/80 bg-fuchsia-400/5",
  },
  rose: {
    badge: "border-rose-400/30 text-rose-300 bg-rose-400/10",
    dot: "bg-rose-400",
    stat: "text-rose-300",
    tag: "border-rose-400/20 text-rose-200/80 bg-rose-400/5",
  },
  amber: {
    badge: "border-amber-400/30 text-amber-300 bg-amber-400/10",
    dot: "bg-amber-400",
    stat: "text-amber-300",
    tag: "border-amber-400/20 text-amber-200/80 bg-amber-400/5",
  },
  lime: {
    badge: "border-lime-400/30 text-lime-300 bg-lime-400/10",
    dot: "bg-lime-400",
    stat: "text-lime-300",
    tag: "border-lime-400/20 text-lime-200/80 bg-lime-400/5",
  },
  slate: {
    badge: "border-slate-300/30 text-slate-200 bg-slate-300/10",
    dot: "bg-slate-300",
    stat: "text-slate-200",
    tag: "border-slate-300/20 text-slate-200/70 bg-slate-300/5",
  },
};

/* Captura real del sitio, dentro de un marco de navegador. */
function Captura({ caso, priority }: { caso: Caso; priority: boolean }) {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-white/12 bg-[#060d18] shadow-2xl shadow-black/40">
      <div className="bg-white/5 px-3 py-2 flex items-center gap-2 border-b border-white/8">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        </div>
        <div className="flex-1 mx-2 bg-black/30 rounded h-5 flex items-center px-2.5 overflow-hidden">
          <span className="text-[10px] text-white/40 truncate">{caso.urlLabel}</span>
        </div>
      </div>
      <Image
        src={caso.shot}
        alt={caso.alt}
        placeholder="blur"
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="w-full h-auto"
      />
    </div>
  );
}

export default function Portfolio() {
  const waNumber = useWhatsAppNumber();
  const waUrl = buildWaUrl(waNumber, WA_TEXT);

  return (
    <section id="trabajo-real" className="py-24 px-4 sm:px-6 bg-[#0a1120] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(1 0 0 / 0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          className="mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Trabajo real
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Lo que construimos
          </h2>
          <p className="text-white/55 text-lg">
            Cinco negocios de Buenos Aires que ya están online y trabajando solos.
            Entrá a cualquiera: son sitios en vivo, no maquetas.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {cases.map((c, i) => {
            const colors = accentClasses[c.accent];
            const flip = i % 2 === 1;
            return (
              <motion.article
                key={c.name}
                className="rounded-2xl border border-white/10 overflow-hidden"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div
                    className={cn(
                      "bg-[#060d18] p-6 lg:p-10 flex items-center justify-center border-b lg:border-b-0 border-white/8",
                      flip ? "lg:order-2 lg:border-l" : "lg:border-r"
                    )}
                  >
                    <Captura caso={c} priority={i === 0} />
                  </div>

                  <div
                    className={cn(
                      "p-8 lg:p-10 flex flex-col justify-center bg-white/[0.015]",
                      flip && "lg:order-1"
                    )}
                  >
                    <div
                      className={cn(
                        "inline-flex items-center gap-2 border rounded-full px-3 py-1 mb-5 w-fit",
                        colors.badge
                      )}
                    >
                      <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", colors.dot)} />
                      <span className="text-xs font-semibold uppercase tracking-wider">
                        Proyecto en vivo
                      </span>
                    </div>

                    <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-2">
                      {c.type} · {c.location}
                    </p>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
                      {c.name}
                    </h3>

                    <p className="text-white/60 text-sm leading-relaxed mb-6">
                      {c.description}
                    </p>

                    <div className="grid grid-cols-3 gap-2 mb-5">
                      {c.stats.map((s) => (
                        <div
                          key={s.label}
                          className="bg-white/5 border border-white/8 rounded-xl p-2.5 text-center"
                        >
                          <p className={cn("text-base font-bold leading-none mb-1", colors.stat)}>
                            {s.value}
                          </p>
                          <p className="text-[10px] text-white/40 uppercase tracking-wide leading-tight">
                            {s.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-7">
                      {c.tags.map((tag) => (
                        <span
                          key={tag}
                          className={cn(
                            "text-[11px] font-medium rounded-full px-2.5 py-0.5 border",
                            colors.tag
                          )}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 flex-wrap">
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          buttonVariants({ variant: "outline", size: "sm" }),
                          "border-white/20 text-white hover:bg-white/10 bg-transparent gap-2"
                        )}
                      >
                        <Globe className="w-3.5 h-3.5" />
                        Ver sitio
                        <ExternalLink className="w-3 h-3 opacity-50" />
                      </a>
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          buttonVariants({ size: "sm" }),
                          "bg-accent hover:bg-accent/90 text-white gap-2"
                        )}
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Quiero algo así
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
