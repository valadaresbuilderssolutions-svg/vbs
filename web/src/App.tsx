import { useEffect, useState } from 'react'

import { BlogModals } from '@/components/BlogModals'
import { CookieBanner } from '@/components/CookieBanner'
import { LegalModals } from '@/components/LegalModals'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'
import { ModalProvider } from '@/context/ModalContext'
import { useHeaderNav } from '@/hooks/useHeaderNav'
import { useHeroVideo } from '@/hooks/useHeroVideo'
import { useRevealObserver } from '@/hooks/useReveal'
import { fetchPortfolioImageUrls } from '@/lib/portfolioManifest'
import { HomePage } from '@/pages/HomePage'
import HouseExtensionsPage from '@/pages/HouseExtensionsPage'
import LoftConversionsPage from '@/pages/LoftConversionsPage'
import ServiceLandingPage from '@/pages/ServiceLandingPage'
import { BATHROOM_RENOVATIONS, FULL_RENOVATIONS, KITCHEN_RENOVATIONS } from '@/data/servicePages'

const SERVICE_PAGES = [FULL_RENOVATIONS, KITCHEN_RENOVATIONS, BATHROOM_RENOVATIONS]

function AppShell({ portfolioUrls }: { portfolioUrls: string[] | undefined }) {
  useRevealObserver()
  useHeaderNav()
  useHeroVideo()

  // Tolerate a trailing slash so /kitchen-renovations/ still resolves.
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const servicePage = SERVICE_PAGES.find((p) => p.path === path)

  return (
    <>
      <CookieBanner />
      <SiteHeader />
      {path === '/house-extensions' ? (
        <HouseExtensionsPage />
      ) : path === '/loft-conversions' ? (
        <LoftConversionsPage />
      ) : servicePage ? (
        <ServiceLandingPage content={servicePage} />
      ) : (
        <HomePage portfolioUrls={portfolioUrls} />
      )}
      <LegalModals />
      <BlogModals />
      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}

export default function App() {
  const [portfolioUrls, setPortfolioUrls] = useState<string[] | undefined>(undefined)

  useEffect(() => {
    fetchPortfolioImageUrls()
      .then((u) => setPortfolioUrls(u))
      .catch(() => setPortfolioUrls([]))
  }, [])

  return (
    <ModalProvider>
      <AppShell portfolioUrls={portfolioUrls} />
    </ModalProvider>
  )
}
