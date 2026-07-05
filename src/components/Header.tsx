import { useState } from 'react'

const REPO_URL = 'https://github.com/MarcoKap/PartnerSolutionApp'

function MicrosoftLogo() {
  return (
    <svg viewBox="0 0 23 23" className="h-5 w-5" aria-hidden>
      <rect x="0" y="0" width="11" height="11" fill="#F25022" />
      <rect x="12" y="0" width="11" height="11" fill="#7FBA00" />
      <rect x="0" y="12" width="11" height="11" fill="#00A4EF" />
      <rect x="12" y="12" width="11" height="11" fill="#FFB900" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-5 w-5 fill-current" aria-hidden>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  )
}

function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains('dark'),
  )

  function toggle() {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('psa-theme', next ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggle}
      title={dark ? 'Zu Light Mode wechseln' : 'Zu Dark Mode wechseln'}
      aria-label={dark ? 'Zu Light Mode wechseln' : 'Zu Dark Mode wechseln'}
      className="flex h-8 w-14 items-center rounded-full bg-slate-200 px-1 transition-colors dark:bg-slate-700"
    >
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full bg-white text-sm shadow transition-transform dark:bg-slate-900 ${
          dark ? 'translate-x-6' : 'translate-x-0'
        }`}
        aria-hidden
      >
        {dark ? '🌙' : '☀️'}
      </span>
    </button>
  )
}

export default function Header({ onToggleNav }: { onToggleNav: () => void }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 flex h-14 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6 dark:border-slate-800 dark:bg-slate-900/95">
      <div className="flex items-center gap-3">
        <MicrosoftLogo />
        <span className="hidden text-sm font-semibold text-ink-700 sm:inline dark:text-slate-200">
          Microsoft
        </span>
        <span className="hidden text-slate-300 sm:inline dark:text-slate-600">|</span>
        <span className="text-sm font-semibold">Partner Solution Hub</span>
      </div>

      <div className="flex items-center gap-3">
        <a
          href={REPO_URL}
          target="_blank"
          rel="noreferrer"
          title="GitHub-Repository öffnen"
          className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-medium text-ink-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <GitHubIcon />
          <span className="hidden sm:inline">GitHub</span>
        </a>
        <ThemeToggle />
        <button
          onClick={onToggleNav}
          className="rounded-md p-2 text-ink-700 hover:bg-slate-100 lg:hidden dark:text-slate-200 dark:hover:bg-slate-800"
          aria-label="Navigation umschalten"
        >
          ☰
        </button>
      </div>
    </header>
  )
}
