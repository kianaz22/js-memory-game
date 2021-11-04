importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

console.log('changes')
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST)