
function envoyerFormulaire(event) {
    event.preventDefault();
    alert("Merci pour votre intérêt ! Nous vous contacterons bientôt.");
}

// Carrusel funcional
document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".carousel");
    carousels.forEach(carousel => {
        const track = carousel.querySelector(".carousel-track");
        const prevBtn = carousel.querySelector(".prev");
        const nextBtn = carousel.querySelector(".next");
        const items = track.children;
        let index = 0;

        function updateCarousel() {
            const width = carousel.offsetWidth;
            track.style.transform = `translateX(-${index * width}px)`;
        }

        nextBtn.addEventListener("click", () => {
            index = (index + 1) % items.length;
            updateCarousel();
        });

        prevBtn.addEventListener("click", () => {
            index = (index - 1 + items.length) % items.length;
            updateCarousel();
        });

        window.addEventListener("resize", updateCarousel);
    });
});
