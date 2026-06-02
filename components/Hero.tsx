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
} from "lucide-react";
import { personalInfo } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.21, 0.6, 0.35, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 md:pt-32 pb-20 overflow-hidden"
    >
      {/* Background grid + glow */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      {/* Floating orbs */}
      <div className="absolute -top-10 -left-10 h-72 w-72 rounded-full bg-primary-600/20 blur-3xl animate-float" />
      <div
        className="absolute top-40 -right-10 h-80 w-80 rounded-full bg-accent-500/20 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container-x relative grid lg:grid-cols-12 gap-12 items-center">
        {/* Left content */}
        <div className="lg:col-span-7">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to opportunities
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={1}
            className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={2}
            className="mt-4 flex items-center gap-2 text-lg md:text-2xl text-foreground/80"
          >
            <span className="font-mono text-primary-400">
              {">"} {personalInfo.title}
            </span>
            <span className="inline-block h-6 w-2 bg-primary-400 animate-blink" />
          </motion.div>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={3}
            className="mt-6 max-w-2xl text-base md:text-lg text-foreground/70 leading-relaxed"
          >
            {personalInfo.tagline} I love crafting end-to-end experiences with
            MongoDB, Express.js, React, and Node.js — and shipping them to the
            world.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={4}
            className="mt-8 flex flex-wrap items-center gap-3"
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
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn-ghost"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a href="#contact" className="btn-ghost" onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}>
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={5}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground/60"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} className="text-primary-400" />
              {personalInfo.location}
            </span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 hover:text-white transition"
            >
              <Mail size={14} className="text-primary-400" />
              {personalInfo.email}
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 hover:text-white transition"
            >
              <Phone size={14} className="text-primary-400" />
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
            <span className="text-xs uppercase tracking-widest text-foreground/50">
              Find me on
            </span>
            <div className="h-px flex-1 max-w-[80px] bg-white/10" />
            <div className="flex items-center gap-2">
              <SocialIcon href={personalInfo.socials.github} label="GitHub">
                <Github size={18} />
              </SocialIcon>
              <SocialIcon
                href={personalInfo.socials.linkedin}
                label="LinkedIn"
              >
                <Linkedin size={18} />
              </SocialIcon>
              <SocialIcon
                href={personalInfo.socials.portfolio}
                label="Portfolio"
              >
                <Globe size={18} />
              </SocialIcon>
            </div>
          </motion.div>
        </div>

        {/* Right visual: code card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
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
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/80 transition hover:bg-white/10 hover:text-white hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}

function CodeCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary-500/30 to-accent-500/30 blur-2xl opacity-60" />
      <div className="relative glass-card p-5 md:p-6 font-mono text-sm leading-relaxed shadow-2xl">
        <div className="flex items-center gap-1.5 pb-3 mb-3 border-b border-white/10">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
          <span className="ml-auto text-xs text-foreground/50">prosun.tsx</span>
        </div>
        <pre className="text-[12.5px] md:text-[13px] overflow-x-auto">
          <code>
            <span className="text-pink-400">const</span>{" "}
            <span className="text-sky-300">developer</span>{" "}
            <span className="text-foreground/60">=</span> {"{"}
            {"\n"}
            {"  "}
            <span className="text-emerald-300">name</span>:{" "}
            <span className="text-amber-300">&quot;Prosun Mukherjee&quot;</span>,
            {"\n"}
            {"  "}
            <span className="text-emerald-300">role</span>:{" "}
            <span className="text-amber-300">&quot;MERN Stack Developer&quot;</span>,
            {"\n"}
            {"  "}
            <span className="text-emerald-300">stack</span>: [
            <span className="text-amber-300">&quot;MongoDB&quot;</span>,{" "}
            <span className="text-amber-300">&quot;Express&quot;</span>,{" "}
            <span className="text-amber-300">&quot;React&quot;</span>,{" "}
            <span className="text-amber-300">&quot;Node.js&quot;</span>],
            {"\n"}
            {"  "}
            <span className="text-emerald-300">location</span>:{" "}
            <span className="text-amber-300">&quot;Khulna, BD&quot;</span>,
            {"\n"}
            {"  "}
            <span className="text-emerald-300">passion</span>:{" "}
            <span className="text-amber-300">&quot;building great UIs&quot;</span>,
            {"\n"}
            {"  "}
            <span className="text-emerald-300">available</span>:{" "}
            <span className="text-pink-400">true</span>,
            {"\n"}
            {"}"};
            {"\n"}
            {"\n"}
            <span className="text-pink-400">export default</span>{" "}
            <span className="text-sky-300">developer</span>;
          </code>
        </pre>
      </div>
    </div>
  );
}
