export function initTyper(el: HTMLElement | null, words: readonly string[]): void {
  if (!el || words.length === 0) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = words[0];
    return;
  }

  let wordIdx = 0;
  let charIdx = 0;
  let deleting = false;

  const tick = (): void => {
    const word = words[wordIdx];
    charIdx += deleting ? -1 : 1;
    el.textContent = word.slice(0, charIdx);

    let delay = deleting ? 40 : 85;
    if (!deleting && charIdx === word.length) {
      deleting = true;
      delay = 1700;
    } else if (deleting && charIdx === 0) {
      deleting = false;
      wordIdx = (wordIdx + 1) % words.length;
      delay = 350;
    }
    window.setTimeout(tick, delay);
  };

  window.setTimeout(tick, 900);
}