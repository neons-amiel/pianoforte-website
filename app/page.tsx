import Image from "next/image";
import Link from "next/link";
import { branches, directionsUrl, type Branch } from "@/lib/branches";
import { categories, countAt, formatPHP, inventory, type Category } from "@/lib/inventory";
import { site } from "@/lib/site";
import { InstrumentArt } from "@/components/InstrumentArt";
import { Eyebrow, Flourish, KeyboardRule } from "@/components/Ornaments";
import { Showroom } from "@/components/Showroom";
import { JsonLd } from "@/components/JsonLd";
import { HouseBrand } from "@/components/HouseBrand";
import { houseFromPrice } from "@/lib/house";

const regions: Branch["region"][] = ["Luzon", "Visayas", "Mindanao"];
const offerLabel: Record<Category, string> = {
  Grand: "Grand Pianos",
  Upright: "Upright Pianos",
  Digital: "Digital Pianos",
  Violin: "Violins & Strings",
};

export default function Home() {
  return (
    <>
      <JsonLd />

      {site.isPitch && (
        <div className="bg-ink px-4 py-2 text-center text-[11px] uppercase tracking-[0.28em] text-brass-light">
          A website concept for {site.name} · Sample inventory &amp; prices
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" aria-label={`${site.name} home`}>
            <Image src="/brand/pianoforte-wordmark-black.svg" alt={site.name} width={220} height={41} priority unoptimized className="h-9 w-auto" />
          </Link>
          <nav className="hidden gap-9 text-xs uppercase tracking-[0.24em] md:flex">
            <a href="#our-pianos" className="hover:text-brass">Our Pianos</a>
            <a href="#collection" className="hover:text-brass">Collection</a>
            <a href="#showrooms" className="hover:text-brass">Showrooms</a>
            <a href="#visit" className="hover:text-brass">Visit</a>
          </nav>
          <a href={site.messenger} target="_blank" rel="noopener noreferrer" className="border border-ink px-4 py-2 text-[11px] uppercase tracking-[0.24em] transition-colors hover:bg-ink hover:text-paper">
            Inquire
          </a>
        </div>
      </header>

      <main>
        {/* Hero — light, logo-forward (logo hidden on mobile) */}
        <section className="paper-grain relative overflow-hidden bg-paper">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pt-12 pb-12 md:pt-24 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <Eyebrow>Pianos &amp; Strings · 11 Showrooms Nationwide</Eyebrow>
              <h1 className="mt-6 font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
                Find the piano <br className="hidden sm:block" />
                <span className="italic text-brass">meant for you</span> —<br />
                wherever it waits.
              </h1>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-ink-soft">
                Grand, upright and digital pianos — plus violins — across eleven showrooms from Baguio to Davao, and our main branch in Tarlac. See the price, see where it stands, and find your way there.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#collection" className="bg-ink px-7 py-4 text-xs uppercase tracking-[0.26em] text-paper transition-colors hover:bg-brass">
                  Browse the collection
                </a>
                <a href="#showrooms" className="border border-ink px-7 py-4 text-xs uppercase tracking-[0.26em] transition-colors hover:bg-ink hover:text-paper">
                  Find a showroom
                </a>
              </div>
              <a href="#our-pianos" className="group mt-8 inline-flex items-center gap-3 text-sm">
                <span className="bg-brass px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-paper">New</span>
                <span className="border-b border-transparent group-hover:border-ink">
                  Our own <span className="font-display text-base italic">PForte</span> digital pianos — from {formatPHP(houseFromPrice)} →
                </span>
              </a>
            </div>
            <div className="relative mx-auto hidden w-full max-w-md lg:block">
              <div className="absolute -inset-4 border border-brass/40" aria-hidden />
              <div className="absolute -inset-8 border border-brass/15" aria-hidden />
              <div className="relative bg-paper p-6">
                <Image src="/brand/pianoforte-logo-light.svg" alt={`${site.name} logo`} width={828} height={828} priority unoptimized className="h-auto w-full" />
              </div>
            </div>
          </div>

          {/* What they offer */}
          <div className="mx-auto max-w-7xl px-6 pb-16">
            <ul className="grid grid-cols-2 border-t border-l border-line md:grid-cols-4">
              {categories.map((c) => (
                <li key={c} className="border-r border-b border-line">
                  <a href="#collection" className="group flex h-full flex-col items-center gap-3 bg-paper px-4 py-6 text-center transition-colors hover:bg-ivory">
                    <InstrumentArt type={c} className="h-20 w-full max-w-[160px] text-ink transition-transform duration-500 group-hover:scale-105" />
                    <span className="font-display text-xl">{offerLabel[c]}</span>
                    <span className="text-[11px] uppercase tracking-[0.24em] text-brass">
                      {inventory.filter((i) => i.type === c).length} in stock
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <HouseBrand />

        <KeyboardRule />

        {/* Collection */}
        <section id="collection" className="scroll-mt-20 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <Eyebrow>The Collection</Eyebrow>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">One catalogue, <span className="italic">every showroom</span></h2>
              <Flourish className="mx-auto mt-5 text-brass" />
            </div>
            <Showroom />
          </div>
        </section>

        {/* Showrooms */}
        <section id="showrooms" className="paper-grain scroll-mt-20 border-t border-line bg-ivory px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 text-center">
              <Eyebrow>Our Showrooms</Eyebrow>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">From Baguio <span className="italic">to</span> Davao</h2>
              <Flourish className="mx-auto mt-5 text-brass" />
            </div>
            <div className="grid gap-12 md:grid-cols-3">
              {regions.map((r) => (
                <div key={r}>
                  <h3 className="border-b border-ink pb-3 font-display text-2xl italic text-brass">{r}</h3>
                  <ul>
                    {branches.filter((b) => b.region === r).map((b) => (
                      <li key={b.slug} className="flex items-baseline justify-between gap-4 border-b border-line py-4">
                        <div>
                          <p className="font-display text-xl">
                            {b.name}
                            {b.isMain && <span className="ml-2 align-middle text-[10px] uppercase tracking-[0.2em] text-brass">Main</span>}
                          </p>
                          <p className="text-sm italic text-ink">{b.venue}</p>
                          <p className="mt-0.5 text-xs leading-relaxed text-ink-soft">{b.note ?? b.address}</p>
                        </div>
                        <div className="shrink-0 text-right">
                          <p className="text-xs text-ink-soft">{countAt(b.slug)} in stock</p>
                          <a href={directionsUrl(b)} target="_blank" rel="noopener noreferrer" className="block text-[11px] uppercase tracking-[0.2em] text-brass hover:underline">
                            Directions →
                          </a>
                          <a href={b.facebook} target="_blank" rel="noopener noreferrer" className="block text-[11px] uppercase tracking-[0.2em] text-ink-soft hover:text-brass hover:underline">
                            Facebook ↗
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <Eyebrow>In Three Movements</Eyebrow>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">From first look <span className="italic">to first note</span></h2>
            </div>
            <ol className="grid gap-10 md:grid-cols-3">
              {[
                ["I", "Browse", "See every instrument across all eleven showrooms — with honest prices, side by side."],
                ["II", "Locate", "Know exactly which showroom holds the one you love, and how to get there."],
                ["III", "Play", "Visit, sit, and play it yourself — or message us to arrange a viewing."],
              ].map(([n, t, d]) => (
                <li key={n} className="border-t border-ink pt-6">
                  <p className="font-display text-5xl italic text-brass">{n}</p>
                  <h3 className="mt-3 font-display text-2xl">{t}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Visit / CTA */}
        <section id="visit" className="paper-grain scroll-mt-20 border-t border-line bg-ivory px-6 py-24 text-center">
          <div className="mx-auto max-w-3xl">
            <InstrumentArt type="Violin" className="mx-auto h-28 text-ink" />
            <h2 className="mt-6 font-display text-4xl md:text-6xl">Come hear it <span className="italic">for yourself.</span></h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft">
              Pianos, violins and more — waiting in a showroom near you. Send us a message and we&apos;ll tell you what&apos;s in stock today.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={site.messenger} target="_blank" rel="noopener noreferrer" className="bg-ink px-8 py-4 text-xs uppercase tracking-[0.26em] text-paper hover:bg-brass">
                Message us
              </a>
              <a href={`mailto:${site.email}`} className="border border-ink px-8 py-4 text-xs uppercase tracking-[0.26em] hover:bg-ink hover:text-paper">
                Email the team
              </a>
            </div>
          </div>
        </section>
      </main>

      <KeyboardRule octaves={10} />
      <footer className="bg-ink px-6 py-14 text-paper/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-sm md:flex-row">
          <Image src="/brand/pianoforte-wordmark-white.svg" alt={site.name} width={260} height={49} unoptimized className="h-11 w-auto" />
          <nav className="flex gap-8 text-xs uppercase tracking-[0.22em]">
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brass-light">Facebook</a>
            <a href={site.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-brass-light">YouTube</a>
            <a href={`mailto:${site.email}`} className="hover:text-brass-light">Email</a>
          </nav>
        </div>
      </footer>
    </>
  );
}