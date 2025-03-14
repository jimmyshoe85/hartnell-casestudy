// Modal and form functionality
document.addEventListener('DOMContentLoaded', function() {
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
                
                // Reset form for future use
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
});

// Add CSS for success message animation
document.head.insertAdjacentHTML('beforeend', `
    <style>
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