// Wait for the DOM to be fully loaded
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

    // Modal functionality
    const modal = document.getElementById('demoModal');
    const ctaButtons = document.querySelectorAll('#scheduleDemo, #heroScheduleDemo, #footerCta');
    const closeModal = document.querySelector('.close-modal');

    // Open modal when clicking CTA buttons
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        });
    });

    // Close modal when clicking X
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'visible'; // Allow scrolling again
        });
    }

    // Close modal when clicking outside the content
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'visible'; // Allow scrolling again
        }
    });

    // Handle the demo form submission
    const demoForm = document.getElementById('demoForm');
    if (demoForm) {
        demoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real implementation, you would send the form data to a server here
            // For now, we'll just simulate a successful submission
            
            // Get form data
            const formData = {
                name: demoForm.querySelector('#name').value,
                institution: demoForm.querySelector('#institution').value,
                email: demoForm.querySelector('#email').value,
                phone: demoForm.querySelector('#phone').value,
                message: demoForm.querySelector('#message').value
            };
            
            console.log('Form submitted with data:', formData);
            
            // Replace form with success message
            demoForm.innerHTML = `
                <div class="success-message">
                    <h3>Thank you for your interest!</h3>
                    <p>We've received your request for a demo of the Miller Copilot welding robot system. 
                    A representative will contact you shortly to schedule your personalized demonstration.</p>
                </div>
            `;
            
            // Close modal after 3 seconds
            setTimeout(function() {
                modal.style.display = 'none';
                document.body.style.overflow = 'visible'; // Allow scrolling again
                
                // Reset form for future use (in a real implementation you might want to keep the success message)
                setTimeout(function() {
                    demoForm.innerHTML = `
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="institution">Institution/Company</label>
                            <input type="text" id="institution" name="institution" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone</label>
                            <input type="tel" id="phone" name="phone" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Additional Information</label>
                            <textarea id="message" name="message" rows="4"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit Request</button>
                    `;
                }, 1000);
            }, 3000);
        });
    }

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

    // Add animations for elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.image-container, .result-card, .lesson-card, .content-box');
        
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
        
        .image-container, .result-card, .lesson-card, .content-box {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .image-container.fade-in, .result-card.fade-in, .lesson-card.fade-in, .content-box.fade-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .success-message {
            text-align: center;
            padding: 20px;
            animation: fadeIn 0.5s ease;
        }
        
        @keyframes fadeIn {
            from {opacity: 0;}
            to {opacity: 1;}
        }
    </style>
`);