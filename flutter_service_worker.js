'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1d2d7089e48fac99b917bdb2ceeb76a9",
".git/config": "edc94db1fa10d44aa6a6a9a8229e7756",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a188aafb09bfee36c3c590a08dde8e5a",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dce0876e8b1049fa3a659c614e1cd6d4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5a7eab9247cdf0ccbc651b626a0ea520",
".git/logs/refs/heads/master": "5a7eab9247cdf0ccbc651b626a0ea520",
".git/logs/refs/remotes/origin/master": "377be0910975589d70ca6e688ecb9335",
".git/objects/04/eca87c1bc448290da3575a773a6e909aee9e89": "839e508801e41b7d0ab7743728ce7242",
".git/objects/16/8f967362e66af9cf8ce71514dbaad66e69ab3b": "9a314c72fba106f37e9645385993c7b4",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/6b/894c1d92fe350fbbccb94f781363a0007c0afc": "6e6e80daccb955fc1b86cd6e14059a81",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/163fc0f7f17538d94d2dee21271b241ac275e0": "3356240cf4a98557447ebce85354d605",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/d2d3ed9e9637c5ae0db8307da146c95e27b586": "37835807bdf56d22c8bcdabf61c636bd",
".git/objects/c4/58699aba91c3fd125e2bd70c58b672e3a1e61a": "6448fa2b3a0a2ac0d9b261f1ba1f716b",
".git/objects/d3/36de94ff0979790ceb59fdc0a60e1241715fb6": "c9f9b2f0e1439d939b94a36107282020",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/e53060ea606c171cc73717278b20c90d3713d4": "5626c30cabae2a0106837de737431fb4",
".git/objects/e7/7fff97eb0aae4e4834940eb6eaf8583e242e60": "4b50504e36a27620408a3a1e4f391dc8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fa/5bf3729d3a0d19cf2120b0280a0d3a3f4c63ca": "fa59163915a4b498461b71ca11a07137",
".git/objects/fa/cced14b529a0c785b7747cd61f93635476d4e3": "c830f79730f6ba7e2ba76df4fc934e21",
".git/refs/heads/master": "c1bd62e22de37fe47042b356b7c5a572",
".git/refs/remotes/origin/master": "c1bd62e22de37fe47042b356b7c5a572",
"assets/AssetManifest.json": "312f4eb0becdcbc28ec93cdb5c1c4cfb",
"assets/assets/images/splash.png": "385b91dfc23f68faad5795771bcba11d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "48c450108c5847646d9ff35abf158787",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_chess_board/images/2.0x/brown_board.png": "a2e272a369e1a8b804820c79e370f266",
"assets/packages/flutter_chess_board/images/2.0x/dark_brown_board.png": "2e7a428512da68aa9fd8dfcc9924c172",
"assets/packages/flutter_chess_board/images/2.0x/green_board.png": "c13a78b15c2c047199e4c5354b38e4d0",
"assets/packages/flutter_chess_board/images/2.0x/orange_board.png": "ad1ce906dd598908c1c68a32d3eacf59",
"assets/packages/flutter_chess_board/images/3.0x/brown_board.png": "b403298eb7e7f28475e372946699bc09",
"assets/packages/flutter_chess_board/images/3.0x/dark_brown_board.png": "b488dc862a67c699d0ed82b3d2bcfd99",
"assets/packages/flutter_chess_board/images/3.0x/green_board.png": "dab3af27f76d27dfa2a38e301f2c6683",
"assets/packages/flutter_chess_board/images/3.0x/orange_board.png": "92e5ba21006b61e945e9da086c98940d",
"assets/packages/flutter_chess_board/images/brown_board.png": "991f16fa89ceaf98eb79ab8084253b85",
"assets/packages/flutter_chess_board/images/chess_board.png": "14e7651575d4b7667b2da76091e957a3",
"assets/packages/flutter_chess_board/images/dark_brown_board.png": "c8402900184332a76a0d89d30d231fd3",
"assets/packages/flutter_chess_board/images/green_board.png": "ce9ae5c533ebe93bee85092938f15d19",
"assets/packages/flutter_chess_board/images/orange_board.png": "6b7c6c161c0943a6be5d060392a48416",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7dc2faeb5cfcb8f1c442fab2c4d81739",
"/": "7dc2faeb5cfcb8f1c442fab2c4d81739",
"main.dart.js": "866d71914298acc226b7cd050f640ec7",
"manifest.json": "037c2b826d9471a15472313b9a016bb7",
"splash/img/dark-1x.png": "b798a94e3c1624318dbfdc661923ed11",
"splash/img/dark-2x.png": "172e19d01c3c6b57fcff46196479f380",
"splash/img/dark-3x.png": "3035dd8fa3649f324f0245a3155aabcd",
"splash/img/dark-4x.png": "a1e79baf1f1ccbe4380e3c4f85e228a4",
"splash/img/light-1x.png": "b798a94e3c1624318dbfdc661923ed11",
"splash/img/light-2x.png": "172e19d01c3c6b57fcff46196479f380",
"splash/img/light-3x.png": "3035dd8fa3649f324f0245a3155aabcd",
"splash/img/light-4x.png": "a1e79baf1f1ccbe4380e3c4f85e228a4",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "c94c38ff00a9d487c353a2d78989ea08",
"version.json": "82f11b8da11098774e0a4104842742e1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
