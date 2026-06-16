const stats = [
  {
    num: "1990",
    label: "Founded",
    desc: "Three decades of expertise in professional foodservice infrastructure.",
  },
  {
    num: "4",
    label: "Regions",
    desc: "Europe, MENA, Central Asia and North America served daily.",
  },
  {
    num: "B2B",
    label: "Exclusively",
    desc: "Dealers, distributors and kitchen designers — never end customers.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-background">
      <div className="container-x pt-28 pb-16 lg:pt-40 lg:pb-20">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 text-[12px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground/30" />
              The group
            </div>
            <h2 className="mt-8 text-[clamp(2rem,3.6vw,3.5rem)] font-light leading-[1.02] tracking-[-0.035em] text-foreground">
              One group.{" "}
              <span className="font-extralight text-muted-foreground">
                Two verticals.
              </span>
              <br />
              Many markets.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:pb-3">
            <p className="text-[17px] leading-[1.6] text-muted-foreground font-light max-w-md lg:ml-auto">
              A European corporate group operating across professional kitchen
              equipment distribution and B2B foodservice software — built on
              long-term relationships, not transactions.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 border-t border-border">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`group relative py-10 lg:py-12 px-6 lg:px-10 ${
                i > 0 ? "md:border-l border-border" : ""
              } ${i < stats.length - 1 ? "border-b md:border-b-0" : ""} border-border`}
            >
              <div className="text-[12px] uppercase tracking-[0.3em] text-muted-foreground font-medium">
                {s.label}
              </div>
              <div className="mt-6 text-[clamp(3rem,5vw,4.5rem)] font-extralight tracking-[-0.04em] text-foreground leading-none">
                {s.num}
              </div>
              <div className="mt-8 text-[16px] text-muted-foreground leading-[1.6] font-light max-w-xs">
                {s.desc}
              </div>
              <div className="absolute -top-px left-0 h-px w-0 bg-primary transition-all duration-700 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
