import { Truck, Code2, Wrench } from "lucide-react";
import kitchenImg from "@/assets/hero-kitchen.jpg";

const pillars = [
  {
    n: "01",
    icon: Truck,
    title: "Distribution",
    desc: "Reliable access to stocked, CE-certified equipment from 150+ vetted factories across Europe.",
    meta: "150+ factories · EU",
  },
  {
    n: "02",
    icon: Code2,
    title: "Software",
    desc: "Digital tools for designers and dealers to specify, quote and order kitchens faster.",
    meta: "B2B SaaS · since 2018",
  },
  {
    n: "03",
    icon: Wrench,
    title: "Aftersales",
    desc: "Spare parts, technical support, and service documentation — available to dealers and their customers across all brands we distribute.",
    meta: "Parts & support · EU",
  },
];

export function HowWeOperate() {
  return (
    <section className="relative bg-[color:var(--ink)] text-white overflow-hidden">
      <div className="container-x relative pt-12 pb-28 lg:pt-16 lg:pb-40">
        <div className="grid grid-cols-12 gap-8 lg:gap-20 items-start">
          {/* Left — sticky headline */}
          <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-28">
            <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.3em] text-white/45 font-medium">
              <span className="h-px w-8 bg-white/25" />
              How we operate
            </div>
            <h2 className="mt-8 text-[clamp(2rem,3.6vw,3.5rem)] font-light leading-[1.02] tracking-[-0.035em]">
              Three pillars,{" "}
              <span className="font-extralight text-white/55">
                one infrastructure
              </span>
              .
            </h2>
            <p className="mt-8 max-w-md text-[17px] text-white/65 leading-[1.6] font-light">
              The market is fragmented — hundreds of manufacturers, thousands of
              dealers, designers working in isolation. Equip Group is the layer
              that connects them.
            </p>

            {/* Editorial image */}
            <figure className="relative mt-12 hidden lg:block">
              <div className="relative overflow-hidden rounded-sm ring-1 ring-white/10">
                <img
                  src={kitchenImg}
                  alt="Professional kitchen infrastructure"
                  className="aspect-[4/5] w-full object-cover grayscale-[15%] transition-transform duration-[1200ms] hover:scale-[1.02]"
                  loading="lazy"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 55%, rgba(10,12,20,0.55) 100%)",
                  }}
                />
                <figcaption className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[12px] uppercase tracking-[0.3em] text-white/80 font-medium">
                  <span>Infrastructure</span>
                  <span className="text-white/50">EU · 1990</span>
                </figcaption>
              </div>
              <div
                aria-hidden
                className="absolute -bottom-3 -right-3 h-20 w-20 rounded-sm border border-primary/30"
              />
            </figure>
          </div>


          {/* Right — editorial list */}
          <div className="col-span-12 lg:col-span-7 border-t border-white/10">
            {pillars.map((p) => (
              <div
                key={p.n}
                className="group relative grid grid-cols-12 gap-6 py-10 lg:py-14 border-b border-white/10"
              >
                <div className="col-span-12 lg:col-span-2">
                  <div className="text-[12px] uppercase tracking-[0.3em] text-white/45 font-medium">
                    {p.n} / {pillars.length.toString().padStart(2, "0")}
                  </div>
                  <p.icon
                    className="mt-6 h-5 w-5 text-primary"
                    strokeWidth={1.25}
                  />
                </div>

                <div className="col-span-12 lg:col-span-10">
                  <h3 className="text-[clamp(1.75rem,2.6vw,2.5rem)] font-light leading-[1.05] tracking-[-0.03em]">
                    {p.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-[17px] text-white/65 leading-[1.6] font-light">
                    {p.desc}
                  </p>
                  <div className="mt-6 text-[12px] uppercase tracking-[0.3em] text-white/50 font-medium">
                    {p.meta}
                  </div>
                </div>

                <div className="absolute -bottom-px left-0 h-px w-0 bg-primary transition-all duration-700 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
