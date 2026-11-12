"use client";

import { useMemo, useRef, useState } from "react";
import { branches, getBranch, mapEmbedUrl, directionsUrl } from "@/lib/branches";
import { categories, countAt, formatPHP, inventory, type Category } from "@/lib/inventory";
import { site } from "@/lib/site";
import { InstrumentArt } from "./InstrumentArt";

type Filter = "All" | Category;
type Sort = "featured" | "low" | "high";
const numerals = ["I", "II", "III", "IV"];
const plural: Record<Category, string> = { Grand: "Grands", Upright: "Uprights", Digital: "Digitals", Violin: "Violins" };

export function Showroom() {
  const [filter, setFilter] = useState<Filter>("All");
  const [branch, setBranch] = useState("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("featured");
  const [mapBranch, setMapBranch] = useState(branches[0].slug);
  const mapRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = inventory.filter(
      (i) =>
        (filter === "All" || i.type === filter) &&
        (branch === "all" || i.branch === branch) &&
        (!q || `${i.brand} ${i.model} ${i.finish}`.toLowerCase().includes(q)),
    );
    if (sort === "low") return [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") return [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [filter, branch, query, sort]);

  const active = getBranch(mapBranch) ?? branches[0];

  function showOnMap(slug: string) {
    setMapBranch(slug);
    if (window.matchMedia("(max-width: 1023px)").matches) {
      mapRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function chooseBranch(slug: string) {
    setBranch(slug);
    if (slug !== "all") setMapBranch(slug);
  }

  return (
    <div>
      {/* Category tabs, set like a concert programme */}
      <div role="tablist" aria-label="Instrument type" className="flex flex-wrap items-end justify-center gap-x-8 gap-y-3 border-b border-line pb-5">
        {(["All", ...categories] as Filter[]).map((c, i) => {
          const selected = filter === c;
          return (
            <button
              key={c}
              role="tab"
              aria-selected={selected}
              onClick={() => setFilter(c)}
              className={`group relative pb-1 font-display text-xl transition-colors ${selected ? "text-ink" : "text-ink-soft/60 hover:text-ink"}`}
            >
              {i > 0 && <span className="mr-2 text-sm italic text-brass">{numerals[i - 1]}.</span>}
              {c === "All" ? "The Full Collection" : plural[c as Category]}
              <span className={`absolute inset-x-0 -bottom-[21px] h-px bg-ink transition-opacity ${selected ? "opacity-100" : "opacity-0"}`} />
            </button>
          );
        })}
      </div>

      {/* Refinements */}
      <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto_auto]">
        <label className="sr-only" htmlFor="q">Search</label>
        <input
          id="q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a brand, model or finish — e.g. “Yamaha U3”"
          className="h-11 border border-line bg-paper px-4 font-display text-lg italic placeholder:text-ink-soft/50 focus:border-ink focus:outline-none"
        />
        <select
          aria-label="Showroom"
          value={branch}
          onChange={(e) => chooseBranch(e.target.value)}
          className="h-11 border border-line bg-paper px-3 text-sm tracking-wide focus:border-ink focus:outline-none"
        >
          <option value="all">All {branches.length} locations</option>
          {branches.map((b) => (
            <option key={b.slug} value={b.slug}>{b.name} ({countAt(b.slug)})</option>
          ))}
        </select>
        <select
          aria-label="Sort"
          value={sort}
          onChange={(e) => setSort(e.target.value as Sort)}
          className="h-11 border border-line bg-paper px-3 text-sm tracking-wide focus:border-ink focus:outline-none"
        >
          <option value="featured">Featured</option>
          <option value="low">Price: low to high</option>
          <option value="high">Price: high to low</option>
        </select>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]">
        {/* Results */}
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.25em] text-ink-soft">
            {results.length} {results.length === 1 ? "instrument" : "instruments"} available
          </p>
          {results.length === 0 ? (
            <div className="border border-dashed border-line px-6 py-16 text-center">
              <p className="font-display text-2xl italic">Nothing here just yet.</p>
              <p className="mt-2 text-sm text-ink-soft">Try another showroom, or message us — the piano you want may be on its way.</p>
            </div>
          ) : (
            <ul className="grid gap-6 sm:grid-cols-2">
              {results.map((i) => {
                const b = getBranch(i.branch)!;
                const onMap = i.branch === mapBranch;
                return (
                  <li key={i.slug}>
                    <article className={`group flex h-full flex-col border bg-paper transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(14,13,12,0.35)] ${onMap ? "border-brass" : "border-line"}`}>
                      <div className="relative bg-ivory px-8 pt-8 pb-4 text-ink">
                        <InstrumentArt type={i.type} className="mx-auto h-36 w-full transition-transform duration-500 group-hover:scale-[1.03]" />
                        <span className="absolute left-4 top-4 text-[10px] uppercase tracking-[0.28em] text-ink-soft">
                          {i.condition}{i.year ? ` · ${i.year}` : ""}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-ink-soft">{i.type} · {i.finish}</p>
                        <h3 className="mt-1 font-display text-[1.7rem] leading-tight">
                          {i.brand} <span className="italic">{i.model}</span>
                        </h3>
                        <p className="mt-2 font-display text-2xl text-brass">{formatPHP(i.price)}</p>
                        <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4 text-sm">
                          <button onClick={() => showOnMap(i.branch)} className="flex items-center gap-2 text-left hover:text-brass">
                            <PinIcon /> <span>At <strong className="font-medium">{b.name}</strong></span>
                          </button>
                          <a href={directionsUrl(b)} target="_blank" rel="noopener noreferrer" className="shrink-0 text-xs uppercase tracking-[0.2em] underline-offset-4 hover:underline">
                            Directions
                          </a>
                        </div>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Map panel */}
        <aside ref={mapRef} className="scroll-mt-24 lg:sticky lg:top-24 lg:self-start">
          <div className="border border-ink bg-paper">
            <div className="px-6 pt-6">
              <p className="text-[11px] uppercase tracking-[0.3em] text-brass">
                Now viewing{active.isMain ? " · Main branch" : ""}
              </p>
              <h3 className="mt-1 font-display text-3xl">{active.name}</h3>
              <p className="mt-1 font-display text-lg italic">{active.venue}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{active.address}</p>
              {active.note && <p className="mt-1 text-sm text-ink-soft">{active.note}</p>}
              <p className="mt-3 flex items-baseline justify-between gap-3 text-sm">
                <span>
                  <span className="font-display text-xl">{countAt(active.slug)}</span> instruments waiting here
                </span>
                <a href={active.facebook} target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-[0.2em] text-brass hover:underline">
                  Facebook ↗
                </a>
              </p>
            </div>
            <div className="mt-5 border-y border-line">
              <iframe
                key={active.slug}
                title={`Map to Piano Forte ${active.name}, ${active.venue}`}
                src={mapEmbedUrl(active)}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full [filter:grayscale(1)_contrast(1.05)_sepia(0.15)]"
              />
            </div>
            <div className="grid grid-cols-2">
              <a href={directionsUrl(active)} target="_blank" rel="noopener noreferrer" className="border-r border-line px-4 py-4 text-center text-xs uppercase tracking-[0.22em] hover:bg-ink hover:text-paper">
                Get directions
              </a>
              <a href={site.messenger} target="_blank" rel="noopener noreferrer" className="px-4 py-4 text-center text-xs uppercase tracking-[0.22em] hover:bg-ink hover:text-paper">
                Book a viewing
              </a>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {branches.map((b) => (
              <button
                key={b.slug}
                onClick={() => setMapBranch(b.slug)}
                className={`border px-3 py-1 text-xs tracking-wide transition-colors ${b.slug === mapBranch ? "border-ink bg-ink text-paper" : "border-line hover:border-ink"}`}
              >
                {b.name}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4 text-brass" fill="none" stroke="currentColor" strokeWidth={1.2} aria-hidden>
      <path d="M8 15s5-4.6 5-8.5A5 5 0 0 0 3 6.5C3 10.4 8 15 8 15Z" />
      <circle cx="8" cy="6.5" r="1.7" />
    </svg>
  );
}