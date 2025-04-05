// lazy load images

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("img").forEach(img => {
        img.setAttribute("loading", "lazy");
    });
});

// disable drag and drop for all images

document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img');
  images.forEach(image => {
    image.setAttribute('draggable', 'false');
  });
});

// disable right click

document.addEventListener("contextmenu", function (e){
    e.preventDefault();
}, false);

// fade animation

document.addEventListener("DOMContentLoaded", () => {
  const allElements = Array.from(document.body.querySelectorAll("*"));

  const fadeElements = allElements.filter(el => {
    const isInsideSvg = el.closest("svg") !== null;
    const isSvg = el.tagName === "SVG";
    const isExcluded = el.classList.contains("donotfademe");
    const isSystemElement = ["SCRIPT", "STYLE", "META", "LINK"].includes(el.tagName);

    return !isSvg && !isInsideSvg && !isExcluded && !isSystemElement;
  });

  fadeElements.forEach(el => {
    el.setAttribute("data-fade", "");
    el.classList.add("fast-fade"); // Dodaj klasę na początku
  });

  setTimeout(() => {
    fadeElements.forEach(el => el.classList.remove("fast-fade")); // Usuń klasę po 1 sekundzie
  }, 1000);

  const observer = new IntersectionObserver((entries, observer) => {
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a, b) => a.target.offsetTop - b.target.offsetTop);

    visible.forEach((entry, i) => {
      setTimeout(() => {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }, i * 100);
    });
  }, {
    threshold: 0.1
  });

  fadeElements.forEach(el => observer.observe(el));
});

// add service worker to cache assets

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/assets/frameworks/sw.js').then(() => {
        // console.log("service worker registered");
    });
}

// print message in the console

console.log(`%c
    _         _   _                     _              _ \r\n   (_) _   _ | | (_)  ___  _ __  _   _ | |_     _ __  | |\r\n   | || | | || | | | \/ _ \\| \'__|| | | || __|   | \'_ \\ | |\r\n   | || |_| || | | ||  __\/| |   | |_| || |_  _ | |_) || |\r\n  _\/ | \\__,_||_|_\/ | \\___||_|    \\__, | \\__|(_)| .__\/ |_|\r\n |__\/          |__\/              |___\/         |_|       
                     coded by jul                     
                 https://juljeryt.pl/                 
`, "background: linear-gradient(90deg, red, orange, yellow); color: transparent; -webkit-background-clip: text; font-weight: bold; font-family:monospace; font-size: 14.5px; ")

// add loaded class to body

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});