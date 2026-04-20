import { COMPANY_NAME, CONTACT_EMAIL, WHATSAPP_DISPLAY } from "@/lib/constants";

export function Footer() {
  return (
    <footer
      id="about"
      className="border-t border-brand-100 bg-brand-900 text-white"
    >
      <div className="container-page grid gap-8 py-12 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 text-lg font-semibold">
            <span
              aria-hidden="true"
              className="inline-block h-8 w-8 rounded-full bg-gradient-to-br from-brand-300 to-brand-600"
            />
            {COMPANY_NAME}
          </p>
          <p className="mt-3 max-w-sm text-sm text-white/70">
            A Hong Kong flooring specialist supplying premium SPC, engineered
            wood, and composite flooring. We handle supply, installation, and
            aftercare in-house.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>WhatsApp · {WHATSAPP_DISPLAY}</li>
            <li>{CONTACT_EMAIL}</li>
            <li>Mon – Sat · 10:00 – 19:00 HKT</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Services
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>Free on-site measurement</li>
            <li>Supply &amp; installation</li>
            <li>Floor restoration &amp; refinishing</li>
            <li>Commercial &amp; hospitality fit-outs</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-page py-4 text-xs text-white/60">
          © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
