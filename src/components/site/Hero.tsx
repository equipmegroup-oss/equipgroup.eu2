import { ArrowUpRight } from "lucide-react";
import hurakanLogo from "@/assets/logos/hurakan.png";
import tatraLogo from "@/assets/logos/tatra.png";
import apachLogo from "@/assets/logos/apach.png";

const brands = [
  { name: "Hurakan", url: "https://hurakan.eu/", aria: "Visit Hurakan website", src: hurakanLogo },
  { name: "Tatra", url: "https://tatra.center/", aria: "Visit Tatra website", src: tatraLogo },
  { name: "Apach", url: "https://apach.it/", aria: "Visit Apach website", src: apachLogo },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden text-white"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grain-light" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[700px] w-[700px] rounded-full blur-3xl opacity-[0.08]"
        style={{ background: "radial-gradient(circle, var(--brand) 0%, transparent 70%)" }}
      />

      <div className="container-x relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center lg:items-stretch">
          {/* Left */}
          <div className="col-span-12 lg:col-span-7 relative">
            <div className="inline-flex items-center gap-2.5 text-[12px] font-medium uppercase tracking-[0.3em] text-white/60">
              <span className="h-px w-8 bg-white/30" />
              European corporate group
            </div>

            <h1 className="mt-8 text-[clamp(2rem,3.6vw,3.5rem)] font-light leading-[1.02] tracking-[-0.035em]">
              Infrastructure for the{" "}
              <span className="font-extralight text-primary">professional kitchen</span>{" "}
              market.
            </h1>

            <p className="mt-8 max-w-lg text-[17px] text-white/65 leading-[1.6] font-light">
              A European group operating across professional kitchen equipment
              distribution and B2B foodservice software — since 1990.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-3">
              <a
                href="#businesses"
                className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-[14px] font-medium text-[color:var(--ink)] hover:bg-white/90 transition"
              >
                Explore our businesses
                <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-[14px] font-medium text-white/85 hover:bg-white/5 transition"
              >
                Contact us
              </a>
            </div>

            <div className="mt-16 rounded-lg bg-white px-5 py-4 shadow-sm ring-1 ring-black/5 max-w-xl">
              <div className="text-[10px] uppercase tracking-[0.28em] text-[color:var(--ink)]/70 font-medium">

                Our global brands
              </div>
              <div className="mt-3 grid grid-cols-3 gap-px bg-black/5 rounded-md overflow-hidden">
                {brands.map((b) => (
                  <a
                    key={b.name}
                    href={b.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={b.aria}
                    className="bg-white py-3 px-3 flex items-center justify-center transition hover:bg-black/[0.02]"
                  >
                    <img
                      src={b.src}
                      alt={`${b.name} logo`}
                      className="h-6 w-auto object-contain"
                      loading="lazy"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — kitchen video */}
          <div className="col-span-12 lg:col-span-5 lg:flex">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:w-full rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/hero/equipme.webm" type="video/webm" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/60 via-transparent to-[color:var(--ink)]/20" />
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-white/85 font-medium">
                <span>Equip Group</span>
                <span className="h-px flex-1 mx-4 bg-white/10" />
                <span>EU</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-[11px] uppercase tracking-[0.3em] text-white/85 font-medium">
                <span>Professional Kitchen</span>
                <span>Since 1990</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
