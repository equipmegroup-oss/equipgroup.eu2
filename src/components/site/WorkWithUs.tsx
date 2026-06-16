import { ArrowUpRight } from "lucide-react";
import dealerImg from "@/assets/partners/dealer.jpg";
import designerImg from "@/assets/partners/designer.jpg";
import manufacturerImg from "@/assets/partners/manufacturer.jpg";

const paths = [
  {
    n: "01",
    tag: "For dealers",
    title: "Become a dealer",
    desc: "Apply through equip.me to access 150+ partner factories, competitive wholesale pricing, four European warehouses, and a dedicated export manager.",
    cta: "Apply at equip.me",
    href: "https://equip.me",
    img: dealerImg,
    alt: "Dealer partnership with professional kitchen equipment",
  },
  {
    n: "02",
    tag: "For designers",
    title: "Register as a designer",
    desc: "List your practice on EquipCaD, access a live library of 3D equipment models from 220+ brands, and receive project enquiries across Europe.",
    cta: "Join EquipCaD",
    href: "https://equipcad.com",
    img: designerImg,
    alt: "Kitchen designer working with professional foodservice planning tools",
  },
  {
    n: "03",
    tag: "For manufacturers",
    title: "List your brand",
    desc: "Submit your catalogue for inclusion in EquipCaD and EquipQuote — direct exposure to 2,000+ dealer companies and 300+ designers.",
    cta: "Contact us",
    href: "#contact",
    img: manufacturerImg,
    alt: "Manufacturer partnership for professional kitchen equipment",
  },
];



export function WorkWithUs() {
  return (
    <section id="partners" className="bg-background">
      <div className="container-x py-28 lg:py-40">
        {/* Header */}
        <div className="grid grid-cols-12 gap-8 items-end mb-20">
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.3em] text-muted-foreground font-medium">
              <span className="h-px w-8 bg-foreground/30" />
              Work with us
            </div>
            <h2 className="mt-8 text-[clamp(2rem,3.6vw,3.5rem)] font-light leading-[1.05] tracking-[-0.035em] text-foreground">
              Three ways to partner with{" "}
              <span className="text-muted-foreground font-extralight">
                Equip Group
              </span>
              .
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:pb-3">
            <p className="text-[17px] leading-[1.6] text-muted-foreground font-light max-w-md lg:ml-auto">
              Dealers, designers and manufacturers — each with a dedicated path
              into the Equip Group ecosystem.
            </p>
          </div>
        </div>

        {/* Editorial list */}
        <div className="border-t border-border">
          {paths.map((p) => (
            <a
              key={p.n}
              href={p.href}
              target={p.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group grid grid-cols-12 gap-6 items-center border-b border-border py-12 lg:py-16 transition-colors"
            >
              {/* Number */}
              <div className="col-span-2 md:col-span-1 text-2xl md:text-3xl font-extralight tracking-[-0.04em] text-muted-foreground/60 group-hover:text-primary transition">
                {p.n}
              </div>

              {/* Title block */}
              <div className="col-span-10 md:col-span-4">
                <div className="text-[12px] uppercase tracking-[0.3em] text-muted-foreground font-medium">
                  {p.tag}
                </div>
                <div className="mt-4 text-[clamp(1.5rem,2.2vw,2rem)] font-light leading-[1.1] tracking-[-0.03em] text-foreground group-hover:translate-x-2 transition-transform duration-500">
                  {p.title}
                </div>
              </div>

              {/* Image preview (revealed on hover, lg+) */}
              <div className="hidden lg:block col-span-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-secondary opacity-60 group-hover:opacity-100 transition">
                  <img
                    src={p.img}
                    alt={p.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                </div>
              </div>

              {/* Description + CTA */}
              <div className="col-span-12 md:col-span-7 lg:col-span-3">
                <p className="text-[15px] text-muted-foreground leading-[1.6] font-light">
                  {p.desc}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-[14px] font-medium text-primary">
                  {p.cta}
                  <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex col-span-12 md:col-span-1 justify-end">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border group-hover:bg-primary group-hover:border-primary group-hover:text-white transition">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
