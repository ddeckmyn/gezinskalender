self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("gezinskalender-v1").then(cache =>
      cache.addAll([
        "/",
        "/index.html",
        "/tv.html",
        "/manifest.webmanifest"
      ])
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});
