const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
});


document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


const reservationForm = document.getElementById("reservationForm");

reservationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value;
    const guests = document.getElementById("guests").value;

    if (!name || !email || !date) {
        alert("Please complete all required fields.");
        return;
    }

    const message =
        `Hello Ember & Plate!\n\n` +
        `I would like to request a reservation.\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Date: ${date}\n` +
        `Guests: ${guests}`;

    const whatsappURL =
        "https://wa.me/2348134375132?text=" +
        encodeURIComponent(message);

    window.location.href = whatsappURL;
});


const dateInput = document.getElementById("date");

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;
