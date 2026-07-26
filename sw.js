/* NOBLEmind – Offline-Hülle. Cacht nur die App, niemals API-Verkehr. */
const CACHE = 'noblemind-v8';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png'
];

/* Jede Datei einzeln – fehlt eine, scheitert nicht gleich die ganze Installation. */
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(SHELL.map(u => c.add(new Request(u, {cache:'reload'})))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    /* Der Browser darf die Navigationsanfrage schon losschicken, während der
       Arbeiter noch hochfährt – das spart beim Öffnen einen Rundlauf. */
    if(self.registration.navigationPreload){
      try{ await self.registration.navigationPreload.enable(); }catch(err){}
    }
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if(req.method !== 'GET') return;
  const url = new URL(req.url);
  if(url.origin !== location.origin) return;          // API & MCP nie anfassen
  /* Bereichsanfragen (Ton, Video) beantwortet ein Cache-Treffer nur halb
     richtig – die gehen unverändert ans Netz. */
  if(req.headers.has('range')) return;
  /* Der Arbeiter selbst kommt nie aus dem Cache, sonst bliebe eine kaputte
     Fassung für immer stehen. */
  if(url.pathname.endsWith('/sw.js')) return;

  if(req.mode === 'navigate'){
    e.respondWith((async () => {
      try{
        const r = (await e.preloadResponse) || (await fetch(req));
        if(r && r.ok) e.waitUntil(caches.open(CACHE).then(c => c.put('./index.html', r.clone())));
        return r;
      }catch(err){
        /* Vorher konnte hier undefined herauskommen; der Browser zeigte dann
           seine eigene Fehlerseite statt der zwischengespeicherten App. */
        return (await caches.match('./index.html')) || (await caches.match('./'))
          || new Response('Offline – und nichts im Zwischenspeicher.',
               {status:503, headers:{'Content-Type':'text/plain; charset=utf-8'}});
      }
    })());
    return;
  }

  e.respondWith((async () => {
    const hit = await caches.match(req);
    if(hit) return hit;
    try{
      const r = await fetch(req);
      if(r && r.ok && r.type === 'basic') e.waitUntil(caches.open(CACHE).then(c => c.put(req, r.clone())));
      return r;
    }catch(err){
      return new Response('', {status:504, statusText:'Offline'});
    }
  })());
});
