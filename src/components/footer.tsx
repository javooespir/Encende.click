import { Separator } from "@/components/ui/separator";
import { Zap } from "lucide-react";

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 mb-8">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-accent" fill="currentColor" />
            </div>
            <span
              className="text-xl font-bold text-primary"
              style={{ fontFamily: "var(--font-lexend)" }}
            >
              Encendé
            </span>
          </a>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, svg }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                {svg}
              </a>
            ))}
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col items-center gap-3">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Encendé. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground/60">
            <a href="#" className="hover:text-muted-foreground transition-colors">Privacidad</a>
            <span>·</span>
            <a href="#" className="hover:text-muted-foreground transition-colors">Términos</a>
            <span>·</span>
            <a
              href="https://encende.click"
              className="hover:text-muted-foreground transition-colors"
            >
              Creado por Encendé
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
