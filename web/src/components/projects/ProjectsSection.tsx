
const featuredProjects = [
  {
    title: 'House Extensions',
    description: 'Beautifully planned spaces, built for modern living.',
    href: '/house-extensions',
  },
  {
    title: 'Loft Conversions',
    description: 'Transform unused roof space into something exceptional.',
    href: '/loft-conversions',
  },
  {
    title: 'Full Renovations',
    description: 'Thoughtful transformations, expertly delivered.',
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
          {featuredProjects.map((project, index) => (
            <a
              key={project.title}
              href={project.href}
              className="group relative flex min-h-[320px] flex-col overflow-hidden rounded-lg border border-[#D4AF37]/25 bg-[#0B1A2B] p-9 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/70 hover:shadow-xl md:p-10"
            >
              <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-500 group-hover:scale-x-100" />

              <span className="font-serif text-sm tracking-[0.3em] text-[#D4AF37]">
                {String(index + 1).padStart(2, '0')}
              </span>

              <span className="mt-6 block h-px w-12 bg-[#D4AF37]/60 transition-all duration-500 group-hover:w-20 group-hover:bg-[#D4AF37]" />

              <h3 className="mt-8 font-serif text-3xl text-white">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/70">
                {project.description}
              </p>

              <span className="mt-auto inline-flex items-center gap-2 pt-10 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Explore Service
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
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
