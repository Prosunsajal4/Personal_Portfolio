"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Globe,
  CheckCircle2,
  Facebook,
  Instagram,
} from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3500);
    }, 800);
  };

  return (
    <section id="contact" className="section relative">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-indigo-400 font-mono">
            05 — Contact
          </p>
          <h2 className="mt-4 section-title">
            Let&apos;s build something{" "}
            <span className="gradient-text">great</span>
          </h2>
          <p className="mt-4 text-foreground/60">
            Have a project in mind, a job opportunity, or just want to say hi?
            My inbox is always open.
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-3"
          >
            <InfoCard
              icon={<Mail size={18} />}
              label="Email"
              value={personalInfo.email}
              href={`mailto:${personalInfo.email}`}
            />
            <InfoCard
              icon={<Phone size={18} />}
              label="Phone"
              value={personalInfo.phone}
              href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
            />
            <InfoCard
              icon={<MapPin size={18} />}
              label="Location"
              value={personalInfo.location}
            />

            {/* Socials */}
            <div className="glass-card p-5">
              <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/45 mb-3">
                Connect
              </p>
              <div className="flex items-center gap-1.5 flex-wrap">
                <SocialBtn href={personalInfo.socials.github} label="GitHub">
                  <Github size={16} />
                </SocialBtn>
                <SocialBtn href={personalInfo.socials.linkedin} label="LinkedIn">
                  <Linkedin size={16} />
                </SocialBtn>
                <SocialBtn href={personalInfo.socials.portfolio} label="Portfolio">
                  <Globe size={16} />
                </SocialBtn>
                <SocialBtn href={personalInfo.socials.facebook} label="Facebook">
                  <Facebook size={16} />
                </SocialBtn>
                <SocialBtn href={personalInfo.socials.instagram} label="Instagram">
                  <Instagram size={16} />
                </SocialBtn>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 glass-card p-6 md:p-8"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <InputField
                label="Your name"
                name="name"
                type="text"
                placeholder="Jane Doe"
                value={form.name}
                onChange={handleChange}
                required
              />
              <InputField
                label="Your email"
                name="email"
                type="email"
                placeholder="jane@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-[11px] uppercase tracking-[0.2em] text-foreground/45 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Hi Prosun, I'd love to talk about..."
                className="input-field resize-none"
              />
            </div>
            <div className="mt-5 flex items-center justify-between gap-3 flex-wrap">
              <p className="text-xs text-foreground/40">
                I&apos;ll respond within 24 hours.
              </p>
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary disabled:opacity-50"
              >
                {status === "sent" ? (
                  <>
                    <CheckCircle2 size={16} />
                    Sent!
                  </>
                ) : status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={16} />
                    Send message
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function InputField({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.2em] text-foreground/45 mb-2">
        {label}
      </label>
      <input {...props} className="input-field" />
    </div>
  );
}

function InfoCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="glass-card-hover p-4 flex items-center gap-3.5">
      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20">
        {icon}
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-[0.15em] text-foreground/45">
          {label}
        </p>
        <p className="text-sm font-medium text-white break-all">{value}</p>
      </div>
    </div>
  );
  if (href) return <a href={href} className="block">{inner}</a>;
  return inner;
}

function SocialBtn({
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
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-foreground/60 transition-all duration-300 hover:bg-white/10 hover:text-white hover:border-white/20"
    >
      {children}
    </a>
  );
}
