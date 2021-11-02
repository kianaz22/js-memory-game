importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js"
);

console.log("changes");
workbox.precaching.precacheAndRoute([
  { revision: "10306321792f10fea662c5a2328a7dff", url: "img/10C.jpg" },
  { revision: "2aa6787199044aa32c26051de37701e8", url: "img/2D.jpg" },
  { revision: "8fccba55ad0185cae67fbf191a92121a", url: "img/4H.jpg" },
  { revision: "6d26f2e140fa9262b6fefe18cdd798d6", url: "img/5S.jpg" },
  { revision: "25680783dfa2cd51989ed1c519a8904f", url: "img/7H.jpg" },
  { revision: "46765e088045b1209903fee664b6a5a0", url: "img/AD.jpg" },
  { revision: "d259878f946c6ac00d827521fb495ca0", url: "img/AS.jpg" },
  { revision: "92c3486809610d773aa41f6763319be1", url: "img/bg2.jpg" },
  { revision: "278425b19a846387e593cfafe72c0a01", url: "img/cardback11.jpg" },
  { revision: "4cdd8ae07e2e18eb775f1997c5e57146", url: "img/JC.jpg" },
  { revision: "eac290f7e7ec1d519b17d8c524f1e300", url: "img/KH.jpg" },
  { revision: "33f58f4b815a6410a74be43f888a8fe8", url: "img/QS.jpg" },
  { revision: "dd433a7ee14d8deda637168b2f5739d0", url: "index.html" },
  { revision: "b3567cd38c119e64def337639c726f2b", url: "manifest.json" },
  { revision: "cdc610acad1b6046979e02b2abd5e642", url: "script.js" },
  { revision: "d709a1df597f342552ebab16d8515bd0", url: "style.css" },
]);
