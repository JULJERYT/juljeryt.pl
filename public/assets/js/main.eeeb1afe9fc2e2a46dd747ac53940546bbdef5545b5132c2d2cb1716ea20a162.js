(()=>{console.log("Hello world!"),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("img").forEach(e=>{e.setAttribute("loading","lazy")})}),"serviceWorker"in navigator&&navigator.serviceWorker.register("/assets/frameworks/sw.js").then(()=>{console.log("service worker registered")})})()