export const categories = ["Grand", "Upright", "Digital", "Violin"] as const;
export type Category = (typeof categories)[number];

export type Instrument = {
  slug: string;
  brand: string;
  model: string;
  type: Category;
  finish: string;
  condition: "Brand new" | "Pre-owned";
  price: number; // PHP
  branch: string; // Branch slug
  year?: number;
};

// SAMPLE inventory for the concept — not Piano Forte's real stock or prices.
// Later: move to a CMS/DB (Supabase, Sanity…) so each branch updates its own stock.
export const inventory: Instrument[] = [
  { slug: "yamaha-c3-cubao", brand: "Yamaha", model: "C3", type: "Grand", finish: "Polished Ebony", condition: "Pre-owned", price: 1_150_000, branch: "cubao", year: 1998 },
  { slug: "yamaha-c1-baguio", brand: "Yamaha", model: "C1", type: "Grand", finish: "Polished White", condition: "Pre-owned", price: 980_000, branch: "baguio", year: 2001 },
  { slug: "yamaha-g2-legazpi", brand: "Yamaha", model: "G2", type: "Grand", finish: "Polished Ebony", condition: "Pre-owned", price: 780_000, branch: "legazpi", year: 1985 },
  { slug: "kawai-kg2-davao", brand: "Kawai", model: "KG-2", type: "Grand", finish: "Polished Ebony", condition: "Pre-owned", price: 690_000, branch: "davao", year: 1982 },
  { slug: "kawai-k300-batangas", brand: "Kawai", model: "K-300", type: "Upright", finish: "Polished Ebony", condition: "Brand new", price: 385_000, branch: "batangas" },
  { slug: "yamaha-ux-tarlac-main", brand: "Yamaha", model: "UX", type: "Upright", finish: "Polished Ebony", condition: "Pre-owned", price: 295_000, branch: "tarlac-main", year: 1991 },
  { slug: "yamaha-u3-pampanga", brand: "Yamaha", model: "U3", type: "Upright", finish: "Polished Ebony", condition: "Pre-owned", price: 265_000, branch: "pampanga", year: 1989 },
  { slug: "kawai-bl71-bacolod-allhome", brand: "Kawai", model: "BL-71", type: "Upright", finish: "Polished Ebony", condition: "Pre-owned", price: 235_000, branch: "bacolod-allhome", year: 1984 },
  { slug: "yamaha-u1-laguna", brand: "Yamaha", model: "U1", type: "Upright", finish: "Polished Ebony", condition: "Pre-owned", price: 215_000, branch: "laguna", year: 1987 },
  { slug: "roland-hp704-bataan", brand: "Roland", model: "HP704", type: "Digital", finish: "Charcoal Black", condition: "Brand new", price: 155_000, branch: "bataan" },
  { slug: "yamaha-clp835-cubao", brand: "Yamaha", model: "Clavinova CLP-835", type: "Digital", finish: "Black Walnut", condition: "Brand new", price: 145_000, branch: "cubao" },
  { slug: "kawai-ca401-naga", brand: "Kawai", model: "CA401", type: "Digital", finish: "Premium Rosewood", condition: "Brand new", price: 118_000, branch: "naga" },
  { slug: "violin-4-4-laguna", brand: "Hand-crafted", model: "Violin 4/4", type: "Violin", finish: "Hand-varnished Amber", condition: "Brand new", price: 28_500, branch: "laguna" },
  { slug: "violin-3-4-bacolod-sm", brand: "Student", model: "Violin 3/4", type: "Violin", finish: "Satin Brown", condition: "Brand new", price: 9_800, branch: "bacolod-sm" },
];

export const countAt = (branchSlug: string) =>
  inventory.filter((i) => i.branch === branchSlug).length;

export const formatPHP = (n: number) =>
  new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP", maximumFractionDigits: 0 }).format(n);