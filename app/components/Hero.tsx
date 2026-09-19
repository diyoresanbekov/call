import AppPreview from "./AppPreview";
import AudioSpectrum from "./AudioSpectrum";
import { ArrowRight, ShieldCheck } from "lucide-react";

const techBadges = ["SIP/2.0", "G.711 / G.729 / Opus"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-canvas">
      <div className="pointer-events-none absolute inset-0 hero-glow" />
      <div className="absolute inset-x-0 top-0 hidden h-[420px] opacity-40 md:block">
        <AudioSpectrum intensity={0.45} barColor="249, 115, 22" />
      </div>
      <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-canvas/0 via-canvas/70 to-canvas" />

      <div className="page-wrap relative pb-20 pt-16 md:pb-24 md:pt-24">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-ink-muted">
            <ShieldCheck className="h-3.5 w-3.5 text-live" strokeWidth={2.25} />
            Professional SIP / VoIP
          </p>
          <h1 className="text-balance mt-5 text-[2.4rem] font-semibold leading-[1.12] tracking-tight text-ink md:text-5xl">
            Call centerdagi barcha operatorlar, bitta ish stoli{" "}
            <span className="text-signal">ilovasida</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            Callion — Uztelecom, Beeline, Ucell va Humans SIP trunklarini
            bitta interfeysda boshqaradigan IP-ATS. O&apos;rnatish 10 daqiqa,
            sozlashda muhandis kerak emas.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#demo" className="btn-primary">
              Bepul sinab ko&apos;rish
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
            </a>
            <a href="#dastur" className="btn-secondary">
              Qanday ishlashini ko&apos;rish
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
            {techBadges.map((badge) => (
              <span key={badge} className="font-mono text-xs text-ink-faint">
                {badge}
              </span>
            ))}
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-live">
              <span className="h-1.5 w-1.5 rounded-full bg-live" />
              TLS + SRTP
            </span>
          </div>
        </div>

        <div id="dastur" className="mt-14 scroll-mt-24 md:mt-20">
          <AppPreview />
        </div>
      </div>
    </section>
  );
}
