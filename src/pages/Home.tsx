import { Link } from 'react-router-dom'

const tiles = [
  {
    to: '/process',
    icon: '🗺️',
    title: 'Entwicklungsprozess',
    text: 'Der Weg von der Idee zum Marketplace-Offering — in 7 klaren Schritten.',
  },
  {
    to: '/business-case',
    icon: '📈',
    title: 'Business Case',
    text: 'Warum standardisierte Pakete und Marketplace-Lösungen sich rechnen.',
  },
  {
    to: '/knowledge',
    icon: '📚',
    title: 'Wissens-Hub',
    text: 'Kuratierte Links: Purview, DSPM for AI, Partner Center, Co-Sell, Skilling.',
  },
  {
    to: '/solutions',
    icon: '💡',
    title: 'Beispiel-Lösungen',
    text: 'Vier konkrete Offering-Blaupausen für Data Security & AI Security.',
  },
  {
    to: '/templates',
    icon: '🧩',
    title: 'Templates',
    text: 'Skill-/Agent-Templates und Prompts für One-Pager, Offers und Assessments.',
  },
  {
    to: '/assistant',
    icon: '✨',
    title: 'AI-Assistant',
    text: 'Interaktiver Sparringspartner für neue Lösungsideen (eigener API-Key).',
  },
]

export default function Home() {
  return (
    <div>
      <div className="rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 px-6 py-10 text-white sm:px-10">
        <p className="text-xs font-semibold tracking-wide text-brand-200 uppercase">
          Partner Enablement · Data Security &amp; AI Security
        </p>
        <h1 className="mt-2 max-w-2xl text-3xl font-semibold sm:text-4xl">
          Vom Projektgeschäft zum skalierbaren Purview-Offering
        </h1>
        <p className="mt-4 max-w-2xl text-brand-100">
          Dieser Hub bündelt alles, was Partner brauchen, um Beratungs- und
          Managed-Service-Lösungen rund um Microsoft Purview zu entwickeln:
          Wissen, Prozess, Vertriebsargumente, Beispiel-Offerings und
          AI-Unterstützung.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/process"
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-brand-800 hover:bg-brand-50"
          >
            Prozess ansehen →
          </Link>
          <Link
            to="/solutions"
            className="rounded-lg border border-brand-300 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-800"
          >
            Beispiel-Lösungen
          </Link>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tiles.map((t) => (
          <Link
            key={t.to}
            to={t.to}
            className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-brand-300 hover:shadow-md"
          >
            <span className="text-2xl" aria-hidden>
              {t.icon}
            </span>
            <h2 className="mt-3 font-semibold group-hover:text-brand-700">{t.title}</h2>
            <p className="mt-1 text-sm text-ink-500">{t.text}</p>
          </Link>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-brand-200 bg-brand-50 p-6">
        <h2 className="font-semibold text-brand-800">Warum dieser Hub?</h2>
        <p className="mt-2 text-sm text-ink-700">
          Die Nachfrage nach Data Security explodiert — getrieben durch AI-Einführung
          (Copilot, Agents) und Regulatorik. Partner, die jetzt{' '}
          <strong>standardisierte Purview-Offerings</strong> aufbauen, sichern sich
          wiederkehrenden Umsatz, Co-Sell-Unterstützung durch Microsoft und Zugang zu
          bereits committeten Kundenbudgets (MACC). Dieser Hub zeigt den Weg dorthin.
        </p>
      </div>
    </div>
  )
}
