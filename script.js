// Seleccionamos los elementos del DOM
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Añadimos un "escuchador" de clics al botón de hamburguesa
hamburger.addEventListener("click", () => {
    // Alternamos la clase 'active' en ambos elementos
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// (Tu código de hamburguesa existente va aquí arriba)
// ...
// ...

// ======== CÓDIGO NUEVO PARA EL CARRUSEL ========

// Espera a que todo el contenido esté cargado
document.addEventListener("DOMContentLoaded", function() {
    
    // Inicializa Swiper
    const swiper = new Swiper('.swiper', {
        // Opciones
        
        loop: true, // Para que sea un bucle infinito
        autoplay: {
            delay: 4000, // Cambia cada 4 segundos
            disableOnInteraction: false,
        },

        // Paginación (los puntos de abajo)
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navegación (las flechas)
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

});

// (Tu código de hamburguesa existente va aquí arriba)
// ...
// ...

// ======== CÓDIGO NUEVO PARA LA GALERÍA LIGHTBOX ========
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleccionamos todos los elementos de la galería
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Seleccionamos los elementos del Lightbox
    const lightbox = document.getElementById('gallery-lightbox');
    const lightboxImg = document.getElementById('lightbox-img-src');
    const lightboxDesc = document.getElementById('lightbox-description');
    const closeBtn = document.querySelector('.lightbox-close');

    // Función para abrir el lightbox
    function openLightbox(e) {
        e.preventDefault(); // Prevenimos que el link <a> navegue
        
        const imgSrc = this.getAttribute('href');
        const description = this.getAttribute('data-description');
        
        // Ponemos la info en el lightbox
        lightboxImg.setAttribute('src', imgSrc);
        lightboxDesc.textContent = description;
        
        // Mostramos el lightbox
        lightbox.style.display = 'block';
    }

    // Función para cerrar el lightbox
    function closeLightbox() {
        lightbox.style.display = 'none';
        lightboxImg.setAttribute('src', ''); // Limpiamos la imagen
    }

    // Añadimos el evento de clic a cada item de la galería
    galleryItems.forEach(item => {
        item.addEventListener('click', openLightbox);
    });

    // Añadimos el evento de clic al botón de cerrar
    closeBtn.addEventListener('click', closeLightbox);
    
    // (Opcional) Cerrar al hacer clic fuera de la imagen/info
    lightbox.addEventListener('click', function(e) {
        // Si el clic fue en el fondo oscuro (el ID 'gallery-lightbox')
        if (e.target.id === 'gallery-lightbox') {
            closeLightbox();
        }
    });

});