const CACHE_NAME = "f169-cache-v1";
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/styles/navbar.css',
  '/styles/article-taweiem.css',
  '/styles/style-footer.css',
  '/styles/hasil.css',
  '/asset/icons/icon-192x192.png',
  '/assets/icons/icon-512x512.png',
  '/assets/icons/icon-92x92.png',
  '/hitung-hisab/paroid.html',
  '/hitung-hisab/perhitungan-tahun-hijriyah.html',
  '/hitung-hisab/perhitungan-tahun-masehi.html',
  '/hitung-hisab/taqweem.html',
  '/hitung-hisab/waktu-shalat.html',
  '/main/jadwal-sholat.js',
  '/main/navbar.js',
  '/main/scrolltop.js',
  '/penjelasan-hisab/pendahuluan.html',
  '/penjelasan-hisab/taqwiem-bab1.html',
  '/penjelasan-hisab/taqwiem-bab2.html',
  '/penjelasan-hisab/taqwiem-bab3.html',
  '/penjelasan-hisab/taqwiem-bab4.html',
  '/penjelasan-hisab/hisab-istilahi/awal-tahun-hijriyah.html',
  '/penjelasan-hisab/hisab-istilahi/awal-tahun-masehi.html',
  '/penjelasan-hisab/hisab-istilahi/khulasoh-hisab-istilahi.html',
  '/penjelasan-hisab/hisab-istilahi/khulasoh2.html',
  '/penjelasan-hisab/hisab-istilahi/khulasoh3.html',
  '/service-worker.js',
  '/manifest.json',
  '/pembarusan.html',
  '/footer/contact.html',
  '/footer/disclaimer.html',
  '/footer/tentang.html',
  '/footer/visimisi.html',
];

// Install Service Worker
self.addEventListener("install", (event) => {
  console.log("Service Worker: Installed");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activate Service Worker
self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activated");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Service Worker: Clearing old cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch Event: Menangani permintaan jaringan
self.addEventListener("fetch", (event) => {
  console.log("Service Worker: Fetching", event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Jika ada di cache, kembalikan respons dari cache
      if (response) {
        return response;
      }

      // Jika tidak ada di cache, lakukan permintaan jaringan
      return fetch(event.request)
        .then((response) => {
          // Jika respons valid, simpan ke cache
          if (!response || response.status !== 200 || response.type !== "basic") {
            return response;
          }

          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch(() => {
          // Jika offline, tampilkan halaman fallback
          return caches.match("offline.html"); // Pastikan Anda memiliki file offline.html
        });
    })
  );
});