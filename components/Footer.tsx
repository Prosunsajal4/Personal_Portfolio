"use client";

import {
  Github,
  Linkedin,
  Globe,
  Mail,
  Heart,
  Facebook,
  Instagram,
} from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div className="container-x py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold text-sm shadow-lg shadow-indigo-500/30">
                P
              </span>
              <span className="text-base font-semibold tracking-tight">
                Prosun<span className="text-indigo-400">.</span>dev
              </span>
            </a>
            <p className="mt-4 text-sm text-foreground/50 max-w-xs leading-relaxed">
              MERN Stack Developer building scalable, high-performance web
              applications from Khulna, Bangladesh.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/40 mb-4">
              Sitemap
            </p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              {[
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Education", href: "#education" },
                { label: "Contact", href: "#contact" },
                { label: "Resume", href: personalInfo.resumeUrl },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-foreground/55 hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/40 mb-4">
              Connect
            </p>
            <div className="flex items-center gap-1.5 flex-wrap">
              <FooterLink href={personalInfo.socials.github} label="GitHub">
                <Github size={16} />
              </FooterLink>
              <FooterLink href={personalInfo.socials.linkedin} label="LinkedIn">
                <Linkedin size={16} />
              </FooterLink>
              <FooterLink href={personalInfo.socials.portfolio} label="Portfolio">
                <Globe size={16} />
              </FooterLink>
              <FooterLink href={`mailto:${personalInfo.email}`} label="Email">
                <Mail size={16} />
              </FooterLink>
              <FooterLink href={personalInfo.socials.facebook} label="Facebook">
                <Facebook size={16} />
              </FooterLink>
              <FooterLink href={personalInfo.socials.instagram} label="Instagram">
                <Instagram size={16} />
              </FooterLink>
            </div>
            <a
              href={personalInfo.resumeUrl}
              download
              className="mt-4 inline-flex btn-ghost !py-2 !px-4 text-xs"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-foreground/40">
          <p>
            &copy; {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5">
            Built with <Heart size={11} className="text-pink-400" /> using
            Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-foreground/60 transition-all duration-300 hover:bg-white/10 hover:text-white hover:border-white/20"
    >
      {children}
    </a>
  );
}
