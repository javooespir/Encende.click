"use client";

import { useState, useEffect } from "react";

const DEFAULT = "541131462214";

export function useWhatsAppNumber(): string {
  const [number, setNumber] = useState(DEFAULT);

  useEffect(() => {
    fetch("/api/geo")
      .then((r) => r.json())
      .then(({ number: n }: { number: string }) => setNumber(n))
      .catch(() => {});
  }, []);

  return number;
}

export function buildWaUrl(number: string, text: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function buildPhoneUrl(number: string): string {
  return `tel:+${number}`;
}
