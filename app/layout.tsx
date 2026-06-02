import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prosun Mukherjee — MERN Stack Developer",
  description:
    "Portfolio of Prosun Mukherjee, a MERN Stack Developer building scalable, high-performance, and user-centric web applications.",
  keywords: [
    "Prosun Mukherjee",
    "MERN Stack Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Portfolio",
  ],
  authors: [{ name: "Prosun Mukherjee" }],
  openGraph: {
    title: "Prosun Mukherjee — MERN Stack Developer",
    description:
      "Portfolio of Prosun Mukherjee, a MERN Stack Developer building scalable, high-performance, and user-centric web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
