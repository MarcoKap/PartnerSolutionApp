export interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export interface AiConfig {
  provider: 'azure' | 'openai'
  /** Azure: https://<resource>.openai.azure.com — OpenAI-kompatibel: Basis-URL (z.B. https://api.openai.com) */
  endpoint: string
  /** Azure: Deployment-Name — OpenAI: Modellname (z.B. gpt-4o-mini) */
  model: string
  apiKey: string
}

const STORAGE_KEY = 'psa-ai-config'

export function loadConfig(): AiConfig | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as AiConfig) : null
  } catch {
    return null
  }
}

export function saveConfig(config: AiConfig) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config))
}

export function clearConfig() {
  localStorage.removeItem(STORAGE_KEY)
}

/** Sendet eine Chat-Anfrage direkt aus dem Browser (Key verlässt nur Richtung API den Rechner). */
export async function chat(config: AiConfig, messages: ChatMessage[]): Promise<string> {
  const base = config.endpoint.replace(/\/+$/, '')

  const url =
    config.provider === 'azure'
      ? `${base}/openai/deployments/${config.model}/chat/completions?api-version=2024-10-21`
      : `${base}/v1/chat/completions`

  const headers: Record<string, string> = { 'Content-Type': 'application/json' }
  if (config.provider === 'azure') {
    headers['api-key'] = config.apiKey
  } else {
    headers['Authorization'] = `Bearer ${config.apiKey}`
  }

  const body: Record<string, unknown> = { messages }
  if (config.provider === 'openai') {
    body.model = config.model
  }

  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`API-Fehler ${res.status}: ${text.slice(0, 300)}`)
  }

  const data = (await res.json()) as {
    choices?: { message?: { content?: string } }[]
  }
  const content = data.choices?.[0]?.message?.content
  if (!content) throw new Error('Leere Antwort von der API erhalten.')
  return content
}

export const SYSTEM_PROMPT = `Du bist ein erfahrener Partner Solution Architect bei Microsoft mit
Schwerpunkt Data Security und AI Security (Microsoft Purview).
Du hilfst Microsoft-Partnern, standardisierte Beratungs- und
Managed-Service-Lösungen zu entwickeln.

Arbeitsweise:
- Kläre bei Lösungsideen zuerst: Kundenproblem, Zielkunde, Lizenzsituation
- Empfiehl konkrete Purview-Komponenten (Information Protection, DLP,
  Insider Risk Management, DSPM for AI, Audit, eDiscovery)
- Bewerte Paketierbarkeit (Festpreis-Fähigkeit) und Marketplace-Eignung
  (Consulting Service vs. SaaS, Co-Sell, MACC)
- Denke in der Value-Ladder: Assessment → Quickstart → Managed Service
- Antworte auf Deutsch, strukturiert und prägnant`
