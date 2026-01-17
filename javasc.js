// ===================================
// MENU MOBILE TOGGLE
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
});

// ===================================
// SMOOTH SCROLL POUR NAVIGATION
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Fermer le menu mobile si ouvert
            const navMenu = document.getElementById('nav-menu');
            if (navMenu) {
                navMenu.classList.remove('active');
            }
            
            // Scroll smooth vers la section
            targetElement.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    });
});

// ===================================
// NAVIGATION PAR CARTES DE THÈMES
// ===================================
document.querySelectorAll('.theme-card').forEach(card => {
    card.addEventListener('click', function() {
        const theme = this.getAttribute('data-theme');
        const targetSection = document.getElementById(theme);
        
        if (targetSection) {
            targetSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// HIGHLIGHT ACTIVE SECTION DANS NAV
// ===================================
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.content-section, .hero, .intro, .themes');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - 100)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
});

// ===================================
// ANIMATION D'APPARITION AU SCROLL
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observer tous les content-box
document.querySelectorAll('.content-box, .theme-card, .info-card').forEach(el => {
    observer.observe(el);
});

// ===================================
// COPIER CODE AU CLIC (pour les formules)
// ===================================
document.querySelectorAll('.formula').forEach(formula => {
    formula.style.cursor = 'pointer';
    formula.title = 'Cliquer pour copier';
    
    formula.addEventListener('click', function() {
        const text = this.textContent;
        
        navigator.clipboard.writeText(text).then(() => {
            // Feedback visuel
            const originalBg = this.style.background;
            this.style.background = 'rgba(16, 185, 129, 0.2)';
            
            setTimeout(() => {
                this.style.background = originalBg;
            }, 500);
            
            // Message temporaire
            const tooltip = document.createElement('div');
            tooltip.textContent = '✓ Copié !';
            tooltip.style.cssText = `
                position: absolute;
                background: #10b981;
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 0.5rem;
                font-size: 0.875rem;
                pointer-events: none;
                z-index: 1000;
                animation: fadeOut 2s forwards;
            `;
            
            this.style.position = 'relative';
            this.appendChild(tooltip);
            
            setTimeout(() => tooltip.remove(), 2000);
        });
    });
});

// ===================================
// COMPTE À REBOURS Q-DAY (optionnel)
// ===================================
function updateCountdown() {
    const qDay = new Date('2050-01-01');
    const now = new Date();
    const diff = qDay - now;
    
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    
    const countdownEl = document.getElementById('q-day-countdown');
    if (countdownEl) {
        countdownEl.textContent = `${years} ans et ${days} jours avant le Q-Day estimé`;
    }
}

// Mettre à jour toutes les heures
if (document.getElementById('q-day-countdown')) {
    updateCountdown();
    setInterval(updateCountdown, 3600000);
}

// ===================================
// EFFET PARALLAX SUR HERO
// ===================================
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 600);
    }
});

// ===================================
// LAZY LOADING IMAGES (quand vous ajouterez des images)
// ===================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// DARK MODE TOGGLE (optionnel)
// ===================================
const darkModeToggle = document.getElementById('dark-mode-toggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
    });

    // Charger la préférence
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
    }
}

// ===================================
// PRINT FUNCTION (pour exporter en PDF)
// ===================================
const printBtn = document.getElementById('print-btn');
if (printBtn) {
    printBtn.addEventListener('click', function() {
        window.print();
    });
}

// ===================================
// SEARCH FUNCTIONALITY (optionnel)
// ===================================
const searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const sections = document.querySelectorAll('.content-section');
        
        sections.forEach(section => {
            const text = section.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
}

// ===================================
// EASTER EGG - Konami Code
// ===================================
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        // Easter egg activé !
        document.body.style.animation = 'rainbow 5s infinite';
        
        const message = document.createElement('div');
        message.innerHTML = '🎉 Vous avez découvert le mode quantique ! 🎉';
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(45deg, #06b6d4, #a78bfa, #ec4899);
            color: white;
            padding: 2rem;
            border-radius: 1rem;
            font-size: 1.5rem;
            z-index: 10000;
            animation: pulse 1s infinite;
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.remove();
            document.body.style.animation = '';
        }, 5000);
    }
});

// ===================================
// ANALYTICS (optionnel - Google Analytics)
// ===================================
function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

// Tracker les clics sur les cartes thématiques
document.querySelectorAll('.theme-card').forEach(card => {
    card.addEventListener('click', function() {
        const theme = this.getAttribute('data-theme');
        trackEvent('Navigation', 'Click Theme Card', theme);
    });
});

// ===================================
// CONSOLE MESSAGE
// ===================================
console.log('%c🚀 Information Quantique - USTO-MB', 'font-size: 20px; color: #06b6d4; font-weight: bold;');
console.log('%cSite développé par les étudiants de 3ème année Ingénieur en Sécurité Informatique', 'color: #a78bfa;');
console.log('%cContributeurs: Imane BAOUCHI, Alaa Madaoui, Hicham Abdelkadous, Meriem Djellid, Razane Siguerdidjane', 'color: #10b981;');

// ===================================
// ANIMATIONS CSS (ajouter au style.css)
// ===================================
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; transform: translateY(-20px); }
    }
    
    @keyframes pulse {
        0%, 100% { transform: translate(-50%, -50%) scale(1); }
        50% { transform: translate(-50%, -50%) scale(1.05); }
    }
    
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
    
    .fade-in {
        animation: fadeIn 0.6s ease-out forwards;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .nav-link.active {
        background: rgba(6, 182, 212, 0.2);
        color: #06b6d4;
        border-bottom: 2px solid #06b6d4;
    }
`;
document.head.appendChild(style);