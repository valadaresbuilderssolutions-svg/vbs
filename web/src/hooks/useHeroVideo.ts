import { useEffect } from 'react'

export function useHeroVideo() {
  useEffect(() => {
    const v = document.querySelector('.hero-video')
    // The hero may be a static <img>; only drive playback for a real <video>.
    if (!(v instanceof HTMLVideoElement)) return
    const kick = () => {
      v.play().catch(() => {})
    }
    v.addEventListener('loadeddata', kick, { once: true })
    v.addEventListener('canplay', kick, { once: true })
    const vis = () => {
      if (!document.hidden) kick()
    }
    document.addEventListener('visibilitychange', vis)
    kick()
    return () => document.removeEventListener('visibilitychange', vis)
  }, [])
}
