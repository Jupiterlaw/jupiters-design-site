import Image from "next/image";
import { COMPANY_NAME, WHATSAPP_DISPLAY } from "@/lib/constants";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden text-white"
      aria-label="Hero"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=80"
          alt="Modern living room with warm wood flooring"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-brand-900/85 via-brand-900/60 to-black/60"
        />
      </div>

      <div className="container-page flex min-h-[640px] flex-col justify-center py-24 sm:py-32 lg:min-h-[720px]">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Hong Kong · Since 2012
        </p>

        <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
          Floors that make your Hong Kong home feel finished.
        </h1>

        <p className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
          {COMPANY_NAME} supplies and installs premium SPC, engineered wood, and
          composite flooring across Hong Kong — from Mid-Levels apartments to
          rooftop terraces in Clearwater Bay. Free on-site measurement, fixed
          quote within 24 hours.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <WhatsAppButton
            variant="primary"
            label={`WhatsApp ${WHATSAPP_DISPLAY}`}
          />
          <a
            href="#products"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Browse flooring
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-3">
          {[
            { label: "Projects completed", value: "1,200+" },
            { label: "Years in Hong Kong", value: "13" },
            { label: "Google rating", value: "4.9 / 5" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur"
            >
              <dt className="text-xs uppercase tracking-wider text-white/60">
                {stat.label}
              </dt>
              <dd className="mt-1 text-2xl font-semibold text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
