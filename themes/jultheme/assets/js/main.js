console.log("Hello world!");
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("img").forEach(img => {
        img.setAttribute("loading", "lazy");
    });
});