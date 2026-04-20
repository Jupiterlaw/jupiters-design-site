"use client";

import Link from "next/link";
import { useState } from "react";
import { COMPANY_NAME } from "@/lib/constants";
import { WhatsAppButton } from "./WhatsAppButton";

const NAV_LINKS: ReadonlyArray<{ href: string; label: string }> = [
  { href: "#products", label: "Products" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-background/80 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          href="#top"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-brand-800"
        >
          <span
            aria-hidden="true"
            className="inline-block h-8 w-8 rounded-full bg-gradient-to-br from-brand-400 to-brand-700"
          />
          {COMPANY_NAME}
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-brand-800 hover:text-brand-500"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <WhatsAppButton variant="primary" label="Get a Quote" />
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-800 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open ? (
        <div className="border-t border-black/5 bg-background md:hidden">
          <ul className="container-page flex flex-col gap-1 py-3">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 text-base font-medium text-brand-800 hover:bg-brand-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <WhatsAppButton
                variant="primary"
                label="Get a Quote on WhatsApp"
                className="w-full justify-center"
              />
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
