document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
        
        // Toggle Icon
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking a link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // 3. Scroll Reveal Animation using Intersection Observer
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 4. Form Submission Simulation
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Enviando...';
            btn.disabled = true;
            
            // Simulate API Call
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-check"></i> Mensaje Enviado';
                btn.style.backgroundColor = '#28a745';
                btn.style.borderColor = '#28a745';
                contactForm.reset();
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.backgroundColor = '';
                    btn.style.borderColor = '';
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }
});
