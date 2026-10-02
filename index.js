/* ==========================================================================
   PORTFOLIO INTERACTIVITY - Gnaneshwar Saketh Yadav
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Dynamic Current Year for Footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // 2. Mobile Menu Navigation Toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-item');

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburgerBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });

        // Close menu when clicking link
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = hamburgerBtn.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-xmark');
                }
            });
        });
    }

    // 3. Scroll Progress Indicator & Navbar Active State
    const scrollProgress = document.getElementById('scroll-progress');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        // Scroll Progress Bar
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        if (scrollProgress) {
            scrollProgress.style.width = `${progress}%`;
        }

        // Active Navbar Link
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    // 4. Smooth Anchor Scrolling Offset Fix
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});