import type { ModalId } from '@/context/ModalContext'

export type BlogPost = {
  modalId: ModalId
  category: string
  title: string
  description: string
  image: string
  imageAlt: string
  readTime: string
  /** Dedicated service landing page the article relates to. */
  service: { href: string; label: string }
}

export const blogPosts: BlogPost[] = [
  {
    modalId: 'blog-house-extension',
    category: 'House extensions',
    title: 'Planning a House Extension in South London',
    description:
      'From permitted development and planning permission to Party Wall matters and Building Regulations, the key steps to consider before extending your home.',
    image: '/images/vbs-extension.jpg',
    imageAlt: 'Rear house extension with large glazed doors opening onto a garden at dusk',
    readTime: '6 min read',
    service: { href: '/house-extensions', label: 'House Extensions' },
  },
  {
    modalId: 'blog-loft-regulations',
    category: 'Loft conversions',
    title: 'Understanding Loft Conversions and Building Regulations',
    description:
      'Head height, structure, fire safety, stairs and insulation: a clear overview of what Building Regulations typically require when converting a loft.',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=960&auto=format&fit=crop&q=80',
    imageAlt: 'Construction site with exposed structural framework',
    readTime: '7 min read',
    service: { href: '/loft-conversions', label: 'Loft Conversions' },
  },
  {
    modalId: 'blog-renovation-budget',
    category: 'Renovation planning',
    title: 'Budgeting and Planning a Home Renovation',
    description:
      'How to set a realistic budget, allow for professional fees and contingency, and plan the order of works for a smoother renovation.',
    image:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=960&auto=format&fit=crop&q=80',
    imageAlt: 'Desk with calculator and documents used for planning a budget',
    readTime: '6 min read',
    service: { href: '/full-renovations', label: 'Full Renovations' },
  },
]
