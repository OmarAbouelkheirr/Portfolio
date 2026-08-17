import { Link } from 'react-router-dom'
import { CATEGORIES } from './mockData.ts'
import './exploreIndex.css'

const round1 = [
  {
    id: 'api-reference',
    name: 'API Reference',
    world: 'OpenAPI documentation',
    line: 'Projects as endpoints in a living API reference.',
    tags: ['docs layout', 'method chips', 'mono paths', 'light ground'],
    accent: '#2456f0',
  },
  {
    id: 'editorial',
    name: 'Editorial Portfolio',
    world: 'Premium magazine',
    line: 'Projects as features in a designed publication.',
    tags: ['serif display', 'masthead', 'spreads', 'warm paper'],
    accent: '#a3412c',
  },
  {
    id: 'technical-spec',
    name: 'Technical Spec Sheet',
    world: 'Engineered datasheet',
    line: 'Projects as precision spec sheets and catalog entries.',
    tags: ['hairline tables', 'condensed labels', 'spec fields', 'paper'],
    accent: '#3a6ea5',
  },
  {
    id: 'category-standard',
    name: 'Category Standard',
    world: 'Clean product portfolio',
    line: 'The familiar premium portfolio, executed well.',
    tags: ['card grid', 'pill filters', 'soft shadows', 'white'],
    accent: '#2563eb',
  },
]

const round2 = [
  {
    id: 'cinematic-product',
    name: 'Cinematic Product',
    world: 'Premium product story',
    line: 'Full-width imagery, filmic reveals, and a strong featured-project narrative.',
    tags: ['staged scenes', 'parallax', 'warm ink & bone', 'strong rhythm'],
    accent: '#c08b3e',
  },
  {
    id: 'spatial-editorial',
    name: 'Spatial Editorial',
    world: 'Art-directed publication',
    line: 'Asymmetric chapters, overlapping media, and careful spatial composition.',
    tags: ['serif display', 'chapter numbers', 'clip reveals', 'deep whitespace'],
    accent: '#a3412c',
  },
  {
    id: 'motion-dark',
    name: 'Motion Dark',
    world: 'Premium dark surface',
    line: 'Expensive, calm, technical: spotlight, parallax, and restrained accent.',
    tags: ['dark UI', 'cursor spotlight', 'soft depth', 'mono meta'],
    accent: '#c9a86a',
  },
  {
    id: 'interactive-studio',
    name: 'Interactive Studio',
    world: 'Expressive studio',
    line: 'Grid-breaking composition, hover-reveal cards, bold condensed identity.',
    tags: ['bento layout', 'hover reveals', 'strong type', 'bold accent'],
    accent: '#ff5a1f',
  },
]

const round3 = [
  {
    id: 'immersive-product',
    name: 'Immersive Product',
    world: 'Deep, cinematic product storytelling',
    line: 'A dark portfolio that unfolds while scrolling — layered depth, big project stages, and rich motion.',
    tags: ['deep ink & brass', 'unfolding sections', 'product stages', 'cursor light'],
    accent: '#d9a441',
  },
  {
    id: 'dynamic-canvas',
    name: 'Dynamic Canvas',
    world: 'Curated, expressive composition',
    line: 'A living canvas of mixed project scales and overlaps, with a sticky context rail and evolving layouts.',
    tags: ['warm paper', 'mixed-scale grid', 'sticky index', 'canvas feel'],
    accent: '#2456f0',
  },
  {
    id: 'luminous-editorial',
    name: 'Luminous Editorial',
    world: 'Bright, tactile art direction',
    line: 'A warm, spacious editorial world — serif display, masked media reveals, quiet refined motion.',
    tags: ['warm paper', 'serif display', 'masked reveals', 'quiet motion'],
    accent: '#2e5d43',
  },
  {
    id: 'precision-motion',
    name: 'Precision Motion',
    world: 'Engineered product-system',
    line: 'A disciplined systems aesthetic: indexed sections, expanding metadata rows, and precise engineering motion.',
    tags: ['hairline grids', 'section indexing', 'spec frames', 'engineered motion'],
    accent: '#2b6cb0',
  },
]

function ConceptGrid({ concepts, round }: { concepts: typeof round1; round: string }) {
  return (
    <div className="exi-grid">
      {concepts.map((c, i) => (
        <Link to={`/explore/${c.id}`} className="exi-card" key={c.id}>
          <span className="exi-num" aria-hidden="true">
            {round} · {String(i + 1).padStart(2, '0')}
          </span>
          <h2>{c.name}</h2>
          <p className="exi-world">{c.world}</p>
          <p className="exi-line">{c.line}</p>
          <ul className="exi-tags">
            {c.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <span className="exi-go" style={{ color: c.accent }}>
            Open prototype →
          </span>
        </Link>
      ))}
    </div>
  )
}

function ExploreIndex() {
  return (
    <div className="exi">
      <header className="exi-head">
        <p className="exi-eyebrow">Design exploration · twelve concepts, one product</p>
        <h1>Choose the visual world</h1>
        <p className="exi-intro">
          Twelve isolated React prototypes of the same portfolio — identical mock content and
          information architecture, different visual systems. Every prototype is fully responsive
          and includes a sample project detail page. Nothing is chosen or merged yet.
        </p>
        <p className="exi-note">
          Categories across all concepts: <strong>{CATEGORIES.join(' · ')}</strong>. Technology
          names are tags, not filters.
        </p>
      </header>

      <section className="exi-round">
        <h2 className="exi-round-title">Round 1</h2>
        <ConceptGrid concepts={round1} round="R1" />
      </section>

      <section className="exi-round">
        <h2 className="exi-round-title">Round 2</h2>
        <ConceptGrid concepts={round2} round="R2" />
      </section>

      <section className="exi-round">
        <h2 className="exi-round-title">Round 3</h2>
        <ConceptGrid concepts={round3} round="R3" />
      </section>
    </div>
  )
}

export default ExploreIndex