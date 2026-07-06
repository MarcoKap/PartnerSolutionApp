import { useState } from 'react'
import { objections } from '../content/businessCase'
import Icon from './Icon'

/** Typische Partner-Einwände als aufklappbare Karten. */
export default function Objections() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {objections.map((o, i) => {
        const isOpen = open === i
        return (
          <div
            key={i}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-ink-900 dark:text-slate-100">
                {o.objection}
              </span>
              <span
                className={`shrink-0 rounded-full bg-brand-100 p-1.5 text-brand-700 transition-transform dark:bg-brand-900/60 dark:text-brand-300 ${
                  isOpen ? 'rotate-90' : ''
                }`}
              >
                <Icon name="arrowRight" className="h-4 w-4" />
              </span>
            </button>
            {isOpen && (
              <div className="border-t border-slate-100 bg-brand-50/50 px-5 py-4 text-sm leading-relaxed text-ink-700 dark:border-slate-800 dark:bg-brand-900/20 dark:text-slate-300">
                {o.answer}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
