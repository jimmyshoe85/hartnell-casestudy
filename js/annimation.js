// Scroll animations functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add animations for elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.image-container, .insight-card, .lesson-card, .content-box, .accordion-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('fade-in');
            }
        });
    };
    
    // Run once on page load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
});

// Add CSS for animations
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .image-container, .insight-card, .lesson-card, .content-box, .accordion-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .image-container.fade-in, .insight-card.fade-in, .lesson-card.fade-in, .content-box.fade-in, .accordion-item.fade-in {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
`);