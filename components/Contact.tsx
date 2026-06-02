"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Globe, CheckCircle2 } from "lucide-react";
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
    const subject = encodeURIComponent(
      `Portfolio Contact from ${form.name}`
    );
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
          <p className="text-sm uppercase tracking-[0.2em] text-primary-400 font-mono">
            05 — Contact
          </p>
          <h2 className="mt-3 section-title">
            Let&apos;s build something <span className="gradient-text">great</span>
          </h2>
          <p className="mt-4 text-foreground/70">
            Have a project in mind, a job opportunity, or just want to say hi?
            My inbox is always open.
          </p>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            <InfoItem
              icon={<Mail size={18} />}
              label="Email"
              value={personalInfo.email}
              href={`mailto:${personalInfo.email}`}
            />
            <InfoItem
              icon={<Phone size={18} />}
              label="Phone"
              value={personalInfo.phone}
              href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
            />
            <InfoItem
              icon={<MapPin size={18} />}
              label="Location"
              value={personalInfo.location}
            />

            <div className="glass-card p-5">
              <p className="text-xs uppercase tracking-wider text-foreground/60">
                Follow me
              </p>
              <div className="mt-3 flex items-center gap-2">
                <SocialBtn
                  href={personalInfo.socials.github}
                  label="GitHub"
                  icon={<Github size={16} />}
                />
                <SocialBtn
                  href={personalInfo.socials.linkedin}
                  label="LinkedIn"
                  icon={<Linkedin size={16} />}
                />
                <SocialBtn
                  href={personalInfo.socials.portfolio}
                  label="Portfolio"
                  icon={<Globe size={16} />}
                />
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
              <Field
                label="Your name"
                name="name"
                type="text"
                placeholder="Jane Doe"
                value={form.name}
                onChange={handleChange}
                required
              />
              <Field
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
              <label className="block text-xs uppercase tracking-wider text-foreground/60 mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Hi Prosun, I'd love to talk about..."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-foreground/40 outline-none transition focus:border-primary-500/60 focus:bg-white/10"
              />
            </div>
            <div className="mt-5 flex items-center justify-between gap-3 flex-wrap">
              <p className="text-xs text-foreground/55">
                I&apos;ll respond within 24 hours.
              </p>
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary disabled:opacity-60"
              >
                {status === "sent" ? (
                  <>
                    <CheckCircle2 size={16} />
                    Message sent
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

function Field({
  label,
  ...props
}: {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-foreground/60 mb-1.5">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-foreground/40 outline-none transition focus:border-primary-500/60 focus:bg-white/10"
      />
    </div>
  );
}

function InfoItem({
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
    <div className="glass-card p-5 flex items-center gap-4 hover:border-white/20 transition">
      <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-lg">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-foreground/60">
          {label}
        </p>
        <p className="text-sm md:text-base font-medium text-white break-all">
          {value}
        </p>
      </div>
    </div>
  );
  if (href) {
    return (
      <a href={href} className="block">
        {inner}
      </a>
    );
  }
  return inner;
}

function SocialBtn({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/80 transition hover:bg-white/10 hover:text-white"
    >
      {icon}
    </a>
  );
}
