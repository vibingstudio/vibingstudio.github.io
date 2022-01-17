'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "90b3b8ba0a7b79bbc16ba878c5921dd6",
"assets/assets/AssetManifest.json": "ef48dee5f696310c1ca77367e97c2091",
"assets/assets/assets/audio/City_POP.mp3": "96924a56abe1a718950294cbe9b9ea7f",
"assets/assets/assets/images/baby_monkette.png": "ff89eb5a0650a2dd34ab1880fd231102",
"assets/assets/assets/images/BeachBird.png": "6914379395b08dee1767ca4915df0465",
"assets/assets/assets/images/Bhover.png": "3d81f6ac4e370462481f6532f57795b8",
"assets/assets/assets/images/big.png": "31461f26ac9e0902fbdf4ec884c3ed70",
"assets/assets/assets/images/Bpressed.png": "a6386b2e435403817dabf53109c7ea2d",
"assets/assets/assets/images/Bunpressed.png": "7b4b47f40ff1ddd01ce41848d024bc0f",
"assets/assets/assets/images/CarnivalBird1.png": "9564ba318c4d3105dc77fbd8efbdaa7a",
"assets/assets/assets/images/CarnivalBird2.png": "4aa6b225fff14e54dc944696287e0b0d",
"assets/assets/assets/images/cat.png": "c8dcf0f29ff27f159238fdb135e327a0",
"assets/assets/assets/images/circle.png": "aac8eea2b0361afe06109cd8619a6309",
"assets/assets/assets/images/Dhover.png": "48e28204d72a340a395dff0586f449ae",
"assets/assets/assets/images/DialogBubble_half.png": "e4edc4a47eceb1d207037419011cba01",
"assets/assets/assets/images/Dock.png": "7c07cbcc26708029ad61da8531091377",
"assets/assets/assets/images/doggo.png": "a29a842c59ab1f3dbbf9ee9d9a95f2be",
"assets/assets/assets/images/Dpressed.png": "f564a7a253444167cf7e17df6efc8e42",
"assets/assets/assets/images/Dunpressed.png": "bf66328fde2af8245479fa5e6386fa55",
"assets/assets/assets/images/fokiballena.png": "297fe79287e5439b0f0ef72228af0707",
"assets/assets/assets/images/Fountain.png": "37938f1f7a683313283cdfaa4cfcb75d",
"assets/assets/assets/images/fox.png": "3b435351c2e1e065da8abf4815141adb",
"assets/assets/assets/images/frog.png": "8ebe845a9a17b28fd0e33798ffe253e0",
"assets/assets/assets/images/GreenLifeSaver.png": "5b3a1430d2d8524c8d53bdb68dfcc692",
"assets/assets/assets/images/hamster.png": "50c4a352787c49622fa9d1e209aad8d7",
"assets/assets/assets/images/Jhover.png": "7c59ff40879e6eaf7b64569e1efe6341",
"assets/assets/assets/images/Jpressed.png": "33f2041d74bd4abbc0c028d1ead89e59",
"assets/assets/assets/images/Junpressed.png": "35bd2f12f8d64328eaf8c24ab08cc7df",
"assets/assets/assets/images/LibraryBird.png": "37dd8d5c79102bf9b7dedbf83fe98ba8",
"assets/assets/assets/images/logo.png": "6454e0d4f16fdfcd2ea37e8e8ef71338",
"assets/assets/assets/images/Monolith.png": "029b1aee021c7621a33d215a7c046cd0",
"assets/assets/assets/images/ninfa.png": "a9435645254af5427088925c3c9e8e21",
"assets/assets/assets/images/owl.png": "2e21674fdfd007fe2557ddc90baeb309",
"assets/assets/assets/images/Pond.png": "a832817e6d1ce30127379d7daf1c5b7b",
"assets/assets/assets/images/RedLifeSaver.png": "55f4a3860cc83bd6cece57671fd5523c",
"assets/assets/assets/images/SandCastle.png": "e840172fb0ef23bb31ec798d008ed7e0",
"assets/assets/assets/images/Stereo.png": "27b1b3bb30d670ee8b846154154a3acc",
"assets/assets/assets/images/Thover.png": "ded16c94e51d91111fcf4627504eced4",
"assets/assets/assets/images/Tpressed.png": "76f840eda7ede6d84ac79492c0b85e9d",
"assets/assets/assets/images/TreesBird1.png": "4ccdb6eda74859aca243d07a1acacd9d",
"assets/assets/assets/images/TreesBird2.png": "2e1de09673d7a683f3b392d284e9b820",
"assets/assets/assets/images/TreesBird3.png": "336d6cc79c9afe5887f16a808a6426ef",
"assets/assets/assets/images/Tunpressed.png": "3bc91f09a9b86672a468e09d12f4a36a",
"assets/assets/assets/images/VibingTownN.png": "e3c89fef98d1ce3228336d08026707c9",
"assets/assets/assets/images/WestHousesBird.png": "992c6a8bd560f1c7e2ce347965265fc6",
"assets/assets/assets/pagebuttons.fa": "28146eaedc8c212cfeefe3e3cda3e879",
"assets/assets/assets/vibingtown.fa": "6e3e291f9b7943360b65da25fa6e3b17",
"assets/assets/audio/City_POP.mp3": "96924a56abe1a718950294cbe9b9ea7f",
"assets/assets/FontManifest.json": "4c3c6242e5ab7ab150aa79b29431ae35",
"assets/assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/fonts/small_pixel-7.ttf": "c941580153991e12cbb040d4b06b0434",
"assets/assets/images/baby_monkette.png": "ff89eb5a0650a2dd34ab1880fd231102",
"assets/assets/images/BeachBird.png": "6914379395b08dee1767ca4915df0465",
"assets/assets/images/CarnivalBird1.png": "9564ba318c4d3105dc77fbd8efbdaa7a",
"assets/assets/images/CarnivalBird2.png": "4aa6b225fff14e54dc944696287e0b0d",
"assets/assets/images/cat.png": "c8dcf0f29ff27f159238fdb135e327a0",
"assets/assets/images/DialogBubble_half.png": "e4edc4a47eceb1d207037419011cba01",
"assets/assets/images/Dock.png": "7c07cbcc26708029ad61da8531091377",
"assets/assets/images/doggo.png": "a29a842c59ab1f3dbbf9ee9d9a95f2be",
"assets/assets/images/fokiballena.png": "297fe79287e5439b0f0ef72228af0707",
"assets/assets/images/Fountain.png": "37938f1f7a683313283cdfaa4cfcb75d",
"assets/assets/images/fox.png": "3b435351c2e1e065da8abf4815141adb",
"assets/assets/images/frog.png": "8ebe845a9a17b28fd0e33798ffe253e0",
"assets/assets/images/GreenLifeSaver.png": "5b3a1430d2d8524c8d53bdb68dfcc692",
"assets/assets/images/hamster.png": "50c4a352787c49622fa9d1e209aad8d7",
"assets/assets/images/LibraryBird.png": "37dd8d5c79102bf9b7dedbf83fe98ba8",
"assets/assets/images/Monolith.png": "029b1aee021c7621a33d215a7c046cd0",
"assets/assets/images/ninfa.png": "a9435645254af5427088925c3c9e8e21",
"assets/assets/images/owl.png": "2e21674fdfd007fe2557ddc90baeb309",
"assets/assets/images/Pond.png": "a832817e6d1ce30127379d7daf1c5b7b",
"assets/assets/images/RedLifeSaver.png": "55f4a3860cc83bd6cece57671fd5523c",
"assets/assets/images/SandCastle.png": "e840172fb0ef23bb31ec798d008ed7e0",
"assets/assets/images/Stereo.png": "27b1b3bb30d670ee8b846154154a3acc",
"assets/assets/images/TreesBird1.png": "4ccdb6eda74859aca243d07a1acacd9d",
"assets/assets/images/TreesBird2.png": "2e1de09673d7a683f3b392d284e9b820",
"assets/assets/images/TreesBird3.png": "336d6cc79c9afe5887f16a808a6426ef",
"assets/assets/images/VibingTownN.png": "e3c89fef98d1ce3228336d08026707c9",
"assets/assets/images/WestHousesBird.png": "992c6a8bd560f1c7e2ce347965265fc6",
"assets/assets/NOTICES": "a48218bc9ec5ff6291e8ca48af56b290",
"assets/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/pagebuttons.fa": "28146eaedc8c212cfeefe3e3cda3e879",
"assets/assets/vibingtown.fa": "6e3e291f9b7943360b65da25fa6e3b17",
"assets/canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"assets/canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"assets/canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"assets/canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"assets/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "4c3c6242e5ab7ab150aa79b29431ae35",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/small_pixel-7.ttf": "c941580153991e12cbb040d4b06b0434",
"assets/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"assets/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"assets/images/Bahover.png": "c46fb1a923906e2e07ffb3b070e43b84",
"assets/images/Bapressed.png": "491ccd5ebabc75c7ec6bdb4a4d7ad3b5",
"assets/images/Baunpressed.png": "98577bde8465a7a651a65aa203cf81fa",
"assets/images/Bhover.png": "3d81f6ac4e370462481f6532f57795b8",
"assets/images/Bpressed.png": "a6386b2e435403817dabf53109c7ea2d",
"assets/images/Bunpressed.png": "7b4b47f40ff1ddd01ce41848d024bc0f",
"assets/images/Dhover.png": "48e28204d72a340a395dff0586f449ae",
"assets/images/Dpressed.png": "f564a7a253444167cf7e17df6efc8e42",
"assets/images/Dunpressed.png": "bf66328fde2af8245479fa5e6386fa55",
"assets/images/icon.png": "f975521c063c95bf96305bec01ebfce2",
"assets/images/Jhover.png": "7c59ff40879e6eaf7b64569e1efe6341",
"assets/images/Jpressed.png": "33f2041d74bd4abbc0c028d1ead89e59",
"assets/images/Junpressed.png": "35bd2f12f8d64328eaf8c24ab08cc7df",
"assets/images/loading.gif": "b671a0b5806b47eb8705bfa5ddd6412e",
"assets/images/Thover.png": "ded16c94e51d91111fcf4627504eced4",
"assets/images/Tpressed.png": "76f840eda7ede6d84ac79492c0b85e9d",
"assets/images/Tunpressed.png": "3bc91f09a9b86672a468e09d12f4a36a",
"assets/index.html": "7ae3c348b6157859df7bfc4cb496966b",
"/": "566f0cbe2b64518e7aff561e45da6d86",
"assets/main.dart.js": "a55df44969a5223f789b79e8e7fdb001",
"assets/manifest.json": "af59e685264f8dbf102f88d6f3cff0d9",
"assets/NOTICES": "a48218bc9ec5ff6291e8ca48af56b290",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/style.css": "782ae8e3cf46fdccdd5cb026ac978b81",
"assets/version.json": "48b5baadf72765bcf5f34ed94da81b4e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "566f0cbe2b64518e7aff561e45da6d86",
"main.dart.js": "8e792a30dc57a7eec268c638e7bd9f48",
"manifest.json": "af59e685264f8dbf102f88d6f3cff0d9",
"version.json": "48b5baadf72765bcf5f34ed94da81b4e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
