"use client";

import { motion } from "framer-motion";
import { Camera, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useWhatsAppNumber, buildWaUrl } from "@/hooks/use-whatsapp";

const WA_TEXT = "Hola! Me interesa tener mi página web.";

const placeholders = [
  { label: "Peluquería · Buenos Aires" },
  { label: "Centro de estética · GBA" },
  { label: "Restaurante · CABA" },
];

export default function Testimonials() {
  const waNumber = useWhatsAppNumber();
  const waUrl = buildWaUrl(waNumber, WA_TEXT);
  return (
    <section className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-4 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-amber-700 font-semibold text-sm uppercase tracking-wider mb-3">
            Resultados
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Los primeros en confiar ya están adentro.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Estamos arrancando. En las próximas semanas, las páginas y resultados
            de nuestros primeros clientes van a estar acá — con fotos y videos reales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {placeholders.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-border bg-muted/30 p-10 min-h-[220px] text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/8 flex items-center justify-center">
                <Camera className="w-5 h-5 text-primary/40" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60 mb-1">
                  Próximamente
                </p>
                <p className="text-sm text-muted-foreground">{p.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-muted-foreground text-base">
            ¿Querés que tu negocio sea uno de los primeros?
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "gap-2 border-primary text-primary hover:bg-primary hover:text-white shrink-0"
            )}
          >
            Hablamos
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
