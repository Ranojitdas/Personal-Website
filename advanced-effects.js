// ============================================
// ADVANCED EFFECTS - EXTRAORDINARY PORTFOLIO
// ============================================

// ===== 1. CUSTOM INTERACTIVE CURSOR (SIMPLIFIED) =====
class CustomCursor {
    constructor() {
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';
        document.body.appendChild(this.cursor);
        
        this.initCursor();
    }

    initCursor() {
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Smooth cursor follow with easing
        const animate = () => {
            const dx = mouseX - cursorX;
            const dy = mouseY - cursorY;
            
            cursorX += dx * 0.15;
            cursorY += dy * 0.15;
            
            this.cursor.style.left = cursorX + 'px';
            this.cursor.style.top = cursorY + 'px';
            
            requestAnimationFrame(animate);
        };
        animate();

        // Expand on hover over buttons and cards only (NOT nav links)
        const hoverElements = document.querySelectorAll('button, .cta-button, .project-card, .skill-card, .achievement-card, .learn-more, .social-button, .project-link');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.classList.add('cursor-hover');
            });
            el.addEventListener('mouseleave', () => {
                this.cursor.classList.remove('cursor-hover');
            });
        });

        // Small scale for nav links
        const navLinks = document.querySelectorAll('.nav-links a, .social-links a');
        navLinks.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.classList.add('cursor-nav');
            });
            el.addEventListener('mouseleave', () => {
                this.cursor.classList.remove('cursor-nav');
            });
        });
    }
}

// ===== 2. TYPEWRITER EFFECT =====
class TypeWriter {
    constructor(element, texts, speed = 100) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.init();
    }

    init() {
        if (this.element) {
            this.type();
        }
    }

    type() {
        const currentText = this.texts[this.textIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        let typeSpeed = this.isDeleting ? this.speed / 2 : this.speed;

        if (!this.isDeleting && this.charIndex === currentText.length) {
            typeSpeed = 2000; // Pause at end
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// ===== 3. MAGNETIC BUTTONS =====
class MagneticButton {
    constructor() {
        this.initMagnetic();
    }

    initMagnetic() {
        const buttons = document.querySelectorAll('.cta-button, .social-button, .learn-more');
        
        buttons.forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });

            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0, 0)';
            });
        });
    }
}

// ===== 4. SCROLL PROGRESS INDICATOR =====
class ScrollProgress {
    constructor() {
        this.progressBar = document.createElement('div');
        this.progressBar.className = 'scroll-progress-bar';
        document.body.appendChild(this.progressBar);
        this.initProgress();
    }

    initProgress() {
        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.pageYOffset / windowHeight) * 100;
            this.progressBar.style.width = scrolled + '%';
        });
    }
}

// ===== 5. ANIMATED COUNTER =====
class AnimatedCounter {
    constructor() {
        this.initCounters();
    }

    initCounters() {
        const counters = document.querySelectorAll('[data-count]');
        
        const observerOptions = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    this.animateCounter(entry.target);
                    entry.target.classList.add('counted');
                }
            });
        }, observerOptions);

        counters.forEach(counter => observer.observe(counter));
    }

    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };

        updateCounter();
    }
}

// ===== 6. TEXT REVEAL ANIMATION =====
class TextReveal {
    constructor() {
        this.initTextReveal();
    }

    initTextReveal() {
        const textElements = document.querySelectorAll('.reveal-text');
        
        textElements.forEach(element => {
            const text = element.textContent;
            element.innerHTML = '';
            
            // Split text into words
            const words = text.split(' ');
            words.forEach((word, index) => {
                const span = document.createElement('span');
                span.className = 'reveal-word';
                span.textContent = word + ' ';
                span.style.animationDelay = `${index * 0.1}s`;
                element.appendChild(span);
            });
        });
    }
}

// ===== 7. GRADIENT BLOB ANIMATION =====
class GradientBlob {
    constructor() {
        this.createBlobs();
    }

    createBlobs() {
        const container = document.createElement('div');
        container.className = 'gradient-blobs';
        document.body.appendChild(container);

        for (let i = 0; i < 3; i++) {
            const blob = document.createElement('div');
            blob.className = 'gradient-blob';
            blob.style.animationDelay = `${i * 2}s`;
            container.appendChild(blob);
        }
    }
}

// ===== 8. PARALLAX CARDS (OPTIMIZED) =====
class ParallaxCards {
    constructor() {
        this.ticking = false;
        this.initParallax();
    }

    initParallax() {
        const cards = document.querySelectorAll('.project-card, .skill-card, .achievement-card');
        
        window.addEventListener('scroll', () => {
            if (!this.ticking) {
                window.requestAnimationFrame(() => {
                    cards.forEach(card => {
                        const rect = card.getBoundingClientRect();
                        const scrollPercent = (window.innerHeight - rect.top) / window.innerHeight;
                        
                        if (scrollPercent > 0 && scrollPercent < 1) {
                            const translateY = (scrollPercent - 0.5) * 10;
                            card.style.transform = `translateY(${translateY}px)`;
                        }
                    });
                    this.ticking = false;
                });
                this.ticking = true;
            }
        });
    }
}

// ===== 9. RIPPLE EFFECT ON CLICK =====
class RippleEffect {
    constructor() {
        this.initRipple();
    }

    initRipple() {
        const elements = document.querySelectorAll('.cta-button, button, .project-card');
        
        elements.forEach(element => {
            element.addEventListener('click', (e) => {
                const ripple = document.createElement('span');
                ripple.className = 'ripple-effect';
                
                const rect = element.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                
                element.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });
    }
}

// ===== 10. SMOOTH SCROLL WITH EASING =====
class SmoothScroll {
    constructor() {
        this.initSmoothScroll();
    }

    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href !== '#' && href !== '') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const headerOffset = 80;
                        const elementPosition = target.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }
}

// ===== INITIALIZE ALL EFFECTS =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing Advanced Effects...');

    // Initialize Custom Cursor (Desktop only)
    if (window.innerWidth > 768) {
        // new CustomCursor();
    }

    // Initialize Typewriter Effect
    const tagline = document.querySelector('.tagline');
    if (tagline) {
        const originalText = tagline.textContent;
        new TypeWriter(tagline, [
            originalText,
            'Building Amazing Apps 🚀',
            'Flutter & Mobile Expert 📱',
            'Creating User Experiences ✨'
        ], 80);
    }

    // Initialize Magnetic Buttons
    new MagneticButton();

    // Initialize Scroll Progress
    new ScrollProgress();

    // Initialize Animated Counters
    new AnimatedCounter();

    // Initialize Text Reveal
    new TextReveal();

    // Initialize Gradient Blobs
    new GradientBlob();

    // Initialize Parallax Cards (Disabled by default to prevent flicker)
    // Uncomment if you want subtle parallax effect
    // new ParallaxCards();

    // Initialize Ripple Effect
    new RippleEffect();

    // Initialize Smooth Scroll
    new SmoothScroll();

    console.log('✅ All Advanced Effects Loaded!');
});

// ===== FLOATING PARTICLES BACKGROUND (OPTIMIZED) =====
class FloatingParticles {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.canvas.className = 'particles-canvas';
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '-1';
        this.canvas.style.pointerEvents = 'none';
        document.body.appendChild(this.canvas);

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 30; // Reduced for better performance
        this.mouse = { x: null, y: null, radius: 120 };
        this.animationFrame = null;

        this.init();
    }

    init() {
        this.resize();
        this.createParticles();
        this.animate();

        window.addEventListener('resize', () => this.resize());
        
        let mouseMoveTimeout;
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
            
            // Clear mouse position after inactivity
            clearTimeout(mouseMoveTimeout);
            mouseMoveTimeout = setTimeout(() => {
                this.mouse.x = null;
                this.mouse.y = null;
            }, 100);
        });
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                radius: Math.random() * 1.5 + 0.5
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(particle => {
            // Move particles
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Boundary check
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;

            // Mouse interaction (only if mouse is active)
            if (this.mouse.x && this.mouse.y) {
                const dx = this.mouse.x - particle.x;
                const dy = this.mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.mouse.radius) {
                    particle.x -= dx / distance * 1.5;
                    particle.y -= dy / distance * 1.5;
                }
            }

            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(108, 99, 255, 0.4)';
            this.ctx.fill();
        });

        // Draw connections (limited to nearby particles only)
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) { // Reduced connection distance
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(78, 205, 196, ${(1 - distance / 120) * 0.3})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }

        this.animationFrame = requestAnimationFrame(() => this.animate());
    }

    destroy() {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
    }
}

// Initialize Floating Particles (optional - optimized for performance)
let particlesInstance = null;
if (window.innerWidth > 768 && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    setTimeout(() => {
        particlesInstance = new FloatingParticles();
    }, 1000);
}
