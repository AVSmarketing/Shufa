{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const CACHE_NAME = 'shufa-pwa-v6-5';\
const ASSETS = [\
  './index.html',\
  './manifest.json',\
  'https://cdn.jsdelivr.net/npm/hanzi-writer@3.5/dist/hanzi-writer.min.js',\
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js',\
  'https://cdn.jsdelivr.net/npm/pinyin-pro@3.13.2/dist/index.js'\
];\
\
// \uc0\u23433 \u35013 \u26102 \u32531 \u23384 \u36164 \u28304 \
self.addEventListener('install', (event) => \{\
  event.waitUntil(\
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))\
  );\
\});\
\
// \uc0\u28608 \u27963 \u26102 \u28165 \u29702 \u26087 \u32531 \u23384 \
self.addEventListener('activate', (event) => \{\
  event.waitUntil(\
    caches.keys().then((keys) => Promise.all(\
      keys.map((key) => \{\
        if (key !== CACHE_NAME) return caches.delete(key);\
      \})\
    ))\
  );\
\});\
\
// \uc0\u31163 \u32447 \u25318 \u25130 \u35831 \u27714 \u65306 \u20248 \u20808 \u20174 \u32531 \u23384 \u35835 \u21462 \
self.addEventListener('fetch', (event) => \{\
  event.respondWith(\
    caches.match(event.request).then((response) => \{\
      return response || fetch(event.request);\
    \})\
  );\
\});}