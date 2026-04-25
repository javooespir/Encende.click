"use client";

import { motion, type Variants } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Me contás de tu negocio",
    description:
      "15 minutos por WhatsApp o llamada. Me decís qué hace tu negocio, quiénes son tus clientes y qué necesitás. Sin tecnicismos.",
    detail: "Nada de formularios eternos.",
  },
  {
    number: "02",
    title: "Yo armo la página",
    description:
      "En pocos días te mando un preview para que veas cómo quedó. Hacemos los cambios que quieras hasta que te guste.",
    detail: "Sin sorpresas ni vueltas.",
  },
  {
    number: "03",
    title: "Listo. Estás en internet",
    description:
      "La página queda online con tu dominio, tus servicios y tu contacto. Vos seguís haciendo tu trabajo.",
    detail: "Y quedo disponible para futuros cambios.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16 max-w-xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            El proceso
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Así funciona
          </h2>
          <p className="text-muted-foreground text-lg">
            Tres pasos. Sin reuniones interminables, sin que tengas que aprender
            nada técnico.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector line */}
          <div
            className="hidden md:block absolute top-10 h-px bg-gradient-to-r from-transparent via-border to-transparent"
            style={{
              left: "calc(16.67% + 40px)",
              right: "calc(16.67% + 40px)",
            }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex flex-col gap-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
            >
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center relative z-10 shrink-0 shadow-lg shadow-primary/20">
                <span className="text-3xl font-bold text-accent">
                  {step.number}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {step.description}
                </p>
                <p className="text-sm font-medium text-accent">{step.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
