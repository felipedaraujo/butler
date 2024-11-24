import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Extension from './Extension'
import ExtensionUninstall from './ExtensionUninstall'
import HowItWorks from './HowItWorks'
import Privacy from './Privacy'
import Success from './Success'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/extension" element={<Extension />} />
        <Route path="/extension-uninstall" element={<ExtensionUninstall />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
