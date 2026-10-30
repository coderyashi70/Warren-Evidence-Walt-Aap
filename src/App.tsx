import { Activity, AlertTriangle, Search, Shield, Sparkles } from 'lucide-react'
import { useMemo, useState } from 'react'

type MediaType = 'Photo' | 'Audio' | 'Note'
type Threat = 1 | 2 | 3 | 4 | 5

type EvidenceItem = {
  id: string
  title: string
  type: MediaType
  caseCode: string
  tag: string
  threat: Threat
  site: string
  date: string
  note: string
}

const evidenceSeed: EvidenceItem[] = [
  {
    id: 'EV-1029',
    title: 'Cedar Hall Mirror',
    type: 'Photo',
    caseCode: 'W-17',
    tag: 'MIRROR',
    threat: 4,
    site: 'Cedar Hall',
    date: '2024-05-12T22:14',
    note: 'Recurring reflections without a subject. The frame exhales mist at 3:14 AM.',
  },
  {
    id: 'EV-2042',
    title: 'Sleepless Pacing Log',
    type: 'Note',
    caseCode: 'R-09',
    tag: 'WHISPER',
    threat: 2,
    site: 'Rookery Ward',
    date: '2024-04-29T01:41',
    note: 'Witness described a voice repeating the same sentence in reverse cadence.',
  },
  {
    id: 'EV-3188',
    title: 'Ritual Static',
    type: 'Audio',
    caseCode: 'M-02',
    tag: 'EVP',
    threat: 5,
    site: 'Basement Archive',
    date: '2024-03-18T23:08',
    note: 'A layered hum emerges under the white noise, almost forming a response.',
  },
  {
    id: 'EV-4401',
    title: 'Lantern Glass Fragments',
    type: 'Photo',
    caseCode: 'H-11',
    tag: 'HOLLOW',
    threat: 3,
    site: 'North Cloister',
    date: '2024-02-26T18:32',
    note: 'Fragments show a second fingerprint embedded in the condensation trail.',
  },
  {
    id: 'EV-5527',
    title: 'Containment Ward Test',
    type: 'Note',
    caseCode: 'K-03',
    tag: 'WARD',
    threat: 1,
    site: 'South Vault',
    date: '2024-01-13T11:07',
    note: 'Seal integrity remained stable after a 5-minute pulse cycle.',
  },
  {
    id: 'EV-6036',
    title: 'Sublevel Echo',
    type: 'Audio',
    caseCode: 'Q-48',
    tag: 'ECHO',
    threat: 4,
    site: 'Sublevel 3',
    date: '2024-06-01T03:36',
    note: 'Replayed audio carries a second breath synced to the original sample.',
  },
]

const threatClasses: Record<Threat, string> = {
  1: 'text-emerald-300',
  2: 'text-cyan-300',
  3: 'text-amber-300',
  4: 'text-rose-300',
  5: 'text-violet-300',
}

function App() {
  const [search, setSearch] = useState('')
  const [mediaType, setMediaType] = useState<'All' | MediaType>('All')
  const [highThreatOnly, setHighThreatOnly] = useState(false)
  const [possessed, setPossessed] = useState(false)

  const filteredEvidence = useMemo(() => {
    return evidenceSeed.filter((item) => {
      const matchesSearch = `${item.title} ${item.caseCode} ${item.tag} ${item.site}`
        .toLowerCase()
        .includes(search.toLowerCase())
      const matchesType = mediaType === 'All' || item.type === mediaType
      const matchesThreat = !highThreatOnly || item.threat >= 4

      return matchesSearch && matchesType && matchesThreat
    })
  }, [highThreatOnly, mediaType, search])

  const averageThreat = Math.round(
    evidenceSeed.reduce((total, item) => total + item.threat, 0) / evidenceSeed.length,
  )

  return (
    <div className={['vault-shell', possessed ? 'possessed' : 'stable'].join(' ')}>
      <div className="holo-grid" />
      <div className="orbital-ring orbital-ring-one" />
      <div className="orbital-ring orbital-ring-two" />
      <div className="particle-field" aria-hidden="true" />
      <div className="scanline-overlay" aria-hidden="true" />

      <header className="relative z-10 border-b border-cyan-500/20 bg-slate-950/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.45em] text-cyan-300/75">Warrens Occult Museum</p>
            <h1 className="font-display text-2xl uppercase tracking-[0.22em] text-white sm:text-3xl">
              Evidence Vault
            </h1>
          </div>

          <button
            type="button"
            onClick={() => setPossessed((value) => !value)}
            className={[
              'rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] transition-all duration-500',
              possessed
                ? 'border-rose-400/60 bg-rose-500/15 text-rose-100 shadow-[0_0_24px_rgba(244,63,94,0.35)]'
                : 'border-cyan-400/40 bg-cyan-500/10 text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.2)]',
            ].join(' ')}
          >
            {possessed ? 'Containment Breach' : 'Vault Stable'}
          </button>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="mb-8 grid gap-4 md:grid-cols-4">
          {[
            { label: 'Stored Dossiers', value: '128', icon: Shield },
            { label: 'Active Wards', value: '19', icon: Sparkles },
            { label: 'Threat Average', value: `${averageThreat}/5`, icon: AlertTriangle },
            { label: 'Live Feed', value: possessed ? 'Breached' : 'Nominal', icon: Activity },
          ].map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="glass-panel rounded-2xl p-4 shadow-[0_0_30px_rgba(15,23,42,0.45)]"
            >
              <div className="mb-3 flex items-center justify-between text-cyan-200">
                <span className="text-[10px] uppercase tracking-[0.32em] text-slate-300">{label}</span>
                <Icon className="h-4 w-4" />
              </div>
              <p className="font-display text-3xl uppercase tracking-[0.18em] text-white">{value}</p>
            </div>
          ))}
        </section>

        <section className="mb-8 grid gap-4 rounded-3xl border border-cyan-500/20 bg-slate-950/60 p-4 backdrop-blur-md md:grid-cols-[1fr_180px_180px]">
          <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-200">
            <Search className="h-4 w-4 text-cyan-300" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search case, site, tag..."
              className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none"
            />
          </label>

          <select
            value={mediaType}
            onChange={(event) => setMediaType(event.target.value as 'All' | MediaType)}
            className="rounded-2xl border border-white/10 bg-slate-900/80 px-3 py-3 text-sm text-slate-100 focus:outline-none"
          >
            <option value="All">All media</option>
            <option value="Photo">Photo</option>
            <option value="Audio">Audio</option>
            <option value="Note">Note</option>
          </select>

          <button
            type="button"
            onClick={() => setHighThreatOnly((value) => !value)}
            className={[
              'rounded-2xl border px-3 py-3 text-sm font-medium uppercase tracking-[0.16em] transition-colors',
              highThreatOnly
                ? 'border-rose-400/50 bg-rose-500/10 text-rose-100'
                : 'border-white/10 bg-slate-900/80 text-slate-200',
            ].join(' ')}
          >
            {highThreatOnly ? 'Threat 4-5' : 'All threats'}
          </button>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.6fr_0.8fr]">
          <div className="space-y-4">
            {filteredEvidence.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-white/10 bg-slate-950/50 p-10 text-center text-slate-300">
                No evidence matches the current filters. The wards are still holding.
              </div>
            ) : (
              filteredEvidence.map((item) => (
                <article
                  key={item.id}
                  className="glass-panel rounded-3xl p-5 shadow-[0_0_32px_rgba(15,23,42,0.6)]"
                >
                  <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="mb-2 text-[10px] uppercase tracking-[0.35em] text-cyan-300/80">{item.caseCode}</p>
                      <h2 className="font-display text-2xl uppercase tracking-[0.12em] text-white">{item.title}</h2>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.28em] text-slate-200">
                        {item.type}
                      </span>
                      <span className={`text-[10px] uppercase tracking-[0.28em] ${threatClasses[item.threat]}`}>
                        Threat {item.threat}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2 text-xs text-slate-300">
                    <span className="rounded-full border border-cyan-500/20 bg-cyan-500/8 px-2.5 py-1 uppercase tracking-[0.2em]">
                      {item.tag}
                    </span>
                    <span className="rounded-full border border-violet-500/20 bg-violet-500/8 px-2.5 py-1 uppercase tracking-[0.2em]">
                      {item.site}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 uppercase tracking-[0.2em]">
                      {new Date(item.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>

                  <p className="max-w-2xl text-sm leading-7 text-slate-300">{item.note}</p>
                </article>
              ))
            )}
          </div>

          <aside className="space-y-4">
            <div className="glass-panel rounded-3xl p-5">
              <p className="mb-4 text-[10px] uppercase tracking-[0.38em] text-cyan-300/80">Live Timeline</p>
              <div className="space-y-4">
                {[
                  ['03:36', 'Sublevel echo reached peak instability'],
                  ['01:41', 'Witness reported disembodied breathing'],
                  ['22:14', 'Mirrored reflection reappeared in frame 7'],
                ].map(([time, event]) => (
                  <div key={time} className="flex gap-3">
                    <div className="relative flex w-12 justify-center">
                      <div className="h-full w-px bg-cyan-500/20" />
                      <div className="absolute top-1.5 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.8)]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">{time}</p>
                      <p className="mt-1 text-sm text-slate-200">{event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-3xl p-5">
              <p className="mb-4 text-[10px] uppercase tracking-[0.38em] text-violet-300/80">Ward Status</p>
              <ul className="space-y-3 text-sm text-slate-200">
                {['North Entry Seal', 'Basement Echo Lattice', 'Archive Glass Mesh'].map((ward) => (
                  <li key={ward} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                    <span>{ward}</span>
                    <span className="text-emerald-300">Nominal</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>
      </main>
    </div>
  )
}

export default App
