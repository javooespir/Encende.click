import { Plus } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto tarda en estar lista?",
    a: "Cinco días es el promedio. El reloj arranca cuando nos pasás la información del negocio, no cuando nos escribís. Si tenés las fotos y los precios a mano, suele salir antes.",
  },
  {
    q: "¿Hay que pagar algo todos los meses?",
    a: "No. Es un pago único y la página es tuya. No hay abono, ni mantenimiento obligatorio, ni letra chica que aparezca en el mes tres.",
  },
  {
    q: "¿Qué incluye el mes de soporte?",
    a: "Todo. Durante el primer mes, cualquier arreglo o ajuste va sin costo: un texto que quedó mal, un precio desactualizado, un botón que no hace lo que esperabas. La idea del mes es que la página quede funcionando de verdad, no que te la entreguemos y chau. Y si algo se rompe por un error nuestro, lo arreglamos gratis siempre, sin importar cuándo.",
  },
  {
    q: "¿Qué pasa con el dominio después del primer año?",
    a: "El primer año va incluido. Del segundo en adelante lo renovás vos, directo con el registrador — son unos pocos miles de pesos al año. El dominio queda a tu nombre desde el día uno, así que nunca dependés de nosotros para conservarlo.",
  },
  {
    q: "¿Puedo cambiar un precio o un texto después?",
    a: "Nos escribís por WhatsApp y lo cambiamos. Sin formularios ni tickets. El primer mes de soporte está incluido; después seguimos disponibles para cambios puntuales.",
  },
  {
    q: "¿Y si no me gusta cómo quedó?",
    a: "Antes de publicar nada te mandamos un preview. Ahí nos decís qué cambiar y lo ajustamos hasta que te guste. Nadie publica una página que al dueño no le cierra.",
  },
  {
    q: "¿Necesito saber algo técnico?",
    a: "Nada. Vos contás cómo funciona tu negocio, nosotros nos ocupamos del resto. Si en algún momento te explicamos algo con una palabra rara, avisanos y la decimos de nuevo en criollo.",
  },
  {
    q: "Ya tengo Instagram, ¿para qué quiero una página?",
    a: "Instagram es para que te conozcan. La página es para que te encuentren y te reserven. En Instagram no aparecés cuando alguien busca «peluquería cerca mío» en Google, y no podés tomar turnos a las dos de la mañana sin contestar vos.",
  },
];

export default function Faq() {
  return (
    <section id="preguntas" className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <p className="text-amber-700 font-semibold text-sm uppercase tracking-wider mb-3">
            Preguntas
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Lo que todos preguntan
          </h2>
          <p className="text-muted-foreground text-lg">
            Si tenés una que no está acá, mandala por WhatsApp. Contestamos igual.
          </p>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex items-start justify-between gap-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <h3 className="text-base sm:text-lg font-semibold text-primary leading-snug">
                  {item.q}
                </h3>
                <span
                  aria-hidden="true"
                  className="shrink-0 mt-0.5 w-8 h-8 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-primary transition-transform duration-300 group-open:rotate-45"
                >
                  <Plus className="w-4 h-4" />
                </span>
              </summary>
              <p className="text-muted-foreground leading-relaxed mt-3 pr-14 max-w-prose">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
