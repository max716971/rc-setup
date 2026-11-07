const CACHE_NAME = 'rc-setup-v146';
const APP_SHELL = ['./', './index.html', './app.css?v=36', './materials.css?v=36', './app.js?v=78', './materials.js?v=82', './backup.js?v=1', './manifest.webmanifest', './icon.svg'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))); self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('rc-setup-') && key !== CACHE_NAME).map(key => caches.delete(key))))); self.clients.claim(); });
const LOGO_HOSTS = new Set(['www.hobbywingdirect.com','apps.associatedelectrics.com','schumacher-racing.com','atomfire.com','6mik-racing.com','cdn.houseofrc.com','www.cmldistribution.co.uk','www.wartelle-shop.com']);
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  const isBrandLogo = event.request.destination === 'image' && LOGO_HOSTS.has(url.hostname);
  if (url.origin !== self.location.origin && !isBrandLogo) return;
  event.respondWith((async () => {
    if (isBrandLogo) {
      const cached = await caches.match(event.request);
      if (cached) return cached;
      try {
        const response = await fetch(event.request);
        if (response.ok || response.type === 'opaque') {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        }
        return response;
      } catch {
        return (await caches.match(event.request)) || new Response('', { status: 504 });
      }
    }
    try {
      const response = await fetch(event.request);
      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      }
      return response;
    } catch {
      return caches.match(event.request).then(cached => cached || caches.match('./index.html'));
    }
  })());
});
