import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import {
  chat,
  clearConfig,
  GITHUB_MODELS_ENDPOINT,
  loadConfig,
  saveConfig,
  SYSTEM_PROMPT,
  type AiConfig,
  type AiProvider,
  type ChatMessage,
} from '../lib/aiClient'

const quickPrompts = [
  'Entwirf ein Managed-Service-Paket für Purview DLP (S/M/L-Größen mit SLA-Vorschlag).',
  'Welche Purview-Lösung passt für einen Mittelständler, der Microsoft 365 Copilot einführen will?',
  'Erstelle einen Business-Case-Entwurf für ein AI Security Readiness Assessment.',
  'Wie schneide ich aus einem DLP-Projekt ein wiederholbares Festpreis-Paket?',
]

const inputClass =
  'w-full rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-600 dark:bg-slate-900'

export default function Assistant() {
  const [config, setConfig] = useState<AiConfig | null>(() => loadConfig())
  const [showSettings, setShowSettings] = useState(!loadConfig())
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, busy])

  async function send(text: string) {
    if (!config || !text.trim() || busy) return
    setError(null)
    const next: ChatMessage[] = [...messages, { role: 'user', content: text.trim() }]
    setMessages(next)
    setInput('')
    setBusy(true)
    try {
      const reply = await chat(config, [
        { role: 'system', content: SYSTEM_PROMPT },
        ...next,
      ])
      setMessages([...next, { role: 'assistant', content: reply }])
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unbekannter Fehler')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div>
      <PageHeader
        eyebrow="Sparringspartner für neue Lösungen"
        title="AI-Assistant"
        intro="Ein vorkonfigurierter Assistent für Purview-Lösungsideen: Offerings entwerfen, Business Cases prüfen, Pakete schneiden. Funktioniert mit Azure OpenAI, einem OpenAI-kompatiblen Key oder einem GitHub-Token (GitHub Models) — Zugangsdaten werden ausschließlich lokal im Browser gespeichert."
      />

      {/* Einstellungen */}
      <div className="mb-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">
            {config ? '🔑 Verbindung konfiguriert' : '🔑 Verbindung einrichten'}
          </h2>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="text-sm font-medium text-brand-600 hover:underline dark:text-brand-300"
          >
            {showSettings ? 'Ausblenden' : 'Bearbeiten'}
          </button>
        </div>
        {showSettings && (
          <SettingsForm
            initial={config}
            onSave={(c) => {
              saveConfig(c)
              setConfig(c)
              setShowSettings(false)
              setError(null)
            }}
            onClear={() => {
              clearConfig()
              setConfig(null)
            }}
          />
        )}
      </div>

      {!config && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900 dark:border-amber-700 dark:bg-amber-900/30 dark:text-amber-200">
          <p className="font-semibold">Kein Zugang hinterlegt</p>
          <p className="mt-1">
            Ohne Key/Token kannst du trotzdem produktiv arbeiten: Nutze die vorgefertigten{' '}
            <Link to="/templates" className="font-semibold underline">
              Prompt- und Agent-Templates
            </Link>{' '}
            per Copy &amp; Paste in Copilot, ChatGPT oder Claude.
          </p>
        </div>
      )}

      {config && (
        <>
          {/* Quick Prompts */}
          <div className="mb-4 flex flex-wrap gap-2">
            {quickPrompts.map((p) => (
              <button
                key={p}
                onClick={() => send(p)}
                disabled={busy}
                className="rounded-full bg-brand-50 px-3 py-1.5 text-left text-xs font-medium text-brand-800 ring-1 ring-brand-200 hover:bg-brand-100 disabled:opacity-50 dark:bg-brand-900/40 dark:text-brand-200 dark:ring-brand-700 dark:hover:bg-brand-900/70"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Chatverlauf */}
          <div className="mb-4 min-h-[200px] space-y-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            {messages.length === 0 && (
              <p className="text-sm text-ink-500 dark:text-slate-400">
                Stelle eine Frage oder wähle einen Quick-Prompt — z.B. zum Zuschnitt
                eines neuen Purview-Offerings.
              </p>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-xl px-4 py-3 text-sm whitespace-pre-wrap ${
                  m.role === 'user'
                    ? 'ml-auto bg-brand-600 text-white'
                    : 'bg-slate-100 text-ink-900 dark:bg-slate-800 dark:text-slate-100'
                }`}
              >
                {m.content}
              </div>
            ))}
            {busy && (
              <div className="max-w-[85%] rounded-xl bg-slate-100 px-4 py-3 text-sm text-ink-500 dark:bg-slate-800 dark:text-slate-400">
                Denkt nach…
              </div>
            )}
            {error && (
              <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800 dark:bg-red-900/30 dark:text-red-300">
                {error}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Eingabe */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              send(input)
            }}
            className="flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Deine Frage zur Lösungsentwicklung…"
              className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm shadow-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-200 focus:outline-none dark:border-slate-600 dark:bg-slate-900"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
            >
              Senden
            </button>
          </form>
        </>
      )}
    </div>
  )
}

const providerInfo: Record<
  AiProvider,
  { endpointLabel: string; endpointPlaceholder: string; modelLabel: string; modelPlaceholder: string; keyLabel: string }
> = {
  azure: {
    endpointLabel: 'Endpoint',
    endpointPlaceholder: 'https://mein-resource.openai.azure.com',
    modelLabel: 'Deployment-Name',
    modelPlaceholder: 'gpt-4o-mini',
    keyLabel: 'API-Key (bleibt lokal im Browser)',
  },
  openai: {
    endpointLabel: 'Basis-URL',
    endpointPlaceholder: 'https://api.openai.com',
    modelLabel: 'Modell',
    modelPlaceholder: 'gpt-4o-mini',
    keyLabel: 'API-Key (bleibt lokal im Browser)',
  },
  github: {
    endpointLabel: 'Endpoint (fest)',
    endpointPlaceholder: GITHUB_MODELS_ENDPOINT,
    modelLabel: 'Modell (publisher/modell)',
    modelPlaceholder: 'openai/gpt-4o-mini',
    keyLabel: 'GitHub Token mit models:read (bleibt lokal im Browser)',
  },
}

function SettingsForm({
  initial,
  onSave,
  onClear,
}: {
  initial: AiConfig | null
  onSave: (c: AiConfig) => void
  onClear: () => void
}) {
  const [provider, setProvider] = useState<AiProvider>(initial?.provider ?? 'azure')
  const [endpoint, setEndpoint] = useState(initial?.endpoint ?? '')
  const [model, setModel] = useState(initial?.model ?? '')
  const [apiKey, setApiKey] = useState(initial?.apiKey ?? '')

  const info = providerInfo[provider]
  const isGithub = provider === 'github'
  const valid = (isGithub || endpoint.trim()) && model.trim() && apiKey.trim()

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (valid)
          onSave({
            provider,
            endpoint: isGithub ? GITHUB_MODELS_ENDPOINT : endpoint.trim(),
            model: model.trim(),
            apiKey: apiKey.trim(),
          })
      }}
      className="mt-4 grid gap-3 text-sm sm:grid-cols-2"
    >
      <label>
        <span className="mb-1 block font-medium">Provider</span>
        <select
          value={provider}
          onChange={(e) => setProvider(e.target.value as AiProvider)}
          className={inputClass}
        >
          <option value="azure">Azure OpenAI</option>
          <option value="openai">OpenAI-kompatibel</option>
          <option value="github">GitHub Models (GitHub Token)</option>
        </select>
      </label>
      <label>
        <span className="mb-1 block font-medium">{info.endpointLabel}</span>
        <input
          value={isGithub ? GITHUB_MODELS_ENDPOINT : endpoint}
          onChange={(e) => setEndpoint(e.target.value)}
          placeholder={info.endpointPlaceholder}
          disabled={isGithub}
          className={`${inputClass} disabled:opacity-60`}
        />
      </label>
      <label>
        <span className="mb-1 block font-medium">{info.modelLabel}</span>
        <input
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder={info.modelPlaceholder}
          className={inputClass}
        />
      </label>
      <label>
        <span className="mb-1 block font-medium">{info.keyLabel}</span>
        <input
          type="password"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className={inputClass}
        />
      </label>
      {isGithub && (
        <p className="text-xs text-ink-500 sm:col-span-2 dark:text-slate-400">
          Fine-grained Personal Access Token unter{' '}
          <a
            href="https://github.com/settings/personal-access-tokens"
            target="_blank"
            rel="noreferrer"
            className="text-brand-600 underline dark:text-brand-300"
          >
            github.com/settings/personal-access-tokens
          </a>{' '}
          erstellen und die Berechtigung <strong>Models: Read-only</strong> vergeben.
          Verfügbare Modelle:{' '}
          <a
            href="https://github.com/marketplace/models"
            target="_blank"
            rel="noreferrer"
            className="text-brand-600 underline dark:text-brand-300"
          >
            github.com/marketplace/models
          </a>
        </p>
      )}
      <div className="flex gap-2 sm:col-span-2">
        <button
          type="submit"
          disabled={!valid}
          className="rounded-lg bg-brand-600 px-4 py-2 font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
        >
          Speichern
        </button>
        {initial && (
          <button
            type="button"
            onClick={onClear}
            className="rounded-lg px-4 py-2 font-semibold text-red-700 ring-1 ring-red-300 hover:bg-red-50 dark:text-red-400 dark:ring-red-700 dark:hover:bg-red-900/30"
          >
            Verbindung löschen
          </button>
        )}
      </div>
    </form>
  )
}
