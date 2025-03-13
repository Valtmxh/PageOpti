document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    
    window.addEventListener("scroll", () => {
        sections.forEach(sec => {
            let position = sec.getBoundingClientRect().top;
            let screenHeight = window.innerHeight / 1.5;
            
            if (position < screenHeight) {
                sec.style.transform = "translateY(0)";
                sec.style.opacity = "1";
            } else {
                sec.style.transform = "translateY(50px)";
                sec.style.opacity = "0";
            }
        });
    });
});
