const carrusel = document.getElementById('carrusel');
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;

carrusel.addEventListener('mousedown', (event) => {
    isDragging = true;
    startPos = getPositionX(event);
    carrusel.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const currentPos = getPositionX(event);
        currentTranslate = prevTranslate + currentPos - startPos;
        carrusel.style.transform = `translateX(${currentTranslate}px)`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    carrusel.style.cursor = 'grab';
    prevTranslate = currentTranslate;
});

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}
