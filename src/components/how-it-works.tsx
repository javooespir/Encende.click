"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Nos contás de tu negocio",
    description:
      "15 minutos por WhatsApp o llamada. Nos decís qué hace tu negocio, quiénes son tus clientes y qué necesitás. Sin tecnicismos.",
    detail: "Sin formularios ni reuniones.",
  },
  {
    number: "02",
    title: "Te armamos la página",
    description:
      "En pocos días te mandamos un preview para que veas cómo quedó. Hacemos los cambios que quieras hasta que te guste.",
    detail: "Sin sorpresas ni vueltas.",
  },
  {
    number: "03",
    title: "Listo. Estás en internet",
    description:
      "La página queda online con tu dominio, tus servicios y tu contacto. Vos seguís haciendo tu trabajo.",
    detail: "Y seguimos disponibles cuando lo necesitás.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 px-4 sm:px-6 bg-primary relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(1 0 0 / 0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          className="mb-14 max-w-xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">
            El proceso
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Así funciona
          </h2>
          <p className="text-white/75 text-lg">
            Tres pasos. Sin reuniones interminables, sin que tengas que aprender
            nada técnico.
          </p>
        </motion.div>

        {/* Las tarjetas se apilan con position: sticky. Sin sticky (o sin JS)
            quedan una debajo de la otra, que es la lectura normal. */}
        <ol className="flex flex-col gap-6 md:gap-48 list-none p-0 m-0">
          {steps.map((step, i) => (
            <li
              key={step.number}
              className="md:sticky"
              style={{ top: `${88 + i * 28}px` }}
            >
              <motion.div
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#152339] p-7 sm:p-9 shadow-xl shadow-black/20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-8 right-2 text-[9rem] font-bold text-white/[0.04] select-none pointer-events-none leading-none"
                >
                  {step.number}
                </span>

                <div className="relative flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-7">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-accent/25">
                    <span className="text-2xl font-bold text-primary">
                      {step.number}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/75 leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <p className="text-sm font-medium text-amber-400">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            </li>
          ))}
        </ol>

        {/* Espacio para que el apilado se complete antes de salir de la sección */}
        <div className="hidden md:block h-24" aria-hidden="true" />
      </div>
    </section>
  );
}
