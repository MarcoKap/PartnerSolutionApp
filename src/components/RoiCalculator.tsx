import { useMemo, useState } from 'react'
import Icon from './Icon'

const fmt = (n: number) =>
  n.toLocaleString('de-DE', { maximumFractionDigits: 0 }) + ' €'

interface Scenario {
  name: string
  revenue: number
  margin: number
  color: string
  note: string
}

/**
 * Vergleicht den Jahres-Deckungsbeitrag bei fixer Teamkapazität:
 * T&M-Projekte vs. standardisiertes Festpreis-Paket vs. Paket + Managed Service.
 */
export default function RoiCalculator() {
  const [dayRate, setDayRate] = useState(1400) // Verkaufter Tagessatz €
  const [costRate, setCostRate] = useState(900) // Interne Kosten pro Tag €
  const [projectDays, setProjectDays] = useState(25) // Aufwand individuell
  const [efficiency, setEfficiency] = useState(40) // Aufwandsreduktion % durch Standardisierung
  const [capacity, setCapacity] = useState(1400) // Team-Liefertage pro Jahr

  const scenarios = useMemo<Scenario[]>(() => {
    // T&M: Zeit wird verkauft — Marge pro Tag ist fix
    const tmProjects = capacity / projectDays
    const tmMargin = capacity * (dayRate - costRate)

    // Paket: Preis bleibt beim Wert des Individualprojekts, Aufwand sinkt
    const pkgDays = projectDays * (1 - efficiency / 100)
    const pkgPrice = projectDays * dayRate
    const pkgProjects = capacity / pkgDays
    const pkgMargin = pkgProjects * (pkgPrice - pkgDays * costRate)

    // Paket + Managed Service: 40 % der Paketkunden buchen einen Service
    // (MRR = 8 % des Paketpreises/Monat, 46 % Bruttomarge — Service Leadership Benchmark)
    const msCustomers = pkgProjects * 0.4
    const msMargin = msCustomers * pkgPrice * 0.08 * 12 * 0.46
    const comboMargin = pkgMargin + msMargin

    return [
      {
        name: 'Individualprojekte (T&M)',
        revenue: tmProjects * projectDays * dayRate,
        margin: tmMargin,
        color: 'fill-slate-400 dark:fill-slate-500',
        note: `${tmProjects.toFixed(1)} Projekte/Jahr`,
      },
      {
        name: 'Standardisiertes Paket',
        revenue: pkgProjects * pkgPrice,
        margin: pkgMargin,
        color: 'fill-brand-500',
        note: `${pkgProjects.toFixed(1)} Projekte/Jahr, ${pkgDays.toFixed(0)} Tage Aufwand je Projekt`,
      },
      {
        name: 'Paket + Managed Service',
        revenue: pkgProjects * pkgPrice + msCustomers * pkgPrice * 0.08 * 12,
        margin: comboMargin,
        color: 'fill-emerald-500',
        note: `zusätzlich ${msCustomers.toFixed(1)} Service-Kunden (wiederkehrend)`,
      },
    ]
  }, [dayRate, costRate, projectDays, efficiency, capacity])

  const max = Math.max(...scenarios.map((s) => s.margin))
  const uplift = scenarios[2].margin / scenarios[0].margin

  const sliders: {
    label: string
    value: number
    set: (n: number) => void
    min: number
    max: number
    step: number
    unit: string
  }[] = [
    { label: 'Tagessatz (verkauft)', value: dayRate, set: setDayRate, min: 800, max: 2500, step: 50, unit: '€' },
    { label: 'Interne Kosten pro Tag', value: costRate, set: setCostRate, min: 400, max: 1500, step: 50, unit: '€' },
    { label: 'Aufwand Individualprojekt', value: projectDays, set: setProjectDays, min: 10, max: 60, step: 5, unit: 'Tage' },
    { label: 'Aufwandsreduktion durch Standardisierung', value: efficiency, set: setEfficiency, min: 10, max: 60, step: 5, unit: '%' },
    { label: 'Team-Kapazität pro Jahr', value: capacity, set: setCapacity, min: 400, max: 4000, step: 100, unit: 'Tage' },
  ]

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h3 className="flex items-center gap-2 text-lg font-semibold">
        <Icon name="calculator" className="h-5 w-5 text-brand-600 dark:text-brand-300" />
        Margen-Rechner: Was bringt Standardisierung?
      </h3>
      <p className="mt-1 text-sm text-ink-500 dark:text-slate-400">
        Jahres-Deckungsbeitrag bei gleicher Teamkapazität — bewege die Regler und
        vergleiche die drei Geschäftsmodelle.
      </p>

      <div className="mt-5 grid gap-6 lg:grid-cols-[300px_1fr]">
        {/* Regler */}
        <div className="space-y-4">
          {sliders.map((s) => (
            <label key={s.label} className="block text-sm">
              <span className="flex justify-between font-medium">
                {s.label}
                <span className="tabular-nums text-brand-700 dark:text-brand-300">
                  {s.value.toLocaleString('de-DE')} {s.unit}
                </span>
              </span>
              <input
                type="range"
                min={s.min}
                max={s.max}
                step={s.step}
                value={s.value}
                onChange={(e) => s.set(Number(e.target.value))}
                className="mt-1 w-full accent-brand-600"
              />
            </label>
          ))}
        </div>

        {/* Ergebnis */}
        <div>
          <div className="space-y-4">
            {scenarios.map((s) => (
              <div key={s.name}>
                <div className="flex items-baseline justify-between text-sm">
                  <span className="font-medium">{s.name}</span>
                  <span className="font-semibold tabular-nums">{fmt(s.margin)}</span>
                </div>
                <svg viewBox="0 0 100 6" preserveAspectRatio="none" className="mt-1 h-4 w-full">
                  <rect x="0" y="0" width="100" height="6" rx="3" className="fill-slate-100 dark:fill-slate-800" />
                  <rect
                    x="0"
                    y="0"
                    width={Math.max(3, (s.margin / max) * 100)}
                    height="6"
                    rx="3"
                    className={`${s.color} transition-all duration-500`}
                  />
                </svg>
                <p className="mt-0.5 text-xs text-ink-500 dark:text-slate-400">{s.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl bg-gradient-to-r from-brand-600 to-emerald-600 p-4 text-white">
            <p className="text-sm">
              Gleiche Mannschaft, gleiches Jahr —{' '}
              <strong className="text-lg tabular-nums">
                {uplift.toLocaleString('de-DE', { maximumFractionDigits: 1 })}×
              </strong>{' '}
              Deckungsbeitrag mit Paketierung und Managed Service.
            </p>
          </div>
          <p className="mt-2 text-[11px] leading-relaxed text-ink-500 dark:text-slate-400">
            Modellannahmen: Paketpreis = Wert des Individualprojekts; 40 % der
            Paketkunden buchen einen Managed Service (MRR = 8 % des Paketpreises,
            46 % Bruttomarge lt. Service Leadership Index). Vereinfachtes Modell zur
            Veranschaulichung — keine Ergebnis-Garantie.
          </p>
        </div>
      </div>
    </div>
  )
}
