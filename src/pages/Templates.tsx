import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import CopyButton from '../components/CopyButton'
import { templates } from '../content/templates'

const filters = [
  { id: 'all', label: 'Alle' },
  { id: 'agent', label: 'Skill-/Agent-Templates' },
  { id: 'prompt', label: 'Prompts' },
] as const

export default function Templates() {
  const [filter, setFilter] = useState<'all' | 'agent' | 'prompt'>('all')
  const [expanded, setExpanded] = useState<string | null>(null)

  const shown = templates.filter((t) => filter === 'all' || t.category === filter)

  return (
    <div>
      <PageHeader
        eyebrow="Sofort einsetzbar"
        title="Skill-, Agent- & Prompt-Templates"
        intro="Vorlagen, die die Lösungsentwicklung beschleunigen: Skill-Definitionen für AI-Agents und erprobte Prompts für One-Pager, Marketplace-Listings und Assessments. Einfach kopieren und im Tool deiner Wahl verwenden."
      />

      <div className="mb-6 flex gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === f.id
                ? 'bg-brand-600 text-white'
                : 'bg-white text-ink-700 ring-1 ring-slate-300 hover:bg-brand-50 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-600 dark:hover:bg-slate-800'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {shown.map((t) => {
          const isOpen = expanded === t.id
          return (
            <div
              key={t.id}
              className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 p-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`rounded-md px-2 py-0.5 text-[11px] font-semibold uppercase ${
                        t.category === 'agent'
                          ? 'bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-300'
                          : 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300'
                      }`}
                    >
                      {t.category === 'agent' ? 'Agent/Skill' : 'Prompt'}
                    </span>
                    <span className="text-xs text-ink-500 dark:text-slate-400">{t.format}</span>
                  </div>
                  <h2 className="mt-1.5 font-semibold">{t.title}</h2>
                  <p className="mt-1 max-w-2xl text-sm text-ink-500 dark:text-slate-400">{t.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setExpanded(isOpen ? null : t.id)}
                    className="rounded-md px-3 py-1.5 text-xs font-semibold text-brand-700 ring-1 ring-brand-300 hover:bg-brand-50 dark:text-brand-300 dark:ring-brand-600 dark:hover:bg-brand-900/40"
                  >
                    {isOpen ? 'Einklappen' : 'Ansehen'}
                  </button>
                  <CopyButton text={t.content} />
                </div>
              </div>
              {isOpen && (
                <pre className="overflow-x-auto rounded-b-xl border-t border-slate-200 bg-slate-900 p-5 text-xs leading-relaxed text-slate-100 dark:border-slate-700 dark:bg-slate-950">
                  {t.content}
                </pre>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
