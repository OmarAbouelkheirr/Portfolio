import type { CSSProperties } from 'react'

export function FlowDiagram({
  steps,
  tone,
}: {
  steps: string[]
  tone: string
}) {
  return (
    <div className="flow" style={{ '--flow-tone': tone } as CSSProperties}>
      {steps.map((s, i) => (
        <div className="flow-step" key={s}>
          <span className="flow-node">{s}</span>
          {i < steps.length - 1 && <span className="flow-arrow">→</span>}
        </div>
      ))}
    </div>
  )
}
