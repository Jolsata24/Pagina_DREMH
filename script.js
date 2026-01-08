document.addEventListener("DOMContentLoaded", function() {
    
    // 1. INICIALIZAR AOS (Animaciones)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }

    // ======== 2. CÓDIGO DEL MENÚ HAMBURGUESA ========
    const hamburger = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li a"); // Seleccionamos todos los enlaces

    if (hamburger && navMenu) {
        // Abrir/Cerrar menú al tocar el icono
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            
            // Cambiar icono de barras a X
            const icon = hamburger.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-times");
            }
        });

        // --- NUEVO: Cerrar menú al tocar una opción ---
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                // Si el menú está abierto, lo cerramos
                if (navMenu.classList.contains("active")) {
                    navMenu.classList.remove("active");
                    
                    // Devolvemos el icono a su estado original (barras)
                    const icon = hamburger.querySelector("i");
                    if (icon) {
                        icon.classList.remove("fa-times");
                        icon.classList.add("fa-bars");
                    }
                }
            });
        });
    }

    // ======== 3. CÓDIGO DEL HEADER/NAVBAR (Efecto scroll) ========
    const navbar = document.getElementById("navbar");
    
    if (navbar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled"); 
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    }

    // ======== 4. CÓDIGO DE LA GALERÍA DE FOTOS ========
    const slider = document.getElementById('gallerySlider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (slider && prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            slider.scrollBy({ left: 320, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            slider.scrollBy({ left: -320, behavior: 'smooth' });
        });
    }
});

// ======== 5. CÓDIGO DEL LOADER ========
window.addEventListener("load", () => {
    const loader = document.getElementById("preloader");
    
    if (loader) {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});