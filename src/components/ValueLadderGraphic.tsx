import { valueLadder } from '../content/businessCase'

/** Value-Ladder als Treppen-Grafik: jede Stufe hebt Marge & Planbarkeit. */
export default function ValueLadderGraphic() {
  const steps = valueLadder
  const stepW = 210
  const stepH = 52
  const w = steps.length * stepW + 60
  const h = steps.length * stepH + 120

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="w-full"
      role="img"
      aria-label="Value-Ladder: vom Projekt zum Marketplace-Offering"
    >
      <defs>
        <linearGradient id="vl-step" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#21879d" />
          <stop offset="100%" stopColor="#196c80" />
        </linearGradient>
        <linearGradient id="vl-arrow" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <marker id="vl-head" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="#10b981" />
        </marker>
      </defs>

      {steps.map((s, i) => {
        const x = 20 + i * stepW
        const y = h - 60 - (i + 1) * stepH
        return (
          <g key={s.stage}>
            {/* Stufe */}
            <rect
              x={x}
              y={y}
              width={stepW - 14}
              height={h - 60 - y}
              rx="10"
              fill="url(#vl-step)"
              opacity={0.55 + i * 0.15}
            />
            {/* Beschriftung */}
            <text x={x + (stepW - 14) / 2} y={y + 26} textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">
              {s.stage}
            </text>
            <text x={x + (stepW - 14) / 2} y={y + 45} textAnchor="middle" fontSize="11" fill="#d5ecf1">
              {s.revenue.split('—')[0].split(',')[0]}
            </text>
          </g>
        )
      })}

      {/* Margen-Pfeil */}
      <path
        d={`M40 ${h - 70 - stepH} L ${w - 90} ${h - 78 - steps.length * stepH}`}
        stroke="url(#vl-arrow)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="1 9"
        markerEnd="url(#vl-head)"
        fill="none"
      />
      <text x={w - 30} y={h - 88 - steps.length * stepH} textAnchor="end" fontSize="13" fontWeight="700" fill="#10b981">
        Marge · Planbarkeit · Unternehmenswert
      </text>

      {/* Fundament-Linie */}
      <line x1="12" y1={h - 58} x2={w - 12} y2={h - 58} stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
      <text x={w / 2} y={h - 36} textAnchor="middle" fontSize="12" fill="#6b7379">
        Jede Stufe baut auf der vorherigen auf — der Einstieg ist jederzeit möglich
      </text>
    </svg>
  )
}
