"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[var(--border-200)]">
      <div className="container-1200 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-smc.png" alt="St Mark Cathedral logo" width={36} height={36} priority/>
          <span className="font-semibold tracking-wide text-[var(--indigo-900)]">
            St Mark Cathedral
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-[15px]">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/visit">Plan Your Visit</NavLink>
          <NavLink href="/ministries">Ministries</NavLink>
          <NavLink href="/events">Events</NavLink>
          <NavLink href="/give">Give</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <Link href="/visit" className="btn btn-primary ml-2">Plan Your Visit</Link>
        </nav>

        {/* Mobile trigger (animated burger → X) */}
        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-200)]"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <Burger open={open} />
        </button>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-panel"
            role="dialog"
            aria-label="Mobile Navigation"
            initial={reduce ? { opacity: 1 } : { height: 0, opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden border-t border-[var(--border-200)] bg-white overflow-hidden"
          >
            <div className="container-1200 py-4">
              <ul className="flex flex-col gap-2 text-[var(--ink-900)]">
                <Li href="/" onClick={() => setOpen(false)}>Home</Li>
                <Li href="/visit" onClick={() => setOpen(false)}>Plan Your Visit</Li>
                <Li href="/ministries" onClick={() => setOpen(false)}>Ministries</Li>
                <Li href="/events" onClick={() => setOpen(false)}>Events</Li>
                <Li href="/give" onClick={() => setOpen(false)}>Give</Li>
                <Li href="/contact" onClick={() => setOpen(false)}>Contact</Li>
              </ul>
              <div className="pt-4 flex flex-col gap-2">
                <Link href="/visit" className="btn btn-primary w-full" onClick={() => setOpen(false)}>
                  Plan Your Visit
                </Link>
                <Link href="/give" className="btn btn-secondary w-full" onClick={() => setOpen(false)}>
                  Give
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Burger({ open }) {
  return (
    <div className="relative h-5 w-5">
      <motion.span
        className="absolute left-0 top-0 block h-0.5 w-5 bg-[var(--ink-900)]"
        animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="absolute left-0 top-2 block h-0.5 w-5 bg-[var(--ink-900)]"
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="absolute left-0 bottom-0 block h-0.5 w-5 bg-[var(--ink-900)]"
        animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}

function NavLink({ href, children }) {
  return (
    <Link href={href} className="text-[var(--ink-600)] hover:text-[var(--indigo-900)] transition-colors">
      {children}
    </Link>
  );
}
function Li({ href, children, onClick }) {
  return (
    <li>
      <Link
        href={href}
        className="block rounded-lg px-3 py-3 hover:bg-[var(--bg-subtle)] transition"
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
}
