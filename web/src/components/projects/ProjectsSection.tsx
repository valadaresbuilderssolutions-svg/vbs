
const featuredProjects = [
  {
    title: 'House Extensions',
    description: 'Beautifully planned spaces, built for modern living.',
    image: '/images/vbs-extension.jpg',
    href: '/house-extensions',
  },
  {
    title: 'Loft Conversions',
    description: 'Transform unused roof space into something exceptional.',
    image: '/images/vbs-loft.jpg',
    href: '/loft-conversions',
  },
  {
    title: 'Full Renovations',
    description: 'Thoughtful transformations, expertly delivered.',
    image: '/images/vbs-renovation.jpg',
    href: '/contact',
  },
]

export function ProjectsSection({
  imageUrls: _imageUrls,
}: {
  imageUrls?: string[]
}) {
  return (
    <section
      id="projects"
      className="bg-[#F7F5F0] px-5 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#A88935]">
            Valadares Builders Solutions
          </p>

          <h2 className="font-serif text-4xl text-[#0B1A2B] md:text-6xl">
            Our Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Discover our approach to quality construction,
            thoughtful design and exceptional craftsmanship
            across South London.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#0B1A2B]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-7">
                <h3 className="font-serif text-2xl text-[#0B1A2B]">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {project.description}
                </p>

                <span className="mt-6 inline-block text-sm font-semibold text-[#A88935]">
                  Explore Service →
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="mb-6 text-sm text-slate-600">
            Follow our latest projects and on-site progress.
          </p>

          <a
            href="https://www.instagram.com/valadaresbuilders/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-[#0B1A2B] px-9 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#D4AF37] hover:text-[#0B1A2B]"
          >
            View More on Instagram →
          </a>
        </div>
      </div>
    </section>
  )
}
