// Piano Forte's own-brand pianos. Real prices/specs from Piano Forte.
export type HousePiano = {
  slug: string;
  model: string;
  price: number; // PHP
  priceLabel: string;
  badge?: string;
  tagline: string;
  highlights: string[];
};

export const housePianos: HousePiano[] = [
  {
    slug: "pforte-dp-420",
    model: "DP-420",
    price: 25_500,
    priceLabel: "Introductory price",
    badge: "Limited time",
    tagline: "Brand new · Matte black · Desktop style",
    highlights: [
      "88-key progressive weighted hammer action",
      "880 tones · 120 demo songs",
      "Dual headphone outputs · MP3 playback",
      "USB, headphone & audio out",
    ],
  },
  {
    slug: "pforte-dp-400",
    model: "DP-400",
    price: 19_990,
    priceLabel: "Cash price",
    tagline: "Brand new · Matte black",
    highlights: [
      "88-key weighted hammer action",
      "Bluetooth · 200 tones · 128 polyphony",
      "3 pedals: damper, soft & sostenuto",
      "Built-in metronome · USB & headphone jack",
    ],
  },
];

export const houseFromPrice = Math.min(...housePianos.map((p) => p.price));