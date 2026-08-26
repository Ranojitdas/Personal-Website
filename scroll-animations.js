// Scroll Animation Observer
document.addEventListener('DOMContentLoaded', function() {
    // Configuration for Intersection Observer
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
    };

    // Track animated elements to prevent re-animation flicker
    const animatedElements = new Set();

    // Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Only animate once to prevent flickering
                if (!animatedElements.has(entry.target)) {
                    entry.target.classList.add('animate');
                    animatedElements.add(entry.target);
                    
                    // Stop observing after animation (prevents flickering)
                    observer.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);

    // Function to add scroll animation classes to elements
    function initScrollAnimations() {
        // Animate section headers
        const sectionHeaders = document.querySelectorAll('section h2');
        sectionHeaders.forEach((header, index) => {
            header.classList.add('scroll-animate', 'animate-fade-up');
            observer.observe(header);
        });

        // Animate project cards with stagger effect
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.classList.add('scroll-animate', 'animate-fade-up', `animate-delay-${Math.min(index + 1, 8)}`);
            observer.observe(card);
        });

        // Animate skill cards with scale effect
        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach((card, index) => {
            card.classList.add('scroll-animate', 'animate-scale', `animate-delay-${Math.min(index + 1, 8)}`);
            observer.observe(card);
        });

        // Animate achievement cards
        const achievementCards = document.querySelectorAll('.achievement-card');
        achievementCards.forEach((card, index) => {
            card.classList.add('scroll-animate', 'animate-fade-up', `animate-delay-${Math.min(index + 1, 8)}`);
            observer.observe(card);
        });

        // Animate experience cards with alternating directions
        const experienceCards = document.querySelectorAll('.experience-card');
        experienceCards.forEach((card, index) => {
            const animationType = index % 2 === 0 ? 'animate-fade-left' : 'animate-fade-right';
            card.classList.add('scroll-animate', animationType);
            observer.observe(card);
        });

        // Animate education cards
        const educationCards = document.querySelectorAll('.education-card');
        educationCards.forEach((card, index) => {
            card.classList.add('scroll-animate', 'animate-scale', `animate-delay-${Math.min(index + 1, 3)}`);
            observer.observe(card);
        });

        // Animate about sections
        const aboutSections = document.querySelectorAll('.about-grid > div, .about-text, .skills-section');
        aboutSections.forEach((section, index) => {
            section.classList.add('scroll-animate', 'animate-fade-up', `animate-delay-${Math.min(index + 1, 3)}`);
            observer.observe(section);
        });

        // Animate experience preview section
        const experiencePreview = document.querySelectorAll('#experience-preview .experience-preview-content > *');
        experiencePreview.forEach((element, index) => {
            if (!element.classList.contains('experience-card')) {
                element.classList.add('scroll-animate', 'animate-fade-up');
                observer.observe(element);
            }
        });

        // Animate about preview section
        const aboutPreview = document.querySelectorAll('#about-preview .about-preview-content > *');
        aboutPreview.forEach((element, index) => {
            element.classList.add('scroll-animate', 'animate-fade-up', `animate-delay-${Math.min(index + 1, 3)}`);
            observer.observe(element);
        });

        // Animate featured projects section
        const featuredSection = document.querySelector('#featured-projects');
        if (featuredSection) {
            const featuredTitle = featuredSection.querySelector('h2');
            if (featuredTitle) {
                featuredTitle.classList.add('scroll-animate', 'animate-fade-up');
                observer.observe(featuredTitle);
            }
        }

        // Animate contact preview
        const contactPreview = document.querySelectorAll('#contact-preview .contact-preview-content > *');
        contactPreview.forEach((element, index) => {
            element.classList.add('scroll-animate', 'animate-fade-up', `animate-delay-${Math.min(index + 1, 3)}`);
            observer.observe(element);
        });

        // Animate social buttons with stagger
        const socialButtons = document.querySelectorAll('.social-button, .social-buttons a');
        socialButtons.forEach((button, index) => {
            button.classList.add('scroll-animate', 'animate-fade-left', `animate-delay-${Math.min(index + 1, 4)}`);
            observer.observe(button);
        });

        // Animate certification cards
        const certificationCards = document.querySelectorAll('.certification-card');
        certificationCards.forEach((card, index) => {
            card.classList.add('scroll-animate', 'animate-fade-up', `animate-delay-${Math.min(index % 3 + 1, 3)}`);
            observer.observe(card);
        });

        // Animate project items (for projects page)
        const projectItems = document.querySelectorAll('.project-item');
        projectItems.forEach((item, index) => {
            item.classList.add('scroll-animate', 'animate-fade-up', `animate-delay-${Math.min(index % 3 + 1, 3)}`);
            observer.observe(item);
        });

        // Animate contact info items
        const contactItems = document.querySelectorAll('.contact-item');
        contactItems.forEach((item, index) => {
            item.classList.add('scroll-animate', 'animate-fade-left', `animate-delay-${Math.min(index + 1, 4)}`);
            observer.observe(item);
        });

        // Animate form groups
        const formGroups = document.querySelectorAll('.form-group');
        formGroups.forEach((group, index) => {
            group.classList.add('scroll-animate', 'animate-fade-up', `animate-delay-${Math.min(index + 1, 5)}`);
            observer.observe(group);
        });

        // Animate achievement sections (for achievements page)
        const achievementSections = document.querySelectorAll('.achievement-section');
        achievementSections.forEach((section, index) => {
            const sectionTitle = section.querySelector('h2');
            if (sectionTitle) {
                sectionTitle.classList.add('scroll-animate', 'animate-fade-up');
                observer.observe(sectionTitle);
            }
        });

        // Animate skill items in about page
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach((item, index) => {
            item.classList.add('scroll-animate', 'animate-scale', `animate-delay-${Math.min(index % 6 + 1, 6)}`);
            observer.observe(item);
        });

        // Animate experience timeline items
        const experienceItems = document.querySelectorAll('.experience-item');
        experienceItems.forEach((item, index) => {
            item.classList.add('scroll-animate', 'animate-fade-left', `animate-delay-${Math.min(index + 1, 3)}`);
            observer.observe(item);
        });
    }

    // Initialize animations
    initScrollAnimations();

    // Optional: Re-initialize on dynamic content load
    // Useful if you're loading content via AJAX
    window.reinitScrollAnimations = function() {
        initScrollAnimations();
    };
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Optional: Add parallax effect to hero section (optimized with RAF)
let ticking = false;
window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            const scrolled = window.pageYOffset;
            const heroContent = document.querySelector('.hero-content');
            
            if (heroContent && scrolled < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
                heroContent.style.opacity = Math.max(0, 1 - (scrolled / 800));
            }
            ticking = false;
        });
        ticking = true;
    }
});

// Console message
console.log('🚀 Scroll animations initialized! Enjoy the smooth experience.');
