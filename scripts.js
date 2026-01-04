
/ Función para mostrar alerta al enviar formulario
function envoyerFormulaire(event) {
    event.preventDefault();
    alert("Merci pour votre intérêt ! Nous vous contacterons bientôt.");
}

// Función para abrir imagen en modal
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card img");
    const modal = document.createElement("div");
    modal.classList.add("modal");
    const modalImg = document.createElement("img");
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    cards.forEach(img => {
        img.addEventListener("click", () => {
            modalImg.src = img.src;
            modal.classList.add("active");
        });
    });

    modal.addEventListener("click", () => {
        modal.classList.remove("active");
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".card img");

    images.forEach(img => {
        img.addEventListener("click", () => {
            // Abrir la imagen en una nueva pestaña
            window.open(img.src, "_blank");
        });
    });
});


/* Carrosel construction */

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
