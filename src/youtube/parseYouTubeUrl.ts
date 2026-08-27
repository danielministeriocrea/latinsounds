const VIDEO_ID_PATTERN = /^[a-zA-Z0-9_-]{11}$/

export function parseYouTubeVideoId(input: string): string | null {
  const trimmed = input.trim()
  if (VIDEO_ID_PATTERN.test(trimmed)) return trimmed

  try {
    const url = new URL(trimmed)
    const host = url.hostname.replace(/^www\./, '')
    if (host === 'youtu.be') {
      const candidate = url.pathname.split('/').filter(Boolean)[0] ?? ''
      return VIDEO_ID_PATTERN.test(candidate) ? candidate : null
    }
    if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'music.youtube.com') {
      const watchId = url.searchParams.get('v')
      if (watchId && VIDEO_ID_PATTERN.test(watchId)) return watchId
      const parts = url.pathname.split('/').filter(Boolean)
      if (['embed', 'shorts', 'live'].includes(parts[0] ?? '')) {
        const candidate = parts[1] ?? ''
        return VIDEO_ID_PATTERN.test(candidate) ? candidate : null
      }
    }
  } catch {
    return null
  }
  return null
}
