"use client";

import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import HeroFade from "@/app/components/HeroFade";
import HoverLift from "@/app/components/HoverLift";



const CHURCH = {
  address: "1234 Example St, Wichita, KS 672xx",
  phone: "(316) 555-0123",
  email: "info@smccogic.org",
  mapsUrl: "https://maps.google.com?q=Saint+Mark+Cathedral+Wichita",
};

export default function ContactPage() {
  return (
    <>
      <Hero />

      {/* Quick contact cards */}
      <section className="section">
        <div className="container-1200 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Call Us",
              body: (
                <p className="text-[var(--ink-600)]">
                  <a className="underline" href={`tel:${telLink(CHURCH.phone)}`}>
                    {CHURCH.phone}
                  </a>
                </p>
              ),
            },
            {
              title: "Email",
              body: (
                <p className="text-[var(--ink-600)]">
                  <a className="underline" href={`mailto:${CHURCH.email}`}>
                    {CHURCH.email}
                  </a>
                </p>
              ),
            },
            {
              title: "Visit",
              body: (
                <>
                  <p className="text-[var(--ink-600)]">{CHURCH.address}</p>
                  <p className="mt-2">
                    <a
                      className="btn btn-tertiary"
                      href={CHURCH.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Get Directions →
                    </a>
                  </p>
                </>
              ),
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <HoverLift>
                <Card title={c.title}>{c.body}</Card>
              </HoverLift>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact / Prayer form */}
      <section className="section bg-[var(--bg-subtle)]" aria-labelledby="contact-form">
        <div className="container-1200 grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <div>
              <h2
                id="contact-form"
                className="text-3xl md:text-4xl font-semibold tracking-tight mb-3"
                style={{ letterSpacing: "-0.01em", color: "var(--indigo-900)" }}
              >
                Send a Message
              </h2>
              <p className="text-[var(--ink-600)]">
                Use the form to contact our office or share a prayer request. We’ll respond as soon as possible.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              className="card p-6 mt-6 md:mt-0 space-y-4"
              action={`mailto:${CHURCH.email}`}
              method="post"
              encType="text/plain"
            >
              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-[var(--indigo-900)]">
                  I’m reaching out about
                </label>
                <select
                  id="topic"
                  name="topic"
                  className="mt-1 w-full rounded-lg border border-[var(--border-200)] px-3 py-3"
                >
                  <option>General question</option>
                  <option>Plan a visit</option>
                  <option>Prayer request</option>
                  <option>Volunteer / serve</option>
                  <option>Giving / receipts</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
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

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--indigo-900)]">
                  Message / Prayer request
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1 w-full rounded-lg border border-[var(--border-200)] px-3 py-3"
                  placeholder="How can we pray for you or help you?"
                />
              </div>

              {/* Honeypot (spam trap) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="btn btn-primary">Send</button>
                <a className="btn btn-tertiary" href={`mailto:${CHURCH.email}`}>
                  Or email us →
                </a>
              </div>
              <p className="text-xs text-[var(--ink-600)]">
                Submitting opens your email client with the message.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Hours + Map */}
      <section className="section">
        <div className="container-1200 grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <HoverLift>
              <div className="card p-6 h-full">
                <h3 className="font-semibold text-lg" style={{ color: "var(--indigo-900)" }}>
                  Office Hours
                </h3>
                <dl className="mt-2 grid grid-cols-2 gap-y-2 text-sm text-[var(--ink-600)]">
                  <dt>Mon–Thu</dt>
                  <dd>9:00 AM – 4:00 PM</dd>
                  <dt>Friday</dt>
                  <dd>9:00 AM – 12:00 PM</dd>
                  <dt>Sunday</dt>
                  <dd>Worship 10:30 AM</dd>
                </dl>
              </div>
            </HoverLift>
          </Reveal>

          <Reveal delay={0.08}>
            <HoverLift>
              <div className="card overflow-hidden">
                <div className="relative w-full" style={{ paddingTop: "66.66%" }}>
                  {/* Replace src with your exact Google Maps embed URL */}
                  <iframe
                    title="Map — Saint Mark Cathedral"
                    className="absolute inset-0 w-full h-full"
                    src="https://www.google.com/maps?q=wichita&output=embed"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-4">
                  <a className="btn btn-tertiary" href={CHURCH.mapsUrl} target="_blank" rel="noreferrer">
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </HoverLift>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-[var(--indigo-900)] text-white text-center">
        <div className="container-1200">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Prefer to plan ahead?</h2>
            <p className="text-white/85 mt-2">We’ll save you a seat and help with parking & kids check-in.</p>
            <div className="mt-4">
              <Link href="/visit" className="btn bg-white text-[var(--indigo-900)]">
                Plan Your Visit
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ——— helpers ——— */
function Card({ title, children }) {
  return (
    <article className="card p-6 h-full">
      <h3 className="font-semibold text-lg" style={{ color: "var(--indigo-900)" }}>
        {title}
      </h3>
      <div className="mt-2">{children}</div>
    </article>
  );
}
function telLink(str) {
  return str.replace(/[^\d+]/g, "");
}

/* ——— hero ——— */
function Hero() {
  return (
    <section
      className="relative h-[46vh] min-h-[360px] flex items-center parallax"
      style={{
        backgroundImage: "url('/photos/contact-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      aria-label="Contact"
    >
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(0deg, rgba(43,45,112,0.70), rgba(43,45,112,0.70))",
        }}
        aria-hidden="true"
      />
      <div className="container-1200 relative text-white">
        <HeroFade>
          <h1
            className="text-4xl md:text-6xl font-bold tracking-tight"
            style={{ letterSpacing: "-0.01em" }}
          >
            Contact Us
          </h1>
          <p className="mt-3 text-lg text-white/90 max-w-2xl">
            We’re here to serve you. Reach out anytime.
          </p>
        </HeroFade>
      </div>
    </section>
  );
}
