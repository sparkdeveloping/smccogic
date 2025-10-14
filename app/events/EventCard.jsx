"use client";

import Image from "next/image";

export default function EventCard({ event }) {
  if (!event) return null;

  const { title, start, end, location, description, img } = event;
  const googleUrl = buildGoogleUrl({ title, start, end, location, description });

  const downloadICS = () => {
    const ics = buildICS({ title, start, end, location, description });
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${slugify(title)}.ics`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <article className="card overflow-hidden h-full">
      <Image
        src={img}
        width={800}
        height={600}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="p-5">
        <h3 className="font-semibold text-lg" style={{color:"var(--indigo-900)"}}>{title}</h3>
        <p className="text-sm text-[var(--ink-600)] mt-1">{fmtDateRange(start, end)}</p>
        <p className="text-sm text-[var(--ink-600)] mt-2">{location}</p>
        <p className="text-sm text-[var(--ink-600)] mt-2">{description}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href={googleUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Add to Google</a>
          <button onClick={downloadICS} className="btn bg-white border border-[var(--border-200)]">Download .ics</button>
        </div>
      </div>
    </article>
  );
}

/* ---------- helpers ---------- */
function pad(n){ return String(n).padStart(2,"0"); }
function toUTCyyyyMMddTHHmmss(dateStr){
  const d = new Date(dateStr);
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth()+1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;
}
function fmtDateRange(start,end){
  const s = new Date(start);
  const e = new Date(end);
  const opt = {weekday:"short", month:"short", day:"numeric", hour:"numeric", minute:"2-digit"};
  const sameDay = s.toDateString() === e.toDateString();
  if (sameDay) return `${s.toLocaleString(undefined,opt)} – ${e.toLocaleTimeString(undefined,{hour:"numeric",minute:"2-digit"})}`;
  return `${s.toLocaleString(undefined,opt)} → ${e.toLocaleString(undefined,opt)}`;
}
function slugify(s){ return s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""); }

function buildGoogleUrl({ title, start, end, location, description }){
  const base = "https://www.google.com/calendar/render?action=TEMPLATE";
  const dates = `${toUTCyyyyMMddTHHmmss(start)}/${toUTCyyyyMMddTHHmmss(end)}`;
  const params = new URLSearchParams({ text: title, dates, location, details: description || "" });
  return `${base}&${params.toString()}`;
}

function buildICS({ title, start, end, location, description }){
  const dtStart = toUTCyyyyMMddTHHmmss(start);
  const dtEnd   = toUTCyyyyMMddTHHmmss(end);
  const uid = `${slugify(title)}-${dtStart}@smccogic.org`;
  return [
    "BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//SMC COGIC//Events//EN","CALSCALE:GREGORIAN","METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${toUTCyyyyMMddTHHmmss(new Date().toISOString())}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:${escapeICS(title)}`,
    `LOCATION:${escapeICS(location || "")}`,
    `DESCRIPTION:${escapeICS(description || "")}`,
    "END:VEVENT","END:VCALENDAR",
  ].join("\r\n");
}
function escapeICS(s){ return String(s).replace(/\n/g,"\\n").replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/\r/g,""); }
