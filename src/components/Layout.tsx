import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Header from './Header'
import Icon, { type IconName } from './Icon'

const nav: { to: string; label: string; icon: IconName }[] = [
  { to: '/', label: 'Start', icon: 'home' },
  { to: '/business-case', label: 'Business Case', icon: 'chart' },
  { to: '/process', label: 'Entwicklungsprozess', icon: 'route' },
  { to: '/knowledge', label: 'Wissens-Hub', icon: 'book' },
  { to: '/solutions', label: 'Beispiel-Lösungen', icon: 'bulb' },
  { to: '/templates', label: 'Templates', icon: 'grid' },
  { to: '/assistant', label: 'AI-Assistant', icon: 'sparkle' },
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
      <Icon name={item.icon} className="h-[18px] w-[18px]" />
      {item.label}
    </NavLink>
  ))

  return (
    <div className="min-h-screen">
      <Header onToggleNav={() => setOpen(!open)} />

      {/* Mobile-Navigation (unter der Kopfleiste) */}
      {open && (
        <nav className="fixed inset-x-0 top-14 z-30 flex flex-col gap-1 bg-brand-900 px-3 py-3 shadow-lg lg:hidden">
          {links}
        </nav>
      )}

      {/* Sidebar (Desktop) */}
      <aside className="fixed top-14 bottom-0 hidden w-64 flex-col overflow-y-auto bg-brand-900 lg:flex">
        <div className="px-5 py-5">
          <p className="text-xs text-brand-200">
            Purview Data &amp; AI Security
          </p>
        </div>
        <nav className="flex flex-1 flex-col gap-1 px-3">{links}</nav>
        <p className="px-5 py-4 text-[11px] text-brand-300">
          Enablement für Beratungs- &amp; Managed-Service-Lösungen
        </p>
      </aside>

      <main className="pt-14 lg:pl-64">
        <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
