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
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-background/60 border-b border-white/[0.06] shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLink("#home");
          }}
          className="flex items-center gap-2.5 group"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold text-sm shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-shadow duration-300">
            P
          </span>
          <span className="text-base font-semibold tracking-tight hidden sm:block">
            Prosun<span className="text-indigo-400">.</span>dev
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLink(l.href);
                }}
                className={`nav-link px-3 py-2 rounded-lg ${
                  active === l.href ? "!text-white" : ""
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={personalInfo.resumeUrl}
            download
            className="btn-primary !py-2 !px-5 text-xs"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-out ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-x pb-5">
          <ul className="flex flex-col gap-0.5 rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-2xl p-2 shadow-xl shadow-black/10">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLink(l.href);
                  }}
                  className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                    active === l.href
                      ? "bg-white/10 text-white"
                      : "text-foreground/60 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="px-1.5 pt-2">
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn-primary w-full !py-2.5 text-sm"
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
