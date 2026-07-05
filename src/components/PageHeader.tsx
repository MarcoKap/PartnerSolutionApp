interface Props {
  eyebrow?: string
  title: string
  intro?: string
}

export default function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <p className="mb-1 text-xs font-semibold tracking-wide text-brand-600 uppercase">
          {eyebrow}
        </p>
      )}
      <h1 className="text-2xl font-semibold sm:text-3xl">{title}</h1>
      {intro && <p className="mt-3 max-w-3xl text-ink-700">{intro}</p>}
    </div>
  )
}
