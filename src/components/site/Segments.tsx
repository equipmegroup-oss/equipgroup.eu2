import { ArrowUpRight } from "lucide-react";

const segments = [
  {
    label: "Cooking",
    count: "3,200",
    desc: "Ranges, ovens, grills, fryers, induction lines.",
    video: "/hero/1.mp4",
    feature: true,
  },
  { label: "Refrigeration", count: "2,800", desc: "Cold rooms, blast chillers, display units." },
  { label: "Bakery & confectionery", count: "1,400", desc: "Deck ovens, proofers, mixers, sheeters." },
  { label: "Food preparation", count: "2,100", desc: "Processors, slicers, mixers, peelers." },
  { label: "Front of house", count: "1,900", desc: "Buffet lines, holding cabinets, displays." },
  { label: "Bar & beverage", count: "1,200", desc: "Ice machines, dispensers, glasswashers." },
  { label: "Warewashing", count: "900", desc: "Pass-through, conveyor, undercounter." },
];

export function Segments() {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="container-x relative pt-20 pb-28 lg:pt-28 lg:pb-40">
        {/* Header */}
        <div className="grid grid-cols-12 gap-8 items-end mb-20">
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.3em] text-muted-foreground font-medium">
              <span className="h-px w-8 bg-foreground/30" />
              Product segments
            </div>
            <h2 className="mt-8 text-[clamp(2rem,3.6vw,3.5rem)] font-light leading-[1.02] tracking-[-0.035em] text-foreground">
              Everything a kitchen{" "}
              <span className="font-extralight text-muted-foreground">
                runs on
              </span>
              .
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:pb-3">
            <p className="text-[17px] leading-[1.6] text-muted-foreground font-light max-w-md lg:ml-auto">
              15,000+ SKUs across seven core categories — from heavy cooking
              lines to warewashing. Curated, stocked, CE and RoHS-certified.
            </p>
          </div>
        </div>

        {/* Editorial grid */}
        <div className="grid grid-cols-12 gap-6 border-t border-border pt-2">
          {/* Featured — Cooking with video */}
          <div className="col-span-12 lg:col-span-7 relative overflow-hidden rounded-xl aspect-[16/10] ring-1 ring-border bg-[color:var(--ink)]">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover opacity-90"
            >
              <source src={segments[0].video} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/85 via-[color:var(--ink)]/30 to-transparent" />
            <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-between text-white">
              <div className="text-[12px] uppercase tracking-[0.3em] text-white/70 font-medium">
                Featured segment / 01
              </div>
              <div>
                <div className="flex items-baseline gap-2 text-white/70">
                  <span className="text-[clamp(2.5rem,4vw,4rem)] font-extralight tracking-[-0.04em] leading-none text-white">
                    {segments[0].count}
                  </span>
                  <span className="text-sm font-light">+ SKUs</span>
                </div>
                <div className="mt-5 text-[clamp(2rem,3vw,3rem)] font-light tracking-[-0.03em] leading-[1.05]">
                  {segments[0].label}
                </div>
                <p className="mt-3 max-w-md text-[14px] text-white/65 leading-relaxed font-light">
                  {segments[0].desc}
                </p>
              </div>
            </div>
          </div>


          {/* Catalog CTA with video */}
          <a
            href="https://drive.google.com/file/d/1kkOorDDWvfWVvpEwkrhFctZ-1t40qm6F/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open full catalog"
            className="group col-span-12 lg:col-span-5 relative overflow-hidden rounded-xl aspect-[16/10] lg:aspect-auto ring-1 ring-border bg-[color:var(--ink)]"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700"
            >
              <source src="/hero/2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--ink)]/90 via-[color:var(--ink)]/60 to-[color:var(--ink)]/40" />
            <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-between text-white">
              <div className="flex items-start justify-between">
                <div className="text-[12px] uppercase tracking-[0.3em] text-white/60 font-medium">
                  Full catalog
                </div>
                <ArrowUpRight
                  className="h-5 w-5 text-white/70 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition"
                  strokeWidth={1.25}
                />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-[clamp(1.75rem,2.4vw,2.5rem)] font-light tracking-[-0.02em] leading-[1.1]">
                  Explore the full catalog
                </div>
              </div>
            </div>
          </a>


          {/* Remaining segments — editorial list rows */}
          <div className="col-span-12 mt-4 grid grid-cols-1 md:grid-cols-3 border-t border-border">
            {segments.slice(1).map((s, i) => {
              const col = i % 3;
              const lastRow = i >= segments.slice(1).length - (segments.slice(1).length % 3 || 3);
              return (
                <a
                  key={s.label}
                  href="#"
                  className={`group relative py-10 px-6 lg:px-8 ${
                    col > 0 ? "md:border-l border-border" : ""
                  } ${!lastRow ? "border-b border-border" : ""}`}
                >
                  <div className="flex items-baseline justify-between">
                    <div className="text-[12px] uppercase tracking-[0.3em] text-muted-foreground font-medium">
                      0{i + 2}
                    </div>
                    <ArrowUpRight
                      className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition"
                      strokeWidth={1.25}
                    />
                  </div>
                  <div className="mt-5 flex items-baseline gap-[0.06em]">
                    <span className="text-[clamp(2rem,2.6vw,2.75rem)] font-extralight tracking-[-0.04em] leading-none text-foreground">
                      {s.count}
                    </span>
                    <span className="text-[clamp(1.4rem,1.9vw,2rem)] font-semibold text-primary leading-none">+</span>
                  </div>
                  <div className="mt-5 text-[20px] font-normal tracking-[-0.01em] text-foreground">
                    {s.label}
                  </div>
                  <p className="mt-2 text-[15px] text-muted-foreground leading-[1.6] font-light">
                    {s.desc}
                  </p>
                  <div className="absolute -top-px left-0 h-px w-0 bg-primary transition-all duration-700 group-hover:w-full" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
