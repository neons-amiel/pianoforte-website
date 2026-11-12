import type { ReactNode } from "react";

// A thin keyboard strip used as a section divider — a few octaves in ink on ivory.
export function KeyboardRule({ octaves = 7, className = "" }: { octaves?: number; className?: string }) {
  const w = 14; // white key width
  const total = octaves * 7 * w;
  const blackOffsets = [1, 2, 4, 5, 6]; // keys after which a black key sits
  return (
    <svg
      viewBox={`0 0 ${total} 40`}
      preserveAspectRatio="none"
      className={`block h-6 w-full ${className}`}
      aria-hidden
    >
      <rect width={total} height={40} fill="var(--color-paper)" />
      {Array.from({ length: octaves * 7 }).map((_, i) => (
        <rect key={`w${i}`} x={i * w} y={0} width={w} height={40} fill="none" stroke="var(--color-ink)" strokeWidth={0.6} />
      ))}
      {Array.from({ length: octaves }).flatMap((_, o) =>
        blackOffsets.map((k) => (
          <rect key={`b${o}-${k}`} x={(o * 7 + k) * w - 4.5} y={0} width={9} height={24} fill="var(--color-ink)" />
        )),
      )}
    </svg>
  );
}

// Engraved-style flourish with a centred diamond, for headings.
export function Flourish({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 16" className={`h-4 w-48 ${className}`} fill="none" stroke="currentColor" aria-hidden>
      <path d="M0 8 H96 C104 8 106 3 112 3 M240 8 H144 C136 8 134 3 128 3" strokeWidth={0.8} />
      <path d="M120 2 L126 8 L120 14 L114 8 Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Eyebrow({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return (
    <p className={`text-[11px] font-medium uppercase tracking-[0.32em] ${onDark ? "text-brass-light" : "text-brass"}`}>
      {children}
    </p>
  );
}
