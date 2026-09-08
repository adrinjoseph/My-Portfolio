// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('mobile-menu-button');
  const menuIcon = document.getElementById('mobile-menu-icon');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!menuButton || !mobileMenu || !menuIcon) return;

  const closeMenu = () => {
    mobileMenu.classList.add('hidden');
    menuButton.setAttribute('aria-expanded', 'false');
    menuIcon.textContent = 'menu';
  };

  const toggleMenu = () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    if (isOpen) {
      closeMenu();
    } else {
      mobileMenu.classList.remove('hidden');
      menuButton.setAttribute('aria-expanded', 'true');
      menuIcon.textContent = 'close';
    }
  };

  menuButton.addEventListener('click', toggleMenu);

  // Close the menu whenever a nav link is tapped
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
});
