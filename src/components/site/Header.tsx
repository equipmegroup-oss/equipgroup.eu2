import { useEffect, useState } from "react";
import logo from "@/assets/equipme-logo.png";

const nav = [
  { label: "Group", href: "#about" },
  { label: "Businesses", href: "#businesses" },
  { label: "Network", href: "#numbers" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "bg-[color:var(--ink)]/85 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center">
          <img src={logo} alt="Equip Group" className="h-8 w-auto invert" />
        </a>
        <nav className="hidden md:flex items-center gap-9">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[14px] font-medium text-white/75 hover:text-white transition"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-[14px] font-semibold text-white hover:opacity-90 transition"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
