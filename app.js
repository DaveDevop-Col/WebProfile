// Inicialización de Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true, // Permite el desplazamiento infinito
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: {
        delay: 3000, // Tiempo entre los deslizamientos (en milisegundos)
    },
    spaceBetween: 20, // Espacio entre cada slide
});

// Mostrar superposición de detalles
document.querySelectorAll('.view-details').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const projectSlide = button.closest('.swiper-slide'); // Encuentra el slide más cercano al botón
        showProjectDetails(projectSlide);
    });
});

// Función para mostrar los detalles del proyecto
function showProjectDetails(projectSlide) {
    const title = projectSlide.querySelector('.card-title h4').textContent; // Toma el título del proyecto
    const description = projectSlide.querySelector('.card-text p').textContent; // Toma la descripción del proyecto
    const imageSrc = projectSlide.querySelector('img').src; // Toma la fuente de la imagen del proyecto

    // Actualiza el contenido de la superposición
    document.getElementById('overlay-title').textContent = title;
    document.getElementById('overlay-description').textContent = description;
    document.getElementById('overlay-image').src = imageSrc;

    // Muestra la superposición
    document.getElementById('overlay-detail').style.display = 'flex';
}

// Cerrar la superposición
document.getElementById('close-overlay').addEventListener('click', () => {
    document.getElementById('overlay-detail').style.display = 'none';
});
