"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Menu, PhoneCall, X } from "lucide-react";

const links = [
  { href: "#operatorlar", label: "Operatorlar" },
  { href: "#dastur", label: "Dastur" },
  { href: "#hisoblagich", label: "Narxlar" },
  { href: "#demo", label: "Bog'lanish" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    firstLinkRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    openButtonRef.current?.focus();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md">
      <div className="page-wrap relative z-50 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-signal-faint text-signal">
            <PhoneCall className="h-3.5 w-3.5" strokeWidth={2.25} />
          </span>
          <span className="text-[15px] font-medium tracking-tight text-ink">
            Callion
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Asosiy menyu">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#demo" className="hidden btn-primary sm:inline-flex">
            Demo olib korish
          </a>
          <button
            ref={openButtonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink md:hidden"
            aria-label={isMenuOpen ? "Menyuni yopish" : "Menyuni ochish"}
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="md:hidden">
          <button
            type="button"
            className="fixed inset-0 z-40 bg-ink/20"
            aria-label="Menyuni yopish"
            onClick={closeMenu}
          />
          <nav
            id={menuId}
            aria-label="Mobil menyu"
            className="relative z-50 border-t border-border bg-surface px-4 py-4 shadow-window-frame"
          >
            <div className="flex flex-col gap-1">
              {links.map((link, index) => (
                <a
                  key={link.href}
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 text-sm text-ink-muted transition-colors duration-200 hover:bg-surface-3 hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/login"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm text-ink-muted transition-colors duration-200 hover:bg-surface-3 hover:text-ink"
              >
                Kirish
              </Link>
              <a href="#demo" onClick={closeMenu} className="btn-primary mt-2">
                Demo so&apos;rash
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
