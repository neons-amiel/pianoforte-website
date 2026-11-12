import { branches } from "@/lib/branches";
import { site } from "@/lib/site";

// Structured data: one Organization with each location as a MusicStore (local SEO).
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    sameAs: [site.facebook, site.youtube],
    department: branches.map((b) => ({
      "@type": "MusicStore",
      name: `${site.name} — ${b.name}`,
      address: { "@type": "PostalAddress", streetAddress: b.address, addressCountry: "PH" },
      hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.mapQuery)}`,
      sameAs: b.facebook,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}