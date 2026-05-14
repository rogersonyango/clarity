window.addEventListener('DOMContentLoaded', function() {
    const userData = JSON.parse(localStorage.getItem('clarityUser'));
    
    if (!userData || !userData.loggedIn) {
        // Redirect to login if not authenticated
        window.location.href = 'login.html';
        return;
    }
    
    // Animate progress bars on load
    animateProgressBars();
    
    // Animate stats on scroll
    observeStats();
});

// Animate progress bars
function animateProgressBars() {
    const progressFills = document.querySelectorAll('.progress-fill');
    
    progressFills.forEach((fill, index) => {
        const targetWidth = fill.style.width;
        fill.style.width = '0%';
        
        setTimeout(() => {
            fill.style.width = targetWidth;
        }, 100 * (index + 1));
    });
}

// Observe stats for animation
function observeStats() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.stat-card, .focus-card, .activity-item').forEach(card => {
        observer.observe(card);
    });
}

// User menu toggle (for future dropdown implementation)
document.getElementById('userMenuToggle')?.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('User menu clicked');
    // Could implement dropdown menu here
});

// Quick action handlers
document.querySelectorAll('.quick-action').forEach(action => {
    action.addEventListener('click', function(e) {
        e.preventDefault();
        const actionText = this.textContent.trim();
        console.log('Quick action:', actionText);
        
        // Handle different actions
        if (actionText.includes('skill quiz')) {
            alert('Skill assessment quiz would open here');
        } else if (actionText.includes('Share progress')) {
            alert('Share functionality would open here');
        }
    });
});

// Continue learning buttons
document.querySelectorAll('.action-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const text = this.textContent.trim();
        console.log('Action:', text);
        
        if (text.includes('Continue learning')) {
            alert('Learning module would open here');
        } else if (text.includes('Resources')) {
            alert('Resource library would open here');
        }
    });
});

// Activity item interactions
document.querySelectorAll('.activity-item').forEach(item => {
    item.addEventListener('click', function() {
        this.style.backgroundColor = 'var(--page-color)';
        setTimeout(() => {
            this.style.backgroundColor = '';
        }, 300);
    });
});

// Logout functionality (for future use)
function logout() {
    localStorage.removeItem('clarityUser');
    window.location.href = 'index.html';
}
