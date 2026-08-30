import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/main.css'
import './styles/localization.css'
import App from './App.tsx'
import { profile } from './data/portfolioData.ts'

profile.name = 'Omar Abouelkhier'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
