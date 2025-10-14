"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import HeroFade from "@/app/components/HeroFade";
import HoverLift from "@/app/components/HoverLift";
import FilterClient from "./FilterClient";

// ---- Data (swap images & copy with your content/photos)
const CATEGORIES = [
  "All",
  "Kids",
  "Students",
  "Young Adults",
  "Men",
  "Women",
  "Worship & Arts",
  "Outreach",
  "Groups",
];

const MINISTRIES = [
  {
    title: "Saint Mark Kids",
    category: "Kids",
    desc: "Safe, joyful environments for infants through 5th grade.",
    meets: "Sundays 10:30 AM",
    img: "/photos/kids.jpg",
    href: "/ministries/kids",
  },
  {
    title: "Students (6–12th)",
    category: "Students",
    desc: "A place to belong, ask questions, and grow together.",
    meets: "Wednesdays 7:00 PM",
    img: "/photos/students.jpg",
    href: "/ministries/students",
  },
  {
    title: "Young Adults",
    category: "Young Adults",
    desc: "Community, conversations, and purpose for 18–29.",
    meets: "Thursdays 7:00 PM",
    img: "/photos/young-adults.jpg",
    href: "/ministries/young-adults",
  },
  {
    title: "Men",
    category: "Men",
    desc: "Brotherhood, prayer, and practical service.",
    meets: "2nd Sat 8:00 AM",
    img: "/photos/men.jpg",
    href: "/ministries/men",
  },
  {
    title: "Women",
    category: "Women",
    desc: "Sisterhood, study, and encouragement.",
    meets: "2nd Tue 6:30 PM",
    img: "/photos/women.jpg",
    href: "/ministries/women",
  },
  {
    title: "Worship & Arts",
    category: "Worship & Arts",
    desc: "Lead the church in praise through music and production.",
    meets: "Rehearsals Thu 6:30 PM",
    img: "/photos/worship-team.jpg",
    href: "/ministries/worship",
  },
  {
    title: "Community Outreach",
    category: "Outreach",
    desc: "Serving Wichita through food, care, and partnerships.",
    meets: "Monthly projects",
    img: "/photos/outreach.jpg",
    href: "/ministries/outreach",
  },
  {
    title: "Small Groups",
    category: "Groups",
    desc: "Grow deeper in circles, not just rows.",
    meets: "Various times & homes",
    img: "/photos/groups.jpg",
    href: "/ministries/groups",
  },
];

export default function MinistriesPage() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="container-1200">
          <Reveal>
            <p className="text-[var(--ink-600)] max-w-2xl mb-6">
              Whether you're new to faith or ready to lead, there’s a ministry
              where you’ll find friends and take your next step with Jesus.
            </p>
          </Reveal>

          {/* Filters */}
          <Reveal>
            <Filters categories={CATEGORIES} />
          </Reveal>

          {/* Cards */}
          <Cards />
        </div>
      </section>

      <ServeCTA />
    </>
  );
}

/* ---------------- Components ---------------- */

function Hero() {
  return (
    <section
      className="relative h-[46vh] min-h-[360px] flex items-center parallax"
      style={{
        backgroundImage: "url('/photos/ministries-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      aria-label="Ministries"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(43,45,112,0.70), rgba(43,45,112,0.70))",
        }}
        aria-hidden="true"
      />
      <div className="container-1200 relative text-white">
        <HeroFade>
          <h1
            className="text-4xl md:text-6xl font-bold tracking-tight"
            style={{ letterSpacing: "-0.01em" }}
          >
            Ministries
          </h1>
          <p className="mt-3 text-lg text-white/90 max-w-2xl">
            Find community and purpose in every season of life.
          </p>
        </HeroFade>
      </div>
    </section>
  );
}

/* Filter bar (client component) */
function Filters({ categories }) {
  return (
    <div className="mb-6">
      <FilterClient categories={categories} />
    </div>
  );
}

function Cards() {
  return (
    <div id="ministries-grid" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {MINISTRIES.map((m, i) => (
        <Reveal key={m.title} delay={i * 0.05}>
          <HoverLift>
            <article className="card overflow-hidden h-full" data-category={m.category}>
              <Image
                src={m.img}
                width={800}
                height={600}
                alt={m.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <h3 className="font-semibold text-lg" style={{ color: "var(--indigo-900)" }}>
                  {m.title}
                </h3>
                <p className="text-sm text-[var(--ink-600)] mt-1">{m.desc}</p>
                <p className="text-sm text-[var(--ink-600)] mt-2">
                  <strong>Meets:</strong> {m.meets}
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <Link href={m.href} className="btn btn-tertiary">
                    Learn more →
                  </Link>
                  <Link href="/contact" className="btn btn-primary">
                    I’m interested
                  </Link>
                </div>
              </div>
            </article>
          </HoverLift>
        </Reveal>
      ))}
    </div>
  );
}

/* CTA */
function ServeCTA() {
  return (
    <section className="section bg-[var(--indigo-900)] text-white text-center">
      <div className="container-1200">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Ready to serve?
          </h2>
          <p className="text-white/85 mt-2">
            Take your next step and join a team making a difference.
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <Link href="/contact" className="btn bg-white text-[var(--indigo-900)]">
              Talk to a Leader
            </Link>
            <Link href="/events" className="btn btn-tertiary text-white underline">
              See On-Ramps →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
