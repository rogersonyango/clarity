// auth.js - Login form handling

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.querySelector('input[name="remember"]').checked;
    
    // Simulate login process
    console.log('Login attempt:', { email, remember });
    
    // Show loading state
    const button = this.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = 'Logging in...';
    button.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Store user data (in real app, this would come from server)
        const userData = {
            name: email.split('@')[0],
            email: email,
            loggedIn: true
        };
        
        localStorage.setItem('clarityUser', JSON.stringify(userData));
        
        // Redirect to landing page
        window.location.href = 'landing.html';
    }, 1000);
});

// Social login buttons
document.querySelectorAll('.social-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const provider = this.classList.contains('google') ? 'Google' : 'LinkedIn';
        console.log(`Login with ${provider}`);
        
        // In real app, this would trigger OAuth flow
        alert(`${provider} login would be triggered here`);
    });
});
