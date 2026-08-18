import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from './pages/HomePage.tsx'
import { ProjectDetailPage } from './pages/ProjectDetailPage.tsx'
import { ScrollToTop } from './components/ScrollToTop.tsx'
import { CustomCursor } from './components/CustomCursor.tsx'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
