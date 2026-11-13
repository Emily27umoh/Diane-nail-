// Navbar Scroll Effect
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        navbar.classList.add('py-3', 'shadow-2xl');
        navbar.classList.remove('py-4');
      } else {
        navbar.classList.remove('py-3', 'shadow-2xl');
        navbar.classList.add('py-4');
      }
    });

    // Scroll Reveal Animation for navbar
    function initScrollAnimations() {
      const elements = document.querySelectorAll('.scroll-animate');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = 1;
              entry.target.style.transform = 'translateY(0)';
            }, i * 60);
          }
        });
      }, { threshold: 0.1 });

      elements.forEach(el => observer.observe(el));
    }

    // Mobile Menu
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('flex');
    });

    closeMenu.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
    });

    document.addEventListener('DOMContentLoaded', () => {
      initScrollAnimations();
    });

//banner scroll animation
document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.transition = 'all 0.5s ease-out';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 80); 
        }
      });
    }, {
      threshold: 0.1,     
      rootMargin: "0px 0px -50px 0px"
    });

    fadeElements.forEach(el => observer.observe(el));
  });    
    
    
    // Intersection Observer for scroll animation
    function animateOnScroll() {
        const cards = document.querySelectorAll('.service-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.transition = 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1)';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100); 
                }
            });
        }, {
            threshold: 0.10,     
            rootMargin: '0px 0px -50px 0px'
        });

        cards.forEach(card => observer.observe(card));
    }

    document.addEventListener('DOMContentLoaded', animateOnScroll);


    //freshly nail section
    document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = '0.1s';
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: "0px 0px -80px 0px"
    });

    document.querySelectorAll('.fade-in-left, .fade-in-right').forEach(el => {
      observer.observe(el);
    });
  });
  

  // Simple smooth parallax effect
    function initParallax() {
      const parallaxLayers = document.querySelectorAll('.parallax-bg');

      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        parallaxLayers.forEach((layer, index) => {
          // Different speed for each layer (deeper = slower)
          const speed = 0.4 + (index * 0.1);
          layer.style.transform = `translateY(${scrollY * speed}px) scale(1.1)`;
        });
      });
    }

  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', initParallax);
  

  //price list and appointment animation
  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.style.transitionDelay || '0ms';
          entry.target.style.transition = `all 0.8s ease-out ${delay}`;
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: "0px 0px -50px 0px"
    });
   
    document.querySelectorAll('.fade-in-bottom').forEach(el => {
      observer.observe(el);
    });
  });

  //freshly nail animation on js
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.animationDelay = el.dataset.delay || '0ms';
        el.classList.remove('opacity-0');
        el.classList.add(el.dataset.anim);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  const imgCol = document.getElementById('img-col');
  const cardCol = document.getElementById('card-col');

  imgCol.dataset.anim = 'animate-slide-left';
  cardCol.dataset.anim = 'animate-slide-right';
  cardCol.dataset.delay = '150ms';

  observer.observe(imgCol);
  observer.observe(cardCol);
  
  //gallery animation
  
  AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: true,
    offset: 120,
  });





    