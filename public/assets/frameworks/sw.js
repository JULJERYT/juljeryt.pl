self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('my-cache').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/assets/frameworks/animatee.min.css',
                '/assets/frameworks/clipboardd.min.js',
                '/assets/frameworks/typedd.min.js',
                '/assets/fonts/Lexend.ttf',
                '/assets/media/pepo-writing.gif',
                '/assets/media/pepe-swing.gif',
                '/assets/media/pepe-waving.gif',
                '/assets/media/pepe-poland.gif',
                '/assets/media/pepe-ping.gif',
                '/assets/media/pepe-hacking.gif',
                '/assets/media/pepe-gaming.gif',
                '/assets/media/logo.webp'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
