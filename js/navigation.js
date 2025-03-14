// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Nav Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animate hamburger icon to X
            const spans = this.querySelectorAll('span');
            spans[0].classList.toggle('rotate-45');
            spans[1].classList.toggle('opacity-0');
            spans[2].classList.toggle('rotate-neg-45');
        });
    }

    // Close mobile menu when clicking a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Sticky Navigation - Add shadow only when scrolled
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.sticky-nav');
        if (window.scrollY > 0) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Don't apply to modal triggers
            if (this.id === 'scheduleDemo' || this.id === 'heroScheduleDemo' || this.id === 'footerCta') {
                return;
            }
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            e.preventDefault();
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = document.querySelector('.sticky-nav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: targetPosition - navHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add CSS for the hamburger icon animation
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .hamburger span {
            transition: all 0.3s ease;
        }
        
        .hamburger span.rotate-45 {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger span.opacity-0 {
            opacity: 0;
        }
        
        .hamburger span.rotate-neg-45 {
            transform: rotate(-45deg) translate(5px, -5px);
        }
    </style>
`);