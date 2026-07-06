import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  finderQuestions,
  finderResults,
  type OfferingType,
} from '../content/offeringFinder'
import Icon from './Icon'

/** Entscheidungsbaum: Welches Offering-Modell passt zum Partner? */
export default function OfferingFinder() {
  const [answers, setAnswers] = useState<(number | null)[]>(
    finderQuestions.map(() => null),
  )

  const done = answers.every((a) => a !== null)
  let result = null
  if (done) {
    const scores: Record<OfferingType, number> = { assessment: 0, quickstart: 0, managed: 0, ip: 0 }
    answers.forEach((a, qi) => {
      const weights = finderQuestions[qi].options[a!].weights
      for (const [k, v] of Object.entries(weights)) {
        scores[k as OfferingType] += v ?? 0
      }
    })
    const best = (Object.keys(scores) as OfferingType[]).reduce((a, b) =>
      scores[b] > scores[a] ? b : a,
    )
    result = finderResults[best]
  }

  return (
    <div>
      <div className="space-y-5">
        {finderQuestions.map((q, qi) => (
          <fieldset key={qi}>
            <legend className="text-sm font-semibold">
              {qi + 1}. {q.question}
            </legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {q.options.map((opt, oi) => {
                const selected = answers[qi] === oi
                return (
                  <button
                    key={oi}
                    type="button"
                    onClick={() =>
                      setAnswers((prev) => prev.map((a, i) => (i === qi ? oi : a)))
                    }
                    className={`rounded-lg border px-3 py-2 text-left text-sm transition-colors ${
                      selected
                        ? 'border-brand-500 bg-brand-50 font-medium text-brand-900 dark:bg-brand-900/40 dark:text-brand-100'
                        : 'border-slate-200 bg-white text-ink-700 hover:border-brand-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'
                    }`}
                  >
                    {opt.label}
                  </button>
                )
              })}
            </div>
          </fieldset>
        ))}
      </div>

      {result && (
        <div className="mt-6 rounded-xl border border-emerald-300 bg-gradient-to-br from-emerald-50 to-brand-50 p-5 dark:border-emerald-700 dark:from-emerald-900/30 dark:to-brand-900/30">
          <p className="text-xs font-semibold tracking-wide text-emerald-700 uppercase dark:text-emerald-400">
            Unsere Empfehlung
          </p>
          <h4 className="mt-1 text-lg font-semibold">{result.title}</h4>
          <p className="mt-2 text-sm text-ink-700 dark:text-slate-300">{result.text}</p>
          <ul className="mt-3 space-y-1.5 text-sm text-ink-700 dark:text-slate-300">
            {result.nextSteps.map((s) => (
              <li key={s} className="flex gap-2">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                {s}
              </li>
            ))}
          </ul>
          <Link
            to="/solutions"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Passende Beispiel-Lösung ansehen
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  )
}
