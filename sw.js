/* NEBULOSA — service worker (PWA offline).
   Cache-first com atualização em segundo plano para os arquivos do próprio site.
   Para forçar atualização em todos os aparelhos, aumente CACHE (ex.: nebulosa-v2). */
const CACHE = 'nebulosa-v2';
const ARQUIVOS = [
  './', './index.html', './manifest.json',
  './banco-de-frases-v5.js', './revelacoes.js', './temporal.js', './degradacao.js',
  './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;   // fontes externas etc.: rede normal
  e.respondWith(
    caches.match(req).then(hit => {
      const rede = fetch(req).then(res => {
        if (res && res.ok) { const copia = res.clone(); caches.open(CACHE).then(c => c.put(req, copia)); }
        return res;
      }).catch(() => hit);
      return hit || rede;                                                // cache primeiro; atualiza por trás
    })
  );
});
