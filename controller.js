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

  const section1 = document.querySelector('.section-1');
  // const section2 = document.querySelector('.section-2');
  const section3 = document.querySelector('.section-3');
  const section4 = document.querySelector('.section-4');
  const section5 = document.querySelector('.section-5');

  // Apply slight upward movement to each section to enhance parallax effect
  if (section1) section1.style.transform = `translateY(${scrollPosition * -0.1}px)`;
  // if (section2) section2.style.transform = `translateY(${scrollPosition * -0.05}px)`;
  if (section3) section3.style.transform = `translateY(${scrollPosition * -0.05}px)`;
  if (section4) section4.style.transform = `translateY(${scrollPosition * -0.03}px)`;
  if (section5) section4.style.transform = `translateY(${scrollPosition * -0.02}px)`;
});

// window.addEventListener('scroll', function() {
//   const scrollPosition = window.scrollY;
//   const videoSection = document.querySelector('.parallax-video');

//   // Apply slight upward movement to the video to simulate parallax
//   if (videoSection) {
//       videoSection.style.transform = `translateY(${scrollPosition * -0.05}px)`;
//   }
// });


// window.addEventListener('scroll', function() {
//   const scrollPosition = window.scrollY;

//   const parallaxBackground1 = document.querySelector('.parallax-background');
//   const parallaxBackground2 = document.querySelector('.parallax-2-background');
//   const parallaxBackground3 = document.querySelector('.parallax-3-background');

//   // Apply parallax effect with slight upward movement
//   if (parallaxBackground1) parallaxBackground1.style.transform = `translateY(${scrollPosition * -0.2}px)`;
//   if (parallaxBackground2) parallaxBackground2.style.transform = `translateY(${scrollPosition * -0.1}px)`;
//   if (parallaxBackground3) parallaxBackground3.style.transform = `translateY(${scrollPosition * -0.05}px)`;
// });
