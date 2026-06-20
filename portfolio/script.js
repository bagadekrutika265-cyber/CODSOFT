// Welcome message in console
console.log("Welcome to Krutika's Portfolio 🚀");

document.addEventListener("DOMContentLoaded", function () {

    // Resume download alert
    const resumeBtn = document.querySelector("#resume a");

    if (resumeBtn) {
        resumeBtn.addEventListener("click", function () {
            alert("Your resume is downloading...");
        });
    }

    // Optional: smooth scroll enhancement (extra effect)
    const links = document.querySelectorAll("a[href^='#']");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

});