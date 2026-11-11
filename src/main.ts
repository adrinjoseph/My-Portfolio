import "./styles/style.css";

import { roles } from "./data/content";
import { initNav } from "./modules/nav";
import { initParallax } from "./modules/parallax";
import { renderMarquee, renderProjects, renderSkills } from "./modules/render";
import { initReveal } from "./modules/reveal";
import { initSpotlight } from "./modules/spotlight";
import { initTyper } from "./modules/typer";

function initProfileFallback(): void {
  const img = document.getElementById("profile-img") as HTMLImageElement | null;
  const fallback = document.getElementById("profile-fallback");
  if (!img || !fallback) return;

  const showFallback = (): void => {
    img.classList.add("hidden");
    fallback.classList.remove("hidden");
    fallback.classList.add("grid");
  };
  img.addEventListener("error", showFallback);
  if (img.complete && img.naturalWidth === 0) showFallback();
}

function boot(): void {
  // render data-driven sections first so reveal/spotlight can see them
  renderSkills();
  renderProjects();
  renderMarquee();

  initNav();
  initReveal();
  initSpotlight();
  initParallax();
  initTyper(document.getElementById("role-typer"), roles);
  initProfileFallback();

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
}

boot();