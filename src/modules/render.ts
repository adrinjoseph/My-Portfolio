import { icons } from "../lib/icons";
import { marquee, projects, skills } from "../data/content";
import type { Project } from "../data/content";

const $ = <T extends HTMLElement>(id: string): T | null => document.getElementById(id) as T | null;

const toneClass: Record<Project["tone"], string> = {
  done: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  next: "border-sand/30 bg-sand/10 text-sand",
};

export function renderSkills(): void {
  const grid = $("skills-grid");
  if (!grid) return;

  grid.innerHTML = skills
    .map(
      (group, i) => `
      <div class="spot reveal card p-6" style="--d:${i * 70}ms">
        <div class="flex items-center gap-3 text-ember-2">
          ${icons[group.icon]}
          <h3 class="text-sm font-semibold text-snow">${group.title}</h3>
        </div>
        <ul class="mt-5 flex flex-wrap gap-2">
          ${group.items
            .map(
              (item) =>
                `<li class="rounded-md border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-mist transition-colors hover:border-ember/40 hover:text-snow">${item}</li>`,
            )
            .join("")}
        </ul>
      </div>`,
    )
    .join("");
}

function projectLinks(p: Project): string {
  const links: string[] = [];
  if (p.repo) {
    links.push(
      `<a href="${p.repo}" target="_blank" rel="noopener" class="btn btn-ghost !py-2 !text-xs">View code <span aria-hidden="true">↗</span></a>`,
    );
  }
  if (p.demo) {
    links.push(
      `<a href="${p.demo}" target="_blank" rel="noopener" class="btn btn-primary !py-2 !text-xs">Live demo <span aria-hidden="true">↗</span></a>`,
    );
  }
  return links.length ? `<div class="mt-8 flex flex-wrap gap-3">${links.join("")}</div>` : "";
}

export function renderProjects(): void {
  const list = $("projects-list");
  if (!list) return;

  list.innerHTML = projects
    .map(
      (p, i) => `
      <article class="spot reveal card group p-7 sm:p-10" style="--d:${i * 100}ms">
        <div class="flex items-start justify-between gap-4">
          <div class="flex items-center gap-3">
            <span class="font-mono text-xs text-ember-2">0${i + 1}</span>
            <span class="inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] ${toneClass[p.tone]}">
              <span class="h-1.5 w-1.5 rounded-full bg-current"></span>${p.status}
            </span>
          </div>
          <span class="text-mist transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ember-2">${icons.arrow}</span>
        </div>
        <h3 class="mt-5 font-serif text-4xl text-snow sm:text-5xl">${p.title}</h3>
        <p class="mt-3 max-w-2xl text-sm font-light text-sand sm:text-base">${p.tagline}</p>

        <ul class="mt-7 max-w-3xl space-y-3 border-t border-line pt-7 text-sm font-light leading-relaxed text-mist">
          ${p.bullets
            .map(
              (b) =>
                `<li class="flex items-start gap-3"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember"></span><span>${b}</span></li>`,
            )
            .join("")}
        </ul>

        <div class="mt-8 grid gap-3 sm:grid-cols-2">
          ${p.decisions
            .map(
              (d) => `
              <div class="rounded-xl border border-line bg-white/[0.02] p-4">
                <p class="focus-k">${d.k}</p>
                <p class="mt-1.5 text-sm text-snow/90">${d.v}</p>
              </div>`,
            )
            .join("")}
        </div>

        ${projectLinks(p)}

        <ul class="mt-8 flex flex-wrap gap-2 border-t border-line pt-6">
          ${p.tags
            .map(
              (t) =>
                `<li class="rounded-md border border-line bg-white/[0.03] px-3 py-1 font-mono text-xs text-mist">${t}</li>`,
            )
            .join("")}
        </ul>
      </article>`,
    )
    .join("");
}

export function renderMarquee(): void {
  const track = $("marquee");
  if (!track) return;
  const row = marquee
    .map((m) => `<span class="flex items-center gap-10"><span>${m}</span><span class="text-ember">✦</span></span>`)
    .join("");
  // duplicated so translateX(-50%) loops seamlessly
  track.innerHTML = row + row;
}