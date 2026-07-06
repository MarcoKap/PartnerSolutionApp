import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import RoiCalculator from '../components/RoiCalculator'
import ValueLadderGraphic from '../components/ValueLadderGraphic'
import Objections from '../components/Objections'
import { argumentGroups, marketStats, valueLadder } from '../content/businessCase'

export default function BusinessCase() {
  return (
    <div>
      <PageHeader
        eyebrow="Vertriebsargumentation"
        title="Der Business Case für Pakete & Marketplace"
        intro="Zahlen, Argumente und Werkzeuge, die Partner überzeugen: Warum standardisierte Lösungen und Marketplace-Offerings mehr Marge, mehr Planbarkeit und mehr Unternehmenswert bringen."
      />

      {/* Markt-Momentum: belegte Zahlen */}
      <Reveal>
        <section className="mb-12">
          <h2 className="flex items-center gap-2 text-xl font-semibold">
            <Icon name="chart" className="h-5 w-5 text-brand-600 dark:text-brand-300" />
            Die Zahlen sprechen für sich
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {marketStats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
                  <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-brand-100/60 blur-2xl transition group-hover:bg-brand-200/80 dark:bg-brand-800/30" />
                  <p className="relative bg-gradient-to-r from-brand-600 to-emerald-600 bg-clip-text text-3xl font-bold text-transparent dark:from-brand-300 dark:to-emerald-400">
                    {stat.value}
                  </p>
                  <p className="relative mt-2 text-sm text-ink-700 dark:text-slate-300">
                    {stat.label}
                  </p>
                  <a
                    href={stat.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="relative mt-3 inline-block text-xs text-ink-500 underline-offset-2 hover:underline dark:text-slate-400"
                  >
                    Quelle: {stat.source} ↗
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ROI-Rechner */}
      <Reveal>
        <section className="mb-12">
          <RoiCalculator />
        </section>
      </Reveal>

      {/* Argumente */}
      {argumentGroups.map((group) => (
        <Reveal key={group.id}>
          <section className="mb-12">
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              <Icon
                name={group.id === 'packages' ? 'target' : 'store'}
                className="h-5 w-5 text-brand-600 dark:text-brand-300"
              />
              {group.title}
            </h2>
            <p className="mt-1 text-sm text-ink-500 dark:text-slate-400">{group.subtitle}</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {group.args.map((arg, i) => (
                <Reveal key={arg.title} delay={(i % 2) * 80}>
                  <div className="h-full rounded-xl border border-slate-200 border-l-4 border-l-brand-500 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:border-l-brand-500 dark:bg-slate-900">
                    <h3 className="font-semibold text-brand-800 dark:text-brand-200">{arg.title}</h3>
                    <p className="mt-2 text-sm text-ink-700 dark:text-slate-300">{arg.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>
      ))}

      {/* Value Ladder */}
      <Reveal>
        <section className="mb-12">
          <h2 className="flex items-center gap-2 text-xl font-semibold">
            <Icon name="coins" className="h-5 w-5 text-brand-600 dark:text-brand-300" />
            Die Value-Ladder: Projekt → Produkt → Managed Service
          </h2>
          <p className="mt-1 text-sm text-ink-500 dark:text-slate-400">
            Jede Stufe erhöht Planbarkeit und Marge — die Stufen bauen aufeinander auf.
          </p>
          <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 dark:border-slate-700 dark:bg-slate-900">
            <ValueLadderGraphic />
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="bg-brand-800 text-left text-white">
                  <th className="rounded-tl-lg px-4 py-3 font-semibold">Stufe</th>
                  <th className="px-4 py-3 font-semibold">Beschreibung</th>
                  <th className="px-4 py-3 font-semibold">Umsatzcharakter</th>
                  <th className="rounded-tr-lg px-4 py-3 font-semibold">Marge</th>
                </tr>
              </thead>
              <tbody>
                {valueLadder.map((s, i) => (
                  <tr
                    key={s.stage}
                    className={
                      i % 2 === 0
                        ? 'bg-white dark:bg-slate-900'
                        : 'bg-brand-50/60 dark:bg-brand-900/20'
                    }
                  >
                    <td className="border-b border-slate-200 px-4 py-3 font-semibold text-brand-800 dark:border-slate-700 dark:text-brand-200">
                      {s.stage}
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3 text-ink-700 dark:border-slate-700 dark:text-slate-300">
                      {s.description}
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3 text-ink-700 dark:border-slate-700 dark:text-slate-300">
                      {s.revenue}
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3 text-ink-700 dark:border-slate-700 dark:text-slate-300">
                      {s.margin}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </Reveal>

      {/* Einwände & Antworten */}
      <Reveal>
        <section>
          <h2 className="flex items-center gap-2 text-xl font-semibold">
            <Icon name="compass" className="h-5 w-5 text-brand-600 dark:text-brand-300" />
            „Ja, aber…" — Einwände & Antworten
          </h2>
          <p className="mt-1 mb-4 text-sm text-ink-500 dark:text-slate-400">
            Die häufigsten Partner-Einwände aus der Praxis — und was darauf zu antworten ist.
          </p>
          <Objections />
        </section>
      </Reveal>
    </div>
  )
}
