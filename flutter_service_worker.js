'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/logs/refs/remotes/web/master": "f0f702e2d610990a75eb9899952a1f8b",
".git/objects/03/d0a3f6ca75fd9725d7d005b4db7ecf8e5c3270": "9aceff98b7f5d2b6017a9ee699ebaf9b",
".git/objects/04/eca87c1bc448290da3575a773a6e909aee9e89": "839e508801e41b7d0ab7743728ce7242",
".git/objects/06/bda8551e072a5a2f9810253c0a4bfa0db9f0b1": "5000b43b838c80c44162696f71b3ae65",
".git/objects/08/1f2f42c8c3a506e49895411de26e2ea38d04fe": "27ee3870327b9c723c972fc1cecdff1a",
".git/objects/09/6ccf1de9295437631d77bb2fc598102d448214": "0ef640853c0cabb2096a5e8c270983ab",
".git/objects/0a/a8b3d93f92f7e50594379f1fafa0c8f629e8d3": "bee655c44adaf9f27ff967c1e8601eee",
".git/objects/0b/87536e90d5b07514c225e5e3c1f54e6ff9be34": "ee46acf74489dca22b96cd7ee24dff6e",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/9266ee546694d04b426351c0f0f64aedad7c99": "05c031300239b536d321e9c596975246",
".git/objects/16/8f967362e66af9cf8ce71514dbaad66e69ab3b": "9a314c72fba106f37e9645385993c7b4",
".git/objects/28/c599d407a843d04d56beca07ff2a691a56b5ac": "7e67dd4a5314108706e95a82f83a07ca",
".git/objects/2d/9584ffe2705ae55a54e55fa994e0e1546bad6b": "8f0767dd274be8e7f9c004974798e94c",
".git/objects/31/fdda046d2c5442146190806269fead4ddb7fce": "095a2490106a1c6d45deccc88304912e",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/3b/f72cd09337a9a12930a6a8afe865fa16baad0a": "7158d586013d75251ae08ae763d81a91",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/670d5f9d86cbcb4194ffee5927f712b68db10f": "0ce7fd1422e04ade38f5614717ae4208",
".git/objects/47/a2c1581c827d43d85edee2d354fc733139eb3f": "c55ee926aa873dad349e66bbcf717d41",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5a/93a4e01557d4c563fb4c37febe949e9c37bb4c": "81bcd432a6252accb6cfacf34ae1df6c",
".git/objects/5b/1489f609c6947297eb78da90047d2fc35c3426": "da31c4c921ed0965dc9e1fd46dda9694",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/894c1d92fe350fbbccb94f781363a0007c0afc": "6e6e80daccb955fc1b86cd6e14059a81",
".git/objects/73/0446e52e71e80e64e8055ed5384b0cda3d96bf": "a1c425cd063b685983f4735d4a347704",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/81/0b1c816fa6d992ba87550941a7a2c8c10b209c": "2ab88d4c612555633c68b5ddce472c64",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/72f499c8637359b46affe2936ce9fd512a1a34": "59e9e37a9ccf872b076d2240265affbe",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/163fc0f7f17538d94d2dee21271b241ac275e0": "3356240cf4a98557447ebce85354d605",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/93/29d119f2e53c4b309922a773ee9af579e892a3": "ce1afe2de3fa7a72de24793d5e0a6598",
".git/objects/99/24f71b22574fd51646e43327fcd4802355ec9f": "04a6fadcc60820d02a525627d0ab9abf",
".git/objects/9a/7f22bf2117640f24f1c7efe5472fc51f0d9ab8": "883cfdcab0add66f8abded0ba8cba636",
".git/objects/a0/3c148073a1e3e1a6e524adcf3b2dca858e043e": "95d9d9f69104abe9a8b64bd0c9ddebc7",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/8a1be26aa8b8a09e47b71f6517eb8ad1498d4b": "d1a4aed1e8c9d65ca6becfc805e66c66",
".git/objects/a5/a7af951756f8ce81b344d8175800fe6c9c809e": "2146a549c53283e084577fe1a9454db5",
".git/objects/a6/0b4fe557ada2d022c525b805c7abdcbb21b004": "1e6dd1193f2a3bfe8304a342dae01862",
".git/objects/a8/bb4824b7b995cb56d6527ecd13b11fde3155b4": "8cbe162a3406a4622a7f62b8cd7943b9",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/b6/a13a71abb8d4105268ef19127bba2cd3ce9a30": "b009a2b63053457d5985bfc7e99318f2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/d2d3ed9e9637c5ae0db8307da146c95e27b586": "37835807bdf56d22c8bcdabf61c636bd",
".git/objects/c4/58699aba91c3fd125e2bd70c58b672e3a1e61a": "6448fa2b3a0a2ac0d9b261f1ba1f716b",
".git/objects/c6/40c9cc2831b33ed35afaa876e06c5f4b90e7c6": "d5d85bad20e5b0f15ae5c046b3300d3d",
".git/objects/c9/10eb9f4c077ca2024eb893c29fa4b22fc732ff": "ad5327fd0b0b6111f7bed70e03a54f8d",
".git/objects/cf/08eea0edc3ea659a023e2a0a0571dc21cf7faa": "7254fbca629dc72fcf81dce1df9c8f3f",
".git/objects/d3/36de94ff0979790ceb59fdc0a60e1241715fb6": "c9f9b2f0e1439d939b94a36107282020",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/a36bdeeac124fb98a09fb1503e57d5f4cd6c85": "913b28aa2e4cd3eb0d431c3ae93c3b05",
".git/objects/e0/4a83492ac1ded85a80ed024131b6681be65af1": "d766ac40eedee858265f8e85f83f78a8",
".git/objects/e5/7e2ebb89619e759722995dd9d506828ab86d86": "b1f2435d910f709169962e4d82f9374c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/e53060ea606c171cc73717278b20c90d3713d4": "5626c30cabae2a0106837de737431fb4",
".git/objects/e6/9ec02317fb22265ace908111cb58e1f172645c": "c21f1561f3609c446eb721ca03e11049",
".git/objects/e7/7fff97eb0aae4e4834940eb6eaf8583e242e60": "4b50504e36a27620408a3a1e4f391dc8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/056f6e2fa11684f96055e745ef59037a23fc8f": "d96fa5388aa67d0e8c30a75a320c5c05",
".git/objects/fa/5bf3729d3a0d19cf2120b0280a0d3a3f4c63ca": "fa59163915a4b498461b71ca11a07137",
".git/objects/fa/cced14b529a0c785b7747cd61f93635476d4e3": "c830f79730f6ba7e2ba76df4fc934e21",
".git/refs/heads/master": "8a0eeb73343491541002dc2e1fdaa93a",
".git/refs/remotes/origin/master": "8a0eeb73343491541002dc2e1fdaa93a",
".git/refs/remotes/web/master": "8a0eeb73343491541002dc2e1fdaa93a",
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
"index.html": "74472db750053d47aea1407e38bc7199",
"/": "74472db750053d47aea1407e38bc7199",
"main.dart.js": "2c0ad7de2759faabc98a13cc41f021cc",
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
