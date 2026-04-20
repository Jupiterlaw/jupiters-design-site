"use client";

import Image from "next/image";
import { useState } from "react";
import { SHOWCASE_PROJECTS } from "@/lib/data";
import type { ShowcaseProject } from "@/types";

interface BeforeAfterCardProps {
  project: ShowcaseProject;
}

function BeforeAfterCard({ project }: BeforeAfterCardProps) {
  const [view, setView] = useState<"before" | "after">("after");
  const image = view === "before" ? project.beforeImage : project.afterImage;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-50">
        <Image
          key={view}
          src={image}
          alt={`${project.title} ${view} flooring installation`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-opacity duration-300"
        />
        <span className="absolute left-4 top-4 rounded-full bg-brand-900/80 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
          {project.category}
        </span>
        <div
          role="group"
          aria-label="Toggle before and after view"
          className="absolute bottom-4 left-1/2 flex -translate-x-1/2 rounded-full bg-white/90 p-1 text-xs font-semibold text-brand-900 shadow"
        >
          {(["before", "after"] as const).map((option) => {
            const isActive = view === option;
            return (
              <button
                key={option}
                type="button"
                aria-pressed={isActive}
                onClick={() => setView(option)}
                className={`rounded-full px-3 py-1 capitalize transition ${
                  isActive
                    ? "bg-brand-900 text-white"
                    : "text-brand-800 hover:text-brand-900"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-brand-900">{project.title}</h3>
        <p className="mt-1 text-sm font-medium text-brand-500">
          {project.location}
        </p>
        <p className="mt-3 text-sm text-brand-800/75">{project.summary}</p>
      </div>
    </article>
  );
}

export function ProjectShowcase() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-brand-50/60 py-20 sm:py-24"
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
            Project Showcase
          </p>
          <h2
            id="projects-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl"
          >
            Before & after — transformations across Hong Kong.
          </h2>
          <p className="mt-3 text-base text-brand-800/70">
            A glimpse of recent work from our in-house installation team. Toggle
            each card to see how the space looked before we moved in.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SHOWCASE_PROJECTS.map((project) => (
            <BeforeAfterCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
