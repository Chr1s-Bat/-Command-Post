import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christian G. Babatuan | Command Post",
  description: "A military-themed personal site built with Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone-200 text-stone-900">
        <nav className="flex items-center gap-6 bg-green-900 px-6 py-4 text-amber-100 border-b-4 border-amber-500">
          <span className="font-bold uppercase tracking-widest">
            ★ Command Post
          </span>
          <Link href="/" className="uppercase hover:text-amber-400">
            Home
          </Link>
          <Link href="/about" className="uppercase hover:text-amber-400">
            About
          </Link>
          <Link href="/projects" className="uppercase hover:text-amber-400">
            Projects
          </Link>
        </nav>
        <div className="flex-1">{children}</div>
        <footer className="bg-green-950 p-4 text-center text-sm uppercase tracking-wider text-amber-100">
          Christian G. Babatuan · BSIT-3 · Mission Complete
        </footer>
      </body>
    </html>
  );
}
