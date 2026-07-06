import { useState } from 'react'
import { maturityQuestions, maturityResults } from '../content/maturityCheck'
import Icon from './Icon'

/** Interaktiver Reifegrad-Selbstcheck → empfiehlt den Einstiegsschritt im Prozess. */
export default function MaturityCheck({ onJumpToStep }: { onJumpToStep: (step: number) => void }) {
  const [answers, setAnswers] = useState<(number | null)[]>(
    maturityQuestions.map(() => null),
  )

  const answered = answers.filter((a) => a !== null).length
  const done = answered === maturityQuestions.length
  const score = answers.reduce<number>(
    (sum, a, qi) => sum + (a !== null ? maturityQuestions[qi].options[a].points : 0),
    0,
  )
  const maxScore = maturityQuestions.reduce(
    (sum, q) => sum + Math.max(...q.options.map((o) => o.points)),
    0,
  )
  const result = done
    ? maturityResults.find((r) => score >= r.minScore) ?? maturityResults.at(-1)!
    : null

  return (
    <div>
      <div className="space-y-5">
        {maturityQuestions.map((q, qi) => (
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

      {/* Fortschritt */}
      <div className="mt-6 flex items-center gap-3 text-sm text-ink-500 dark:text-slate-400">
        <svg viewBox="0 0 100 6" preserveAspectRatio="none" className="h-2.5 flex-1">
          <rect width="100" height="6" rx="3" className="fill-slate-200 dark:fill-slate-700" />
          <rect
            width={(answered / maturityQuestions.length) * 100}
            height="6"
            rx="3"
            className="fill-brand-500 transition-all duration-300"
          />
        </svg>
        {answered}/{maturityQuestions.length}
      </div>

      {result && (
        <div className="mt-5 rounded-xl border border-brand-300 bg-gradient-to-br from-brand-50 to-emerald-50 p-5 dark:border-brand-700 dark:from-brand-900/40 dark:to-emerald-900/20">
          <p className="text-xs font-semibold tracking-wide text-brand-700 uppercase dark:text-brand-300">
            Euer Ergebnis · {score}/{maxScore} Punkte
          </p>
          <h4 className="mt-1 text-lg font-semibold">{result.title}</h4>
          <p className="mt-2 text-sm text-ink-700 dark:text-slate-300">{result.text}</p>
          <button
            onClick={() => onJumpToStep(result.startStep)}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Zu Schritt {result.startStep} springen
            <Icon name="arrowRight" className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  )
}
