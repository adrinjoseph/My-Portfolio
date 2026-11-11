export function initNav(): void {
  const header = document.getElementById("site-header");
  const btn = document.getElementById("menu-btn");
  const panel = document.getElementById("mobile-menu");
  const iconOpen = document.getElementById("icon-open");
  const iconClose = document.getElementById("icon-close");
  const progress = document.getElementById("progress");

  const setMenu = (open: boolean): void => {
    if (!btn || !panel) return;
    panel.classList.toggle("hidden", !open);
    panel.classList.toggle("flex", open);
    btn.setAttribute("aria-expanded", String(open));
    iconOpen?.classList.toggle("hidden", open);
    iconClose?.classList.toggle("hidden", !open);
  };

  btn?.addEventListener("click", () => setMenu(btn.getAttribute("aria-expanded") !== "true"));
  panel?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) setMenu(false);
  });

  // header state + scroll progress (rAF-throttled)
  let ticking = false;
  const onScroll = (): void => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      header?.setAttribute("data-scrolled", String(y > 24));
      if (progress) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      }
      ticking = false;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // active section highlight
  const links = document.querySelectorAll<HTMLAnchorElement>("[data-nav]");
  const sections = document.querySelectorAll<HTMLElement>("main section[id]");
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const hash = `#${entry.target.id}`;
        links.forEach((l) => l.setAttribute("data-active", String(l.getAttribute("href") === hash)));
      }
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  sections.forEach((s) => io.observe(s));
}