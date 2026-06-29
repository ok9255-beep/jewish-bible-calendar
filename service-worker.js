const KILL_VERSION = 'jbc-v9-note-date-20260629';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    try {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
    } catch (error) {}

    try {
      const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
      for (const client of clients) {
        client.postMessage({ type: 'JBC_SW_KILLED', version: KILL_VERSION });
      }
    } catch (error) {}

    try {
      await self.registration.unregister();
    } catch (error) {}
  })());
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request, { cache: 'no-store' }).catch(() => {
      if (event.request.mode === 'navigate') return fetch('./index.html', { cache: 'no-store' });
      return Response.error();
    })
  );
});
