document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});


const textElement = document.getElementById("animated-text");
const text = "Hi, i'm Renzkie";
let index = 0;
let isDeleting = false;

function animateText() {
    if (!isDeleting && index <= text.length) {
        textElement.innerHTML = text.substring(0, index);
        index++;
    } else if (isDeleting && index >= 7) { 
        textElement.innerHTML = text.substring(0, index);
        index--;
    } else if (index < 7) {
        isDeleting = false;
        index = 7;
    }
    if (index > text.length) {
        isDeleting = true;
        setTimeout(animateText, 1000);
    } else {
        setTimeout(animateText, 150);
    }
}

animateText();



document.addEventListener("DOMContentLoaded", function () {
    const contactBtn = document.querySelector(".contact-btn");
    const modal = document.getElementById("contactModal");
    const closeBtn = document.querySelector(".close");

  
    contactBtn.addEventListener("click", function (event) {
        event.preventDefault(); 
        modal.style.display = "flex";
    });

  
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

   
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
