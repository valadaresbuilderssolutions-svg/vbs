export type ServicePageContent = {
  path: string
  /** Visible service name, also used for the H1. */
  name: string
  metaTitle: string
  metaDescription: string
  intro: string
  whatsappMessage: string
  overviewHeading: string
  overview: string[]
  scopeHeading: string
  scope: { title: string; description: string }[]
  stages: string[]
  ctaHeading: string
}

export const FULL_RENOVATIONS: ServicePageContent = {
  path: '/full-renovations',
  name: 'Full Renovations',
  metaTitle: 'Full Home Renovations in South London | Valadares Builders Solutions',
  metaDescription:
    'Complete home renovations across South London, from strip-out and structural works to finishing and handover. Enquire with Valadares Builders Solutions via WhatsApp.',
  intro:
    'Renew your home from the ground up. We coordinate every stage of a whole-property renovation, so that structural work, services and finishes come together as one carefully managed project.',
  whatsappMessage: 'Hello VBS, I would like to discuss a full home renovation.',
  overviewHeading: 'A Single Team for Your Whole Renovation',
  overview: [
    'A full renovation involves many trades working in the right order. We plan the sequence of works, coordinate each stage on site and keep you informed throughout, so that decisions are made at the right time and the finished home feels cohesive.',
    'Every property is assessed individually. Structural requirements, Building Regulations and any planning considerations are reviewed before a detailed quotation is prepared.',
  ],
  scopeHeading: 'Scope of Works',
  scope: [
    {
      title: 'Strip-Out & Preparation',
      description: 'Careful removal of existing fixtures, finishes and redundant materials to prepare the property for renovation.',
    },
    {
      title: 'Structural Alterations',
      description: 'Removal of internal walls, steel installation and layout changes carried out in accordance with approved designs.',
    },
    {
      title: 'Electrics, Plumbing & Heating',
      description: 'Coordination of rewiring, plumbing and heating upgrades by suitably qualified trades.',
    },
    {
      title: 'Plastering & Joinery',
      description: 'New ceilings, walls, doors, skirting and bespoke joinery for a clean, consistent finish.',
    },
    {
      title: 'Kitchens & Bathrooms',
      description: 'Installation of new kitchens, bathrooms and en-suites as part of the wider renovation.',
    },
    {
      title: 'Flooring & Decoration',
      description: 'Flooring, tiling and decoration to complete the home ready for handover.',
    },
  ],
  stages: [
    'Initial Consultation',
    'Property Assessment',
    'Detailed Quotation',
    'Programme of Works',
    'Construction & Coordination',
    'Completion & Handover',
  ],
  ctaHeading: 'Planning a Full Renovation?',
}

export const KITCHEN_RENOVATIONS: ServicePageContent = {
  path: '/kitchen-renovations',
  name: 'Kitchen Renovations',
  metaTitle: 'Kitchen Renovations in South London | Valadares Builders Solutions',
  metaDescription:
    'Kitchen renovations across South London, including layout changes, services, installation, tiling and finishing. Enquire with Valadares Builders Solutions via WhatsApp.',
  intro:
    'Create a kitchen that works for the way you live. From reconfiguring the layout to the final finishes, we manage the building works needed to deliver a practical and well-finished space.',
  whatsappMessage: 'Hello VBS, I would like to discuss a kitchen renovation.',
  overviewHeading: 'Practical Kitchens, Carefully Built',
  overview: [
    'A successful kitchen renovation depends on good planning. We review the existing space, services and structure, then agree a clear scope of works before any work begins on site.',
    'Whether you are refreshing an existing layout or opening up rooms to create an open-plan space, we coordinate the trades involved and keep disruption to a minimum.',
  ],
  scopeHeading: 'Scope of Works',
  scope: [
    {
      title: 'Layout Changes & Knock-Throughs',
      description: 'Opening up rooms and reconfiguring layouts, including structural works where required.',
    },
    {
      title: 'Electrics & Plumbing',
      description: 'New circuits, lighting, appliance connections, water supply and waste, installed by qualified trades.',
    },
    {
      title: 'Kitchen Installation',
      description: 'Fitting of units, worktops, sinks and appliances, including customer-supplied kitchens.',
    },
    {
      title: 'Plastering, Tiling & Flooring',
      description: 'Preparation and finishing of walls and floors, including splashbacks and floor tiling.',
    },
    {
      title: 'Extraction & Ventilation',
      description: 'Installation of extractor fans and ducting to provide suitable ventilation.',
    },
    {
      title: 'Decoration & Finishing',
      description: 'Final decoration and detailing to leave the kitchen ready to use.',
    },
  ],
  stages: [
    'Initial Consultation',
    'Site Survey',
    'Detailed Quotation',
    'Preparation & Strip-Out',
    'Installation & Finishing',
    'Final Inspection & Handover',
  ],
  ctaHeading: 'Planning a Kitchen Renovation?',
}

export const BATHROOM_RENOVATIONS: ServicePageContent = {
  path: '/bathroom-renovations',
  name: 'Bathroom Renovations',
  metaTitle: 'Bathroom Renovations in South London | Valadares Builders Solutions',
  metaDescription:
    'Bathroom and en-suite renovations across South London, including plumbing, waterproofing, tiling and installation. Enquire with Valadares Builders Solutions via WhatsApp.',
  intro:
    'Transform your bathroom or en-suite with carefully managed renovation works. We focus on sound preparation, reliable plumbing and a clean, durable finish.',
  whatsappMessage: 'Hello VBS, I would like to discuss a bathroom renovation.',
  overviewHeading: 'Bathrooms Built on Good Preparation',
  overview: [
    'Much of the quality in a bathroom lies beneath the finishes. We give careful attention to pipework, waterproofing and ventilation, so that your new bathroom performs as well as it looks.',
    'From compact cloakrooms to family bathrooms and en-suites, each project is assessed individually and planned around your space and requirements.',
  ],
  scopeHeading: 'Scope of Works',
  scope: [
    {
      title: 'Strip-Out & Preparation',
      description: 'Removal of the existing suite and finishes, and preparation of walls and floors.',
    },
    {
      title: 'Plumbing & Drainage',
      description: 'New or relocated pipework, waste connections and showers, installed by qualified trades.',
    },
    {
      title: 'Waterproofing',
      description: 'Tanking and moisture protection to wet areas before tiling begins.',
    },
    {
      title: 'Tiling & Flooring',
      description: 'Wall and floor tiling, including preparation for underfloor heating where specified.',
    },
    {
      title: 'Sanitaryware Installation',
      description: 'Fitting of baths, showers, basins, WCs, vanity units and brassware.',
    },
    {
      title: 'Electrics & Ventilation',
      description: 'Lighting, shaver points, heated towel rails and extractor fans in line with current regulations.',
    },
  ],
  stages: [
    'Initial Consultation',
    'Site Survey',
    'Detailed Quotation',
    'Strip-Out & First Fix',
    'Tiling & Installation',
    'Final Inspection & Handover',
  ],
  ctaHeading: 'Planning a Bathroom Renovation?',
}

/** Order used by the Services navigation. */
export const SERVICE_NAV_LINKS = [
  { href: '/house-extensions', label: 'House Extensions' },
  { href: '/loft-conversions', label: 'Loft Conversions' },
  { href: FULL_RENOVATIONS.path, label: FULL_RENOVATIONS.name },
  { href: KITCHEN_RENOVATIONS.path, label: KITCHEN_RENOVATIONS.name },
  { href: BATHROOM_RENOVATIONS.path, label: BATHROOM_RENOVATIONS.name },
]
