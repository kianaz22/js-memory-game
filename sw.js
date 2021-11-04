importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js"
);

console.log("changes");
workbox.precaching.precacheAndRoute([
  { revision: "2aa6787199044aa32c26051de37701e8", url: "images/2D.jpg" },
  { revision: "6d26f2e140fa9262b6fefe18cdd798d6", url: "images/5S.jpg" },
  { revision: "46765e088045b1209903fee664b6a5a0", url: "images/AD.jpg" },
  { revision: "92c3486809610d773aa41f6763319be1", url: "images/bg2.jpg" },
  {
    revision: "278425b19a846387e593cfafe72c0a01",
    url: "images/cardback11.jpg",
  },
  { revision: "4cdd8ae07e2e18eb775f1997c5e57146", url: "images/JC.jpg" },
  { revision: "eac290f7e7ec1d519b17d8c524f1e300", url: "images/KH.jpg" },
  { revision: "33f58f4b815a6410a74be43f888a8fe8", url: "images/QS.jpg" },
  { revision: "e5945cf861853655765d75a79a84ca86", url: "index.html" },
  { revision: "8ff98716b99c96eeb32befd30ccf6df7", url: "manifest.json" },
  { revision: "cdc610acad1b6046979e02b2abd5e642", url: "script.js" },
  { revision: "d709a1df597f342552ebab16d8515bd0", url: "style.css" },
]);
