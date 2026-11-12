export const site = {
  name: "Piano Forte Philippines",
  shortName: "Piano Forte",
  tagline: "Every piano. Every branch. One place.",
  description:
    "Browse Piano Forte Philippines' grand, upright and digital pianos across 11 branches nationwide — see where each piano is, its price, and get directions to the showroom.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pianoforte-website.vercel.app",
  email: "Pfortemusic@yahoo.com",
  facebook: "https://www.facebook.com/profile.php?id=61552110561075",
  messenger: "https://m.me/61552110561075",
  youtube: "https://www.youtube.com/@pianofortephilippines5640",
  // While this is a pitch/concept: shows the concept banner and keeps search engines out.
  // Flip to false once Piano Forte signs off and real inventory is in.
  isPitch: true,
} as const;
