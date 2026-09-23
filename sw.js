/* Desligamento do service worker antigo da raiz.
   Até a v4, a NEBULOSA ficava na raiz do site e registrava este sw.js com escopo "/".
   Ela agora mora em /nebulosa/ (com o próprio service worker). Quem ainda tiver o antigo
   instalado recebe esta versão: ela apaga os caches da época da raiz, se desregistra
   e recarrega as abas, que passam a ver a página inicial do laboratório.
   Pode ser removido quando não houver mais visitantes da época da raiz. */
const ANTIGOS = ['nebulosa-v2', 'nebulosa-v3', 'nebulosa-v4'];

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', e => {
  e.waitUntil(
    Promise.all(ANTIGOS.map(k => caches.delete(k)))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then(cs => cs.forEach(c => c.navigate(c.url)))
  );
});
