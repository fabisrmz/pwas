const CACHE_NAME = "staticDevCoffee";
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/images/coffee1.jpg",
  "/images/coffee2.jpg",
  "/images/coffee3.jpg",
  "/images/coffee4.jpg",
  "/images/coffee5.jpg",
  "/images/coffee7.jpg",
  "/images/coffee8.jpg",
  "/images/coffee9.jpg",
  "/images/coffee10.jpg"
];

// INSTALACIÓN (Precarga de recursos estáticos)
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      cache.addAll(assets);
    })
  );
});

// ESTRATEGIA: CACHE FIRST CON RESPALDO A NETWORK FIRST
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(cacheResponse => {
      // Si se encuentra en caché, lo devuelve; si no, va a la red (Network First / Fallback)
      return cacheResponse || fetch(fetchEvent.request).then(networkResponse => {
        return caches.open(CACHE_NAME).then(cache => {
          // Opcional: guarda dinámicamente lo nuevo en caché
          cache.put(fetchEvent.request, networkResponse.clone());
          return networkResponse;
        });
      });
    })
  );
});