"use strict";var precacheConfig=[["/index.html","bc258b884aeaded7311be188868567ce"],["/static/js/main.0a24c162.js","7fc0818ce5851b03d4280ad91954f386"],["/static/media/Graphik-Bold-Web.3e6b4033.woff","3e6b4033529f4d7cb866b1b44a629223"],["/static/media/Graphik-Bold-Web.733642b4.eot","733642b4e460160361aa907b053e93aa"],["/static/media/Graphik-Bold-Web.b121ddd2.woff2","b121ddd2922be856d87863def839f7df"],["/static/media/Graphik-Bold-Web.e2bf48a7.ttf","e2bf48a7cd8e88d09a25e40619768eac"],["/static/media/Graphik-Medium-Web.20078170.ttf","200781705be79bd5a25819a2036288d8"],["/static/media/Graphik-Medium-Web.2893bde9.woff2","2893bde9c5634f70be77f366d3a9adf7"],["/static/media/Graphik-Medium-Web.85b1ea80.eot","85b1ea805ce1859cddb9751192c8da3b"],["/static/media/Graphik-Medium-Web.9697a238.woff","9697a23896b6e4c2523998ca4357eb88"],["/static/media/Graphik-Regular-Web.00ef31c1.woff2","00ef31c17ec0ebc8d568604785a54072"],["/static/media/Graphik-Regular-Web.888061d2.ttf","888061d23720eaab1034c38145df33f3"],["/static/media/Graphik-Regular-Web.97d8079e.eot","97d8079e6396d173ea2632fbdfb2cd22"],["/static/media/Graphik-Regular-Web.b93746da.woff","b93746da1f09f7bec52e5d9bf7ce2f09"],["/static/media/agneshka_maksimik.d0f770cc.jpg","d0f770ccf155de9a153b7b7e1eecb284"],["/static/media/alex_tukaylo.4ce15698.jpg","4ce156988f0430d5234de7cfcf29c863"],["/static/media/andrey_pitunov.43185e0b.jpg","43185e0b7bd19370f0e6f139c7689815"],["/static/media/artyom_khomyakov.c8cb456a.jpeg","c8cb456a76cd07d98ebffa300f243b51"],["/static/media/dmitry_shindin.0e6c5901.jpg","0e6c5901c8ae5a55439afe124a607cfb"],["/static/media/evgeny_yakimovich.1881f7b0.jpeg","1881f7b078b87a444da56ec0b0d59337"],["/static/media/icon-app.b48137bd.svg","b48137bdafc269e37b5b72c3902a608c"],["/static/media/icon-back-end.d5050fed.svg","d5050fedfc1f41a2bd5edcdcdae69baa"],["/static/media/icon-design.69506c4d.svg","69506c4d3a59aecb6ed220df8a9d4aa0"],["/static/media/icon-front-end.c44a6787.svg","c44a6787028e7edc59bb6d4014cbffcb"],["/static/media/logo.54201ce8.svg","54201ce86e77cdc24c33c322ad1620a6"],["/static/media/sergey.f3fd849b.png","f3fd849bb50fda77330392ada9b566d4"],["/static/media/tomash_svorobovich.f41f82f9.jpg","f41f82f9745b29789052756a144abf46"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});