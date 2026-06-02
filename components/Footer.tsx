"use client";

import { Github, Linkedin, Globe, Mail, Heart } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 mt-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/60 to-transparent" />
      <div className="container-x py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 text-white font-bold shadow-lg shadow-primary-500/30">
                P
              </span>
              <span className="text-base font-semibold tracking-tight">
                Prosun<span className="text-primary-400">.</span>dev
              </span>
            </a>
            <p className="mt-4 text-sm text-foreground/65 max-w-xs">
              MERN Stack Developer building scalable, high-performance web
              applications from Khulna, Bangladesh.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-foreground/55">
              Sitemap
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <li>
                <a href="#about" className="text-foreground/80 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-foreground/80 hover:text-white">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-foreground/80 hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#education" className="text-foreground/80 hover:text-white">
                  Education
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/80 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="text-foreground/80 hover:text-white"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-foreground/55">
              Connect
            </p>
            <div className="mt-4 flex items-center gap-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/80 hover:text-white hover:bg-white/10 transition"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/80 hover:text-white hover:bg-white/10 transition"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalInfo.socials.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portfolio"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/80 hover:text-white hover:bg-white/10 transition"
              >
                <Globe size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/80 hover:text-white hover:bg-white/10 transition"
              >
                <Mail size={18} />
              </a>
            </div>
            <a
              href={personalInfo.resumeUrl}
              download
              className="mt-5 inline-flex btn-ghost !py-2 !px-4 text-xs"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-foreground/55">
          <p>
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5">
            Built with <Heart size={12} className="text-rose-400" /> using
            Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
