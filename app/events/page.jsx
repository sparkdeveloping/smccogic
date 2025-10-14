"use client";

import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import HeroFade from "@/app/components/HeroFade";
import HoverLift from "@/app/components/HoverLift";
import EventCard from "./EventCard";



// —— Swap with your real events or fetch from a CMS later
const EVENTS = [
  {
    id: "worship-service",
    title: "Sunday Worship Service",
    start: "2025-10-19T10:30:00-05:00",
    end:   "2025-10-19T11:30:00-05:00",
    location: "Saint Mark Cathedral, Wichita, KS",
    description: "Join us for live worship and a Christ-centered message.",
    img: "/photos/event1.jpg",
  },
  {
    id: "midweek",
    title: "Midweek Bible Study",
    start: "2025-10-23T19:00:00-05:00",
    end:   "2025-10-23T20:15:00-05:00",
    location: "Saint Mark Cathedral, Chapel",
    description: "Dig into Scripture with practical teaching and Q&A.",
    img: "/photos/event2.jpg",
  },
  {
    id: "outreach",
    title: "Community Outreach",
    start: "2025-10-26T09:00:00-05:00",
    end:   "2025-10-26T12:00:00-05:00",
    location: "Downtown Wichita (meet in church lobby)",
    description: "Serve our city through food distribution and prayer.",
    img: "/photos/event3.jpg",
  },
];

export default function EventsPage() {
  return (
    <>
      <Hero />

      {/* Calendar Embed */}
      <section className="section bg-[var(--bg-subtle)]" aria-labelledby="calendar">
        <div className="container-1200">
          <Reveal>
            <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 id="calendar" className="text-3xl md:text-4xl font-semibold tracking-tight" style={{letterSpacing:"-0.01em", color:"var(--indigo-900)"}}>
                  Calendar
                </h2>
                <p className="text-[var(--ink-600)]">Add our calendar to yours or tap any event below.</p>
              </div>
              <a href="https://calendar.google.com/" target="_blank" rel="noreferrer" className="btn btn-tertiary">
                Open Google Calendar →
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <HoverLift>
              <div className="card overflow-hidden">
                <div className="relative w-full" style={{paddingTop:"66.66%"}}>
                  {/* Replace src with your actual Google Calendar embed URL */}
                  <iframe
                    title="Saint Mark Google Calendar"
                    className="absolute inset-0 w-full h-full"
                    src="https://calendar.google.com/calendar/embed?src=your_public_calendar_id%40group.calendar.google.com&ctz=America%2FChicago"
                    style={{border:0}}
                    loading="lazy"
                  />
                </div>
              </div>
            </HoverLift>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs text-[var(--ink-600)] mt-3">
              To use your own calendar: Google Calendar → Settings → Select calendar → “Access permissions” set to Public → “Integrate calendar” → copy the <em>Embed code</em> URL and paste it into the iframe <code>src</code>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Event Cards */}
      <section className="section" aria-labelledby="upcoming">
        <div className="container-1200">
          <Reveal>
            <div className="mb-8">
              <h2 id="upcoming" className="text-3xl md:text-4xl font-semibold tracking-tight" style={{letterSpacing:"-0.01em", color:"var(--indigo-900)"}}>
                Upcoming Events
              </h2>
              <p className="text-[var(--ink-600)]">Click an event to add it to your calendar.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {EVENTS.map((e, i) => (
              <Reveal key={e.id} delay={i * 0.06}>
                <HoverLift>
                  <EventCard event={e} />
                </HoverLift>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaVisit />
    </>
  );
}

/* ——— Hero + CTA ——— */
function Hero(){
  return (
    <section
      className="relative h-[46vh] min-h-[360px] flex items-center parallax"
      style={{
        backgroundImage: "url('/photos/events-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      aria-label="Events"
    >
      <div className="absolute inset-0" style={{background:"linear-gradient(0deg, rgba(43,45,112,0.70), rgba(43,45,112,0.70))"}} aria-hidden="true"/>
      <div className="container-1200 relative text-white">
        <HeroFade>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight" style={{letterSpacing:"-0.01em"}}>
            Events
          </h1>
          <p className="mt-3 text-lg text-white/90 max-w-2xl">
            Stay in the loop and never miss what’s happening at Saint Mark.
          </p>
        </HeroFade>
      </div>
    </section>
  );
}

function CtaVisit(){
  return (
    <section className="section bg-[var(--indigo-900)] text-white text-center">
      <div className="container-1200">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">New here?</h2>
          <p className="text-white/85 mt-2">Plan your visit and we’ll meet you at the door.</p>
          <div className="mt-4">
            <Link href="/visit" className="btn bg-white text-[var(--indigo-900)]">Plan Your Visit</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
