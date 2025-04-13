// JavaScript pour le site Les Saveurs du voyageur

document.addEventListener('DOMContentLoaded', function() {
    // Navigation mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }
    
    // Fermer le menu mobile lorsqu'un lien est cliqué
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
    
    // Animation au défilement
    const scrollElements = document.querySelectorAll('.scroll-animation');
    
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };
    
    const hideScrollElement = (element) => {
        element.classList.remove('scrolled');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };
    
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // Initialiser l'animation au chargement
    handleScrollAnimation();
    
    // Filtres du menu
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuItems = document.querySelectorAll('.menu-item');
    
    if (menuTabs.length > 0) {
        menuTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Retirer la classe active de tous les onglets
                menuTabs.forEach(tab => {
                    tab.classList.remove('active');
                });
                
                // Ajouter la classe active à l'onglet cliqué
                this.classList.add('active');
                
                // Filtrer les éléments du menu
                const filter = this.getAttribute('data-filter');
                
                menuItems.forEach(item => {
                    if (filter === 'all') {
                        item.style.display = 'block';
                    } else if (item.classList.contains(filter)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Formulaire de contact
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simuler l'envoi du formulaire
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Envoi en cours...';
            submitBtn.disabled = true;
            
            // Simuler un délai d'envoi
            setTimeout(() => {
                // Réinitialiser le formulaire
                contactForm.reset();
                
                // Afficher un message de confirmation
                const formMessage = document.createElement('div');
                formMessage.className = 'form-message success';
                formMessage.textContent = 'Votre message a été envoyé avec succès!';
                contactForm.appendChild(formMessage);
                
                // Restaurer le bouton
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Supprimer le message après 5 secondes
                setTimeout(() => {
                    formMessage.remove();
                }, 5000);
            }, 1500);
        });
    }
    
    // Animation de défilement fluide pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 90, // Ajuster pour la hauteur du header fixe
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Changer le header au défilement
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
});
