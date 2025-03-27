// Smooth Scroll
document.querySelectorAll(".scroll-link").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ 
            behavior: "smooth",
            block: "start"
        });
    });
});

// Dark Mode Toggle
const toggleButton = document.getElementById("darkModeToggle");
toggleButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    toggleButton.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Tombol "Kembali ke Atas"
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});
backToTop.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Lightbox untuk Galeri Foto
const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach(img => {
    img.addEventListener("click", function() {
        lightbox.style.display = "flex";
        lightboxImg.src = this.src;
    });
});

closeLightbox.addEventListener("click", function() {
    lightbox.style.display = "none";
});
