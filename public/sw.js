// Service Worker - Cerebro de Cocina v2
const CACHE_VERSION = 'cerebro-cocina-v2'
const STATIC_CACHE = `${CACHE_VERSION}-static`
const DYNAMIC_CACHE = `${CACHE_VERSION}-dynamic`

// Core pages to pre-cache (available offline)
const PRECACHE_URLS = [
  '/',
  '/dashboard',
  '/recetas',
  '/produccion',
  '/compras',
  '/alertas',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/apple-touch-icon.png',
  '/icon.svg',
]

// ── Install: pre-cache static assets ──────────────────────────────────────
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  )
})

// ── Activate: clean old caches ─────────────────────────────────────────────
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(k => k !== STATIC_CACHE && k !== DYNAMIC_CACHE)
          .map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  )
})

// ── Fetch: Network-first para navegación, Cache-first para assets ─────────
self.addEventListener('fetch', (e) => {
  const { request } = e
  const url = new URL(request.url)

  // Skip non-GET and API calls (always network for AI/data)
  if (request.method !== 'GET') return
  if (url.pathname.startsWith('/api/')) return

  // Navigation: network first, fallback to cache
  if (request.mode === 'navigate') {
    e.respondWith(
      fetch(request)
        .then(res => {
          const clone = res.clone()
          caches.open(DYNAMIC_CACHE).then(c => c.put(request, clone))
          return res
        })
        .catch(() => caches.match(request).then(r => r || caches.match('/dashboard')))
    )
    return
  }

  // Static assets: cache first, revalidate in background
  e.respondWith(
    caches.match(request).then(cached => {
      if (cached) {
        fetch(request).then(res => {
          if (res.ok) caches.open(DYNAMIC_CACHE).then(c => c.put(request, res))
        }).catch(() => {})
        return cached
      }
      return fetch(request).then(res => {
        if (res.ok) {
          const clone = res.clone()
          caches.open(DYNAMIC_CACHE).then(c => c.put(request, clone))
        }
        return res
      })
    })
  )
})

// ── Push notifications (alertas de cocina) ────────────────────────────────
self.addEventListener('push', (e) => {
  if (!e.data) return
  const data = e.data.json()
  e.waitUntil(
    self.registration.showNotification(data.title || 'Cerebro Cocina', {
      body: data.body || '',
      icon: '/icon-192.png',
      badge: '/icon-192.png',
      tag: data.tag || 'cerebro-cocina',
      data: { url: data.url || '/dashboard' },
    })
  )
})

self.addEventListener('notificationclick', (e) => {
  e.notification.close()
  const url = e.notification.data?.url || '/dashboard'
  e.waitUntil(
    clients.matchAll({ type: 'window' }).then(list => {
      const existing = list.find(c => c.url.includes(url))
      if (existing) return existing.focus()
      return clients.openWindow(url)
    })
  )
})
