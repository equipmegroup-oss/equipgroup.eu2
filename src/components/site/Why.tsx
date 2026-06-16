const items = [
  {
    n: "01",
    label: "Segment expertise",
    note: "Restaurants, hotels, cafés, canteens, and catering operations — all major HoReCa formats covered.",
  },
  {
    n: "02",
    label: "Global manufacturer network",
    note: "Equipment sourced from vetted factories across Europe and Asia, built to CE standards.",
  },
  {
    n: "03",
    label: "Quality-controlled sourcing",
    note: "Every brand in our network meets defined compliance and documentation requirements before listing.",
  },
  {
    n: "04",
    label: "Dealers only",
    note: "We work exclusively with trade partners — no end-user sales, no retail pricing conflicts.",
  },
  {
    n: "05",
    label: "CE-certified products",
    note: "Full regulatory compliance across every SKU we distribute.",
  },
  {
    n: "06",
    label: "150+ partner factories",
    note: "Direct relationships with manufacturers across EU and Asia — broad category coverage, consistent supply.",
  },
  {
    n: "07",
    label: "Regional warehouse network",
    note: "Stock held across four locations — Vilnius, Athens, Tbilisi, and the USA — shipped via trusted 3PL partners.",
  },
  {
    n: "08",
    label: "Trade-wide presence",
    note: "Active across 40+ countries and represented at major HoReCa events across Europe.",
  },
  {
    n: "09",
    label: "Multi-language documentation",
    note: "Manuals, specs, and warranties available in local languages across all key markets.",
  },
];

export function Why() {
  return (
    <section className="bg-background">
      <div className="container-x pt-28 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.3em] text-muted-foreground font-medium">
              <span className="h-px w-8 bg-foreground/30" />
              Our principles
            </div>
            <h2 className="mt-8 text-[clamp(2rem,3.6vw,3.5rem)] font-light leading-[1.02] tracking-[-0.035em] text-foreground">
              Built for the end user,{" "}
              <span className="font-extralight text-muted-foreground">
                supplied through trusted dealers
              </span>
              .
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:pb-3">
            <p className="text-[17px] leading-[1.6] text-muted-foreground font-light max-w-md lg:ml-auto">
              Equip Group operates a strict B2B-only policy, working exclusively
              with authorized dealers to ensure professional installation and
              service at the foodservice end-user level.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 border-t border-border">
          {items.map((it, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            const lastRow = row === Math.floor((items.length - 1) / 3);
            return (
              <div
                key={it.label}
                className={`group relative py-10 px-6 lg:px-8 ${
                  col > 0 ? "md:border-l border-border" : ""
                } ${!lastRow ? "border-b border-border" : ""}`}
              >
                <div className="text-[12px] uppercase tracking-[0.3em] text-muted-foreground font-medium">
                  {it.n}
                </div>
                <div className="mt-5 text-[20px] font-normal tracking-[-0.01em] text-foreground leading-snug">
                  {it.label}
                </div>
                <p className="mt-3 text-[15px] text-muted-foreground leading-[1.6] font-light">
                  {it.note}
                </p>
                <div className="absolute -top-px left-0 h-px w-0 bg-primary transition-all duration-700 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
