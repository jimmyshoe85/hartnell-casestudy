// Main initialization script
document.addEventListener('DOMContentLoaded', function() {
    console.log('Hartnell College Case Study - Miller Electric');
    
    // Log page load time for performance tracking
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log(`Page loaded in ${loadTime}ms`);
});