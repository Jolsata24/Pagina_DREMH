// Espera a que todo el contenido (DOM) esté cargado antes de ejecutar cualquier script
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1000, // Duración de la animación en milisegundos (1 segundo)
        once: true,     // La animación solo ocurre una vez al bajar
        offset: 100     // Comienza la animación 100px antes de llegar al elemento
    });
    // ======== 1. CÓDIGO DEL MENÚ HAMBURGUESA ========
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");



    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
    }

    // ======== 2. CÓDIGO DEL HEADER OCULTO ========
    const header = document.querySelector(".header");
    
    if (header) {
        const scrollThreshold = 100; // Píxeles para mostrar el header

        window.addEventListener("scroll", () => {
            if (window.scrollY > scrollThreshold) {
                header.classList.add("is-visible");
            } else {
                header.classList.remove("is-visible");
            }
        });
    }

    // ======== 3. CÓDIGO DEL CARRUSEL SWIPER ========
    // (Asegúrate de que la clase '.swiper' exista en tu HTML)
    if (document.querySelector('.swiper')) {
        const swiper = new Swiper('.swiper', {
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    // ======== 4. CÓDIGO DE LA GALERÍA LIGHTBOX (Actualizado para "suavidad") ========
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('gallery-lightbox');
    
    if (galleryItems.length > 0 && lightbox) {
        const lightboxImg = document.getElementById('lightbox-img-src');
        const lightboxTitle = document.querySelector('.lightbox-info h4');
        const lightboxDesc = document.getElementById('lightbox-description');
        const closeBtn = document.querySelector('.lightbox-close');

        // Función para abrir el lightbox (AHORA USA CLASES)
        function openLightbox(e) {
            e.preventDefault();
            
            const imgSrc = this.getAttribute('href');
            const title = this.getAttribute('data-title');
            const description = this.getAttribute('data-description');
            
            lightboxImg.setAttribute('src', imgSrc);
            lightboxTitle.textContent = title;
            lightboxDesc.textContent = description;
            
            // Reemplaza 'lightbox.style.display = 'block';'
            lightbox.classList.add('lightbox-is-visible'); 
        }

        // Función para cerrar el lightbox (AHORA USA CLASES)
        function closeLightbox() {
            // Reemplaza 'lightbox.style.display = 'none';'
            lightbox.classList.remove('lightbox-is-visible'); 
            
            // Opcional: Limpia la imagen después de que la animación termine
            setTimeout(() => {
                lightboxImg.setAttribute('src', ''); 
            }, 400); // 400ms = tiempo de la transición en el CSS
        }

        galleryItems.forEach(item => {
            item.addEventListener('click', openLightbox);
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', closeLightbox);
        }
        
        // Cerrar al hacer clic fuera
        lightbox.addEventListener('click', function(e) {
            if (e.target.id === 'gallery-lightbox') {
                closeLightbox();
            }
        });
    }
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const targetSection = document.getElementById('principles'); // La sección objetivo

    if (whatsappBtn && targetSection) {
        window.addEventListener('scroll', () => {
            // Obtenemos la posición de la sección "Principios" respecto al top
            const sectionTop = targetSection.offsetTop;
            const scrollPos = window.scrollY + window.innerHeight; // Posición actual del scroll + altura de ventana

            // LÓGICA:
            // Si hemos bajado más allá del inicio de la sección "Principios" (con un pequeño margen)
            // Mostramos el botón. Si subimos, lo ocultamos.
            
            if (window.scrollY > (sectionTop - 400)) { 
                // "- 400" es un ajuste para que aparezca un poco antes de llegar exacto a la sección
                whatsappBtn.classList.add('is-visible');
            } else {
                whatsappBtn.classList.remove('is-visible');
            }
        });
    }
});


// ======== CÓDIGO DEL LOADER ========
// Usamos 'load' en lugar de 'DOMContentLoaded' para esperar a que carguen las IMÁGENES
window.addEventListener("load", () => {
    const loader = document.getElementById("page-loader");
    
    if (loader) {
        // Añadimos la clase que lo hace transparente
        loader.classList.add("loader-hidden");
        
        // Opcional: Eliminarlo del HTML completamente después de la transición
        loader.addEventListener("transitionend", () => {
            // loader.remove(); // Descomenta si quieres borrarlo del DOM
        });
    }
});