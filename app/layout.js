export const metadata = {
  title: "St Mark Cathedral (COGIC)",
  description: "A welcoming church family in Wichita. Plan your visit, explore ministries, and discover upcoming events.",
  metadataBase: new URL("https://smccogic.org"),
  openGraph: { title: "St Mark Cathedral (COGIC)", type: "website" },
};

import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import SiteHeader from "./components/SiteHeader"; // ← new

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-poppins" });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter/>
      </body>
    </html>
  );
}

/* ——— Footer (unchanged) ——— */
function SiteFooter(){
  return (
    <footer className="mt-24 border-t border-[var(--border-200)] bg-[var(--bg-subtle)]">
      <div className="container-1200 section grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <Image src="/logo-smc.png" alt="" width={40} height={40} />
          <p className="text-[var(--ink-600)] text-sm">A welcoming community following Jesus and serving Wichita.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-[var(--indigo-900)]">Visit</h4>
          <ul className="space-y-2 text-sm text-[var(--ink-600)]">
            <li>Sunday Worship — 10:30 AM</li>
            <li>1018 N. Dellrose, Wichita, KS</li>
            <li><a className="underline" href="https://maps.google.com" target="_blank">Get Directions</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-[var(--indigo-900)]">Connect</h4>
          <ul className="space-y-2 text-sm text-[var(--ink-600)]">
            <li><a href="/ministries" className="underline">Ministries</a></li>
            <li><a href="/events" className="underline">Events</a></li>
            <li><a href="/contact" className="underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-[var(--indigo-900)]">Give</h4>
          <p className="text-[var(--ink-600)] text-sm mb-3">Your generosity fuels ministry and outreach.</p>
          <a className="btn btn-secondary" href="/give">Give Now</a>
        </div>
      </div>
      <div className="border-t border-[var(--border-200)] py-4">
        <div className="container-1200 text-xs text-[var(--ink-600)]">
          © {new Date().getFullYear()} St Mark Cathedral (COGIC). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
