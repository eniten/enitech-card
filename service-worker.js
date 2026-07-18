const CACHE='enitech-card-v1';
const FILES=['./','index.html','style.css','script.js','manifest.webmanifest','assets/enitech-logo.png','assets/profile-placeholder.svg','Ernest_Tendon.vcf'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
