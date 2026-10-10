import { type ReactNode } from 'react'

import { useModal, type ModalId } from '@/context/ModalContext'
import { blogPosts } from '@/data/blogPosts'

function ModalContactLink({ id, children }: { id: ModalId; children: ReactNode }) {
  const { closeModal } = useModal()
  return (
    <a href="/#contact" className="blog-modal-link" onClick={() => closeModal(id)}>
      {children}
    </a>
  )
}

function BlogModalFrame({ id, children }: { id: ModalId; children: ReactNode }) {
  const { activeId, closeModal } = useModal()
  const open = activeId === id
  const post = blogPosts.find((p) => p.modalId === id)
  if (!post) return null
  const titleId = `${id}-title`
  return (
    <div
      className={'modal-overlay' + (open ? ' active' : '')}
      id={id}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal(id)
      }}
    >
      <div className="modal blog-modal" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <div className="modal-head">
          <h2 id={titleId}>{post.title}</h2>
          <button type="button" className="modal-x" aria-label="Close article" onClick={() => closeModal(id)}>
            ✕
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-date">
            {post.category} · {post.readTime}
          </div>
          {children}
          <div className="blog-modal-cta">
            <p>
              Considering a project of this kind? Learn more about our{' '}
              <a href={post.service.href} className="blog-modal-link">
                {post.service.label}
              </a>{' '}
              service, or <ModalContactLink id={id}>speak to our team</ModalContactLink> to arrange an initial
              conversation.
            </p>
          </div>
          <p className="blog-modal-note">
            This article provides general guidance only. Requirements vary between properties and local authorities,
            so please confirm the position for your home with your local planning authority, a building control body
            or a suitably qualified professional before starting work.
          </p>
        </div>
      </div>
    </div>
  )
}

export function BlogModals() {
  return (
    <>
      <BlogModalFrame id="blog-house-extension">
        <p>
          A well-planned extension can add valuable space and light to a South London home. Careful preparation before
          any work begins makes the process smoother, helps you budget accurately and reduces the risk of delays once
          the project is on site.
        </p>
        <div className="modal-divider" />
        <h3>1. Define what you need from the space</h3>
        <p>
          Start with how you would like to use the new space: a larger kitchen and dining area, a ground-floor
          bathroom, a home office or additional living space. A clear brief helps your designer develop options that
          suit both your household and the existing property, and makes quotations easier to compare.
        </p>
        <h3>2. Check whether planning permission is required</h3>
        <p>
          Some single-storey rear extensions can be built under permitted development rights, subject to limits on
          depth, height, materials and the proportion of the garden covered. However, these rights do not apply to
          flats and maisonettes, are more restricted in conservation areas, and may have been removed by an Article 4
          Direction, which is common in parts of London. Where permitted development applies, a Lawful Development
          Certificate from your council provides formal confirmation. Otherwise, a householder planning application
          will be needed, and councils normally aim to decide these within eight weeks of a valid submission.
        </p>
        <h3>3. Consider your neighbours and the Party Wall Act</h3>
        <p>
          Many South London homes are terraced or semi-detached. If your extension involves work on a shared wall,
          building on the boundary or excavating foundations close to a neighbouring building, the Party Wall etc. Act
          1996 is likely to apply. Formal notice must be served on the adjoining owners before work starts, so it is
          sensible to allow time for this in your programme and to speak to your neighbours early.
        </p>
        <h3>4. Building Regulations approval</h3>
        <p>
          Building Regulations are separate from planning permission and apply to almost every extension. They cover
          matters such as structure, fire safety, drainage, ventilation and energy efficiency. Approval can be sought
          from your local authority or a registered building control approver, and the work is inspected at key stages
          before a completion certificate is issued.
        </p>
        <h3>5. Drainage and ground conditions</h3>
        <p>
          Rear extensions are often built close to, or over, existing drains. If a public sewer is affected, an
          agreement with the local water company is usually required. Ground conditions and nearby trees can also
          influence foundation design, which is why a structural engineer’s input is important at the design stage.
        </p>
        <h3>6. Agree a clear scope before work begins</h3>
        <p>
          Detailed drawings, a structural design and a written specification allow a builder to price accurately and
          reduce the likelihood of variations later. Agree the programme, payment stages and how any changes will be
          handled before work starts.
        </p>
      </BlogModalFrame>

      <BlogModalFrame id="blog-loft-regulations">
        <p>
          Converting a loft can create a bedroom, bathroom or study without reducing garden space. Whether or not
          planning permission is required, a loft conversion into habitable space will almost always need Building
          Regulations approval. Understanding the main requirements early helps you assess whether your loft is
          suitable and what the work is likely to involve.
        </p>
        <div className="modal-divider" />
        <h3>Is your loft suitable?</h3>
        <p>
          Available head height, roof pitch and the type of roof structure are the first considerations. Building
          Regulations do not set a minimum ceiling height for rooms, but there must be sufficient height for a
          compliant staircase and for the space to be practical. Where height is limited, a dormer or mansard can
          increase usable floor area. A survey and structural assessment will confirm what is achievable.
        </p>
        <h3>Planning permission</h3>
        <p>
          Many loft conversions in houses fall within permitted development, subject to volume limits, materials and
          restrictions on extending the roof at the front of the property. Mansard conversions, roof alterations in
          conservation areas and conversions affected by an Article 4 Direction usually require planning permission.
          A Lawful Development Certificate is a sensible way to confirm the position.
        </p>
        <h3>Structure</h3>
        <p>
          Existing ceiling joists are rarely designed to carry the loads of a habitable room. A structural engineer
          will typically specify new floor joists and, where needed, steel beams to support the floor and any altered
          roof structure. Their calculations form part of the Building Regulations submission.
        </p>
        <h3>Fire safety and means of escape</h3>
        <p>
          Adding a storey changes how occupants would leave the building in an emergency. In a typical house, this
          usually means providing a protected escape route via the staircase, fire-resisting doors to the habitable
          rooms off the stair and mains-powered, interlinked smoke alarms. The exact requirements depend on the layout
          of your home and will be confirmed through building control.
        </p>
        <h3>Stairs</h3>
        <p>
          A new staircase must meet requirements for rise, going, handrails and headroom. Guidance allows slightly
          reduced headroom for loft conversions where space is limited, but the staircase position is often one of the
          most important design decisions and should be resolved early.
        </p>
        <h3>Insulation, ventilation and sound</h3>
        <p>
          The new roof, walls and floor must meet current thermal performance standards, and the room must be
          adequately ventilated to manage condensation. Sound insulation between the new floor and the rooms below is
          also considered.
        </p>
        <h3>Neighbours and wildlife</h3>
        <p>
          In terraced and semi-detached homes, supporting new beams on a shared wall is likely to fall under the Party
          Wall etc. Act 1996. Bats are also legally protected, and a survey may be advisable if there is any sign of
          them in the roof space.
        </p>
      </BlogModalFrame>

      <BlogModalFrame id="blog-renovation-budget">
        <p>
          A realistic budget is one of the most valuable tools in any renovation. It shapes design decisions, helps you
          compare quotations fairly and gives you confidence to proceed. The guidance below can help you build a budget
          that reflects the full cost of the project, not just the building work.
        </p>
        <div className="modal-divider" />
        <h3>1. Set clear priorities</h3>
        <p>
          List what the renovation must achieve and what would be desirable if the budget allows. Separating essential
          work, such as structural repairs, rewiring or replacing an old heating system, from optional upgrades makes
          it easier to adjust the scope without compromising the result.
        </p>
        <h3>2. Allow for professional fees and approvals</h3>
        <p>
          Depending on the scope, your budget may need to include a measured survey, architectural drawings,
          structural engineering, building control fees, planning fees and Party Wall surveyor costs. These are
          often overlooked but are needed before work can begin.
        </p>
        <h3>3. Obtain detailed, comparable quotations</h3>
        <p>
          Quotations are easiest to compare when they are based on the same drawings and specification. Check what is
          included, whether VAT has been added and which items are provisional sums or allowances for finishes still
          to be chosen, such as kitchens, tiles and sanitaryware.
        </p>
        <h3>4. Include a contingency</h3>
        <p>
          Hidden conditions, such as damp, defective timbers or outdated wiring, are often only discovered once work is
          under way, particularly in older properties. Holding a contingency, commonly in the region of 10–15% of the
          building cost and sometimes more for older homes, helps you deal with these without placing the project
          under pressure.
        </p>
        <h3>5. Plan the order of works</h3>
        <p>
          Renovations generally follow a logical sequence: strip-out, structural work, first-fix electrics and
          plumbing, plastering, second fix, and finally flooring and decoration. Making decisions on layouts,
          fittings and finishes before the relevant stage avoids delays, as some items have long lead times.
        </p>
        <h3>6. Think about practical costs</h3>
        <p>
          Consider whether you will remain in the property during the works, and allow for any temporary
          accommodation, storage or additional living costs. Agree a payment schedule linked to completed stages, and
          confirm in writing how any changes to the scope will be priced and approved.
        </p>
      </BlogModalFrame>
    </>
  )
}
