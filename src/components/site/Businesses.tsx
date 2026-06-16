import { ArrowRight } from "lucide-react";
import equipmeLogo from "@/assets/logos/equipme.png";
import hurakanLogo from "@/assets/logos/hurakan.png";
import equipcadLogo from "@/assets/logos/equipcad.png";

const items = [
  {
    name: "Equip.me",
    logoSrc: equipmeLogo,
    logoH: "h-8",
    desc: "Dealer-facing distribution platform connecting dealers across 40+ countries with 150+ partner factories.",
    url: "https://equip.me",
  },
  {
    name: "Hurakan",
    logoSrc: hurakanLogo,
    logoH: "h-9",
    desc: "Proprietary professional kitchen equipment brand — CE-certified, distributed exclusively through Equip.me.",
    url: "https://hurakan.eu",
  },
  {
    name: "EquipCAD",
    logoSrc: equipcadLogo,
    logoH: "h-9",
    desc: "AutoCAD-based platform for foodservice space design with a live library of 3D equipment models.",
    url: "https://equipcad.com",
  },
  {
    name: "EquipQuote",
    logoNode: (
      <span className="font-display text-[30px] leading-none font-light tracking-[-0.02em] text-foreground">
        equip<span className="font-semibold">Quote</span>
      </span>
    ),
    desc: "High-performance quoting tool for dealers — compare millions of products across 220+ brands.",
    url: "#",
  },
];


export function Businesses() {
  return (
    <section id="businesses" className="bg-background">
      <div className="container-x pt-16 pb-28 lg:pt-20 lg:pb-40">
        <div className="grid grid-cols-12 gap-8 items-end mb-20">
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.3em] text-muted-foreground font-medium">
              <span className="h-px w-8 bg-foreground/30" />
              The ecosystem
            </div>
            <h2 className="mt-8 text-[clamp(2rem,3.6vw,3.5rem)] font-light leading-[1.05] tracking-[-0.035em] text-foreground">
              Four businesses,{" "}
              <span className="text-muted-foreground font-extralight">
                one infrastructure
              </span>
              .
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:pb-3">
            <p className="text-[17px] leading-[1.6] text-muted-foreground font-light max-w-md lg:ml-auto">
              Integrating physical distribution and digital tools to serve the
              foodservice equipment market end-to-end.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-border">
          {items.map((b, i) => (
            <a
              key={b.name}
              href={b.url}
              target={b.url.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className={`group relative flex flex-col py-12 px-6 lg:px-8 ${
                i > 0 ? "lg:border-l border-border" : ""
              } ${i < items.length - 1 ? "border-b lg:border-b-0" : ""} border-border`}
            >
              <div className="flex items-center justify-between">
                <div className="text-[12px] uppercase tracking-[0.3em] text-muted-foreground font-medium">
                  0{i + 1} / 04
                </div>
              </div>
              <div className="mt-12 min-h-[44px] flex items-center">
                {b.logoSrc ? (
                  <img src={b.logoSrc} alt={`${b.name} logo`} className={`${b.logoH} w-auto object-contain`} loading="lazy" />
                ) : (
                  b.logoNode
                )}
              </div>

              <p className="mt-5 flex-1 text-[15px] text-muted-foreground leading-[1.6] font-light">
                {b.desc}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.3em] text-foreground/70 group-hover:text-primary group-hover:gap-3 transition-all font-medium">
                Visit <ArrowRight className="h-3 w-3" strokeWidth={1.5} />
              </div>
              <div className="absolute -top-px left-0 h-px w-0 bg-primary transition-all duration-700 group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
