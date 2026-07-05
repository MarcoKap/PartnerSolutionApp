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
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h2 className="text-lg font-semibold">{sol.title}</h2>
                <p className="text-sm font-medium text-brand-700">{sol.tagline}</p>
              </div>
              <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-800">
                {sol.duration}
              </span>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="space-y-3 text-sm">
                <div>
                  <h3 className="text-xs font-semibold tracking-wide text-ink-500 uppercase">
                    Problem
                  </h3>
                  <p className="mt-1 text-ink-700">{sol.problem}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wide text-ink-500 uppercase">
                    Zielkunde
                  </h3>
                  <p className="mt-1 text-ink-700">{sol.targetCustomer}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wide text-ink-500 uppercase">
                    Purview-Komponenten
                  </h3>
                  <ul className="mt-1 flex flex-wrap gap-1.5">
                    {sol.purviewComponents.map((c) => (
                      <li
                        key={c}
                        className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-ink-700"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <h3 className="text-xs font-semibold tracking-wide text-ink-500 uppercase">
                    Delivery-Modell
                  </h3>
                  <p className="mt-1 text-ink-700">{sol.deliveryModel}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wide text-ink-500 uppercase">
                    Marketplace-Eignung
                  </h3>
                  <p className="mt-1 text-ink-700">{sol.marketplaceFit}</p>
                </div>
                <div className="rounded-lg bg-emerald-50 p-3">
                  <h3 className="text-xs font-semibold tracking-wide text-emerald-700 uppercase">
                    Upsell-Pfad
                  </h3>
                  <p className="mt-1 text-emerald-900">{sol.upsell}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
