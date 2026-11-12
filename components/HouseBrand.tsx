import { housePianos } from "@/lib/house";
import { formatPHP } from "@/lib/inventory";
import { site } from "@/lib/site";
import { InstrumentArt } from "./InstrumentArt";
import { Eyebrow, Flourish } from "./Ornaments";

export function HouseBrand() {
  return (
    <section id="our-pianos" className="paper-grain scroll-mt-20 border-y border-line bg-ivory px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Eyebrow>Made by Piano Forte</Eyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Our own pianos, <span className="italic">under our own name</span>
          </h2>
          <Flourish className="mx-auto mt-5 text-brass" />
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Brand-new digital pianos with a full 88 weighted keys — made for beginners through advanced players.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {housePianos.map((p) => (
            <article key={p.slug} className="relative flex flex-col border border-ink bg-paper">
              {p.badge && (
                <span className="absolute right-0 top-0 bg-ink px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-paper">
                  {p.badge}
                </span>
              )}
              <div className="px-10 pt-12 pb-2">
                <InstrumentArt type="Digital" className="mx-auto h-40 w-full text-ink" />
              </div>
              <div className="flex flex-1 flex-col px-8 pb-8">
                <p className="text-[11px] uppercase tracking-[0.28em] text-ink-soft">{p.tagline}</p>
                <h3 className="mt-2 font-display text-4xl">
                  PForte <span className="italic">{p.model}</span>
                </h3>
                <p className="mt-3 flex items-baseline gap-3">
                  <span className="font-display text-4xl text-brass">{formatPHP(p.price)}</span>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink-soft">{p.priceLabel}</span>
                </p>
                <ul className="mt-6 divide-y divide-line border-y border-line text-sm">
                  {p.highlights.map((h) => (
                    <li key={h} className="py-2.5">{h}</li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <a
                    href={site.messenger}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-ink px-6 py-4 text-center text-xs uppercase tracking-[0.26em] text-paper transition-colors hover:bg-brass"
                  >
                    Reserve the {p.model}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink-soft">
          Both include a <strong className="font-medium text-ink">6-month warranty</strong> and{" "}
          <strong className="font-medium text-ink">7-day replacement</strong> · 220V direct plug
        </p>
      </div>
    </section>
  );
}