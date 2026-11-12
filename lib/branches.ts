export type Branch = {
  slug: string;
  name: string; // short label used on cards, chips and the map panel
  venue: string; // mall / building
  address: string;
  note?: string; // landmark inside the venue
  region: "Luzon" | "Visayas" | "Mindanao";
  mapQuery: string; // what Google Maps searches for (pin + directions)
  facebook: string; // the branch's Facebook post
  isMain?: boolean;
};

export const branches: Branch[] = [
  {
    slug: "cubao",
    name: "Quezon City, Cubao",
    venue: "Minnesota Mansion",
    address: "Room 112, Minnesota Mansion, 267 Ermin Garcia, Cubao, Quezon City",
    region: "Luzon",
    mapQuery: "Minnesota Mansion, 267 Ermin Garcia, Cubao, Quezon City",
    facebook: "https://www.facebook.com/share/15J8QnLoyW/",
  },
  {
    slug: "tarlac-main",
    name: "Capas, Tarlac",
    venue: "Home-based Main Branch",
    address: "Brgy. Cub Cub, Capas, Tarlac",
    note: "Landmark: Dominican College of Tarlac",
    region: "Luzon",
    mapQuery: "Dominican College of Tarlac, Capas, Tarlac",
    facebook: "https://www.facebook.com/share/1691pVYc4o/",
    isMain: true,
  },
  {
    slug: "pampanga",
    name: "San Fernando",
    venue: "Vista Mall San Fernando",
    address: "Level 1, Vista Mall San Fernando, Pampanga",
    note: "Near All Home",
    region: "Luzon",
    mapQuery: "Vista Mall San Fernando, Pampanga",
    facebook: "https://www.facebook.com/share/p/18kxpck9XS/",
  },
  {
    slug: "bataan",
    name: "Balanga",
    venue: "Vista Mall Balanga",
    address: "Level 1, Vista Mall Balanga, Bataan",
    note: "In front of Jollibee",
    region: "Luzon",
    mapQuery: "Vista Mall Balanga, Bataan",
    facebook: "https://www.facebook.com/share/p/17PMBVhEu3/",
  },
  {
    slug: "baguio",
    name: "Baguio",
    venue: "Porta Vaga Mall",
    address: "Unit 3, Fushion Hub, 2nd Floor, Puso ng Baguio, Porta Vaga Mall, Session Rd, Baguio, Benguet",
    region: "Luzon",
    mapQuery: "Porta Vaga Mall, Session Road, Baguio",
    facebook: "https://www.facebook.com/share/p/1CbYBKoaEG/",
  },
  {
    slug: "laguna",
    name: "Santa Rosa",
    venue: "Vista Mall Santa Rosa",
    address: "Level 1, Vista Mall Santa Rosa, Laguna",
    note: "In between All Home and The Rail",
    region: "Luzon",
    mapQuery: "Vista Mall Santa Rosa, Laguna",
    facebook: "https://www.facebook.com/share/v/1BqvFXWdDU/",
  },
  {
    slug: "batangas",
    name: "Sto. Tomas",
    venue: "SM City Sto. Tomas",
    address: "Level 1, SM City Sto. Tomas, Batangas",
    note: "In front of SM Supermarket",
    region: "Luzon",
    mapQuery: "SM City Sto. Tomas, Batangas",
    facebook: "https://www.facebook.com/share/p/1BzuGGY936/",
  },
  {
    slug: "naga",
    name: "Naga",
    venue: "Vista Mall Naga",
    address: "Level 1, Vista Mall Naga City, Camarines Sur",
    note: "Near All Home entrance",
    region: "Luzon",
    mapQuery: "Vista Mall Naga, Camarines Sur",
    facebook: "https://www.facebook.com/share/p/1DYZZ1FcDG/",
  },
  {
    slug: "legazpi",
    name: "Legazpi",
    venue: "Pacific Mall Legazpi",
    address: "Level 1, Pacific Mall Legazpi, Albay",
    note: "Beside EO Optical",
    region: "Luzon",
    mapQuery: "Pacific Mall Legazpi",
    facebook: "https://www.facebook.com/share/p/1AaJNQSWvG/",
  },
  {
    slug: "bacolod-allhome",
    name: "AllHome Bacolod",
    venue: "AllHome Bacolod",
    address: "Level 1, AllHome Bacolod, Bacolod City",
    note: "Near Coffee Project",
    region: "Visayas",
    mapQuery: "AllHome Bacolod",
    facebook: "https://m.facebook.com/profile.php?id=61552110561075",
  },
  {
    slug: "bacolod-sm",
    name: "SM Bacolod",
    venue: "SM City Bacolod",
    address: "Ground Level, North Block, SM City Bacolod, Bacolod, Negros Occidental",
    note: "In front of Kesthetica and Tong Yang Restaurant",
    region: "Visayas",
    mapQuery: "SM City Bacolod North Block",
    facebook: "https://www.facebook.com/share/p/18rF2KPZoC/",
  },
  {
    slug: "davao",
    name: "Davao",
    venue: "Vista Mall Davao",
    address: "Level 2, Vista Mall Davao, Tugbok, Davao City, Davao del Sur",
    note: "Near NCCC Department Store",
    region: "Mindanao",
    mapQuery: "Vista Mall Davao, Tugbok, Davao City",
    facebook: "https://www.facebook.com/share/p/17HBDYSK2k/",
  },
];

export const getBranch = (slug: string) => branches.find((b) => b.slug === slug);

export const mapEmbedUrl = (b: Branch) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(b.mapQuery)}&z=16&output=embed`;

export const directionsUrl = (b: Branch) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(b.mapQuery)}`;