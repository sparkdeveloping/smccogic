"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import HeroFade from "@/app/components/HeroFade";
import HoverLift from "@/app/components/HoverLift";

const ADDRESS = "1018 Dellrose, Wichita, KS 67208";
const MAPS_URL = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}`;

export default function VisitPage() {
  return (
    <>
      <Hero />

      {/* Quick Facts */}
      <section className="section">
        <div className="container-1200 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Service Time",
              body: "Sundays at 10:30 AM (arrive 10–15 mins early for parking & kids check-in).",
            },
            {
              title: "Location",
              body: ADDRESS,
              footer: (
                <a className="btn btn-tertiary" href={MAPS_URL} target="_blank" rel="noreferrer">
                  Open in Maps →
                </a>
              ),
            },
            {
              title: "What to Wear",
              body: "Come as you are. You’ll see everything from jeans to suits—be comfortable.",
            },
          ].map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <HoverLift>
                <FactCard title={f.title} body={f.body} footer={f.footer} />
              </HoverLift>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Feature Rows */}
      <section className="section bg-[var(--bg-subtle)]" aria-labelledby="parking">
        <div className="container-1200 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="order-2 lg:order-1 space-y-3">
              <h2
                id="parking"
                className="text-3xl md:text-4xl font-semibold tracking-tight"
                style={{ letterSpacing: "-0.01em", color: "var(--indigo-900)" }}
              >
                Parking & Entrances
              </h2>
              <p className="text-[var(--ink-600)]">
                Parking is available on the <strong>east side of the building</strong>. You can enter through the{" "}
                <strong>east (main) entrance</strong> or the <strong>west entrance</strong>. Accessible spaces are close
                to the main entrance, and greeters are ready to help you find seating.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={MAPS_URL} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Get Directions
                </a>
                <Link href="/contact" className="btn btn-tertiary">
                  Questions? Contact us →
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <HoverLift>
              <div className="order-1 lg:order-2 card overflow-hidden">
                <Image
                  src="/photos/parking.png"
                  alt="Parking and entrances at St Mark Cathedral"
                  width={1200}
                  height={900}
                  className="w-full h-56 md:h-72 object-cover"
                  priority
                />
              </div>
            </HoverLift>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="kids">
        <div className="container-1200 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <HoverLift>
              <div className="card overflow-hidden">
                <Image
                  src="/photos/kids.jpg"
                  alt="Kids area at St Mark Cathedral"
                  width={1200}
                  height={900}
                  className="w-full h-56 md:h-72 object-cover"
                />
              </div>
            </HoverLift>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-3">
              <h2
                id="kids"
                className="text-3xl md:text-4xl font-semibold tracking-tight"
                style={{ letterSpacing: "-0.01em", color: "var(--indigo-900)" }}
              >
                Kids Check-In
              </h2>
              <p className="text-[var(--ink-600)]">
                Saint Mark Kids is a safe, joyful environment for infants through 5th grade. First-time families can
                register at the desk; our team will print secure name tags and escort you to the classroom.
              </p>
              <ul className="list-disc pl-5 text-[var(--ink-600)]">
                <li>Background-checked volunteers</li>
                <li>Age-appropriate lessons and activities</li>
                <li>Paging system for parents if needed</li>
              </ul>
              <Link href="/ministries#kids" className="btn btn-tertiary">
                Learn about Kids Ministry →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-[var(--bg-subtle)]" aria-labelledby="accessibility">
        <div className="container-1200 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="space-y-3">
              <h2
                id="accessibility"
                className="text-3xl md:text-4xl font-semibold tracking-tight"
                style={{ letterSpacing: "-0.01em", color: "var(--indigo-900)" }}
              >
                Accessibility
              </h2>
              <p className="text-[var(--ink-600)]">We’re committed to an accessible experience for everyone.</p>
              <ul className="list-disc pl-5 text-[var(--ink-600)]">
                <li>Accessible parking and seating</li>
                <li>Wheelchair-friendly entrances, aisles, and restrooms</li>
                <li>Assisted listening available upon request</li>
              </ul>
              <a href="#host" className="btn btn-primary">
                Message a Host
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <HoverLift>
              <div className="card overflow-hidden">
                <Image
                  src="/photos/access.png"
                  alt="Accessible entrance ramp"
                  width={1200}
                  height={900}
                  className="w-full h-56 md:h-72 object-cover"
                />
              </div>
            </HoverLift>
          </Reveal>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section" aria-labelledby="expect">
        <div className="container-1200">
          <Reveal>
            <h2
              id="expect"
              className="text-3xl md:text-4xl font-semibold tracking-tight mb-6"
              style={{ letterSpacing: "-0.01em", color: "var(--indigo-900)" }}
            >
              What to Expect
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "01", title: "Warm Welcome", body: "Greeters will help with doors, directions, and any questions." },
              {
                n: "02",
                title: "Worship & Teaching",
                body: "About 75–90 minutes with live worship and a Christ-centered message.",
              },
              {
                n: "03",
                title: "Next Steps",
                body: "Stop by the Welcome area to meet leaders and learn how to get connected.",
              },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <HoverLift>
                  <Step n={s.n} title={s.title} body={s.body} />
                </HoverLift>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-[var(--bg-subtle)]" aria-labelledby="faqs">
        <div className="container-1200">
          <Reveal>
            <h2
              id="faqs"
              className="text-3xl md:text-4xl font-semibold tracking-tight mb-6"
              style={{ letterSpacing: "-0.01em", color: "var(--indigo-900)" }}
            >
              FAQs
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <details className="card p-5 group">
                  <summary className="cursor-pointer font-medium text-[var(--indigo-900)]">{f.q}</summary>
                  <p className="mt-3 text-[var(--ink-600)]">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact a Host */}
      <section id="host" className="section">
        <div className="container-1200 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div>
              <h2
                className="text-3xl md:text-4xl font-semibold tracking-tight"
                style={{ letterSpacing: "-0.01em", color: "var(--indigo-900)" }}
              >
                Message a Host
              </h2>
              <p className="text-[var(--ink-600)] mt-2">Have a question before you come? We’d love to help.</p>
              <p className="text-sm text-[var(--ink-600)] mt-2">
                Prefer email?{" "}
                <a className="underline" href="mailto:info@smccogic.org">
                  info@smccogic.org
                </a>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form className="card p-6 space-y-4" action="mailto:info@smccogic.org" method="post" encType="text/plain">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--indigo-900)]">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-1 w-full rounded-lg border border-[var(--border-200)] px-3 py-3"
                  placeholder="Your name"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--indigo-900)]">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-lg border border-[var(--border-200)] px-3 py-3"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[var(--indigo-900)]">
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    className="mt-1 w-full rounded-lg border border-[var(--border-200)] px-3 py-3"
                    placeholder="(###) ###-####"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--indigo-900)]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 w-full rounded-lg border border-[var(--border-200)] px-3 py-3"
                  placeholder="How can we help?"
                />
              </div>
              <button className="btn btn-primary w-full md:w-auto">Send Message</button>
            </form>
          </Reveal>
        </div>
      </section>

      <VisitCTA />
    </>
  );
}

/* ——— Components ——— */

function Hero() {
  return (
    <section
      className="relative h-[56vh] min-h-[420px] flex items-center parallax"
      style={{
        backgroundImage: "url('/photos/visit.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      aria-label="Plan Your Visit"
    >
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.62), rgba(0,0,0,0.62))" }}
        aria-hidden="true"
      />
      <div className="container-1200 relative text-white">
        <HeroFade>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight" style={{ letterSpacing: "-0.01em" }}>
            Plan Your Visit
          </h1>
          <p className="mt-3 text-lg text-white/90 max-w-2xl">
            We can’t wait to meet you. Here’s everything you need for a great first Sunday.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#host" className="btn bg-white text-[var(--indigo-900)]">
              Message a Host
            </a>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn btn-tertiary text-white underline">
              Directions →
            </a>
          </div>
        </HeroFade>
      </div>
    </section>
  );
}

function FactCard({ title, body, footer }) {
  return (
    <article className="card p-6 h-full">
      <h3 className="font-semibold text-lg" style={{ color: "var(--indigo-900)" }}>
        {title}
      </h3>
      <p className="text-[var(--ink-600)] mt-2">{body}</p>
      {footer && <div className="mt-3">{footer}</div>}
    </article>
  );
}

function Step({ n, title, body }) {
  return (
    <article className="card p-6 h-full">
      <div className="text-sm text-[var(--ink-600)]">{n}</div>
      <h3 className="font-semibold text-lg mt-1" style={{ color: "var(--indigo-900)" }}>
        {title}
      </h3>
      <p className="text-[var(--ink-600)] mt-2">{body}</p>
    </article>
  );
}

const FAQS = [
  { q: "How long is the service?", a: "Usually 75–90 minutes including worship, announcements, and teaching." },
  { q: "Is there something for my kids?", a: "Yes! Secure check-in for infants–5th grade with age-specific rooms." },
  { q: "Do I need to dress up?", a: "No dress code—come as you are. Many dress casual; some dress formal." },
  { q: "Will I be asked to give?", a: "Giving is optional for guests. We’re simply glad you’re here." },
  { q: "Where do I go when I arrive?", a: "Look for the Welcome area just inside the main entrance; our team will guide you." },
  { q: "Is the building accessible?", a: "Yes—accessible parking, ramps, seating, and restrooms. Assisted listening upon request." },
];

function VisitCTA() {
  return (
    <section className="section bg-[var(--indigo-900)] text-white text-center">
      <div className="container-1200">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">See what’s happening this week</h2>
          <p className="text-white/85 mt-2">Join a service, group, or outreach opportunity.</p>
          <div className="mt-4">
            <Link href="/events" className="btn bg-white text-[var(--indigo-900)]">
              Browse Events
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}