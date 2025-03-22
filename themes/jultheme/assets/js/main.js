console.log("Hello world!");
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("img").forEach(img => {
        img.setAttribute("loading", "lazy");
    });
});
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/assets/frameworks/sw.js').then(() => {
        console.log("service worker registered");
    });
}
