document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".typing-text");
    const texts = ["Software Developer", "AI Enthusiast", "full-stack Developer","Problem Solver"];
    let index = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;

    function typeEffect() {
        currentText = texts[index];
        if (isDeleting) {
            textElement.textContent = currentText.substring(0, charIndex--);
        } else {
            textElement.textContent = currentText.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => (isDeleting = true), 1000); // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length; // Move to the next text
        }

        setTimeout(typeEffect, isDeleting ? 50 : 100); // Speed settings
    }

    typeEffect();
});
