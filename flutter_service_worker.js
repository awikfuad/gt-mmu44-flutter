'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a07cdde61b9cf0d069858f4cda84e3f4",
".git/config": "90be04854996cf5aabada22894e759aa",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "916c2a1cb845b8b6270cc219d7721072",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "92470359d5a52f10a55f6ebb0170d68e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "17681142b10f0c0149c7d27d92713fa9",
".git/logs/refs/heads/main": "17681142b10f0c0149c7d27d92713fa9",
".git/logs/refs/heads/master": "f0ef8eb2e4d817405ae6f924ef7dffe0",
".git/logs/refs/remotes/origin/HEAD": "f10b8f081077f74d153478e9def38b01",
".git/logs/refs/remotes/origin/main": "eff80b18cc48eb09674ac87509a3a77c",
".git/objects/00/95d3258b46fe151a7c5e0961e8b75355a3872b": "113694795fdcb50e88604cd0b0099b87",
".git/objects/18/c30fc4acf83e55a44ae943622ddebd7307f4ec": "3bf132505d923d98782ae5ec46b6164e",
".git/objects/1b/85f0316c1aa1c8abb6de3b9615141331feeba7": "cfe28a4993e52e00b372624e25eea327",
".git/objects/52/0b68639c03b20d01b4804100f29d3826592cdd": "85ff12087d0f6bdc199776370b3802df",
".git/objects/5c/3717d88b3d08f4ed4d753f50e4ca80b749ca8d": "30cd86d7868f99182d2de1829a2988e9",
".git/objects/5c/c32b6fe3f631b8d897434a453af59df2c7cb0e": "f44b800d077419b8e36b875de79f5e11",
".git/objects/63/331cff5b768d742c24125de1b115eb31fd3353": "c1e83b991da4d7afe29a23f54f4af15a",
".git/objects/68/bd51a71312b55bf008d4bdd07f561c07f4af29": "3079c4d9a78b4c6205a9a8d066ce1c4b",
".git/objects/6b/6e64698e70d4ea18dcd6768ef557837f121770": "d633f525c35b9d5c8b40509a9b548f68",
".git/objects/71/c5be3c68035282f8cbefc4e626f96104ad6ce7": "662ed2dfebec8b10b51b1bd26ca629b5",
".git/objects/73/67e9ab0f47a9b1d8e285c7ed2cca99120819ce": "f75f372281005031c5279b12a0f71c3a",
".git/objects/78/f771503ea52d460d2348d097a4272b41a70ca7": "7c319920610ab81a303917384cbfb850",
".git/objects/7d/1636d0f12b86fe76d8a8551af6a685f08c0b00": "c951f38f58c30637e416071060a42f27",
".git/objects/7d/52dd7b2438d948d6de23b967f350db75958ee2": "ccf596c6a734a82a05cc1e76d624c2a7",
".git/objects/86/d82cce44875cf45dbc4c924d59b07bd9be1fd2": "8baeba0d7bd745442b7d88de029b0e46",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/28a628675a26e7391f633d7e82fa3501758614": "ae2a32894b066d329542e9e0f144c8b2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/9e5956f898e1fa5e6dbbced1d8364dfc553d8e": "18829803470ad291821fdf168d3735ff",
".git/objects/95/1b9edaadf983cbfc4e9112f0cba4b2622e7998": "f61ef1ef219ad356dc02dba6e1f39b8e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/67a8420378ba227cec1057c80b5886a4f1d760": "0c19f7246783d9b16243d6adf231e73c",
".git/objects/bc/7d546e929f6493102bf7329e799c81b7f5fb3f": "e49f69e44c652a8ef600d7f614c0701f",
".git/objects/bc/ed32a1d7169dee38dc5cce5af7771688c45f14": "4cd2fa70b06109c348b4d8465683fe84",
".git/objects/d4/0ad8a2881b799fee3f179392c92e07f654f8bc": "3ac801eb263657ed261f7e66bc8a248c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/4d2c6a625c673fa1ede41fd44fa5e788dd8edc": "8be55e0b73bc1a28a7e28855d55a7029",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/pack/pack-1bd94154971870854e12e7c8e287b76d37341785.idx": "5bb65ea9af73ad4ee36edbd08c6574f4",
".git/objects/pack/pack-1bd94154971870854e12e7c8e287b76d37341785.pack": "f8ef1bf027b5e0aedbf35e354ee4fcb2",
".git/objects/pack/pack-1bd94154971870854e12e7c8e287b76d37341785.promisor": "d41d8cd98f00b204e9800998ecf8427e",
".git/objects/pack/pack-1bd94154971870854e12e7c8e287b76d37341785.rev": "75df0b9c33eeab9a972853c8b9bc3eb3",
".git/objects/pack/pack-3d86450fa60bfe5f8ea04640ac9d621a17ceb580.idx": "e91ff2a2e7c7775651ac5f94a340653b",
".git/objects/pack/pack-3d86450fa60bfe5f8ea04640ac9d621a17ceb580.pack": "524ff0393a4393d06edec940f328e392",
".git/objects/pack/pack-3d86450fa60bfe5f8ea04640ac9d621a17ceb580.promisor": "d41d8cd98f00b204e9800998ecf8427e",
".git/objects/pack/pack-3d86450fa60bfe5f8ea04640ac9d621a17ceb580.rev": "1feee324472389ee218662bc2bc21c52",
".git/objects/pack/pack-4d9640b2d5607b5b8b3113f3b2e052e60f10d6ce.idx": "f7081356e88096dccbeaabc9717c2b50",
".git/objects/pack/pack-4d9640b2d5607b5b8b3113f3b2e052e60f10d6ce.pack": "1b882de739015cb7f339be5b4b8092d6",
".git/objects/pack/pack-4d9640b2d5607b5b8b3113f3b2e052e60f10d6ce.promisor": "d41d8cd98f00b204e9800998ecf8427e",
".git/objects/pack/pack-4d9640b2d5607b5b8b3113f3b2e052e60f10d6ce.rev": "96838bfb5f3b1e2557c66ed70e2dae29",
".git/objects/pack/pack-53c74afd569055fb38b934d47dde59ed791d10e1.idx": "a906eba62bd866dff4ac8224479108e6",
".git/objects/pack/pack-53c74afd569055fb38b934d47dde59ed791d10e1.pack": "e69086da0da66e9b40501f6347a09872",
".git/objects/pack/pack-53c74afd569055fb38b934d47dde59ed791d10e1.promisor": "d41d8cd98f00b204e9800998ecf8427e",
".git/objects/pack/pack-53c74afd569055fb38b934d47dde59ed791d10e1.rev": "54e5bd933a637911846c5889aa1f2e27",
".git/objects/pack/pack-5a5c04a4c79e96afa48e5f75be3866fad52786b1.idx": "8888decfed21e414b1f6f53e952ec11a",
".git/objects/pack/pack-5a5c04a4c79e96afa48e5f75be3866fad52786b1.pack": "aa0ca5e7cc8241a15a0a66225cf61f93",
".git/objects/pack/pack-5a5c04a4c79e96afa48e5f75be3866fad52786b1.rev": "eed9414e9eacde4b8dae86d67d985f73",
".git/objects/pack/pack-87fd54c953ab5f545e5c7d13cb81d4adab734164.idx": "eaa87fea51b3cd4094f772e2877508f2",
".git/objects/pack/pack-87fd54c953ab5f545e5c7d13cb81d4adab734164.pack": "6a516d8accdc682ff7a6096767063ed9",
".git/objects/pack/pack-87fd54c953ab5f545e5c7d13cb81d4adab734164.promisor": "d41d8cd98f00b204e9800998ecf8427e",
".git/objects/pack/pack-87fd54c953ab5f545e5c7d13cb81d4adab734164.rev": "053a1483294d0ff81e6bc0d3320f4b82",
".git/objects/pack/pack-a3263a8b7dfb98261525a75a6cbc013d1ef65abf.idx": "aa5afa3e5de7e3b9501e64a439b1a944",
".git/objects/pack/pack-a3263a8b7dfb98261525a75a6cbc013d1ef65abf.pack": "23b78a5aef2afe53dce15b996cc72d0e",
".git/objects/pack/pack-a3263a8b7dfb98261525a75a6cbc013d1ef65abf.promisor": "d41d8cd98f00b204e9800998ecf8427e",
".git/objects/pack/pack-a3263a8b7dfb98261525a75a6cbc013d1ef65abf.rev": "af2b5baeabab909b4d007f52257c133f",
".git/objects/pack/pack-b85dff0b581290dfaff4c5b378102f9a9f8c40bb.idx": "94ec535a68424c1eb8d2ab0cfb54327d",
".git/objects/pack/pack-b85dff0b581290dfaff4c5b378102f9a9f8c40bb.pack": "0a758e32d8c8a5e5a5fc06b1d0b36587",
".git/objects/pack/pack-b85dff0b581290dfaff4c5b378102f9a9f8c40bb.promisor": "d41d8cd98f00b204e9800998ecf8427e",
".git/objects/pack/pack-b85dff0b581290dfaff4c5b378102f9a9f8c40bb.rev": "a9bdb229ee4f3d763f23cfc79c0dffe9",
".git/ORIG_HEAD": "6c7d6052ea0506ac226c36374551a87c",
".git/refs/heads/main": "6c7d6052ea0506ac226c36374551a87c",
".git/refs/heads/master": "068d0df0fd8b621a609583ef18ad504b",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "a7b19a7c4809d3076ed8e4f9ba12bcf0",
".git/shallow": "068d0df0fd8b621a609583ef18ad504b",
"assets/AssetManifest.bin": "774cfd5801a3bdcb85a8d6cbc646fb99",
"assets/AssetManifest.bin.json": "331c7a1c1cf685a4f10e72e83b05cb86",
"assets/assets/data/wilayah.json": "2f647f7deda557e64fb98b81bf90fa22",
"assets/assets/images/Aplikasi%2520Guru%2520Tugas2.pdf": "ef301ae6968511ed252fc0dac46c7826",
"assets/assets/images/bg.jfif": "292cea1f56345226fbc9077388f2a31d",
"assets/assets/images/bg.jpg": "14cc7983268fb661fcef1a8bb1cb71e3",
"assets/assets/images/kop.png": "30d0da82a19395a6bcd988f932dd621e",
"assets/assets/images/lambang.png": "60e8d667a9d93ad42ba835684f1a84bd",
"assets/assets/images/sidogiri.jpg": "80d26ec23907f2a42b19fbbec2e9b1b5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "bf4811388dfdaf9d58dd17cd058b45ee",
"assets/NOTICES": "3c0f4e811b887b3ac5e7371ee761c0c0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "1153b27d3ae7d7969bea8279466992d8",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "f47f81fdd7fee45384440a6651984f1c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "575d89c62fc5322202802bd0565cccab",
"/": "575d89c62fc5322202802bd0565cccab",
"main.dart.js": "27649379301ff80685801120c1c346d7",
"manifest.json": "a3c577cb4fc228b3f8313800f6c53d9a",
"version.json": "be951f265559adde5e78e6965afd849e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
