'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';

type NavLink = { href: string; label: string };

const links: NavLink[] = [
  { href: '#rolunk', label: 'Rólunk' },
  { href: '#orokbefogadas', label: 'Örökbefogadás' },
  { href: '#tamogatas', label: 'Támogatás' },
  { href: '#kapcsolat', label: 'Kapcsolat' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="Fő menü"
      className="sticky top-0 z-50 border-b border-black/5 bg-cream/90 backdrop-blur supports-backdrop-filter:bg-cream/75"
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-20">
          <Link
            href="#top"
            aria-label="Zöld Sziget Állatmenhely — főoldal"
            className="flex shrink-0 items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/zold_sziget_logo.png"
              alt="Zöld Sziget Állatmenhely logó"
              width={180}
              height={48}
              priority
              unoptimized
              className="h-10 w-auto sm:h-18"
            />

            <p className="font-bold">Zöld Sziget Állatmenhely</p>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-ink-soft transition-colors hover:text-brand-dark"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href="#tamogatas"
              className="inline-flex h-10 items-center justify-center rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-dark hover:shadow-md"
            >
              Adományozás
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Menü bezárása' : 'Menü megnyitása'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink transition-colors hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
              className="h-6 w-6"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div id="mobile-menu" className="pb-4 md:hidden">
            <ul className="flex flex-col gap-1 border-t border-black/5 pt-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-black/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#tamogatas"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 w-full items-center justify-center rounded-full bg-accent px-5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-accent-dark"
                >
                  Adományozás
                </a>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </nav>
  );
}
