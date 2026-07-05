import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const nav = [
  { to: '/', label: 'Start', icon: '🏠' },
  { to: '/process', label: 'Entwicklungsprozess', icon: '🗺️' },
  { to: '/business-case', label: 'Business Case', icon: '📈' },
  { to: '/knowledge', label: 'Wissens-Hub', icon: '📚' },
  { to: '/solutions', label: 'Beispiel-Lösungen', icon: '💡' },
  { to: '/templates', label: 'Templates', icon: '🧩' },
  { to: '/assistant', label: 'AI-Assistant', icon: '✨' },
]

export default function Layout() {
  const [open, setOpen] = useState(false)

  const links = nav.map((item) => (
    <NavLink
      key={item.to}
      to={item.to}
      end={item.to === '/'}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
          isActive
            ? 'bg-brand-600 text-white shadow-sm'
            : 'text-slate-200 hover:bg-brand-800 hover:text-white'
        }`
      }
    >
      <span aria-hidden>{item.icon}</span>
      {item.label}
    </NavLink>
  ))

  return (
    <div className="flex min-h-screen">
      {/* Sidebar (Desktop) */}
      <aside className="hidden w-64 shrink-0 flex-col bg-brand-900 lg:flex">
        <div className="px-5 py-6">
          <p className="text-lg font-semibold text-white">Partner Solution Hub</p>
          <p className="mt-1 text-xs text-brand-200">
            Purview Data &amp; AI Security
          </p>
        </div>
        <nav className="flex flex-1 flex-col gap-1 px-3">{links}</nav>
        <p className="px-5 py-4 text-[11px] text-brand-300">
          Enablement für Beratungs- &amp; Managed-Service-Lösungen
        </p>
      </aside>

      {/* Mobile Header */}
      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between bg-brand-900 px-4 py-3 lg:hidden">
          <p className="font-semibold text-white">Partner Solution Hub</p>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-white hover:bg-brand-800"
            aria-label="Navigation umschalten"
          >
            ☰
          </button>
        </header>
        {open && (
          <nav className="flex flex-col gap-1 bg-brand-900 px-3 pb-4 lg:hidden">{links}</nav>
        )}

        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
