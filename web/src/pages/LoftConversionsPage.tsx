
import { useEffect } from 'react'

import { whatsappUrl } from '@/lib/whatsapp'

const navy = '#0B1A2B'
const gold = '#D4AF37'

const LOFT_WHATSAPP_URL = whatsappUrl('Hello VBS, I would like to discuss a loft conversion.')

const services = [
  {
    title: 'Dormer Loft Conversions',
    description: 'Create additional headroom and usable floor space with a carefully planned dormer conversion.',
  },
  {
    title: 'Hip-to-Gable Conversions',
    description: 'Explore opportunities to increase roof space in suitable properties through structural roof alterations.',
  },
  {
    title: 'Rooflight Loft Conversions',
    description: 'Introduce natural light and transform suitable roof spaces with professionally installed roof windows.',
  },
  {
    title: 'Loft Bedrooms & En-Suites',
    description: 'Plan comfortable bedrooms, practical storage and en-suite bathrooms tailored to your home.',
  },
]

const stages = [
  'Initial Consultation',
  'Property Assessment',
  'Design & Structural Coordination',
  'Detailed Quotation',
  'Construction & Inspections',
  'Completion & Handover',
]

export default function LoftConversionsPage() {
  useEffect(() => {
    document.title =
      'Loft Conversions in South London | Valadares Builders Solutions'

    const description =
      'Explore loft conversion services in South London, including dormer, hip-to-gable and rooflight conversions. Request a consultation with Valadares Builders Solutions.'

    let meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    )

    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }

    meta.content = description
  }, [])

  const sectionStyle: React.CSSProperties = {
    padding: '64px 6%',
    maxWidth: 1200,
    margin: '0 auto',
  }

  return (
    <main style={{ background: '#FFFFFF', color: navy }}>
      <section
        style={{
          background: navy,
          color: '#FFFFFF',
          padding: '100px 6%',
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ color: gold, letterSpacing: 3 }}>
            VALADARES BUILDERS SOLUTIONS
          </p>

          <h1
            style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              lineHeight: 1.12,
              maxWidth: 850,
              margin: '24px 0',
            }}
          >
            Loft Conversions
            <span style={{ color: gold }}> in South London</span>
          </h1>

          <p
            style={{
              fontSize: 19,
              lineHeight: 1.8,
              maxWidth: 720,
            }}
          >
            Make better use of your home's potential.
            Explore carefully planned loft conversions,
            practical layouts and quality construction
            tailored to your property.
          </p>

          <a
            href={LOFT_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: 30,
              background: gold,
              color: navy,
              padding: '16px 28px',
              borderRadius: 6,
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            Request a Consultation
          </a>
        </div>
      </section>

      <section style={sectionStyle}>
        <p style={{ color: '#92721C', fontWeight: 700 }}>
          OUR SERVICES
        </p>
        <h2 style={{ fontSize: 36 }}>
          Loft Conversion Solutions
        </h2>
        <p style={{ lineHeight: 1.8, maxWidth: 760 }}>
          Every property is different. We assess the
          available space, structural requirements and
          project objectives before recommending a
          suitable construction approach.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 20,
            marginTop: 36,
          }}
        >
          {services.map((service) => (
            <article
              key={service.title}
              style={{
                border: '1px solid #E5E7EB',
                borderTop: `4px solid ${gold}`,
                padding: 28,
                borderRadius: 8,
                background: '#FAFAFA',
              }}
            >
              <h3>{service.title}</h3>
              <p style={{ lineHeight: 1.8 }}>
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: '#F5F6F8' }}>
        <div style={sectionStyle}>
          <p style={{ color: '#92721C', fontWeight: 700 }}>
            OUR APPROACH
          </p>
          <h2 style={{ fontSize: 36 }}>
            From Initial Enquiry to Completion
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 16,
              marginTop: 30,
            }}
          >
            {stages.map((stage, index) => (
              <div
                key={stage}
                style={{
                  background: '#FFFFFF',
                  padding: 22,
                  borderRadius: 8,
                  borderLeft: `3px solid ${gold}`,
                }}
              >
                <strong style={{ color: '#92721C' }}>
                  {String(index + 1).padStart(2, '0')}
                </strong>
                <p style={{ fontWeight: 600 }}>{stage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={{ fontSize: 36 }}>
          Loft Conversions Across South London
        </h2>
        <p style={{ lineHeight: 1.8, maxWidth: 760 }}>
          Valadares Builders Solutions welcomes loft
          conversion enquiries from homeowners across
          South London. Project feasibility, structural
          design, planning requirements and Building
          Regulations are assessed according to the
          individual property and proposed works.
        </p>
      </section>

      <section
        style={{
          background: navy,
          color: '#FFFFFF',
          padding: '75px 6%',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: 36 }}>
          Planning a Loft Conversion?
        </h2>
        <p style={{ lineHeight: 1.8 }}>
          Discuss your ideas with Valadares Builders Solutions.
        </p>
        <a
          href={LOFT_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            marginTop: 20,
            background: gold,
            color: navy,
            padding: '16px 30px',
            borderRadius: 6,
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          Enquire via WhatsApp →
        </a>
      </section>
    </main>
  )
}
