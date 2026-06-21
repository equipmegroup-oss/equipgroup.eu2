import logo from "@/assets/equipme-logo.png";


const offices = ["Tallinn — HQ", "Geneva", "Bucharest", "Belgrade"];
const warehouses = ["Vilnius", "Athens", "Tbilisi", "USA"];

export function Footer() {
  return (
    <footer className="bg-[color:var(--ink)] text-white/70">
      <div className="container-x pt-20 pb-10">
        {/* Oversized wordmark */}
        <div className="border-b border-white/10 pb-10">
          <div className="text-[clamp(4rem,14vw,14rem)] font-extralight tracking-[-0.06em] leading-[0.85] text-white/95 select-none">
            equip<span className="font-thin text-primary">.</span>me
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 pt-14">
          <div className="col-span-12 lg:col-span-5">
            <img src={logo} alt="Equip Group" className="h-8 w-auto invert opacity-90" />
            <p className="mt-6 text-[16px] max-w-sm font-light text-white/65 leading-[1.6]">
              Registered in Estonia. European business group operating in
              professional kitchen equipment distribution and B2B foodservice
              software — since 1990.
            </p>
            <div className="mt-8 flex items-center gap-3 text-[12px] uppercase tracking-[0.3em] text-white/50 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Operating across EU, MENA, CIS &amp; NA
            </div>

            <div className="mt-8">
              <a
                href="https://www.linkedin.com/company/equip-me-group/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Equip.me Group on LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 hover:text-white hover:border-primary hover:bg-primary/15 transition"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H17.4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="col-span-6 lg:col-span-2 lg:col-start-7">
            <div className="text-[12px] uppercase tracking-[0.3em] text-white/50 font-medium">
              Offices
            </div>
            <ul className="mt-5 space-y-3 text-[16px] font-light text-white/85">
              {offices.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-2">
            <div className="text-[12px] uppercase tracking-[0.3em] text-white/50 font-medium">
              Warehouses
            </div>
            <ul className="mt-5 space-y-3 text-[16px] font-light text-white/85">
              {warehouses.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <div className="text-[12px] uppercase tracking-[0.3em] text-white/50 font-medium">
              Direct
            </div>
            <ul className="mt-5 space-y-3 text-[16px] font-light">
              <li>
                <a href="mailto:sales@equip.me" className="text-white/85 hover:text-primary transition">
                  sales@equip.me
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] tracking-[0.08em] text-white/40 font-light">
          <div>
            © {new Date().getFullYear()} Equip HoReCa OÜ · Reg. 12698448 · VAT EE101772606
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <a
              href="https://drive.google.com/file/d/1JEB9DeMJ7EFZM0qMA1bG8_2Dfq-s0iQM/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Privacy Policy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </a>
            <span className="text-white/25" aria-hidden>·</span>
            <a
              href="https://drive.google.com/file/d/1nAO0ht6E3ch0yagUoyE7DdF2fSJ2qzsd/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Cookie Policy"
              className="hover:text-white transition"
            >
              Cookie Policy
            </a>
            <span className="text-white/25" aria-hidden>·</span>
            <a
              href="https://drive.google.com/file/d/1_bAEoHRShn8SbbJMfPoGhwSu544QZ8GM/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Terms and Conditions"
              className="hover:text-white transition"
            >
              Terms &amp; Conditions
            </a>
            <span className="text-white/25" aria-hidden>·</span>
            <a
              href="https://drive.google.com/file/d/1V3SN6oeOFFxbVy245v_YP9Jvg-zLd-RR/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Imprint"
              className="hover:text-white transition"
            >
              Imprint
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
