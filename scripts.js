document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const image = card.getAttribute('data-image');
        card.style.backgroundImage = `url(${image})`;
    });
});