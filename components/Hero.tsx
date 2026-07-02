"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Globe,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
} from "lucide-react";
import { personalInfo } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.21, 0.6, 0.35, 1],
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 md:pt-32 pb-20 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 bg-grid" />

      {/* Floating orbs */}
      <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-[100px] animate-float-slow" />
      <div
        className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-purple-500/10 blur-[100px] animate-float-slow"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 left-1/3 h-64 w-64 rounded-full bg-pink-500/8 blur-[80px] animate-float-slow"
        style={{ animationDelay: "4s" }}
      />

      <div className="container-x relative grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left content */}
        <div className="lg:col-span-7">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-300 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to opportunities
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={1}
            className="mt-7 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={2}
            className="mt-5 flex items-center gap-2 text-lg md:text-2xl text-foreground/80"
          >
            <span className="font-mono text-indigo-400">
              {">"} {personalInfo.title}
            </span>
            <span className="inline-block h-6 w-[3px] bg-indigo-400 rounded-full animate-blink" />
          </motion.div>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={3}
            className="mt-6 max-w-xl text-base md:text-lg text-foreground/60 leading-relaxed"
          >
            {personalInfo.tagline} I love crafting end-to-end experiences with
            MongoDB, Express.js, React, and Node.js.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={4}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a href={personalInfo.resumeUrl} download className="btn-ghost">
              <Download size={16} />
              Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-ghost"
            >
              <Mail size={16} />
              Contact
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={5}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-foreground/50"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={13} className="text-indigo-400" />
              {personalInfo.location}
            </span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail size={13} className="text-indigo-400" />
              {personalInfo.email}
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone size={13} className="text-indigo-400" />
              {personalInfo.phone}
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={6}
            className="mt-8 flex items-center gap-3"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-foreground/40">
              Find me on
            </span>
            <div className="h-px w-12 bg-white/10" />
            <div className="flex items-center gap-1.5">
              <SocialIcon href={personalInfo.socials.github} label="GitHub">
                <Github size={16} />
              </SocialIcon>
              <SocialIcon href={personalInfo.socials.linkedin} label="LinkedIn">
                <Linkedin size={16} />
              </SocialIcon>
              <SocialIcon href={personalInfo.socials.portfolio} label="Portfolio">
                <Globe size={16} />
              </SocialIcon>
              <SocialIcon href={personalInfo.socials.facebook} label="Facebook">
                <Facebook size={16} />
              </SocialIcon>
              <SocialIcon href={personalInfo.socials.instagram} label="Instagram">
                <Instagram size={16} />
              </SocialIcon>
            </div>
          </motion.div>
        </div>

        {/* Right: code card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.6, 0.35, 1] }}
          className="lg:col-span-5"
        >
          <CodeCard />
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({
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
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/70 transition-all duration-300 hover:bg-white/10 hover:text-white hover:border-white/20 hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}

function CodeCard() {
  return (
    <div className="relative group">
      {/* Glow effect */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-pink-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative glass-card p-5 md:p-6 font-mono text-sm leading-relaxed shadow-2xl shadow-black/20">
        {/* Window controls */}
        <div className="flex items-center gap-1.5 pb-3.5 mb-3.5 border-b border-white/[0.06]">
          <span className="h-3 w-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
          <span className="h-3 w-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
          <span className="ml-auto text-[11px] text-foreground/40 font-sans">
            prosun.tsx
          </span>
        </div>

        <pre className="text-[12px] md:text-[13px] overflow-x-auto leading-[1.8]">
          <code>
            <span className="text-pink-400">const</span>{" "}
            <span className="text-sky-300">developer</span>{" "}
            <span className="text-foreground/40">=</span> {"{"}
            {"\n"}
            {"  "}
            <span className="text-emerald-400">name</span>
            <span className="text-foreground/40">:</span>{" "}
            <span className="text-amber-300">
              &quot;Prosun Mukherjee&quot;
            </span>
            <span className="text-foreground/40">,</span>
            {"\n"}
            {"  "}
            <span className="text-emerald-400">role</span>
            <span className="text-foreground/40">:</span>{" "}
            <span className="text-amber-300">
              &quot;MERN Stack Developer&quot;
            </span>
            <span className="text-foreground/40">,</span>
            {"\n"}
            {"  "}
            <span className="text-emerald-400">stack</span>
            <span className="text-foreground/40">:</span> [
            <span className="text-amber-300">&quot;MongoDB&quot;</span>
            <span className="text-foreground/40">,</span>{" "}
            <span className="text-amber-300">&quot;Express&quot;</span>
            <span className="text-foreground/40">,</span>{" "}
            <span className="text-amber-300">&quot;React&quot;</span>
            <span className="text-foreground/40">,</span>{" "}
            <span className="text-amber-300">&quot;Node.js&quot;</span>]
            <span className="text-foreground/40">,</span>
            {"\n"}
            {"  "}
            <span className="text-emerald-400">location</span>
            <span className="text-foreground/40">:</span>{" "}
            <span className="text-amber-300">&quot;Khulna, BD&quot;</span>
            <span className="text-foreground/40">,</span>
            {"\n"}
            {"  "}
            <span className="text-emerald-400">passion</span>
            <span className="text-foreground/40">:</span>{" "}
            <span className="text-amber-300">
              &quot;building great UIs&quot;
            </span>
            <span className="text-foreground/40">,</span>
            {"\n"}
            {"  "}
            <span className="text-emerald-400">available</span>
            <span className="text-foreground/40">:</span>{" "}
            <span className="text-pink-400">true</span>
            <span className="text-foreground/40">,</span>
            {"\n"}
            {"}"};
            {"\n"}
            {"\n"}
            <span className="text-pink-400">export default</span>{" "}
            <span className="text-sky-300">developer</span>
            <span className="text-foreground/40">;</span>
          </code>
        </pre>
      </div>
    </div>
  );
}
