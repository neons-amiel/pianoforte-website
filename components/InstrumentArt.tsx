import type { Category } from "@/lib/inventory";

type Props = { type: Category; className?: string };

// Hand-drawn style line art. Ink strokes use currentColor; brass details use var(--color-brass).
export function InstrumentArt({ type, className }: Props) {
  const common = {
    viewBox: "0 0 200 140",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.25,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  if (type === "Grand")
    return (
      <svg {...common}>
        <path d="M24 62 L150 18 Q178 30 186 62" />
        <path d="M118 62 L124 29" stroke="var(--color-brass)" />
        <path d="M14 62 H186 V76 H14 Z" />
        <path d="M8 60 H24 V66 H8 Z" />
        {Array.from({ length: 6 }).map((_, i) => (
          <path key={i} d={`M${10 + i * 2.4} 60 V63.5`} strokeWidth={0.8} />
        ))}
        <path d="M30 76 V118 M112 76 V118 M176 76 V118" />
        <path d="M27 118 H33 M109 118 H115 M173 118 H179" stroke="var(--color-brass)" />
        <path d="M66 76 V106 M60 106 H72 M62 110 H70" />
        <path d="M30 60 L42 46 H60 L52 60" strokeWidth={0.9} />
      </svg>
    );

  if (type === "Upright")
    return (
      <svg {...common}>
        <path d="M36 20 H164" />
        <path d="M42 20 V112 H158 V20" />
        <path d="M70 34 H130 V58 H70 Z" strokeWidth={0.9} />
        <path d="M100 38 C94 44 106 50 100 56" stroke="var(--color-brass)" strokeWidth={0.9} />
        <path d="M34 68 H166 V76 H34 Z" />
        {Array.from({ length: 24 }).map((_, i) => (
          <path key={i} d={`M${38 + i * 5.3} 68 V71.5`} strokeWidth={0.7} />
        ))}
        <path d="M46 76 V112 M154 76 V112" />
        <path d="M92 108 H98 M102 108 H108" stroke="var(--color-brass)" />
        <path d="M38 112 H52 M148 112 H162" />
      </svg>
    );

  if (type === "Digital")
    return (
      <svg {...common}>
        <path d="M70 34 H130 L126 50 H74 Z" strokeWidth={0.9} />
        <path d="M28 50 H172 V58 H28 Z" />
        {Array.from({ length: 26 }).map((_, i) => (
          <path key={i} d={`M${32 + i * 5.3} 52 V55.5`} strokeWidth={0.7} />
        ))}
        <path d="M30 58 V114 M170 58 V114" />
        <path d="M30 98 H170" strokeWidth={0.9} />
        <path d="M24 114 H36 M164 114 H176" />
        <path d="M90 110 H96 M98 110 H104 M106 110 H112" stroke="var(--color-brass)" />
      </svg>
    );

  // Violin
  return (
    <svg {...common}>
      <g transform="rotate(-28 100 70)">
        <path d="M100 44 C82 44 74 52 76 63 C78 70 84 72 84 76 C84 80 72 84 72 98 C72 114 86 124 100 124 C114 124 128 114 128 98 C128 84 116 80 116 76 C116 72 122 70 124 63 C126 52 118 44 100 44 Z" />
        <path d="M97 44 V16 H103 V44" />
        <circle cx="100" cy="12" r="4.5" />
        <path d="M100 12 m-2 0 a2 2 0 1 1 2 2" strokeWidth={0.8} />
        <path d="M88 82 C84 88 92 92 88 98 M112 82 C116 88 108 92 112 98" strokeWidth={0.9} />
        <path d="M93 92 H107" stroke="var(--color-brass)" />
        <path d="M95 106 H105 L102 120 H98 Z" strokeWidth={0.9} />
        <path d="M98.5 18 V106 M101.5 18 V106" strokeWidth={0.5} />
      </g>
      <path d="M40 112 L172 34" stroke="var(--color-brass)" strokeWidth={0.9} />
    </svg>
  );
}
