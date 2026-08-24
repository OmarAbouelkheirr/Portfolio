import type { CSSProperties } from 'react'
import { useLanguage } from '../i18n/LanguageContext.tsx'

export function FlowDiagram({
  steps,
  tone,
}: {
  steps: string[]
  tone: string
}) {
  const { direction } = useLanguage()

  return (
    <div className="flow" style={{ '--flow-tone': tone } as CSSProperties}>
      {steps.map((step, index) => (
        <div className="flow-step" key={step}>
          <span className="flow-node" dir="auto">{step}</span>
          {index < steps.length - 1 && <span className="flow-arrow">{direction === 'rtl' ? '←' : '→'}</span>}
        </div>
      ))}
    </div>
  )
}
