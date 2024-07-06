document.addEventListener('DOMContentLoaded', () => {
    const total = parseInt(document.getElementById('num_slides').value, 10);
    let numeroDeSlide = 1;

    const slide = document.querySelector('#container img');
    const slideActual = document.getElementById('slideActual');
    const totalSlides = document.getElementById('totalSlides');
    const btnAvanzar = document.getElementById('btnAvanzar');
    const btnRetroceder = document.getElementById('btnRetroceder');
    const listaDeSlides = document.querySelectorAll('#lista ul li');

    // Inicializar el contador
    totalSlides.textContent = total;
    slideActual.textContent = numeroDeSlide;

    function actualizarSlide() {
        slide.src = `images/Diapositiva${numeroDeSlide}.jpeg`;
        slideActual.textContent = numeroDeSlide;
    }

    function pasarSiguienteSlide() {
        if (numeroDeSlide < total) {
            numeroDeSlide++;
            actualizarSlide();
        }
    }

    function regresarSlideAnterior() {
        if (numeroDeSlide > 1) {
            numeroDeSlide--;
            actualizarSlide();
        }
    }

    btnAvanzar.addEventListener('click', pasarSiguienteSlide);
    btnRetroceder.addEventListener('click', regresarSlideAnterior);

    listaDeSlides.forEach((item, index) => {
        item.addEventListener('click', () => {
            numeroDeSlide = index + 1;
            actualizarSlide();
        });
    });

    actualizarSlide();
});

document.querySelector('.toggle-btn').addEventListener('mouseenter', () => {
    document.getElementById('lista').classList.add('active');
});

document.getElementById('lista').addEventListener('mouseleave', () => {
    document.getElementById('lista').classList.remove('active');
});
