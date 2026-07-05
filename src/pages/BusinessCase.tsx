import PageHeader from '../components/PageHeader'
import { argumentGroups, valueLadder } from '../content/businessCase'

export default function BusinessCase() {
  return (
    <div>
      <PageHeader
        eyebrow="Vertriebsargumentation"
        title="Der Business Case für Pakete & Marketplace"
        intro="Die wichtigsten Argumente, warum sich der Schritt vom individuellen Projektgeschäft zu standardisierten Lösungen und Marketplace-Offerings lohnt — für Partnergespräche und interne Entscheidungen."
      />

      {argumentGroups.map((group) => (
        <section key={group.id} className="mb-10">
          <h2 className="flex items-center gap-2 text-xl font-semibold">
            <span aria-hidden>{group.icon}</span>
            {group.title}
          </h2>
          <p className="mt-1 text-sm text-ink-500">{group.subtitle}</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {group.args.map((arg) => (
              <div
                key={arg.title}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="font-semibold text-brand-800">{arg.title}</h3>
                <p className="mt-2 text-sm text-ink-700">{arg.text}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section>
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <span aria-hidden>🪜</span>
          Die Value-Ladder: Projekt → Produkt → Managed Service
        </h2>
        <p className="mt-1 text-sm text-ink-500">
          Jede Stufe erhöht Planbarkeit und Marge — die Stufen bauen aufeinander auf.
        </p>
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
                  className={i % 2 === 0 ? 'bg-white' : 'bg-brand-50/60'}
                >
                  <td className="border-b border-slate-200 px-4 py-3 font-semibold text-brand-800">
                    {s.stage}
                  </td>
                  <td className="border-b border-slate-200 px-4 py-3 text-ink-700">
                    {s.description}
                  </td>
                  <td className="border-b border-slate-200 px-4 py-3 text-ink-700">
                    {s.revenue}
                  </td>
                  <td className="border-b border-slate-200 px-4 py-3 text-ink-700">
                    {s.margin}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
