import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Careers — LUXORA' }

const JOBS = [
  { title: 'Senior Product Designer',   dept: 'Design',       location: 'New York, NY',     type: 'Full-time' },
  { title: 'Digital Marketing Manager', dept: 'Marketing',    location: 'Remote',            type: 'Full-time' },
  { title: 'Sales Representative',      dept: 'Sales',        location: 'Los Angeles, CA',   type: 'Full-time' },
  { title: 'Supply Chain Analyst',      dept: 'Operations',   location: 'Atlanta, GA',       type: 'Full-time' },
  { title: 'UX / UI Designer',          dept: 'Technology',   location: 'Remote',            type: 'Contract'  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-cream pt-24">
      <div className="px-6 md:px-16 py-16">
        <p className="font-sans text-beige text-xs tracking-[0.35em] uppercase mb-4">Join Us</p>
        <h1 className="font-serif text-charcoal mb-4" style={{ fontSize: 'clamp(2.5rem,5vw,5rem)', fontWeight: 300 }}>Careers</h1>
        <p className="font-sans text-charcoal/50 font-light max-w-lg mb-16">
          Shape the future of luxury flooring. We are always looking for passionate people.
        </p>

        <div className="border-t border-beige/30">
          {JOBS.map((job) => (
            <div
              key={job.title}
              className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-beige/20 group hover:bg-beige/5 px-2 -mx-2 transition-colors rounded-sm"
            >
              <div>
                <h2 className="font-serif text-charcoal text-lg font-light group-hover:text-charcoal">{job.title}</h2>
                <p className="font-sans text-charcoal/40 text-xs mt-1">{job.dept} · {job.location}</p>
              </div>
              <div className="flex items-center gap-6 mt-3 md:mt-0">
                <span className="font-sans text-xs text-beige border border-beige/40 px-3 py-1 rounded-full">{job.type}</span>
                <a href={`/careers/${job.title.toLowerCase().replace(/\s+/g, '-')}`}
                   className="font-sans text-xs text-charcoal/40 hover:text-charcoal transition-colors tracking-wider uppercase">
                  Apply →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
