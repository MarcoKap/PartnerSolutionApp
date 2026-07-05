import { useState } from 'react'

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={copy}
      className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
        copied
          ? 'bg-emerald-600 text-white'
          : 'bg-brand-600 text-white hover:bg-brand-700'
      }`}
    >
      {copied ? '✓ Kopiert' : 'Kopieren'}
    </button>
  )
}
