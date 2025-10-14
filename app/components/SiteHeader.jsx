"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function SiteHeader() {
  const pathname = usePathname();

  // 1) INITIAL STATE FROM WINDOW → prevents first-paint white bar on home
  const [overHero, setOverHero] = useState(() => {
    if (typeof window === "undefined") return false;              // SSR fallback
    return window.location.pathname === "/" && window.scrollY < 16;
  });

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);                  // gate underline animation
  const reduce = useReducedMotion();
  const rafRef = useRef(0);

  useEffect(() => setMounted(true), []);
  useEffect(() => setOpen(false), [pathname]);                    // close mobile on route change
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => (document.body.style.overflow = ""); }, [open]);

  useLayoutEffect(() => {
    if (pathname !== "/") { setOverHero(false); return; }
    const sentinel = document.getElementById("after-hero");
    if (!sentinel) return;

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = sentinel.getBoundingClientRect();
        setOverHero(rect.top > 64); // header ≈ 64px
      });
    };
    onScroll();

    const io = new IntersectionObserver(() => onScroll(), { rootMargin: "-80px 0px 0px 0px", threshold: 0.01 });
    io.observe(sentinel);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { cancelAnimationFrame(rafRef.current); io.disconnect(); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, [pathname]);

  const onHero = pathname === "/" && overHero;

  // 2) kill transitions on first paint to avoid flicker
  const noTransition = mounted ? "" : "transition-none";

  const shell = `sticky top-0 z-50 w-full border-b transition-colors duration-300 ${noTransition}`;
  const shellTone = onHero ? "bg-transparent border-transparent" : "bg-white/90 backdrop-blur border-[var(--border-200)]";

  return (
    <header className={`${shell} ${shellTone}`}>
      <div className="container-1200 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-smc.png" alt="St Mark Cathedral logo" width={36} height={36} priority />
          <span className={`font-semibold tracking-wide ${onHero ? "text-white" : "text-[var(--indigo-900)]"}`}>
            St Mark Cathedral
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-[15px] relative">
          <NavLink href="/" pathname={pathname} onHero={onHero} mounted={mounted}>Home</NavLink>
          <NavLink href="/visit" pathname={pathname} onHero={onHero} mounted={mounted}>Plan Your Visit</NavLink>
          <NavLink href="/ministries" pathname={pathname} onHero={onHero} mounted={mounted}>Ministries</NavLink>
          <NavLink href="/events" pathname={pathname} onHero={onHero} mounted={mounted}>Events</NavLink>
          <NavLink href="/give" pathname={pathname} onHero={onHero} mounted={mounted}>Give</NavLink>
          <NavLink href="/contact" pathname={pathname} onHero={onHero} mounted={mounted}>Contact</NavLink>
          <Link
            href="/visit"
            className={`btn ml-2 ${onHero ? "bg-white text-[var(--indigo-900)]" : "btn-primary"}`}
          >
            Plan Your Visit
          </Link>
        </nav>

        {/* Mobile trigger */}
        <button
          className={`md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border ${
            onHero ? "border-white/40" : "border-[var(--border-200)]"
          }`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <Burger open={open} onHero={onHero} />
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
              <ul className="flex flex-col gap-1 text-[var(--ink-900)]">
                <Li href="/" pathname={pathname}>Home</Li>
                <Li href="/visit" pathname={pathname}>Plan Your Visit</Li>
                <Li href="/ministries" pathname={pathname}>Ministries</Li>
                <Li href="/events" pathname={pathname}>Events</Li>
                <Li href="/give" pathname={pathname}>Give</Li>
                <Li href="/contact" pathname={pathname}>Contact</Li>
              </ul>
              <div className="pt-4 flex flex-col gap-2">
                <Link href="/visit" className="btn btn-primary w-full">Plan Your Visit</Link>
                <Link href="/give" className="btn btn-secondary w-full">Give</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Burger({ open, onHero }) {
  const color = onHero ? "bg-white" : "bg-[var(--ink-900)]";
  return (
    <div className="relative h-5 w-5">
      <motion.span className={`absolute left-0 top-0 block h-0.5 w-5 ${color}`}
        animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }}/>
      <motion.span className={`absolute left-0 top-2 block h-0.5 w-5 ${color}`}
        animate={open ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.2 }}/>
      <motion.span className={`absolute left-0 bottom-0 block h-0.5 w-5 ${color}`}
        animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }}/>
    </div>
  );
}

function NavLink({ href, children, pathname, onHero, mounted }) {
  const active = pathname === href;
  const base = onHero
    ? "text-white/90 hover:text-white"
    : "text-[var(--ink-600)] hover:text-[var(--indigo-900)]";
  const activeColor = onHero ? "text-white font-semibold" : "text-[var(--indigo-900)] font-semibold";
  const underlineColor = onHero ? "bg-white" : "bg-[var(--indigo-900)]";

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`relative py-2 transition-colors ${active ? activeColor : base}`}
    >
      {children}
      {/* Render underline only after mount to avoid hydration flicker */}
      {mounted && active && (
        <motion.span
          layoutId="active-underline"
          className={`absolute -bottom-0.5 left-0 right-0 h-0.5 ${underlineColor} rounded-full`}
          transition={{ type: "spring", stiffness: 450, damping: 30 }}
        />
      )}
    </Link>
  );
}

function Li({ href, children, pathname }) {
  const active = pathname === href;
  return (
    <li>
      <Link
        href={href}
        aria-current={active ? "page" : undefined}
        className={`block rounded-lg px-3 py-3 transition ${
          active ? "bg-[var(--bg-subtle)] text-[var(--indigo-900)] font-medium"
                 : "hover:bg-[var(--bg-subtle)] text-[var(--ink-900)]"
        }`}
      >
        {children}
      </Link>
    </li>
  );
}
