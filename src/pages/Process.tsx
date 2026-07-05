import PageHeader from '../components/PageHeader'
import { processSteps } from '../content/processSteps'

export default function Process() {
  return (
    <div>
      <PageHeader
        eyebrow="Von der Idee zum Offering"
        title="Der Lösungs-Entwicklungsprozess"
        intro="Sieben Schritte von der ersten Idee bis zum profitablen Marketplace-Offering. Jeder Schritt hat ein klares Ziel, konkrete Aktivitäten und definierte Ergebnisse — so wird Lösungsentwicklung selbst zum wiederholbaren Prozess."
      />

      <ol className="relative space-y-8 border-l-2 border-brand-200 pl-6">
        {processSteps.map((step) => (
          <li key={step.id} className="relative">
            <span className="absolute -left-[37px] flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
              {step.id}
            </span>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold">{step.title}</h2>
              <p className="mt-1 text-sm font-medium text-brand-700">{step.goal}</p>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="text-xs font-semibold tracking-wide text-ink-500 uppercase">
                    Aktivitäten
                  </h3>
                  <ul className="mt-2 space-y-1.5 text-sm text-ink-700">
                    {step.activities.map((a) => (
                      <li key={a} className="flex gap-2">
                        <span className="text-brand-500">▸</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wide text-ink-500 uppercase">
                    Deliverables
                  </h3>
                  <ul className="mt-2 space-y-1.5 text-sm text-ink-700">
                    {step.deliverables.map((d) => (
                      <li key={d} className="flex gap-2">
                        <span className="text-emerald-600">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  {step.resources.length > 0 && (
                    <>
                      <h3 className="mt-4 text-xs font-semibold tracking-wide text-ink-500 uppercase">
                        Ressourcen
                      </h3>
                      <ul className="mt-2 space-y-1 text-sm">
                        {step.resources.map((r) => (
                          <li key={r.url}>
                            <a
                              href={r.url}
                              target="_blank"
                              rel="noreferrer"
                              className="text-brand-600 underline-offset-2 hover:underline"
                            >
                              {r.title} ↗
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
