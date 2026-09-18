"use client";

import { useState } from "react";
import {
  Phone,
  PhoneOutgoing,
  Mic,
  Pause,
  Grid3x3,
  Users,
  Settings,
  Signal,
  Undo2,
} from "lucide-react";

const sipAccounts = [
  { name: "Akkauntlar", number: "99 000 00 00", operator: "Callion", status: "online" as const },
  { name: "Raqam terish", number: "99 000 00 00", operator: "Callion", status: "online" as const },
  { name: "Tarix", number: "99 000 00 00", operator: "Callion", status: "call" as const },
];

const recentCalls = [
  { number: "+998 90 123 12 12", duration: "04:12", type: "out" as const },
  { number: "+998 93 777 75 75", duration: "00:58", type: "in" as const },
  { number: "+998 97 077 08 80", duration: "12:41", type: "out" as const },
];

const statusStyles = {
  online: "bg-live shadow-[0_0_8px_rgba(34,197,94,0.45)]",
  call: "bg-signal shadow-[0_0_8px_rgba(124,92,252,0.45)]",
  offline: "bg-danger/80",
};

export default function AppPreview() {
  const [dialed, setDialed] = useState("+998 71 200 11 01");

  const handleKeyPress = (key: string) => {
    setDialed((prev) => prev + key);
  };

  const handleBackspace = () => {
    setDialed((prev) => prev.slice(0, -1));
  };

  return (
    <div className="w-full overflow-hidden rounded-xl2 border border-border bg-surface-2/80 shadow-window-frame backdrop-blur-xl text-ink">
      <div className="flex items-center justify-between border-b border-border bg-surface/80 px-4 py-3">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-danger/80" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80" />
            <span className="h-3 w-3 rounded-full bg-live/80" />
          </div>
          <div className="ml-3 flex min-w-0 items-center gap-1.5 text-xs font-medium text-ink-muted">
            <Signal className="h-3.5 w-3.5 shrink-0 text-live" />
            <span className="truncate">Callion &mdash; 4 ta SIP akkaunt ulangan</span>
          </div>
        </div>
      </div>

      <div className="text-sm lg:grid lg:grid-cols-[220px_1fr]">
        <div className="border-b border-border bg-surface p-3 lg:border-b-0 lg:border-r">
          <div className="mb-3 hidden items-center gap-2 px-2 text-xs font-semibold uppercase tracking-wider text-ink-faint lg:flex">
            <Users className="h-3.5 w-3.5" />
            SIP akkauntlar
          </div>

          <ul className="flex gap-2 overflow-x-auto pb-1 lg:block lg:space-y-1 lg:overflow-visible">
            {sipAccounts.map((acc) => (
              <li key={acc.name} className="shrink-0 lg:shrink">
                <button
                  type="button"
                  onClick={() => setDialed(`+998 ${acc.number}`)}
                  className="group flex w-full items-center gap-2.5 rounded-lg border border-border bg-surface-2 px-3 py-2 text-left transition duration-200 hover:border-signal/35 hover:bg-surface-3 active:scale-[0.98]"
                >
                  <span className={`h-2 w-2 shrink-0 rounded-full ${statusStyles[acc.status]}`} />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-xs font-medium text-ink">
                      {acc.name}
                    </span>
                    <span className="hidden truncate font-mono text-[11px] text-ink-faint lg:block">
                      {acc.operator}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4 hidden border-t border-border pt-3 lg:block">
            <button
              type="button"
              className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-xs text-ink-muted transition duration-200 hover:bg-surface-3 hover:text-ink"
            >
              <Settings className="h-3.5 w-3.5" />
              Sozlamalar
            </button>
          </div>
        </div>

        <div className="bg-canvas/40 p-4 sm:p-5">
          <div className="mb-4">
            <div className="mb-1.5 text-xs font-medium text-ink-muted">Raqam terish</div>
            <div className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3 font-mono text-lg tracking-wider text-ink sm:text-xl">
              <span className="truncate">
                {dialed || <span className="text-ink-faint">Raqam kiriting...</span>}
              </span>
              {dialed ? (
                <button
                  type="button"
                  onClick={handleBackspace}
                  aria-label="Oxirgi belgini o'chirish"
                  className="ml-2 text-ink-muted transition duration-200 hover:text-danger"
                >
                  <Undo2 className="h-5 w-5" />
                </button>
              ) : null}
            </div>
          </div>

          <div className="mb-5 grid grid-cols-3 gap-2">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"].map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => handleKeyPress(key)}
                className="min-h-11 rounded-lg border border-border bg-surface-2 py-3 font-mono text-base font-medium text-ink transition duration-200 hover:border-signal/35 hover:bg-surface-3 active:scale-95"
              >
                {key}
              </button>
            ))}
          </div>

          <div className="mb-6 flex items-center gap-2">
            <button
              type="button"
              className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-live py-3 text-sm font-semibold text-canvas transition duration-200 hover:bg-live/90 active:scale-95"
            >
              <Phone className="h-4 w-4 fill-current" />
              Qo&apos;ng&apos;iroq qilish
            </button>
            <button
              type="button"
              aria-label="Mikrofon"
              className="min-h-11 rounded-xl border border-border bg-surface-2 p-3 text-ink-muted transition duration-200 hover:bg-surface-3 hover:text-ink"
            >
              <Mic className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Pauza"
              className="min-h-11 rounded-xl border border-border bg-surface-2 p-3 text-ink-muted transition duration-200 hover:bg-surface-3 hover:text-ink"
            >
              <Pause className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Qo'shimcha tugmalar"
              className="min-h-11 rounded-xl border border-border bg-surface-2 p-3 text-ink-muted transition duration-200 hover:bg-surface-3 hover:text-ink"
            >
              <Grid3x3 className="h-4 w-4" />
            </button>
          </div>

          <div>
            <div className="mb-2 text-xs font-medium text-ink-muted">So&apos;nggi qo&apos;ng&apos;iroqlar</div>
            <ul className="space-y-1">
              {recentCalls.map((call, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between rounded-lg border border-transparent px-3 py-2 transition duration-200 hover:border-border hover:bg-surface-2"
                >
                  <div className="flex min-w-0 items-center gap-2.5">
                    <PhoneOutgoing
                      className={`h-3.5 w-3.5 shrink-0 ${
                        call.type === "out" ? "text-ink-muted" : "rotate-180 text-live"
                      }`}
                    />
                    <span className="truncate font-mono text-xs text-ink-muted">{call.number}</span>
                  </div>
                  <span className="ml-3 font-mono text-xs text-ink-faint">{call.duration}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
