document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("img").forEach(img => {
        img.setAttribute("loading", "lazy");
    });
});
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/assets/frameworks/sw.js').then(() => {
        // console.log("service worker registered");
    });
}

console.log(`%c
    _         _   _                     _              _ \r\n   (_) _   _ | | (_)  ___  _ __  _   _ | |_     _ __  | |\r\n   | || | | || | | | \/ _ \\| \'__|| | | || __|   | \'_ \\ | |\r\n   | || |_| || | | ||  __\/| |   | |_| || |_  _ | |_) || |\r\n  _\/ | \\__,_||_|_\/ | \\___||_|    \\__, | \\__|(_)| .__\/ |_|\r\n |__\/          |__\/              |___\/         |_|       
                     coded by jul                     
                 https://juljeryt.pl/                 
`, "background: linear-gradient(90deg, red, orange, yellow); color: transparent; -webkit-background-clip: text; font-weight: bold; font-family:monospace; font-size: 14.5px; ")