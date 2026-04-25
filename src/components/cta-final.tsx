import { MessageCircle, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const WHATSAPP_URL =
  "https://wa.me/541131462214?text=Hola%21+Me+interesa+saber+m%C3%A1s+sobre+tener+mi+p%C3%A1gina+web.";
const EMAIL = "javierespir@gmail.com";

export default function CtaFinal() {
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
          Mandame un mensaje. Te cuento en concreto qué se puede hacer con tu
          negocio puntual. Sin compromiso.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-accent hover:bg-accent/90 text-white gap-2 text-base"
            )}
          >
            <MessageCircle className="w-5 h-5" />
            Escribir por WhatsApp
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-white/30 text-white hover:bg-white/10 gap-2 text-base bg-transparent"
            )}
          >
            <Mail className="w-5 h-5" />
            Mandar un mail
          </a>
        </div>
      </div>
    </section>
  );
}
