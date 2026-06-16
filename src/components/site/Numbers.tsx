const stats = [
  { k: "1990", v: "Founded" },
  { k: "150", v: "Factories", suf: "+" },
  { k: "40", v: "Countries", suf: "+" },
  { k: "220", v: "Brands", suf: "+" },
  { k: "2K", v: "Dealers", suf: "+" },
  { k: "300", v: "Deliveries", suf: "+" },
  { k: "4", v: "Warehouses" },
];

export function Numbers() {
  return (
    <section id="numbers" className="bg-[color:var(--ink)] text-white">
      <div className="container-x pt-24 lg:pt-32 pb-10">
        <div className="flex items-center gap-4 text-[12px] uppercase tracking-[0.3em] text-white/45 font-medium">
          <span className="h-px w-8 bg-white/25" />
          By the numbers
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-7 border-t border-white/10">
          {stats.map((s, i) => (
            <div
              key={s.v}
              className={`group relative py-10 px-5 lg:px-6 flex flex-col items-center text-center ${
                i !== 0 ? "md:border-l border-white/10" : ""
              } ${i < stats.length - 1 ? "border-b md:border-b-0" : ""} border-white/10`}
            >
              <div className="flex items-baseline justify-center gap-[0.06em]">
                <span className="text-[clamp(2.5rem,3.4vw,3.75rem)] font-extralight tracking-[-0.04em] leading-none">
                  {s.k}
                </span>
                {s.suf && (
                  <span className="text-[clamp(1.75rem,2.4vw,2.5rem)] font-semibold text-primary leading-none">
                    {s.suf}
                  </span>
                )}
              </div>
              <div className="mt-5 text-[12px] uppercase tracking-[0.3em] text-white/55 font-medium">
                {s.v}
              </div>
              <div className="absolute -top-px left-0 h-px w-0 bg-primary transition-all duration-700 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
