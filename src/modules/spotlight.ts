export function initSpotlight(): void {
  document.querySelectorAll<HTMLElement>(".spot").forEach((card) => {
    card.addEventListener("pointermove", (e: PointerEvent) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });
}