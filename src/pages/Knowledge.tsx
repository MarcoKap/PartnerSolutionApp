import { useMemo, useState } from 'react'
import PageHeader from '../components/PageHeader'
import { knowledgeCategories } from '../content/knowledgeLinks'

export default function Knowledge() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return knowledgeCategories
    return knowledgeCategories
      .map((cat) => ({
        ...cat,
        links: cat.links.filter(
          (l) =>
            l.title.toLowerCase().includes(q) ||
            l.description.toLowerCase().includes(q),
        ),
      }))
      .filter((cat) => cat.links.length > 0)
  }, [query])

  return (
    <div>
      <PageHeader
        eyebrow="Alle Quellen an einem Ort"
        title="Wissens-Hub"
        intro="Kuratierte Links zu offiziellen Microsoft-Quellen rund um Purview, AI Security, Marketplace und Co-Sell. Alle Links öffnen in einem neuen Tab."
      />

      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Suchen… (z.B. DLP, Co-Sell, MACC)"
        className="mb-8 w-full max-w-md rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm shadow-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-200 focus:outline-none dark:border-slate-600 dark:bg-slate-900"
      />

      {filtered.length === 0 && (
        <p className="text-ink-500 dark:text-slate-400">Keine Treffer für „{query}“.</p>
      )}

      {filtered.map((cat) => (
        <section key={cat.id} className="mb-8">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <span aria-hidden>{cat.icon}</span>
            {cat.title}
          </h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {cat.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="group rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:border-brand-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:hover:border-brand-500"
              >
                <h3 className="text-sm font-semibold text-brand-700 group-hover:underline dark:text-brand-300">
                  {link.title} ↗
                </h3>
                <p className="mt-1 text-xs text-ink-500 dark:text-slate-400">{link.description}</p>
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
