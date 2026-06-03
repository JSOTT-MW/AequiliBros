// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.style.borderBottomColor = 'rgba(219,166,16,0.25)';
  } else {
    navbar.style.borderBottomColor = 'rgba(219,166,16,0.15)';
  }
}, { passive: true });

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Smooth scroll + active nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Intersection Observer - fade in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.service-card, .eco-card, .astat, .value-item, .pole-block, .cta-block').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Stagger children of service rows
document.querySelectorAll('.services-row').forEach(row => {
  row.querySelectorAll('.service-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
  });
});

document.querySelectorAll('.about-stats-grid').forEach(grid => {
  grid.querySelectorAll('.astat').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.08}s`;
  });
});
