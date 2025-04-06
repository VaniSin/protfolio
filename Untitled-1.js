document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Navigation
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hover Animation on Hobbies
    document.querySelectorAll('.hobby img').forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = "scale(1.2)";
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = "scale(1)";
        });
    });
});
