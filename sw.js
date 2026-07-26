/**
 * ShivinShubham PWA - Service Worker with Offline Fallback
 * Safely stores app wrapper assets to serve during network disconnections.
 */

const CACHE_NAME = 'shivinshubham-pwa-v1';

// Array listing local app gateway shell assets to store in cache memory
const ASSETS = [
  'index.html',
  'manifest.json',
  'offline.html' // Added to cache storage
];

/**
 * 'install' Event Listener
 * Caches core framework assets on initial installation.
 */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('PWA Service Worker: Caching offline shell assets');
      return cache.addAll(ASSETS);
    })
  );
});

/**
 * 'activate' Event Listener
 * Cleans up old cache structures when updating to a newer version.
 */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('PWA Service Worker: Clearing obsolete cache store', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
});

/**
 * 'fetch' Event Listener
 * Intercepts connection intents to catch drops and serve the offline layout smoothly.
 */
self.addEventListener('fetch', (event) => {
  // Only process standard navigational HTML document network paths
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        // Intercepts dead connection events and serves the offline template instead
        return caches.match('offline.html');
      })
    );
  } else {
    // Standard asset strategies for assets, style rules, or app icons
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});
