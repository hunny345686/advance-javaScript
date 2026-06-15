const CACHE_NAME = "v3";

const FILES_TO_CACHE = [
    "./",
    "./app.js",
    "./sw.js",
    "./index.html"
];

self.addEventListener("install", (event) => {
    console.log("Service Worker Installing");

    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return Promise.all(
                FILES_TO_CACHE.map(async (file) => {
                    try {
                        const response = await fetch(file);
                        console.log(file, response.status);
                        return cache.add(file);
                    } catch (error) {
                        console.error("Failed:", file);
                    }
                })
            );
        })
    );

    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                console.log("Serving from cache");
                return cachedResponse;
            } else {


                console.log("Fetching from network");
                return fetch(event.request);
            }
        })
    );
});