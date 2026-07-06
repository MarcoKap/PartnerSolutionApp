import { Link } from 'react-router-dom'
import Icon, { type IconName } from '../components/Icon'
import Reveal from '../components/Reveal'
import { marketStats } from '../content/businessCase'

const tiles: { to: string; icon: IconName; title: string; text: string }[] = [
  {
    to: '/business-case',
    icon: 'chart',
    title: 'Business Case',
    text: 'Zahlen, ROI-Rechner und Argumente: Warum Pakete und Marketplace sich rechnen.',
  },
  {
    to: '/process',
    icon: 'route',
    title: 'Entwicklungsprozess',
    text: 'Der Weg von der Idee zum Marketplace-Offering — mit Selbstcheck und Offering-Finder.',
  },
  {
    to: '/knowledge',
    icon: 'book',
    title: 'Wissens-Hub',
    text: 'Kuratierte Links: Purview, DSPM for AI, Partner Center, Co-Sell, Skilling.',
  },
  {
    to: '/solutions',
    icon: 'bulb',
    title: 'Beispiel-Lösungen',
    text: 'Vier konkrete Offering-Blaupausen für Data Security & AI Security.',
  },
  {
    to: '/templates',
    icon: 'grid',
    title: 'Templates',
    text: 'Skill-/Agent-Templates und Prompts für One-Pager, Offers und Assessments.',
  },
  {
    to: '/assistant',
    icon: 'sparkle',
    title: 'AI-Assistant',
    text: 'Interaktiver Sparringspartner für neue Lösungsideen (eigener API-Key).',
  },
]

export default function Home() {
  const highlights = [marketStats[0], marketStats[1], marketStats[4]]

  return (
    <div>
      {/* Hero mit Glow-Effekten */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 px-6 py-12 text-white sm:px-10">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-brand-400/25 blur-3xl" />
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
          aria-hidden
        >
          <defs>
            <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M32 0H0v32" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        <div className="relative">
          <p className="flex items-center gap-2 text-xs font-semibold tracking-wide text-brand-200 uppercase">
            <Icon name="shield" className="h-4 w-4" />
            Partner Enablement · Data Security &amp; AI Security
          </p>
          <h1 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Vom Projektgeschäft zum{' '}
            <span className="bg-gradient-to-r from-emerald-300 to-brand-200 bg-clip-text text-transparent">
              skalierbaren Purview-Offering
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-brand-100">
            Dieser Hub bündelt alles, was Partner brauchen, um Beratungs- und
            Managed-Service-Lösungen rund um Microsoft Purview zu entwickeln:
            Wissen, Prozess, Vertriebsargumente, Beispiel-Offerings und
            AI-Unterstützung.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/business-case"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-brand-800 shadow-lg shadow-brand-900/30 transition hover:-translate-y-0.5 hover:bg-brand-50"
            >
              Business Case ansehen
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
            <Link
              to="/process"
              className="rounded-lg border border-brand-300/60 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-800"
            >
              Zum Entwicklungsprozess
            </Link>
          </div>
        </div>
      </div>

      {/* Kennzahlen-Streifen */}
      <Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {highlights.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm dark:border-slate-700 dark:bg-slate-900"
            >
              <p className="bg-gradient-to-r from-brand-600 to-emerald-600 bg-clip-text text-2xl font-bold text-transparent dark:from-brand-300 dark:to-emerald-400">
                {stat.value}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-ink-500 dark:text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Bereichs-Kacheln */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tiles.map((t, i) => (
          <Reveal key={t.to} delay={(i % 3) * 80}>
            <Link
              to={t.to}
              className="group block h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:hover:border-brand-500"
            >
              <span className="inline-flex rounded-xl bg-brand-50 p-2.5 text-brand-600 transition group-hover:scale-110 group-hover:bg-brand-100 dark:bg-brand-900/50 dark:text-brand-300">
                <Icon name={t.icon} className="h-6 w-6" />
              </span>
              <h2 className="mt-3 font-semibold group-hover:text-brand-700 dark:group-hover:text-brand-300">
                {t.title}
              </h2>
              <p className="mt-1 text-sm text-ink-500 dark:text-slate-400">{t.text}</p>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10 rounded-2xl border border-brand-200 bg-brand-50 p-6 dark:border-brand-700 dark:bg-brand-900/30">
          <h2 className="font-semibold text-brand-800 dark:text-brand-200">Warum dieser Hub?</h2>
          <p className="mt-2 text-sm text-ink-700 dark:text-slate-300">
            Die Nachfrage nach Data Security explodiert — getrieben durch AI-Einführung
            (Copilot, Agents) und Regulatorik. Partner, die jetzt{' '}
            <strong>standardisierte Purview-Offerings</strong> aufbauen, sichern sich
            wiederkehrenden Umsatz, Co-Sell-Unterstützung durch Microsoft und Zugang zu
            bereits committeten Kundenbudgets (MACC). Dieser Hub zeigt den Weg dorthin.
          </p>
        </div>
      </Reveal>
    </div>
  )
}
