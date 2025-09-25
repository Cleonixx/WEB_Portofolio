const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 13, 64, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#0f0d40';
        navbar.style.backdropFilter = 'none';
    }
});

// Enhanced Intersection Observer with both in and out animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animation in
            entry.target.classList.add('animate-in');
            entry.target.classList.remove('animate-out');
        } else {
            // Animation out
            entry.target.classList.add('animate-out');
            entry.target.classList.remove('animate-in');
        }
    });
}, observerOptions);

// Initialize scroll animations
window.addEventListener('load', () => {
    const animatedElements = document.querySelectorAll('.about-content, .about-image, .project-card, .contact form, .contact h2, .contact p');
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// Enhanced Skill tags animation that can be triggered multiple times
function animateSkillTags() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach((tag, index) => {
        // Reset animation first
        tag.style.opacity = '0';
        tag.style.transform = 'scale(0.8) translateY(20px)';
        
        setTimeout(() => {
            tag.style.opacity = '1';
            tag.style.transform = 'scale(1) translateY(0)';
        }, index * 150);
    });
}

// Enhanced about section observer that triggers every time
const aboutSection = document.querySelector('.about');
if (aboutSection) {
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(animateSkillTags, 800);
            }
        });
    }, { threshold: 0.3 });
    
    aboutObserver.observe(aboutSection);
}

// Enhanced project cards hover effect - always active
function initializeProjectCardAnimations() {
    document.querySelectorAll('.project-card').forEach(card => {
        // Ensure transitions are always applied
        card.style.transition = 'all 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease';
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(255, 204, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        });
    });
}

// Enhanced form submission with persistent button animations
const contactForm = document.querySelector('.contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const button = this.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        
        // Button loading animation
        button.textContent = 'Sending...';
        button.style.background = '#c084fc';
        button.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            button.textContent = 'Message Sent!';
            button.style.background = '#10b981';
            
            // Reset form
            this.reset();
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '#ffd700';
                button.disabled = false;
                // Ensure hover effects still work
                initializeButtonAnimations();
            }, 3000);
        }, 2000);
    });
}

// Enhanced social media icons animation - always active
function initializeSocialAnimations() {
    document.querySelectorAll('.social-icons a').forEach(icon => {
        icon.style.transition = 'all 0.3s ease';
        
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.3) rotate(10deg)';
            this.style.color = '#FFCC00';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.color = 'white';
        });
    });
}

// Enhanced button animations
function initializeButtonAnimations() {
    // Contact button animation
    const contactBtn = document.querySelector('.contact button');
    if (contactBtn) {
        contactBtn.style.transition = 'all 0.3s ease';
        
        contactBtn.addEventListener('mouseenter', function() {
            if (!this.disabled) {
                this.style.background = '#e6c200';
                this.style.transform = 'scale(1.05)';
            }
        });
        
        contactBtn.addEventListener('mouseleave', function() {
            if (!this.disabled) {
                this.style.background = '#ffd700';
                this.style.transform = 'scale(1)';
            }
        });
    }
    
    // Hero button animation
    const heroBtn = document.querySelector('.hero .btn');
    if (heroBtn) {
        heroBtn.style.transition = 'all 0.3s ease';
        
        heroBtn.addEventListener('mouseenter', function() {
            this.style.background = '#e0e0e0';
            this.style.color = '#090040';
            this.style.transform = 'scale(1.05)';
        });
        
        heroBtn.addEventListener('mouseleave', function() {
            this.style.background = '#FFCC00';
            this.style.color = 'white';
            this.style.transform = 'scale(1)';
        });
    }
    
    // Project card button animations
    document.querySelectorAll('.project-card a').forEach(link => {
        link.style.transition = 'all 0.3s ease';
        
        link.addEventListener('mouseenter', function() {
            this.style.background = '#e6b800';
            this.style.transform = 'scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.background = '#FFCC00';
            this.style.transform = 'scale(1)';
        });
    });
}

// Enhanced parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Add enhanced CSS for animations
const style = document.createElement('style');
style.textContent = `
    nav ul li a.active {
        border-bottom: 2px solid #ffd700 !important;
        color: #ffd700 !important;
    }
    
    .skill-tag {
        opacity: 0;
        transform: scale(0.8) translateY(20px);
        transition: all 0.4s ease;
    }
    
    .hero-content {
        will-change: transform;
    }
    
    /* Enhanced scroll animations */
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) scale(1) !important;
        transition: all 0.8s ease !important;
    }
    
    .animate-out {
        opacity: 0.3 !important;
        transform: translateY(50px) scale(0.95) !important;
        transition: all 0.6s ease !important;
    }
    
    /* Initial states for animated elements */
    .about-content, .about-image, .project-card, .contact form, .contact h2, .contact p {
        opacity: 0;
        transform: translateY(50px) scale(0.95);
        transition: all 0.8s ease;
    }
    
    /* Typing animation cursor */
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
    
    /* Enhanced hover effects */
    .project-card {
        transition: all 0.3s ease !important;
    }
    
    .social-icons a {
        transition: all 0.3s ease !important;
    }
    
    /* Mobile responsive animations */
    @media (max-width: 768px) {
        .animate-in {
            transform: translateY(0) scale(1) !important;
        }
        
        .animate-out {
            opacity: 0.5 !important;
            transform: translateY(30px) scale(0.98) !important;
        }
    }
`;
document.head.appendChild(style);

// Enhanced smooth loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
        // Initialize all animations after page load
        initializeProjectCardAnimations();
        initializeSocialAnimations();
        initializeButtonAnimations();
    }, 100);
});

// Enhanced mobile menu with animations
function createMobileMenu() {
    const nav = document.querySelector('nav');
    const ul = nav.querySelector('ul');
    
    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.innerHTML = '☰';
    hamburger.className = 'hamburger';
    hamburger.style.cssText = `
        display: none;
        background: none;
        border: none;
        color: #ffd700;
        font-size: 1.5rem;
        cursor: pointer;
        transition: all 0.3s ease;
    `;
    
    // Add hover effect to hamburger
    hamburger.addEventListener('mouseenter', function() {
        this.style.color = '#e6c200';
        this.style.transform = 'scale(1.1)';
    });
    
    hamburger.addEventListener('mouseleave', function() {
        this.style.color = '#ffd700';
        this.style.transform = 'scale(1)';
    });
    
    nav.appendChild(hamburger);
    
    // Enhanced mobile styles
    const mobileStyle = document.createElement('style');
    mobileStyle.textContent = `
        @media (max-width: 768px) {
            .hamburger {
                display: block !important;
            }
            
            nav ul {
                position: fixed;
                top: 70px;
                left: -100%;
                width: 100%;
                height: calc(100vh - 70px);
                background: rgba(15, 13, 64, 0.98);
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                padding-top: 2rem;
                transition: left 0.4s ease;
                backdrop-filter: blur(10px);
            }
            
            nav ul.active {
                left: 0;
            }
            
            nav ul li {
                margin: 1rem 0;
                opacity: 0;
                transform: translateX(-50px);
                transition: all 0.3s ease;
            }
            
            nav ul.active li {
                opacity: 1;
                transform: translateX(0);
            }
            
            nav ul.active li:nth-child(1) { transition-delay: 0.1s; }
            nav ul.active li:nth-child(2) { transition-delay: 0.2s; }
            nav ul.active li:nth-child(3) { transition-delay: 0.3s; }
            nav ul.active li:nth-child(4) { transition-delay: 0.4s; }
        }
    `;
    document.head.appendChild(mobileStyle);
    
    // Enhanced toggle functionality
    hamburger.addEventListener('click', () => {
        ul.classList.toggle('active');
        hamburger.innerHTML = ul.classList.contains('active') ? '✕' : '☰';
    });
    
    // Close menu when clicking on links with animation
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            ul.classList.remove('active');
            hamburger.innerHTML = '☰';
        });
    });
}

// Initialize mobile menu
createMobileMenu();

// Enhanced input focus animations
document.querySelectorAll('.contact input, .contact textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.style.transform = 'scale(1.02)';
        this.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.3)';
    });
    
    input.addEventListener('blur', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
    });
});

// Reinitialize animations on window resize to ensure they work properly
window.addEventListener('resize', () => {
    setTimeout(() => {
        initializeProjectCardAnimations();
        initializeSocialAnimations();
        initializeButtonAnimations();
    }, 300);
});

console.log('Enhanced Portfolio JavaScript loaded successfully! 🚀 All animations are persistent and scroll-responsive!');