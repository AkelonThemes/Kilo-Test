// Login functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the login page
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Validate credentials
            if (email === 'test@test.com' && password === 'test') {
                // Success - redirect to dashboard
                window.location.href = 'dashboard.html';
            } else {
                // Show error message
                showLoginError('Invalid email or password. Please try again.');
            }
        });
    }
    
    // Tab switching functionality
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Here you could add logic to switch between login and signup forms
            // For now, we'll just handle the visual state
        });
    });
});

// Function to show login error
function showLoginError(message) {
    // Remove any existing error message
    const existingError = document.querySelector('.login-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Create error message element
    const errorDiv = document.createElement('div');
    errorDiv.className = 'login-error';
    errorDiv.textContent = message;
    
    // Insert error message before the login button
    const loginButton = document.querySelector('.login-button');
    loginButton.parentNode.insertBefore(errorDiv, loginButton);
    
    // Auto-remove error after 5 seconds
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
}