import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Extension from './pages/Extension'
import Uninstall from './pages/Uninstall'
import HowItWorks from './pages/HowItWorks'
import Premium from './pages/Premium'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Review from './pages/Review'
import Success from './pages/Success'
import './index.css'
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/500.css'
import '@fontsource/open-sans/700.css'

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <BrowserRouter basename="https://leapfrog.works">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/extension" element={<Extension />} />
        <Route path="/extension-uninstall" element={<Uninstall />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/review" element={<Review />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
