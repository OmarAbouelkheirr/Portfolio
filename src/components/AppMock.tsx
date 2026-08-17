import type { CSSProperties } from 'react'
import { useMemo } from 'react'

export function AppMock({
  tone,
  tall = false,
  seed = 'proj',
}: {
  tone: string
  tall?: boolean
  seed?: string
}) {
  const bars = useMemo(() => {
    const hash = Array.from(seed).reduce((a, c) => a + c.charCodeAt(0), 0)
    return [0, 1, 2, 3, 4, 5].map((i) => 24 + ((hash >> (i * 2)) % 64))
  }, [seed])
  return (
    <div className="appmock" style={{ '--mock-tone': tone } as CSSProperties}>
      <div className="appmock-chrome">
        <span className="appmock-dot"></span>
        <span className="appmock-dot"></span>
        <span className="appmock-dot"></span>
      </div>
      <div className="appmock-body">
        <div className="appmock-side"></div>
        <div className="appmock-main">
          <div className="appmock-head">
            <span className="appmock-headline"></span>
            <span className="appmock-headline appmock-headline-short"></span>
          </div>
          <div className="appmock-kpis">
            <span className="appmock-kpi"></span>
            <span className="appmock-kpi"></span>
            <span className="appmock-kpi"></span>
          </div>
          <div className="appmock-chart" style={tall ? { height: 150 } : undefined}>
            {bars.map((h, i) => (
              <span className="appmock-bar" style={{ height: h }} key={i}></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
