"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { PRODUCTS } from "@/lib/data";
import type { ProductFilter } from "@/types";

const FILTERS: ReadonlyArray<ProductFilter> = [
  "All",
  "SPC",
  "Wood",
  "Composite",
];

export function ProductGallery() {
  const [filter, setFilter] = useState<ProductFilter>("All");

  const visibleProducts = useMemo(() => {
    if (filter === "All") return PRODUCTS;
    return PRODUCTS.filter((product) => product.category === filter);
  }, [filter]);

  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="bg-background py-20 sm:py-24"
    >
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
              Flooring Gallery
            </p>
            <h2
              id="products-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl"
            >
              Flooring designed for every room in Hong Kong.
            </h2>
            <p className="mt-3 text-base text-brand-800/70">
              Filter by material to compare SPC, engineered wood, and composite
              decking. Prices shown are starting points — message us on WhatsApp
              for a fixed quote including installation.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter flooring by category"
            className="flex flex-wrap gap-2"
          >
            {FILTERS.map((option) => {
              const isActive = filter === option;
              return (
                <button
                  key={option}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls="products-grid"
                  onClick={() => setFilter(option)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "border-brand-700 bg-brand-700 text-white shadow"
                      : "border-brand-200 bg-white text-brand-800 hover:border-brand-400"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        <div
          id="products-grid"
          role="tabpanel"
          aria-live="polite"
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visibleProducts.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-50">
                <Image
                  src={product.image}
                  alt={`${product.name} flooring sample`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-brand-900/80 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
                  {product.category}
                </span>
                {product.badge ? (
                  <span className="absolute right-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow">
                    {product.badge}
                  </span>
                ) : null}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-brand-900">
                    {product.name}
                  </h3>
                  <p className="text-sm font-semibold text-brand-700">
                    from HK${product.priceFromHkd}/sqft
                  </p>
                </div>
                <p className="mt-2 text-sm text-brand-800/75">
                  {product.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {visibleProducts.length === 0 ? (
          <p className="mt-10 rounded-xl border border-dashed border-brand-200 p-8 text-center text-brand-800/70">
            No products match this filter yet — message us on WhatsApp to source
            a custom option.
          </p>
        ) : null}
      </div>
    </section>
  );
}
