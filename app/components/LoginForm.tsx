"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-4">
      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs text-ink-faint">
          Ish elektron pochtasi
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          placeholder="ism@kompaniya.uz"
          className="field-input"
        />
      </div>

      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <label htmlFor="password" className="text-xs text-ink-faint">
            Parol
          </label>
          <a href="#" className="text-xs text-ink-faint transition duration-200 hover:text-ink-muted">
            Parolni unutdingizmi?
          </a>
        </div>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            required
            autoComplete="current-password"
            placeholder="••••••••"
            className="field-input pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? "Parolni yashirish" : "Parolni ko'rsatish"}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-faint transition duration-200 hover:text-ink-muted"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <button type="submit" className="btn-primary w-full">
        Kirish
      </button>

      <p className="pt-2 text-center text-xs text-ink-faint">
        Hisobingiz yo&apos;qmi?{" "}
        <a href="/#demo" className="text-ink-muted transition-colors duration-200 hover:text-ink">
          Demo so&apos;rang
        </a>
      </p>
    </form>
  );
}
