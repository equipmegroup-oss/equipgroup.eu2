import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative text-white overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* soft glow orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--brand) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-52 -right-32 h-[640px] w-[640px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--brand) 0%, transparent 70%)" }}
      />
      {/* fine grain dots */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grain-light"
      />

      <div className="container-x relative py-28 lg:py-44">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.3em] text-white/45 font-medium">
              <span className="h-px w-8 bg-white/25" />
              Get in touch
            </div>
            <h2 className="mt-10 text-[clamp(2.5rem,4.4vw,4.5rem)] font-light leading-[0.98] tracking-[-0.04em]">

              Where equipment{" "}
              <span className="font-extralight text-white/55">
                meets
              </span>{" "}
              technology.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pb-3">
            <p className="text-[17px] leading-[1.6] text-white/65 font-light max-w-sm lg:ml-auto">
              For partnership, distribution and press enquiries — reach the
              headquarters directly. We respond within one business day.
            </p>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-10 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5">
            <a
              href="mailto:sales@equip.me"
              className="group inline-flex items-baseline gap-3 text-[clamp(1.5rem,2.4vw,2.25rem)] font-light tracking-[-0.02em] text-white hover:text-primary transition"
            >
              sales@equip.me
              <ArrowUpRight
                className="h-5 w-5 transition group-hover:-translate-y-1 group-hover:translate-x-1"
                strokeWidth={1.25}
              />
            </a>
            <div className="mt-3 text-[12px] uppercase tracking-[0.3em] text-white/40 font-medium">
              Direct line to HQ
            </div>
          </div>

          <div className="col-span-6 lg:col-span-3">
            <div className="text-[12px] uppercase tracking-[0.3em] text-white/40 font-medium">
              Headquarters
            </div>
            <p className="mt-4 text-[16px] font-light text-white/85 leading-[1.6]">
              Tallinn, Estonia
              <br />
              <span className="text-white/45">EU · 09:00 – 18:00 (GMT+3) EET</span>

            </p>
          </div>

          <div className="col-span-6 lg:col-span-4">
            <div className="text-[12px] uppercase tracking-[0.3em] text-white/40 font-medium">
              Partnership
            </div>
            <p className="mt-4 text-[16px] font-light text-white/85 leading-[1.6]">
              Dealers · distributors · designers
              <br />
              <span className="text-white/45">B2B only — no end users.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
