// Proxies Umami through the site's own domain so ad blockers don't block it.
const UMAMI_SCRIPT_URL = 'https://cloud.umami.is/script.js'
const UMAMI_COLLECT_URL = 'https://gateway.umami.is/api/send'
const WEBSITE_ID = 'bfae921d-ee80-44a3-98c4-ba1833d982a7'

const SCRIPT_PATH = '/js/site.js'
const COLLECT_PATHS = new Set(['/js/collect', '/js/api/send'])

const SCRIPT_HEADERS = {
  'Content-Type': 'application/javascript; charset=utf-8',
  'Cache-Control': 'public, max-age=3600',
  'X-Content-Type-Options': 'nosniff',
}

const COLLECT_HEADERS = {
  'Cache-Control': 'no-store',
  'X-Content-Type-Options': 'nosniff',
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname === SCRIPT_PATH) {
      return handleScript(request)
    }

    if (COLLECT_PATHS.has(url.pathname)) {
      return handleCollect(request)
    }

    return env.ASSETS.fetch(request)
  },
}

async function handleScript(request) {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response('Method Not Allowed', {
      status: 405,
      headers: { Allow: 'GET, HEAD' },
    })
  }

  try {
    const upstream = await fetch(UMAMI_SCRIPT_URL, {
      headers: { 'User-Agent': 'waleed-portfolio-proxy' },
      cf: { cacheTtl: 3600, cacheEverything: true },
    })

    if (!upstream.ok) {
      return new Response('Not Found', { status: 502 })
    }

    let script = await upstream.text()
    script = script.replaceAll('/api/send', '/collect')

    return new Response(request.method === 'HEAD' ? null : script, {
      status: 200,
      headers: SCRIPT_HEADERS,
    })
  } catch {
    return new Response('Bad Gateway', { status: 502 })
  }
}

async function handleCollect(request) {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders(request) })
  }

  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', {
      status: 405,
      headers: { Allow: 'POST, OPTIONS', ...corsHeaders(request) },
    })
  }

  const origin = request.headers.get('Origin')
  if (origin && origin !== new URL(request.url).origin) {
    return new Response('Forbidden', { status: 403, headers: corsHeaders(request) })
  }

  const contentType = request.headers.get('Content-Type') || ''
  if (!contentType.includes('application/json')) {
    return new Response('Unsupported Media Type', {
      status: 415,
      headers: corsHeaders(request),
    })
  }

  const declaredLength = Number(request.headers.get('Content-Length') || 0)
  if (declaredLength > 16_384) {
    return new Response('Payload Too Large', { status: 413, headers: corsHeaders(request) })
  }

  const body = await request.text()
  if (body.length > 16_384) {
    return new Response('Payload Too Large', { status: 413, headers: corsHeaders(request) })
  }

  let payload
  try {
    payload = JSON.parse(body)
  } catch {
    return new Response('Bad Request', { status: 400, headers: corsHeaders(request) })
  }

  if (payload?.payload?.website !== WEBSITE_ID) {
    return new Response('Forbidden', { status: 403, headers: corsHeaders(request) })
  }

  const headers = new Headers({
    'Content-Type': 'application/json',
    'User-Agent': request.headers.get('User-Agent') || '',
  })

  for (const name of ['x-umami-website-id', 'x-umami-hostname', 'x-umami-cache']) {
    const value = request.headers.get(name)
    if (value) headers.set(name, value)
  }

  const clientIp = request.headers.get('CF-Connecting-IP')
  if (clientIp) headers.set('X-Forwarded-For', clientIp)

  const country = request.headers.get('CF-IPCountry')
  if (country) headers.set('CF-IPCountry', country)

  try {
    const upstream = await fetch(UMAMI_COLLECT_URL, {
      method: 'POST',
      headers,
      body,
    })

    return new Response(upstream.body, {
      status: upstream.status,
      headers: {
        'Content-Type': upstream.headers.get('Content-Type') || 'application/json',
        ...COLLECT_HEADERS,
        ...corsHeaders(request),
      },
    })
  } catch {
    return new Response('Bad Gateway', { status: 502, headers: corsHeaders(request) })
  }
}

function corsHeaders(request) {
  const origin = request.headers.get('Origin')
  return {
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  }
}
