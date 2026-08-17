import { Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './shared.tsx'
import ExploreIndex from './ExploreIndex.tsx'
import ApiReference from './api-reference/ApiReference.tsx'
import ApiReferenceDetail from './api-reference/ApiReferenceDetail.tsx'
import Editorial from './editorial/Editorial.tsx'
import EditorialDetail from './editorial/EditorialDetail.tsx'
import TechnicalSpec from './technical-spec/TechnicalSpec.tsx'
import TechnicalSpecDetail from './technical-spec/TechnicalSpecDetail.tsx'
import CategoryStandard from './category-standard/CategoryStandard.tsx'
import CategoryStandardDetail from './category-standard/CategoryStandardDetail.tsx'
import { ScrollToTop as Round2ScrollToTop } from './round2/shared.tsx'
import CinematicProduct from './round2/cinematic-product/CinematicProduct.tsx'
import CinematicProductDetail from './round2/cinematic-product/CinematicProductDetail.tsx'
import SpatialEditorial from './round2/spatial-editorial/SpatialEditorial.tsx'
import SpatialEditorialDetail from './round2/spatial-editorial/SpatialEditorialDetail.tsx'
import MotionDark from './round2/motion-dark/MotionDark.tsx'
import MotionDarkDetail from './round2/motion-dark/MotionDarkDetail.tsx'
import InteractiveStudio from './round2/interactive-studio/InteractiveStudio.tsx'
import InteractiveStudioDetail from './round2/interactive-studio/InteractiveStudioDetail.tsx'
import { ScrollToTop as Round3ScrollToTop } from './round3/shared.tsx'
import ImmersiveProduct from './round3/immersive-product/ImmersiveProduct.tsx'
import ImmersiveProductDetail from './round3/immersive-product/ImmersiveProductDetail.tsx'
import DynamicCanvas from './round3/dynamic-canvas/DynamicCanvas.tsx'
import DynamicCanvasDetail from './round3/dynamic-canvas/DynamicCanvasDetail.tsx'
import LuminousEditorial from './round3/luminous-editorial/LuminousEditorial.tsx'
import LuminousEditorialDetail from './round3/luminous-editorial/LuminousEditorialDetail.tsx'
import PrecisionMotion from './round3/precision-motion/PrecisionMotion.tsx'
import PrecisionMotionDetail from './round3/precision-motion/PrecisionMotionDetail.tsx'

function ExploreRoutes() {
    return (
        <>
            <ScrollToTop />
            <Round2ScrollToTop />
            <Round3ScrollToTop />
            <Routes>
                <Route index element={<ExploreIndex />} />
                <Route path="api-reference" element={<ApiReference />} />
                <Route path="api-reference/projects/:projectId" element={<ApiReferenceDetail />} />
                <Route path="editorial" element={<Editorial />} />
                <Route path="editorial/projects/:projectId" element={<EditorialDetail />} />
                <Route path="technical-spec" element={<TechnicalSpec />} />
                <Route path="technical-spec/projects/:projectId" element={<TechnicalSpecDetail />} />
                <Route path="category-standard" element={<CategoryStandard />} />
                <Route path="category-standard/projects/:projectId" element={<CategoryStandardDetail />} />
                <Route path="cinematic-product" element={<CinematicProduct />} />
                <Route path="cinematic-product/projects/:projectId" element={<CinematicProductDetail />} />
                <Route path="spatial-editorial" element={<SpatialEditorial />} />
                <Route path="spatial-editorial/projects/:projectId" element={<SpatialEditorialDetail />} />
                <Route path="motion-dark" element={<MotionDark />} />
                <Route path="motion-dark/projects/:projectId" element={<MotionDarkDetail />} />
                <Route path="interactive-studio" element={<InteractiveStudio />} />
                <Route path="interactive-studio/projects/:projectId" element={<InteractiveStudioDetail />} />
                <Route path="immersive-product" element={<ImmersiveProduct />} />
                <Route path="immersive-product/projects/:projectId" element={<ImmersiveProductDetail />} />
                <Route path="dynamic-canvas" element={<DynamicCanvas />} />
                <Route path="dynamic-canvas/projects/:projectId" element={<DynamicCanvasDetail />} />
                <Route path="luminous-editorial" element={<LuminousEditorial />} />
                <Route path="luminous-editorial/projects/:projectId" element={<LuminousEditorialDetail />} />
                <Route path="precision-motion" element={<PrecisionMotion />} />
                <Route path="precision-motion/projects/:projectId" element={<PrecisionMotionDetail />} />
            </Routes>
        </>
    )
}

export default ExploreRoutes