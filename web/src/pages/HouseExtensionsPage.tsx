
import { useEffect } from 'react'

import { InstagramCta } from '@/components/InstagramCta'

const navy = '#0B1A2B'
const gold = '#D4AF37'

const services = [
  {
    title: 'Rear Extensions',
    description: 'Create additional living space with a carefully planned rear extension, designed around your property and lifestyle.',
  },
  {
    title: 'Side Return Extensions',
    description: 'Make better use of underutilised side spaces and improve the layout of your home.',
  },
  {
    title: 'Single-Storey Extensions',
    description: 'Expand your ground floor with practical layouts, natural light and quality workmanship.',
  },
  {
    title: 'Structural Alterations',
    description: 'Coordinated structural works, steel installations and internal reconfiguration in accordance with approved designs.',
  },
]

const stages = [
  'Initial Consultation',
  'Site Assessment & Planning',
  'Detailed Quotation',
  'Construction & Coordination',
  'Inspection & Handover',
]

export default function HouseExtensionsPage() {
  useEffect(() => {
    document.title =
      'House Extensions in South London | Valadares Builders Solutions'

    const meta = document.querySelector(
      'meta[name="description"]'
    )
    if (meta) {
      meta.setAttribute(
        'content',
        'House extension builders serving South London. Rear extensions, side extensions and structural alterations. Contact Valadares Builders Solutions for a quotation.'
      )
    }
  }, [])

  return (
    <main style={{
      fontFamily: 'Arial, sans-serif',
      color: navy,
      background: '#fff'
    }}>

      <section style={{
        background: navy,
        color: '#fff',
        padding: '100px 7%'
      }}>
        <p style={{
          color: gold,
          letterSpacing: 3,
          fontWeight: 700
        }}>
          VALADARES BUILDERS SOLUTIONS
        </p>

        <h1 style={{
          fontSize: 'clamp(38px, 6vw, 72px)',
          maxWidth: 850,
          lineHeight: 1.12
        }}>
          House Extensions
          <span style={{ color: gold }}>
            {' '}in South London
          </span>
        </h1>

        <p style={{
          maxWidth: 650,
          fontSize: 19,
          lineHeight: 1.8
        }}>
          Transform your home with professionally managed
          extension and renovation works. From initial
          planning through to construction and finishing,
          we focus on quality, communication and attention
          to detail.
        </p>

        <a href="#contact" style={{
          display: 'inline-block',
          marginTop: 25,
          padding: '17px 30px',
          background: gold,
          color: navy,
          fontWeight: 700,
          textDecoration: 'none',
          borderRadius: 4
        }}>
          Request a Free Quote →
        </a>
      </section>

      <section style={{ padding: '85px 7%' }}>
        <p style={{ color: '#98751c', fontWeight: 700 }}>
          WHAT WE DO
        </p>
        <h2 style={{ fontSize: 38 }}>
          Extension & Structural Services
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 20,
          marginTop: 35
        }}>
          {services.map((service, index) => (
            <article key={service.title} style={{
              border: '1px solid #e5e5e5',
              padding: 30,
              borderTop: `4px solid ${gold}`
            }}>
              <p style={{ color: '#98751c' }}>
                0{index + 1}
              </p>
              <h3>{service.title}</h3>
              <p style={{
                lineHeight: 1.8,
                color: '#555'
              }}>
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section style={{
        padding: '85px 7%',
        background: '#F5F6F8'
      }}>
        <p style={{ color: '#98751c', fontWeight: 700 }}>
          OUR APPROACH
        </p>
        <h2 style={{ fontSize: 38 }}>
          From Concept to Completion
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 20,
          marginTop: 35
        }}>
          {stages.map((stage, index) => (
            <div key={stage} style={{
              background: '#fff',
              padding: 25
            }}>
              <strong style={{ color: '#98751c' }}>
                0{index + 1}
              </strong>
              <h3>{stage}</h3>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '85px 7%' }}>
        <p style={{ color: '#98751c', fontWeight: 700 }}>
          LOCAL BUILDING SERVICES
        </p>
        <h2 style={{ fontSize: 38 }}>
          Serving South London
        </h2>
        <p style={{
          maxWidth: 750,
          lineHeight: 1.8,
          color: '#555'
        }}>
          We undertake residential building and renovation
          projects across South London, including Croydon,
          Sutton, Wallington, Wimbledon, Mitcham,
          Clapham and surrounding areas.
        </p>
      </section>

      <InstagramCta />

      <section id="contact" style={{
        padding: '85px 7%',
        background: navy,
        color: '#fff',
        textAlign: 'center'
      }}>
        <p style={{ color: gold, fontWeight: 700 }}>
          START YOUR PROJECT
        </p>
        <h2 style={{ fontSize: 40 }}>
          Planning a House Extension?
        </h2>
        <p>
          Tell us about your project and arrange an
          initial conversation with our team.
        </p>

        <a href="https://wa.me/447748323194?text=Hello%20VBS%2C%20I%20would%20like%20to%20discuss%20a%20house%20extension." style={{
          display: 'inline-block',
          background: gold,
          color: navy,
          padding: '17px 30px',
          marginTop: 25,
          fontWeight: 700,
          textDecoration: 'none',
          borderRadius: 4
        }}>
          Enquire via WhatsApp →
        </a>
      </section>
     
    </main>
  )
}
