import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import MaturityCheck from '../components/MaturityCheck'
import OfferingFinder from '../components/OfferingFinder'
import { processSteps } from '../content/processSteps'

type Tool = 'maturity' | 'finder' | null

export default function Process() {
  const [tool, setTool] = useState<Tool>(null)
  const [expanded, setExpanded] = useState<number | null>(null)

  function jumpToStep(step: number) {
    setExpanded(step)
    document.getElementById(`step-${step}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div>
      <PageHeader
        eyebrow="Von der Idee zum Offering"
        title="Der Lösungs-Entwicklungsprozess"
        intro="Sieben Schritte von der ersten Idee bis zum profitablen Marketplace-Offering. Findet zuerst heraus, wo ihr steht — dann steigt beim passenden Schritt ein."
      />

      {/* Interaktive Werkzeuge */}
      <Reveal>
        <div className="mb-10 grid gap-4 sm:grid-cols-2">
          <button
            onClick={() => setTool(tool === 'maturity' ? null : 'maturity')}
            className={`group rounded-2xl border-2 p-5 text-left transition ${
              tool === 'maturity'
                ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/40'
                : 'border-slate-200 bg-white hover:border-brand-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-900'
            }`}
          >
            <Icon name="clipboard" className="h-7 w-7 text-brand-600 dark:text-brand-300" />
            <h2 className="mt-2 font-semibold">Reifegrad-Selbstcheck</h2>
            <p className="mt-1 text-sm text-ink-500 dark:text-slate-400">
              6 Fragen — wo steht euer Unternehmen heute und wo solltet ihr einsteigen?
            </p>
            <span className="mt-2 inline-block text-sm font-semibold text-brand-600 dark:text-brand-300">
              {tool === 'maturity' ? 'Schließen ▲' : 'Check starten ▼'}
            </span>
          </button>

          <button
            onClick={() => setTool(tool === 'finder' ? null : 'finder')}
            className={`group rounded-2xl border-2 p-5 text-left transition ${
              tool === 'finder'
                ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30'
                : 'border-slate-200 bg-white hover:border-emerald-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-900'
            }`}
          >
            <Icon name="compass" className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
            <h2 className="mt-2 font-semibold">Offering-Finder</h2>
            <p className="mt-1 text-sm text-ink-500 dark:text-slate-400">
              4 Fragen — welches Lösungsmodell passt: Assessment, Quickstart, Managed Service oder IP?
            </p>
            <span className="mt-2 inline-block text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              {tool === 'finder' ? 'Schließen ▲' : 'Finder starten ▼'}
            </span>
          </button>
        </div>
      </Reveal>

      {tool && (
        <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          {tool === 'maturity' ? <MaturityCheck onJumpToStep={jumpToStep} /> : <OfferingFinder />}
        </div>
      )}

      {/* Timeline */}
      <ol className="relative space-y-8 border-l-2 border-brand-200 pl-6 dark:border-brand-700">
        {processSteps.map((step) => {
          const isExpanded = expanded === step.id
          return (
            <li key={step.id} id={`step-${step.id}`} className="relative scroll-mt-20">
              <span className="absolute -left-[37px] flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-bold text-white shadow-md shadow-brand-500/30">
                {step.id}
              </span>
              <Reveal>
                <div
                  className={`rounded-xl border bg-white p-5 shadow-sm transition dark:bg-slate-900 ${
                    isExpanded
                      ? 'border-brand-400 shadow-md dark:border-brand-600'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <h2 className="text-lg font-semibold">{step.title}</h2>
                  <p className="mt-1 text-sm font-medium text-brand-700 dark:text-brand-300">
                    {step.goal}
                  </p>

                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <h3 className="text-xs font-semibold tracking-wide text-ink-500 uppercase dark:text-slate-400">
                        Aktivitäten
                      </h3>
                      <ul className="mt-2 space-y-1.5 text-sm text-ink-700 dark:text-slate-300">
                        {step.activities.map((a) => (
                          <li key={a} className="flex gap-2">
                            <span className="text-brand-500">▸</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold tracking-wide text-ink-500 uppercase dark:text-slate-400">
                        Deliverables
                      </h3>
                      <ul className="mt-2 space-y-1.5 text-sm text-ink-700 dark:text-slate-300">
                        {step.deliverables.map((d) => (
                          <li key={d} className="flex gap-2">
                            <span className="text-emerald-600">✓</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                      {step.resources.length > 0 && (
                        <>
                          <h3 className="mt-4 text-xs font-semibold tracking-wide text-ink-500 uppercase dark:text-slate-400">
                            Ressourcen
                          </h3>
                          <ul className="mt-2 space-y-1 text-sm">
                            {step.resources.map((r) => (
                              <li key={r.url}>
                                <a
                                  href={r.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-brand-600 underline-offset-2 hover:underline dark:text-brand-300"
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

                  {/* Checkliste & Stolperfallen */}
                  <button
                    onClick={() => setExpanded(isExpanded ? null : step.id)}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:underline dark:text-brand-300"
                    aria-expanded={isExpanded}
                  >
                    <Icon name="clipboard" className="h-4 w-4" />
                    Checkliste &amp; Stolperfallen {isExpanded ? '▲' : '▼'}
                  </button>

                  {isExpanded && (
                    <div className="mt-3 grid gap-4 border-t border-slate-100 pt-4 md:grid-cols-2 dark:border-slate-800">
                      <div className="rounded-lg bg-emerald-50/70 p-4 dark:bg-emerald-900/20">
                        <h4 className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-emerald-700 uppercase dark:text-emerald-400">
                          <Icon name="check" className="h-4 w-4" />
                          Bevor es weitergeht
                        </h4>
                        <ul className="mt-2 space-y-1.5 text-sm text-ink-700 dark:text-slate-300">
                          {step.checklist.map((c) => (
                            <li key={c} className="flex gap-2">
                              <span className="text-emerald-600">☐</span>
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-lg bg-amber-50/70 p-4 dark:bg-amber-900/20">
                        <h4 className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-amber-700 uppercase dark:text-amber-400">
                          <Icon name="warning" className="h-4 w-4" />
                          Häufige Fehler
                        </h4>
                        <ul className="mt-2 space-y-1.5 text-sm text-ink-700 dark:text-slate-300">
                          {step.pitfalls.map((p) => (
                            <li key={p} className="flex gap-2">
                              <span className="text-amber-600">✕</span>
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
