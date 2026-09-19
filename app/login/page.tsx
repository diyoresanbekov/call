import Link from "next/link";
import { PhoneCall } from "lucide-react";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col bg-canvas">
      <div className="page-wrap flex flex-1 flex-col items-center justify-center py-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-signal-faint text-signal">
            <PhoneCall className="h-3.5 w-3.5" strokeWidth={2.25} />
          </span>
          <span className="text-[15px] font-medium tracking-tight text-ink">Callion</span>
        </Link>
        <div className="mt-8 w-full max-w-md rounded-xl2 border border-border bg-surface p-6 shadow-window-frame sm:p-8">
          <h1 className="text-2xl font-semibold tracking-tight text-ink">Kirish</h1>
          <p className="mt-2 text-sm text-ink-muted">
            SIP ish stoli ilovasiga korporativ hisobingiz bilan kiring.
          </p>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
