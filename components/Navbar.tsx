"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActive(`#${current}`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex items-center justify-between h-16 md:h-20">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLink("#home");
          }}
          className="group flex items-center gap-2"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 text-white font-bold shadow-lg shadow-primary-500/30">
            P
          </span>
          <span className="text-base md:text-lg font-semibold tracking-tight">
            Prosun<span className="text-primary-400">.</span>dev
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLink(l.href);
                }}
                className={`nav-link ${
                  active === l.href ? "text-white" : ""
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={personalInfo.resumeUrl}
            download
            className="btn-primary !py-2 !px-4 text-xs md:text-sm"
          >
            Resume
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-x pb-6">
          <ul className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLink(l.href);
                  }}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
                    active === l.href
                      ? "bg-white/10 text-white"
                      : "text-foreground/80 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="px-1 pt-2">
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn-primary w-full"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
