import {
  CalendarCheck,
  Wallet,
  UtensilsCrossed,
  ShoppingBag,
  Store,
  BellRing,
  MapPin,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

/* Lo que la página hace sola. Cinta inclinada que corre en loop con CSS
   puro: sin JS, se pausa al pasar el mouse y se detiene con reduced-motion. */
const items: { icon: LucideIcon; label: string }[] = [
  { icon: CalendarCheck, label: "Turnos online 24/7" },
  { icon: Wallet, label: "Seña digital" },
  { icon: UtensilsCrossed, label: "Menú siempre al día" },
  { icon: ShoppingBag, label: "Pedidos por WhatsApp" },
  { icon: Store, label: "Catálogo con carrito" },
  { icon: BellRing, label: "Avisos automáticos" },
  { icon: MapPin, label: "Aparecés en Google" },
  { icon: Smartphone, label: "Hecha para el celular" },
];

function Fila({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-10 pr-10 list-none m-0 p-0"
      aria-hidden={hidden || undefined}
    >
      {items.map(({ icon: Icon, label }) => (
        <li key={label} className="flex items-center gap-3 whitespace-nowrap">
          <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
          <span className="text-white text-lg font-semibold tracking-tight">{label}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/25 ml-7" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
}

export default function Marquee() {
  return (
    <section aria-label="Lo que hace tu página sola" className="relative overflow-hidden py-10">
      <div className="marquee -rotate-[1.5deg] scale-[1.04] bg-primary border-y border-white/10 py-5 shadow-xl shadow-primary/20">
        <div className="marquee-track flex w-max">
          <Fila />
          <Fila hidden />
        </div>
      </div>
    </section>
  );
}
