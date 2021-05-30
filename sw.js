self.addEventListener("install", e => {
    e.waitUntil(
        cache.open("static").then(cache => {
            return cache.addAll(["./", "./src/master.css", "./images/logo192.png"]);
        })
    )
});

self.addEventListener("fetch", e => {
    e.respondwith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        }))
});