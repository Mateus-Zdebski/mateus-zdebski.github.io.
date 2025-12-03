// Main JavaScript for interactive features

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate skill bars on scroll
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBars = entry.target.querySelectorAll('.skill-bar');
                skillBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 300);
                });
            }
        });
    }, observerOptions);

    // Observe skills section
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }

    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('#projects .bg-white');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Update copyright year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Initialize feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }

    // Navbar scroll effect
    let lastScroll = 0;
    const navbar = document.querySelector('custom-navbar');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            if (navbar) {
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            }
        } else {
            if (navbar) {
                navbar.style.boxShadow = 'none';
                navbar.style.background = 'transparent';
                navbar.style.backdropFilter = 'none';
            }
        }
        
        lastScroll = currentScroll;
    });

    // Contact form validation (if added later)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form submission logic here
        });
    }
});

// === Arsenal carousel controls ===
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.arsenal-carousel');
  const prevBtn = document.querySelector('#arsenal-prev');
  const nextBtn = document.querySelector('#arsenal-next');

  if (carousel && prevBtn && nextBtn) {
    const scrollAmount = carousel.querySelector('.arsenal-card')?.offsetWidth + 16 || 300;

    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    // optional: show/hide buttons based on scroll position
    const toggleButtons = () => {
      prevBtn.style.opacity = carousel.scrollLeft > 10 ? '1' : '0.5';
      nextBtn.style.opacity = (carousel.scrollWidth - carousel.clientWidth - carousel.scrollLeft) > 10 ? '1' : '0.5';
    };
    carousel.addEventListener('scroll', toggleButtons);
    toggleButtons();
  }
});
