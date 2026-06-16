export function Brands() {
  return (
    <section className="bg-[color:var(--ink)] text-white">
      <div className="container-x pb-12 lg:pb-16 pt-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-2">
            <div className="text-[12px] uppercase tracking-[0.3em] text-white/40 font-medium">
              Letter from
              <br />
              the founder
            </div>
          </div>
          <figure className="col-span-12 lg:col-span-9 lg:col-start-3">
            <blockquote className="text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[1.25] tracking-[-0.02em] font-light text-white/90">
              <span className="text-primary mr-1">“</span>
              We built Equip Group to give dealers across Europe access to
              quality equipment{" "}
              <span className="font-extralight text-white/55">
                without the complexity
              </span>{" "}
              of dealing with dozens of manufacturers directly. Our ecosystem
              bridges the gap between production and professional
              implementation.
              <span className="text-primary ml-1">”</span>
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-4">
              <span className="h-px w-12 bg-white/30" />
              <span className="text-[12px] uppercase tracking-[0.3em] text-white/60 font-medium">
                Director · Equip Group
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
