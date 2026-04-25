"use client";

import { useState } from "react";
import { Menu, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const WHATSAPP_URL =
  "https://wa.me/541131462214?text=Hola%21+Me+interesa+saber+m%C3%A1s+sobre+tener+mi+p%C3%A1gina+web.";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
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

        <div className="hidden sm:flex items-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="#contacto"
            className={cn(
              buttonVariants({ size: "sm" }),
              "bg-primary hover:bg-primary/90 text-primary-foreground"
            )}
          >
            Agendar llamada
          </a>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="sm:hidden p-2 text-foreground rounded-md"
            aria-label="Abrir menú"
          >
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[260px]">
            <nav className="flex flex-col gap-6 pt-8">
              <a
                href="#posibilidades"
                className="text-lg font-medium text-foreground"
                onClick={() => setOpen(false)}
              >
                Ver posibilidades
              </a>
              <a
                href="#como-funciona"
                className="text-lg font-medium text-foreground"
                onClick={() => setOpen(false)}
              >
                Cómo funciona
              </a>
              <a
                href="#contacto"
                className="text-lg font-medium text-foreground"
                onClick={() => setOpen(false)}
              >
                Contacto
              </a>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants(),
                  "bg-primary text-primary-foreground mt-2"
                )}
              >
                Agendar llamada
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
