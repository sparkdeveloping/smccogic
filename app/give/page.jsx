// /app/give/page.jsx
import Link from "next/link";

export const metadata = {
  title: "Give — Saint Mark Cathedral (COGIC)",
  description:
    "Give securely online in seconds. Your generosity fuels ministry and outreach at Saint Mark Cathedral.",
};

const GIVELIFY_URL = "https://giv.li/hkb3vq";

export default function GivePage() {
  return (
    <>
      <Hero />

      {/* Primary Give Block (embed + fallback) */}
      <section className="section bg-[var(--bg-subtle)]" aria-labelledby="give-online">
        <div className="container-1200 grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 id="give-online" className="text-3xl md:text-4xl font-semibold tracking-tight mb-3" style={{letterSpacing:"-0.01em", color:"var(--indigo-900)"}}>
              Give Online
            </h2>
            <p className="text-[var(--ink-600)] mb-4">
              Fast, secure, and tax-deductible. You can make a one-time gift or set up recurring giving.
            </p>

            {/* If Givelify allows embedding for this URL, this will render.
               If not (X-Frame-Options: DENY/SAMEORIGIN), users will see the fallback card below. */}
            <div className="card overflow-hidden">
              <div className="relative w-full" style={{ paddingTop: "160px" }}>
                <iframe
                  title="Givelify — Saint Mark Cathedral"
                  className="absolute inset-0 w-full h-full"
                  src={GIVELIFY_URL}
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Fallback */}
            <noscript>
              <p className="mt-4">
                JavaScript is required to load the giving form. You can give at{" "}
                <a className="underline" href={GIVELIFY_URL}>this link</a>.
              </p>
            </noscript>

            <div className="mt-4">
              <a href={GIVELIFY_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
                Open Secure Giving
              </a>
              <p className="text-xs text-[var(--ink-600)] mt-2">
                If the form above doesn’t load, click “Open Secure Giving” to give in a new tab.
              </p>
            </div>
          </div>

          {/* Impact / Trust */}
          <aside className="space-y-4">
            <div className="card p-6">
              <h3 className="font-semibold text-lg" style={{color:"var(--indigo-900)"}}>
                Your Impact
              </h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-[var(--ink-600)]">
                <li>Local outreach: food & care for Wichita families</li>
                <li>Next-gen ministry: kids, students, & young adults</li>
                <li>Global missions & church planting</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold text-lg" style={{color:"var(--indigo-900)"}}>
                Integrity & Security
              </h3>
              <p className="text-sm text-[var(--ink-600)] mt-2">
                Payments are processed on a PCI-compliant platform. Gifts are
                receipted for your records. For questions,{" "}
                <Link href="/contact" className="underline">contact our office</Link>.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="section" aria-labelledby="other-ways">
        <div className="container-1200 grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="font-semibold text-lg" style={{color:"var(--indigo-900)"}}>In Person</h3>
            <p className="text-sm text-[var(--ink-600)] mt-2">
              Place cash or checks in the giving boxes during any service.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-lg" style={{color:"var(--indigo-900)"}}>By Mail</h3>
            <p className="text-sm text-[var(--ink-600)] mt-2">
              Saint Mark Cathedral, 1234 Example St, Wichita, KS 672xx. Make checks payable to “Saint Mark Cathedral.”
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-lg" style={{color:"var(--indigo-900)"}}>Text to Give</h3>
            <p className="text-sm text-[var(--ink-600)] mt-2">
              If enabled on Givelify, include your church’s dedicated text-to-give number here.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-[var(--bg-subtle)]" aria-labelledby="give-faqs">
        <div className="container-1200">
          <h2 id="give-faqs" className="text-3xl md:text-4xl font-semibold tracking-tight mb-6" style={{letterSpacing:"-0.01em", color:"var(--indigo-900)"}}>
            Giving FAQs
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {FAQS.map((f, i) => (
              <details key={i} className="card p-5">
                <summary className="cursor-pointer font-medium text-[var(--indigo-900)]">{f.q}</summary>
                <p className="mt-3 text-[var(--ink-600)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <TitheTeaching />
    </>
  );
}

/* ——— Sections ——— */
function Hero(){
  return (
    <section
      className="relative h-[46vh] min-h-[360px] flex items-center parallax"
      style={{
        backgroundImage: "url('/photos/give-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      aria-label="Give"
    >
      <div className="absolute inset-0" style={{background:"linear-gradient(0deg, rgba(43,45,112,0.70), rgba(43,45,112,0.70))"}} aria-hidden="true"/>
      <div className="container-1200 relative text-white">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight" style={{letterSpacing:"-0.01em"}}>
          Give
        </h1>
        <p className="mt-3 text-lg text-white/90 max-w-2xl">
          Thank you for your generosity—every gift advances the mission.
        </p>
        <div className="mt-6">
          <a href={GIVELIFY_URL} target="_blank" rel="noreferrer" className="btn bg-white text-[var(--indigo-900)]">
            Open Secure Giving
          </a>
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  { q: "Is online giving secure?", a: "Yes. Transactions are processed by a PCI-compliant provider over encrypted connections." },
  { q: "Can I set up recurring giving?", a: "Yes. Choose a frequency (weekly, biweekly, monthly) within the giving form." },
  { q: "Will I get a receipt?", a: "You’ll receive an email confirmation for each gift, and an annual statement for tax purposes." },
  { q: "Can I designate funds?", a: "If designations are enabled, you can choose a fund (e.g., Tithes, Missions, Building) in the form." },
];

function TitheTeaching(){
  return (
    <section className="section">
      <div className="container-1200 card p-6 md:p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold" style={{color:"var(--indigo-900)"}}>
          “We give because God first gave to us.”
        </h2>
        <p className="text-[var(--ink-600)] mt-2">
          Giving is an act of worship and a way we participate in God’s work in Wichita and beyond.
        </p>
        <div className="mt-4">
          <a href={GIVELIFY_URL} target="_blank" rel="noreferrer" className="btn btn-secondary">
            Give Now
          </a>
        </div>
      </div>
    </section>
  );
}
