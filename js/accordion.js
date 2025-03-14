// Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Toggle active class on the header
            this.classList.toggle('active');
            
            // Get the content element
            const content = this.nextElementSibling;
            
            // Toggle the content height
            if (this.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = "0";
            }
        });
    });
});