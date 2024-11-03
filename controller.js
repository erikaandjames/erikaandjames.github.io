window.onload = () => {
  const navMenu = document.querySelector('.nav-menu');
  const navItems = document.querySelectorAll('.nav-item');
  const hamburger = document.querySelector('.nav-toggle');
  
  const toggle = e => e.classList.toggle('is-active');
  const toggleNav = ({ target }) => Array.from(navMenu.classList).includes('is-active') ? toggle(navMenu) : null;

  hamburger.addEventListener('click', () => toggle(navMenu, 'is-active'));
  Array.from(navItems).forEach(e => e.addEventListener('click', toggleNav));
}

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;

  const parallaxBackground1 = document.querySelector('.parallax-background');
  const parallaxBackground2 = document.querySelector('.parallax-2-background');
  const parallaxBackground3 = document.querySelector('.parallax-3-background');

  // Apply parallax effect with slight upward movement
  if (parallaxBackground1) parallaxBackground1.style.transform = `translateY(${scrollPosition * -0.2}px)`;
  if (parallaxBackground2) parallaxBackground2.style.transform = `translateY(${scrollPosition * -0.1}px)`;
  if (parallaxBackground3) parallaxBackground3.style.transform = `translateY(${scrollPosition * -0.05}px)`;
});
