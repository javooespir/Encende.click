"use client";

import { MessageCircle, Mail, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useWhatsAppNumber, buildWaUrl, buildPhoneUrl } from "@/hooks/use-whatsapp";

const WA_TEXT = "Hola! Me interesa saber más sobre tener mi página web.";
const EMAIL = "javierespir@gmail.com";

export default function CtaFinal() {
  const waNumber = useWhatsAppNumber();
  const waUrl = buildWaUrl(waNumber, WA_TEXT);
  const phoneUrl = buildPhoneUrl(waNumber);

  return (
    <section
      id="contacto"
      className="py-24 px-4 sm:px-6"
      style={{ backgroundColor: "#1C3557" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
          ¿Qué haría una web
          <br />
          por tu negocio?
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Mandanos un mensaje. Te contamos en concreto qué se puede hacer con
          tu negocio puntual. Sin compromiso.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-accent hover:bg-accent/90 text-white gap-2 text-base shadow-lg shadow-accent/30"
            )}
          >
            <MessageCircle className="w-5 h-5" />
            Escribir por WhatsApp
          </a>
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Enviar email"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-white/30 text-white hover:bg-white/10 gap-2 text-base bg-transparent"
            )}
          >
            <Mail className="w-5 h-5" />
            Mandar un mail
          </a>
        </div>

        <a
          href={phoneUrl}
          aria-label="Llamar por teléfono"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white/90 text-sm transition-colors"
        >
          <Phone className="w-4 h-4" />
          O llamanos directamente
        </a>
      </div>
    </section>
  );
}
