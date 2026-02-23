const form = document.getElementById('contactForm');
const msg = document.getElementById('msg');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    msg.textContent = "Thank you for contacting TechnocoolMW! We'll get back to you soon.";
    msg.style.color = "#007BFF";
    form.reset();
});