import { InstagramCta } from '@/components/InstagramCta'
import type { ServicePageContent } from '@/data/servicePages'
import { usePageMeta } from '@/hooks/usePageMeta'
import { whatsappUrl } from '@/lib/whatsapp'

/**
 * Standalone service landing page (suitable for Google Ads traffic).
 * Mirrors the layout of the House Extensions and Loft Conversions pages.
 */
export default function ServiceLandingPage({ content }: { content: ServicePageContent }) {
  usePageMeta(content.metaTitle, content.metaDescription, content.path)
  const enquiryUrl = whatsappUrl(content.whatsappMessage)

  return (
    <main className="svc-page">
      <section className="svc-hero">
        <div className="svc-inner">
          <p className="svc-eyebrow">VALADARES BUILDERS SOLUTIONS</p>
          <h1>
            {content.name}
            <span> in South London</span>
          </h1>
          <p className="svc-lead">{content.intro}</p>
          <a className="svc-btn" href={enquiryUrl} target="_blank" rel="noopener noreferrer">
            Enquire via WhatsApp →
          </a>
        </div>
      </section>

      <section className="svc-section">
        <div className="svc-inner">
          <p className="svc-kicker">OVERVIEW</p>
          <h2>{content.overviewHeading}</h2>
          {content.overview.map((paragraph) => (
            <p key={paragraph} className="svc-body">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="svc-section svc-section--muted">
        <div className="svc-inner">
          <p className="svc-kicker">WHAT WE DO</p>
          <h2>{content.scopeHeading}</h2>
          <div className="svc-grid">
            {content.scope.map((item) => (
              <article key={item.title} className="svc-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-section">
        <div className="svc-inner">
          <p className="svc-kicker">OUR APPROACH</p>
          <h2>From Initial Enquiry to Completion</h2>
          <ol className="svc-stages">
            {content.stages.map((stage, index) => (
              <li key={stage}>
                <strong>{String(index + 1).padStart(2, '0')}</strong>
                <span>{stage}</span>
              </li>
            ))}
          </ol>
          <p className="svc-body">
            We welcome enquiries from homeowners across South London, including Croydon, Sutton, Wallington,
            Wimbledon, Mitcham, Clapham and surrounding areas.
          </p>
        </div>
      </section>

      <InstagramCta />

      <section className="svc-cta">
        <div className="svc-inner">
          <h2>{content.ctaHeading}</h2>
          <p>Discuss your ideas with Valadares Builders Solutions.</p>
          <a className="svc-btn" href={enquiryUrl} target="_blank" rel="noopener noreferrer">
            Enquire via WhatsApp →
          </a>
        </div>
      </section>
    </main>
  )
}
