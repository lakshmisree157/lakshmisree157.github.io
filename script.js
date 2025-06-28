// Navbar toggle for mobile
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Scroll section highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        const sectionHeight = section.offsetHeight;
        const id = section.getAttribute('id');
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Initialize AOS (Animate on Scroll)
AOS.init({
    once: true,
    duration: 800,
    offset: 100,
});

// Initialize VanillaTilt for project cards
if (window.VanillaTilt) {
    VanillaTilt.init(document.querySelectorAll('.project-card'), {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.2,
    });
}

// Optional: Smooth scroll for anchor links (for browsers that don't support scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
}); 