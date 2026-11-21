"use client";

import { useState } from "react";
import Image from "next/image";
import { PhoneMissed, MessageSquare, NotebookPen, X } from "lucide-react";

import shotTurnos from "../../public/images/casos/turnos-despues.png";

/* Panel "antes": ilustración, no una foto. Representa el cuaderno y el
   teléfono que la web reemplaza. */
function Antes() {
  return (
    <div className="absolute inset-0 bg-[#141924] p-5 sm:p-8 flex flex-col justify-center gap-3 select-none">
      <div className="flex items-center gap-3 rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3">
        <PhoneMissed className="w-4 h-4 text-red-400 shrink-0" />
        <div className="min-w-0">
          <p className="text-white/90 text-sm font-medium">3 llamadas perdidas</p>
          <p className="text-white/40 text-xs">Mientras atendías a una clienta</p>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
        <MessageSquare className="w-4 h-4 text-white/50 shrink-0" />
        <div className="min-w-0">
          <p className="text-white/90 text-sm font-medium truncate">
            &laquo;Hola! Tenés lugar el jueves?&raquo;
          </p>
          <p className="text-white/40 text-xs">Sin responder desde ayer</p>
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
        <div className="flex items-center gap-3 mb-2.5">
          <NotebookPen className="w-4 h-4 text-white/50 shrink-0" />
          <p className="text-white/90 text-sm font-medium">Cuaderno de turnos</p>
        </div>
        <ul className="flex flex-col gap-1.5 pl-7">
          <li className="text-white/35 text-xs line-through">Jue 14:00 — Caro</li>
          <li className="text-white/35 text-xs line-through">Jue 14:00 — Meli</li>
          <li className="text-white/70 text-xs flex items-center gap-1.5">
            <X className="w-3 h-3 text-red-400 shrink-0" />
            Dos turnos a la misma hora
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function AntesDespues() {
  const [pos, setPos] = useState(50);

  return (
    <section id="antes-despues" className="py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 max-w-2xl">
          <p className="text-amber-700 font-semibold text-sm uppercase tracking-wider mb-3">
            El cambio
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Lo mismo, sin que lo atiendas vos
          </h2>
          <p className="text-muted-foreground text-lg">
            Arrastrá para ver los dos lados. A la izquierda, el jueves de cualquier
            negocio que toma turnos a mano. A la derecha, la pantalla con la que
            Amapola Studio los toma hoy.
          </p>
        </div>

        <figure className="m-0">
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl aspect-[4/5] sm:aspect-[11/8] bg-[#141924]">
            {/* Después: captura real */}
            <Image
              src={shotTurnos}
              alt="Pantalla de reserva de turnos de Amapola Studio, con los pasos tus datos, tu turno y seña"
              placeholder="blur"
              sizes="(max-width: 896px) 100vw, 896px"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />

            {/* Antes: recortado hasta la posición del control */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
              aria-hidden="true"
            >
              <Antes />
            </div>

            {/* Etiquetas */}
            <span className="absolute top-3 left-3 text-[11px] font-semibold uppercase tracking-wider text-white/70 bg-black/45 rounded-full px-2.5 py-1">
              Antes
            </span>
            <span className="absolute top-3 right-3 text-[11px] font-semibold uppercase tracking-wider text-primary bg-white/80 rounded-full px-2.5 py-1">
              Después
            </span>

            {/* Línea divisoria */}
            <div
              className="absolute top-0 bottom-0 w-px bg-white/70 pointer-events-none"
              style={{ left: `${pos}%` }}
            >
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center">
                <span className="text-primary text-xs font-bold tracking-tighter">
                  &lt;&nbsp;&gt;
                </span>
              </span>
            </div>

            {/* Control: range nativo, accesible por teclado y touch */}
            <input
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              aria-label="Comparar antes y después: deslizá para revelar cada lado"
              className="absolute inset-0 w-full h-full cursor-ew-resize opacity-0"
            />
          </div>

          <figcaption className="sr-only">
            Comparación entre tomar turnos a mano y la pantalla de reservas online.
          </figcaption>
        </figure>

        <p className="text-muted-foreground text-sm mt-5">
          La pantalla de la derecha es real y está online. El lado izquierdo es una
          representación de lo que pasa cuando la agenda vive en un cuaderno.
        </p>
      </div>
    </section>
  );
}
