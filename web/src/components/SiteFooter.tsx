import { useId, type MouseEvent, type ReactNode } from 'react'

import { useModal } from '@/context/ModalContext'
import { SERVICE_NAV_LINKS } from '@/data/servicePages'
import { FACEBOOK_URL } from '@/lib/facebook'
import { INSTAGRAM_URL } from '@/lib/instagram'
import { whatsappUrl } from '@/lib/whatsapp'

const LEGAL_LINKS = [
  { label: 'Terms & Conditions', short: 'Terms', modal: 'terms-modal' },
  { label: 'Privacy Policy', short: 'Privacy', modal: 'privacy-modal' },
  { label: 'Cookie Policy', short: 'Cookies', modal: 'cookies-modal' },
  { label: 'Security Policy', short: 'Security', modal: 'security-modal' },
] as const

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      width={18}
      height={18}
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        fill="#1877F2"
        d="M29 0H3C1.35 0 0 1.35 0 3v26c0 1.65 1.35 3 3 3h13V19h-4v-5h4v-4c0-3.314 2.686-6 6-6h4v5h-2c-1.105 0-2 .895-2 2v3h6l-1 5h-5v13h10c1.65 0 3-1.35 3-3V3c0-1.65-1.35-3-3z"
      />
      <path
        fill="#fff"
        d="M24 19l1-5h-6v-3c0-1.105.895-2 2-2h4V4h-4c-3.314 0-6 2.686-6 6v4H13v5h6v13h5V19h5z"
      />
    </svg>
  )
}

function IconInstagram({ className }: { className?: string }) {
  const gradId = 'ig-grad-' + useId().replace(/[^a-zA-Z0-9_-]/g, '')
  return (
    <svg
      aria-hidden
      className={className}
      width={18}
      height={18}
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="0.25" stopColor="#e6683c" />
          <stop offset="0.5" stopColor="#dc2743" />
          <stop offset="0.75" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradId})`}
        d="M16 3.19c3.46 0 3.89.01 5.24.07 1.25.06 2.05.25 2.83.54.77.29 1.43.68 2.08 1.33s1.04 1.31 1.33 2.08c.29.78.48 1.58.54 2.83.06 1.35.07 1.78.07 5.24s-.01 3.89-.07 5.24c-.06 1.25-.25 2.05-.54 2.83-.29.77-.68 1.43-1.33 2.08s-1.31 1.04-2.08 1.33c-.78.29-1.58.48-2.83.54-1.35.06-1.78.07-5.24.07s-3.89-.01-5.24-.07c-1.25-.06-2.05-.25-2.83-.54-.77-.29-1.43-.68-2.08-1.33s-1.04-1.31-1.33-2.08c-.29-.78-.48-1.58-.54-2.83-.06-1.35-.07-1.78-.07-5.24s.01-3.89.07-5.24c.06-1.25.25-2.05.54-2.83.29-.77.68-1.43 1.33-2.08s1.31-1.04 2.08-1.33c.78-.29 1.58-.48 2.83-.54 1.35-.06 1.78-.07 5.24-.07zM16 0c-3.54 0-3.98.01-5.37.07-1.69.08-2.86.34-3.88.72-1.05.4-1.95.94-2.82 1.81-.87.87-1.41 1.77-1.81 2.82-.38 1.02-.64 2.19-.72 3.88C.01 12.02 0 12.46 0 16s.01 3.98.07 5.37c.08 1.69.34 2.86.72 3.88.4 1.05.94 1.95 1.81 2.82.87.87 1.77 1.41 2.82 1.81 1.02.38 2.19.64 3.88.72 1.39.06 1.83.07 5.37.07s3.98-.01 5.37-.07c1.69-.08 2.86-.34 3.88-.72 1.05-.4 1.95-.94 2.82-1.81.87-.87 1.41-1.77 1.81-2.82.38-1.02.64-2.19.72-3.88.06-1.39.07-1.83.07-5.37s-.01-3.98-.07-5.37c-.08-1.69-.34-2.86-.72-3.88-.4-1.05-.94-1.95-1.81-2.82-.87-.87-1.77-1.41-2.82-1.81-1.02-.38-2.19-.64-3.88-.72C19.98.01 19.54 0 16 0zm0 7.78c-4.54 0-8.22 3.68-8.22 8.22s3.68 8.22 8.22 8.22 8.22-3.68 8.22-8.22-3.68-8.22-8.22-8.22zM16 21.34c-2.95 0-5.34-2.39-5.34-5.34s2.39-5.34 5.34-5.34 5.34 2.39 5.34 5.34-2.39 5.34-5.34 5.34zm7.94-13.88c0 1.06-.86 1.92-1.92 1.92s-1.92-.86-1.92-1.92.86-1.92 1.92-1.92 1.92.86 1.92 1.92z"
      />
    </svg>
  )
}

const socialBtnClass =
  'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition-all duration-300 hover:border-gold/45 hover:bg-gold/[0.12] hover:shadow-[0_0_24px_-6px_rgba(184,148,59,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal'

const navPanelClass =
  'rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-[6px] sm:p-6'

const headingClass =
  'mb-4 border-b border-white/[0.12] pb-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[rgb(223,196,122)]'

function FooterNavLink({
  href,
  children,
  onClick,
  external = false,
  icon,
}: {
  href: string
  children: ReactNode
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
  /** Opens in a new tab with safe rel attributes. */
  external?: boolean
  /** Replaces the default bullet. */
  icon?: ReactNode
}) {
  return (
    <li className="m-0 p-0">
      <a
        href={href}
        onClick={onClick}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="group flex items-center gap-2.5 rounded-md py-1.5 pl-0.5 pr-1 text-[0.8125rem] text-[rgba(255,255,255,0.9)] no-underline transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/45 focus-visible:ring-offset-1 focus-visible:ring-offset-charcoal"
      >
        {icon ?? (
          <span
            className="h-1 w-1 shrink-0 rounded-full bg-white/35 transition-all duration-300 group-hover:w-2 group-hover:bg-gold"
            aria-hidden
          />
        )}
        <span className="border-b border-transparent transition-colors group-hover:border-gold/50 group-hover:text-gold">
          {children}
        </span>
      </a>
    </li>
  )
}

export function SiteFooter() {
  const { openModal } = useModal()

  return (
    <footer className="site-footer relative overflow-hidden border-t border-white/[0.08] bg-charcoal text-white antialiased">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-[280px] w-[min(90%,720px)] -translate-x-1/2 rounded-full bg-gold/[0.06] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-[4.25rem]">
        <div className="grid grid-cols-1 items-start gap-11 lg:grid-cols-12 lg:gap-9 xl:gap-10">
          {/* Brand */}
          <div className="lg:col-span-3">
            <a
              href="/#hero"
              className="logo-wrap inline-flex transition-opacity hover:opacity-90"
              aria-label="Valadares Builders Solutions — Home"
            >
              <img
                className="logo-img h-10 w-auto max-w-[min(280px,88vw)] bg-transparent object-contain object-left sm:h-11"
                src="/valadares-logo.png"
                alt="Valadares Builders Solutions (VBS) logo"
                width={320}
                height={90}
                decoding="async"
                loading="lazy"
              />
            </a>
            <p className="mt-5 max-w-[20rem] text-sm leading-[1.7] text-[rgba(255,255,255,0.78)]">
              Building excellence since 2009. Premium construction, renovation, and project management across the United
              Kingdom.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              <a
                href={FACEBOOK_URL}
                className={socialBtnClass}
                aria-label="Valadares Builders on Facebook (opens in a new tab)"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconFacebook className="shrink-0" />
              </a>
              <a
                href={INSTAGRAM_URL}
                className={socialBtnClass}
                aria-label="Valadares Builders on Instagram (opens in a new tab)"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconInstagram className="shrink-0" />
              </a>
              <span className="pl-1 text-xs text-[rgba(255,255,255,0.68)]">Follow the build</span>
            </div>
            <div className="mt-7 space-y-1 border-t border-white/[0.09] pt-7 text-xs text-[rgba(255,255,255,0.58)]">
              <p className="m-0">Valadares Builders Solutions Ltd</p>
              <p className="m-0">Company number 17156604</p>
              <p className="m-0">Registered in England &amp; Wales</p>
            </div>
          </div>

          {/* Nav — four glass panels */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-9 xl:grid-cols-4 xl:gap-5">
            <nav className={navPanelClass} aria-label="Company">
              <h5 className={headingClass}>Company</h5>
              <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
                <FooterNavLink href="/#about">About Us</FooterNavLink>
                <FooterNavLink href="/#services">Services</FooterNavLink>
                <FooterNavLink href="/#projects">Projects</FooterNavLink>
                <FooterNavLink href="/#blog">Blog</FooterNavLink>
                <FooterNavLink href="/#contact">Contact</FooterNavLink>
              </ul>
            </nav>
            <nav className={navPanelClass} aria-label="Our Services">
              <h5 className={headingClass}>Our Services</h5>
              <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
                {SERVICE_NAV_LINKS.map((link) => (
                  <FooterNavLink key={link.href} href={link.href}>
                    {link.label}
                  </FooterNavLink>
                ))}
              </ul>
            </nav>
            <div className={navPanelClass}>
              <h5 className={headingClass}>Connect With VBS</h5>
              <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
                <FooterNavLink href={FACEBOOK_URL} external icon={<IconFacebook className="h-4 w-4 shrink-0" />}>
                  Facebook
                </FooterNavLink>
                <FooterNavLink href={INSTAGRAM_URL} external icon={<IconInstagram className="h-4 w-4 shrink-0" />}>
                  Instagram
                </FooterNavLink>
                <FooterNavLink href={whatsappUrl()} external>
                  WhatsApp
                </FooterNavLink>
                <FooterNavLink href="tel:+447748323194">+44 (0) 7748 323194</FooterNavLink>
              </ul>
              <a
                href="mailto:info@valadaresbuilders.com"
                className="footer-mail mt-2 inline-flex break-all text-[0.8125rem] font-medium no-underline underline-offset-4 transition-colors hover:text-gold hover:underline hover:decoration-gold/70"
              >
                info@valadaresbuilders.com
              </a>
            </div>
            <nav className={navPanelClass} aria-label="Legal">
              <h5 className={headingClass}>Legal</h5>
              <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
                {LEGAL_LINKS.map((item) => (
                  <FooterNavLink
                    key={item.modal}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      openModal(item.modal)
                    }}
                  >
                    {item.label}
                  </FooterNavLink>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom bar — same 12-col grid so right links line up with nav block */}
        <div className="mt-14 grid grid-cols-1 gap-6 border-t border-white/[0.09] pt-9 lg:grid-cols-12 lg:items-center lg:gap-y-0">
          <p className="m-0 text-center text-xs leading-relaxed text-[rgba(255,255,255,0.62)] lg:col-span-4 lg:text-left lg:text-[0.8125rem]">
            © 2026 Valadares Builders Solutions Ltd. All rights reserved. Registered in England &amp; Wales.
          </p>
          <nav
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-0 lg:col-span-8 lg:justify-end"
            aria-label="Legal shortcuts"
          >
            {LEGAL_LINKS.map((item, i) => (
              <span key={item.modal} className="inline-flex items-center">
                {i > 0 ? (
                  <span className="mx-3 hidden text-white/20 sm:inline" aria-hidden>
                    ·
                  </span>
                ) : null}
                <a
                  href="#"
                  className="text-[0.8125rem] text-[rgba(255,255,255,0.78)] no-underline transition-colors hover:text-gold sm:px-0"
                  onClick={(e) => {
                    e.preventDefault()
                    openModal(item.modal)
                  }}
                >
                  {item.short}
                </a>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
