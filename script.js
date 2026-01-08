document.addEventListener("DOMContentLoaded", function() {
    
    // 1. INICIALIZAR AOS (Animaciones)
    // Verificamos si AOS está cargado para evitar errores
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }

    // ======== 2. CÓDIGO DEL MENÚ HAMBURGUESA (CORREGIDO) ========
    // En tu HTML la clase es "menu-toggle", no "hamburger"
    const hamburger = document.querySelector(".menu-toggle");
    // En tu HTML la clase es "nav-links", no "nav-menu"
    const navMenu = document.querySelector(".nav-links");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            // Alternamos la clase 'active' para mostrar/ocultar menú
            navMenu.classList.toggle("active");
            
            // Opcional: Cambiar el icono de barras a X si tienes CSS para ello
            const icon = hamburger.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-times");
            }
        });
    }

    // ======== 3. CÓDIGO DEL HEADER/NAVBAR (CORREGIDO) ========
    // En index.html usas <nav id="navbar">
    const navbar = document.getElementById("navbar");
    
    if (navbar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled"); 
                // Asegúrate de añadir estilos CSS para .scrolled (ej: background-color: #fff)
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    }

    // ======== 4. CÓDIGO DE LA GALERÍA (NUEVO) ========
    // Tu HTML tiene botones prevBtn/nextBtn y un contenedor gallerySlider
    const slider = document.getElementById('gallerySlider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (slider && prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            // Desplazar a la derecha (320px es un aproximado del ancho de tarjeta + margen)
            slider.scrollBy({ left: 320, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            // Desplazar a la izquierda
            slider.scrollBy({ left: -320, behavior: 'smooth' });
        });
    }
});

// ======== 5. CÓDIGO DEL LOADER (CORREGIDO) ========
window.addEventListener("load", () => {
    // En tu HTML el ID es "preloader", no "page-loader"
    const loader = document.getElementById("preloader");
    
    if (loader) {
        // Hacemos que se desvanezca
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.5s ease';
        
        // Lo eliminamos del flujo después de la transición
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});