/* ============================= */
/* NAV MENU (MOBILE TOGGLE) */
/* ============================= */
const menuToggle = document.getElementById('menuToggle');
const navList = document.getElementById('navList');

if (menuToggle && navList) {
  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
  });

  // بستن منو بعد از کلیک
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('open');
    });
  });
}


/* ============================= */
/* HEADER SCROLL EFFECT */
/* ============================= */
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (!header) return;

  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


/* ============================= */
/* ACTIVE NAV LINK (SCROLL SPY) */
/* ============================= */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-list a');

function updateActiveNav() {
  const scrollPos = window.scrollY + 120;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');

        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav);


/* ============================= */
/* SCROLL ANIMATION (FADE-UP) */
/* ============================= */
const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.15
  }
);

fadeElements.forEach(el => observer.observe(el));


/* ============================= */
/* SMOOTH SCROLL */
/* ============================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));

    if (!target) return;

    e.preventDefault();

    window.scrollTo({
      top: target.offsetTop - 70,
      behavior: 'smooth'
    });
  });
});
