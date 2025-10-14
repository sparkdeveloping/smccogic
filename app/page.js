"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import HeroFade from "@/app/components/HeroFade";
import HoverLift from "@/app/components/HoverLift";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Welcome / Feature row */}
      <section className="section">
        <div className="container-1200 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="space-y-4">
              <h2
                className="text-3xl md:text-4xl font-semibold tracking-tight"
                style={{ letterSpacing: "-0.01em", color: "var(--indigo-900)" }}
              >
                Welcome to St Mark Cathedral
              </h2>
              <p className="text-[var(--ink-600)] text-lg">
                We’re a church family pursuing Jesus together—worshipping,
                growing, and serving our city. Whether it’s your first time or
                your first time in a while, you’re invited.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/visit" className="btn btn-primary">
                  Plan Your Visit
                </Link>
                <Link href="/give" className="btn btn-secondary">
                  Give
                </Link>
                <Link href="/events" className="btn btn-tertiary">
                  See Upcoming Events →
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <HoverLift>
              <div className="card overflow-hidden">
                <Image
                  src="/photos/worship-1.jpg"
                  width={1200}
                  height={800}
                  alt="Congregation worshipping at St Mark Cathedral"
                  className="w-full h-56 md:h-72 lg:h-[22rem] object-cover"
                  priority
                />
              </div>
            </HoverLift>
          </Reveal>
        </div>
      </section>

      <StatsStrip />

      {/* Ministries */}
      <section className="section bg-[var(--bg-subtle)] motif" aria-labelledby="ministries">
        <div className="container-1200">
          <Reveal>
            <div className="mb-8">
              <h2
                id="ministries"
                className="text-3xl md:text-4xl font-semibold tracking-tight"
                style={{ letterSpacing: "-0.01em", color: "var(--indigo-900)" }}
              >
                Ministries for Every Stage
              </h2>
              <p className="text-[var(--ink-600)]">Find your people and take a next step.</p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Kids", desc: "Safe, fun, Jesus-centered.", img: "/photos/kids.jpg" },
              { title: "Students", desc: "Grow in faith and friendship.", img: "/photos/students.jpg" },
              { title: "Young Adults", desc: "Community and purpose.", img: "/photos/young-adults.jpg" },
              { title: "Men", desc: "Brotherhood and service.", img: "/photos/men.jpg" },
              { title: "Women", desc: "Sisterhood and study.", img: "/photos/women.jpg" },
              { title: "Worship & Arts", desc: "Lead the church in praise.", img: "/photos/worship-team.jpg" },
            ].map((m, i) => (
              <Reveal key={m.title} delay={i * 0.05}>
                <HoverLift>
                  <article className="card overflow-hidden h-full">
                    <Image
                      src={m.img}
                      width={800}
                      height={600}
                      alt={`${m.title} ministry`}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-5">
                      <h3 className="font-semibold text-lg" style={{ color: "var(--indigo-900)" }}>
                        {m.title}
                      </h3>
                      <p className="text-sm text-[var(--ink-600)] mb-3">{m.desc}</p>
                      <Link
                        href={`/ministries#${m.title.toLowerCase().replace(/\s/g, "-")}`}
                        className="btn btn-tertiary"
                      >
                        Explore →
                      </Link>
                    </div>
                  </article>
                </HoverLift>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="section" aria-labelledby="events">
        <div className="container-1200">
          <Reveal>
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2
                  id="events"
                  className="text-3xl md:text-4xl font-semibold tracking-tight"
                  style={{ letterSpacing: "-0.01em", color: "var(--indigo-900)" }}
                >
                  Upcoming Events
                </h2>
                <p className="text-[var(--ink-600)]">There’s a place for you this week.</p>
              </div>
              <Link href="/events" className="btn btn-tertiary">
                View All Events →
              </Link>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Worship Service", date: "Sun 10:30 AM", img: "/photos/event1.jpg" },
              { title: "Midweek Bible Study", date: "Wed 7:00 PM", img: "/photos/event2.jpg" },
              { title: "Community Outreach", date: "Sat 9:00 AM", img: "/photos/event3.jpg" },
            ].map((e, i) => (
              <Reveal key={e.title} delay={i * 0.05}>
                <HoverLift>
                  <article className="card overflow-hidden h-full">
                    <Image src={e.img} width={800} height={600} alt={e.title} className="w-full h-40 object-cover" />
                    <div className="p-5">
                      <h3 className="font-semibold text-lg" style={{ color: "var(--indigo-900)" }}>
                        {e.title}
                      </h3>
                      <p className="text-sm text-[var(--ink-600)] mb-4">{e.date}</p>
                      <div className="flex flex-wrap gap-3">
                        <a href="/events" className="btn btn-primary">
                          Details
                        </a>
                        <a href="#" className="btn btn-tertiary">
                          Add to Calendar →
                        </a>
                      </div>
                    </div>
                  </article>
                </HoverLift>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MessageStrip />

      {/* Location */}
      <section className="section bg-[var(--bg-subtle)]" aria-labelledby="location">
        <div className="container-1200 grid md:grid-cols-2 gap-8 items-center">
          <Reveal>
            <div className="space-y-3">
              <h2
                id="location"
                className="text-3xl md:text-4xl font-semibold tracking-tight"
                style={{ letterSpacing: "-0.01em", color: "var(--indigo-900)" }}
              >
                Join Us This Sunday
              </h2>
              <ul className="text-[var(--ink-600)]">
                <li>
                  Worship Service — <strong>10:30 AM</strong>
                </li>
                <li>1018 N. Dellrose, Wichita, KS</li>
              </ul>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/visit" className="btn btn-primary">
                  Plan Your Visit
                </Link>
                <a className="btn btn-tertiary" href="https://maps.google.com" target="_blank" rel="noreferrer">
                  Directions →
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <HoverLift>
              <div className="card overflow-hidden">
                <Image
                  src="/map-placeholder.jpg"
                  width={1200}
                  height={800}
                  alt="Map showing the church location"
                  className="w-full h-56 md:h-72 object-cover"
                />
              </div>
            </HoverLift>
          </Reveal>
        </div>
      </section>

      <CtaGive />
    </>
  );
}

/* ——— Sections ——— */

function Hero() {
  return (
    <section
      className="relative h-[68vh] min-h-[460px] flex items-center parallax"
      style={{
        backgroundImage: "url('/photos/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      aria-label="Welcome"
    >
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(0deg, rgba(43,45,112,0.70), rgba(43,45,112,0.70))" }}
        aria-hidden="true"
      />
      <div className="container-1200 relative">
        <div className="max-w-2xl text-white">
          <HeroFade>
            <p className="uppercase tracking-widest text-sm/none mb-2">Sundays 10:30 AM</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight" style={{ letterSpacing: "-0.01em" }}>
              A church family in the heart of Wichita
            </h1>
            <p className="mt-4 text-lg text-white/90">Encounter Jesus. Grow in community. Make a difference.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/visit" className="btn btn-primary">
                Plan Your Visit
              </Link>
              <Link href="/give" className="btn btn-secondary">
                Give
              </Link>
            </div>
          </HeroFade>
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  const Item = ({ value, label, i }) => (
    <Reveal delay={i * 0.05}>
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-semibold" style={{ color: "var(--indigo-900)" }}>
          {value}
        </div>
        <div className="text-sm text-[var(--ink-600)]">{label}</div>
      </div>
    </Reveal>
  );

  const stats = [
    ["60+", "Years of Ministry"],
    ["20+", "Active Ministries"],
    ["3", "Weekly Gatherings"],
    ["1000s", "Served in Wichita"],
    ["100%", "Jesus-centered"],
    ["1", "You, invited"],
  ];

  return (
    <section className="section">
      <div className="container-1200 grid grid-cols-3 md:grid-cols-6 gap-6">
        {stats.map(([v, l], i) => (
          <Item key={l} value={v} label={l} i={i} />
        ))}
      </div>
    </section>
  );
}

function MessageStrip() {
  return (
    <section className="section bg-[var(--indigo-900)] text-white">
      <div className="container-1200 grid md:grid-cols-2 gap-8 items-center">
        <Reveal>
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Latest Message</h2>
            <p className="text-white/85 mt-2">Catch up on Sunday’s teaching and share it with a friend.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="/messages" className="btn bg-white text-[var(--indigo-900)]">
                Watch
              </a>
              <a href="/messages" className="btn btn-tertiary text-white underline">
                More messages →
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <HoverLift>
            <div className="card overflow-hidden">
              <Image
                src="/photos/message-thumb.jpg"
                width={1200}
                height={800}
                alt="Past message thumbnail"
                className="w-full h-56 md:h-64 object-cover"
              />
            </div>
          </HoverLift>
        </Reveal>
      </div>
    </section>
  );
}

function CtaGive() {
  return (
    <section className="section">
      <Reveal>
        <div className="container-1200 card px-6 py-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: "var(--indigo-900)" }}>
            Your generosity changes lives.
          </h2>
          <p className="text-[var(--ink-600)] mt-2">
            Give securely online in seconds—recurring options available.
          </p>
          <div className="mt-4">
            <a href="/give" className="btn btn-secondary">
              Give Now
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
