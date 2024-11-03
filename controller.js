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

  // Adjust parallax layers
  const parallaxBackground = document.querySelector('.parallax-background');
  const parallaxClouds = document.querySelector('.parallax-clouds');

  parallaxBackground.style.transform = `translateY(${scrollPosition * 0.3}px)`;
  parallaxClouds.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});
