import PageHeader from '../components/PageHeader'
import { solutionExamples } from '../content/solutions'

export default function Solutions() {
  return (
    <div>
      <PageHeader
        eyebrow="Offering-Blaupausen"
        title="Beispiel-Lösungen: Data Security & AI Security"
        intro="Vier konkrete, paketierbare Offerings rund um Microsoft Purview — von der Einstiegs-Beratung bis zum wiederkehrenden Managed Service. Jede Karte ist eine Blaupause: Problem, Zielkunde, Komponenten, Delivery-Modell und Marketplace-Eignung."
      />

      <div className="space-y-6">
        {solutionExamples.map((sol) => (
          <article
            key={sol.id}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h2 className="text-lg font-semibold">{sol.title}</h2>
                <p className="text-sm font-medium text-brand-700 dark:text-brand-300">{sol.tagline}</p>
              </div>
              <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-800 dark:bg-brand-900/60 dark:text-brand-200">
                {sol.duration}
              </span>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="space-y-3 text-sm">
                <div>
                  <h3 className="text-xs font-semibold tracking-wide text-ink-500 uppercase dark:text-slate-400">
                    Problem
                  </h3>
                  <p className="mt-1 text-ink-700 dark:text-slate-300">{sol.problem}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wide text-ink-500 uppercase dark:text-slate-400">
                    Zielkunde
                  </h3>
                  <p className="mt-1 text-ink-700 dark:text-slate-300">{sol.targetCustomer}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wide text-ink-500 uppercase dark:text-slate-400">
                    Purview-Komponenten
                  </h3>
                  <ul className="mt-1 flex flex-wrap gap-1.5">
                    {sol.purviewComponents.map((c) => (
                      <li
                        key={c}
                        className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-ink-700 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <h3 className="text-xs font-semibold tracking-wide text-ink-500 uppercase dark:text-slate-400">
                    Delivery-Modell
                  </h3>
                  <p className="mt-1 text-ink-700 dark:text-slate-300">{sol.deliveryModel}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wide text-ink-500 uppercase dark:text-slate-400">
                    Marketplace-Eignung
                  </h3>
                  <p className="mt-1 text-ink-700 dark:text-slate-300">{sol.marketplaceFit}</p>
                </div>
                <div className="rounded-lg bg-emerald-50 p-3 dark:bg-emerald-900/30">
                  <h3 className="text-xs font-semibold tracking-wide text-emerald-700 uppercase dark:text-emerald-400">
                    Upsell-Pfad
                  </h3>
                  <p className="mt-1 text-emerald-900 dark:text-emerald-200">{sol.upsell}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
