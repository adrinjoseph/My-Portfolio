// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('mobile-menu-button');
  const menuIcon = document.getElementById('mobile-menu-icon');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!menuButton || !mobileMenu || !menuIcon) return;

  const closeMenu = () => {
    mobileMenu.style.display = 'none';
    menuButton.setAttribute('aria-expanded', 'false');
    menuIcon.textContent = 'menu';
  };

  const openMenu = () => {
    mobileMenu.style.display = 'flex';
    menuButton.setAttribute('aria-expanded', 'true');
    menuIcon.textContent = 'close';
  };

  const toggleMenu = () => {
    const isOpen = mobileMenu.style.display === 'flex';
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  menuButton.addEventListener('click', toggleMenu);

  // Close the menu whenever a nav link is tapped
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
});