import { useEffect, useState } from 'react'

import { whatsappUrl } from '@/lib/whatsapp'

const BASE_OFFSET = 24

/**
 * Global floating WhatsApp button. Rendered once in the app shell so every page gets exactly one.
 * Lifts itself above the cookie banner while that banner is on screen.
 */
export function WhatsAppFloat() {
  const [bottom, setBottom] = useState(BASE_OFFSET)

  useEffect(() => {
    let resizeObs: ResizeObserver | null = null
    let observed: Element | null = null

    const update = () => {
      const banner = document.getElementById('cookie-banner')
      if (banner !== observed) {
        resizeObs?.disconnect()
        observed = banner
        if (banner && typeof ResizeObserver !== 'undefined') {
          resizeObs = new ResizeObserver(update)
          resizeObs.observe(banner)
        }
      }
      if (!banner) {
        setBottom(BASE_OFFSET)
        return
      }
      const rect = banner.getBoundingClientRect()
      setBottom(Math.max(BASE_OFFSET, window.innerHeight - rect.top + 12))
    }

    update()
    const mutObs = new MutationObserver(update)
    mutObs.observe(document.body, { childList: true, subtree: true })
    window.addEventListener('resize', update)
    return () => {
      mutObs.disconnect()
      resizeObs?.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <a
      id="wa-float"
      className="wa-float"
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Valadares Builders Solutions on WhatsApp (opens in a new tab)"
      title="Chat with us on WhatsApp"
      style={{ bottom: `calc(${bottom}px + env(safe-area-inset-bottom, 0px))` }}
    >
      <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M16.004 3C8.832 3 3.003 8.828 3.003 16c0 2.293.6 4.533 1.74 6.508L3 29l6.66-1.715A12.94 12.94 0 0 0 16.004 29C23.176 29 29 23.172 29 16S23.176 3 16.004 3Zm0 23.64c-1.97 0-3.9-.53-5.586-1.533l-.4-.238-3.953 1.018 1.055-3.85-.26-.412A10.6 10.6 0 0 1 5.363 16c0-5.867 4.773-10.64 10.64-10.64 5.866 0 10.636 4.773 10.636 10.64 0 5.867-4.77 10.64-10.636 10.64Zm5.834-7.968c-.32-.16-1.89-.932-2.184-1.04-.293-.106-.506-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.186.214-.373.24-.693.08-.32-.16-1.35-.498-2.572-1.588-.95-.848-1.592-1.895-1.78-2.215-.186-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.186.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.623-.523-.538-.72-.548l-.613-.01a1.18 1.18 0 0 0-.853.4c-.293.32-1.12 1.093-1.12 2.666 0 1.573 1.146 3.093 1.306 3.306.16.214 2.256 3.444 5.466 4.83.764.33 1.36.527 1.825.674.767.244 1.465.21 2.017.127.615-.092 1.89-.773 2.157-1.52.267-.746.267-1.386.187-1.52-.08-.133-.293-.213-.613-.373Z"
        />
      </svg>
    </a>
  )
}
