import { PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="page-wrap flex flex-col items-start justify-between gap-4 py-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-signal-faint text-signal">
            <PhoneCall className="h-3 w-3" strokeWidth={2.25} />
          </span>
          <span className="text-sm text-ink-muted">Callion</span>
        </div>
        <div className="flex flex-col items-start gap-1 text-xs text-ink-faint sm:items-end">
          <span>Toshkent, O&apos;zbekiston</span>
          <a href="mailto:support@callion.uz" className="transition-colors duration-200 hover:text-ink-muted">
            support@callion.uz
          </a>
        </div>
      </div>
    </footer>
  );
}
