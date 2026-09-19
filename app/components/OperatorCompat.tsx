import { CheckCircle2 } from "lucide-react";

const operators = [
  {
    name: "Uztelecom",
    mono: "UT",
    color: "#4C8DFF",
    trunk: "SIP 2.0 registratsiya",
    codec: "G.711a, G.729",
  },
  {
    name: "Beeline",
    mono: "BL",
    color: "#F9C21B",
    trunk: "SIP 2.0 registratsiya",
    codec: "G.711a, Opus",
  },
  {
    name: "Ucell",
    mono: "UC",
    color: "#E8A33D",
    trunk: "SIP trunk (IP-based)",
    codec: "G.711a, G.729",
  },
  {
    name: "Humans",
    mono: "HM",
    color: "#6DD3A6",
    trunk: "SIP 2.0 registratsiya",
    codec: "G.711a, Opus",
  },
];

export default function OperatorCompat() {
  return (
    <section id="operatorlar" className="scroll-mt-24 border-b border-border bg-surface">
      <div className="page-wrap section-y">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            Operatorlar bilan 100% moslik
          </h2>
          <p className="mt-3 text-ink-muted">
            Callion har bir operatorning SIP trunk sozlamalarini oldindan
            saqlaydi. Login va parolni kiriting — registratsiya avtomatik
            amalga oshadi.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {operators.map((op) => (
            <div
              key={op.name}
              className="surface-card p-5 transition duration-200 hover:border-signal/40 hover:shadow-[0_8px_24px_-18px_rgba(24,24,27,0.25)]"
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-xs font-semibold text-white"
                  style={{ backgroundColor: op.color }}
                >
                  {op.mono}
                </span>
                <span className="text-sm font-medium text-ink">{op.name}</span>
              </div>

              <dl className="mt-4 space-y-2 border-t border-border pt-4">
                <div className="flex items-start justify-between gap-2">
                  <dt className="text-xs text-ink-faint">Ulanish</dt>
                  <dd className="text-right text-xs text-ink-muted">{op.trunk}</dd>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <dt className="text-xs text-ink-faint">Kodeklar</dt>
                  <dd className="text-right font-mono text-xs text-ink-muted">{op.codec}</dd>
                </div>
                <div className="flex items-center gap-1.5 pt-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-live" strokeWidth={2} />
                  <span className="text-xs text-live">Tasdiqlangan</span>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
