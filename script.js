// =====================================================
// SMOOTH SCROLL ANCHOR LINKS
// =====================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offset = 60; // Account for fixed nav
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// =====================================================
// SCROLL-BASED ANIMATIONS
// =====================================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    observer.observe(section);
});

// =====================================================
// NAVIGATION ACTIVE STATE
// =====================================================

const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = 'var(--gray-light)';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--accent)';
        }
    });
});

// =====================================================
// PARALLAX IMAGE EFFECT
// =====================================================

const heroImage = document.querySelector('.hero-image img');
if (heroImage) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero');
        const heroPosition = heroSection.offsetTop;
        
        if (scrolled < heroPosition + window.innerHeight) {
            const parallax = (scrolled - heroPosition) * 0.5;
            heroImage.style.transform = `translateY(${parallax}px)`;
        }
    });
}

// =====================================================
// HOVER EFFECTS ON PRESS ITEMS
// =====================================================

document.querySelectorAll('.press-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.boxShadow = `0 0 20px rgba(211, 47, 47, 0.2)`;
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});

// =====================================================
// SESSION CARD INTERACTIONS
// =====================================================

document.querySelectorAll('.session-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = `inset 0 0 30px rgba(0, 212, 255, 0.1)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});

// =====================================================
// SUBTLE PAGE LOAD ANIMATION
// =====================================================

window.addEventListener('load', () => {
    document.body.style.animation = 'none';
    
    // Fade in navigation
    const nav = document.querySelector('.nav');
    nav.style.opacity = '0';
    nav.style.animation = 'fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
    
    // Stagger hero content
    const heroName = document.querySelector('.hero-name');
    const heroAlias = document.querySelector('.hero-alias');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroLocation = document.querySelector('.hero-location');
    
    [heroName, heroAlias, heroSubtitle, heroLocation].forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animation = `fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${0.1 + (index * 0.1)}s forwards`;
    });
});

// =====================================================
// KEYBOARD NAVIGATION
// =====================================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Could close any modals/overlays here
    }
});

// =====================================================
// PREFERS REDUCED MOTION
// =====================================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Remove animations for users who prefer reduced motion
    const styles = document.styleSheets[0];
    for (let i = 0; i < styles.cssRules.length; i++) {
        const rule = styles.cssRules[i];
        if (rule.name === 'fadeInUp' || rule.style.animation) {
            rule.style.animation = 'none';
        }
    }
}
