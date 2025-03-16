document.getElementById("mobile-menu").addEventListener("click", function () {
    document.querySelector(".nav-list").classList.toggle("active");
});

document.querySelector(".contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your message has been sent successfully!");
});