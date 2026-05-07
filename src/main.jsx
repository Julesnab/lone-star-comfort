import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ArticRidge from './ArcticRidge.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ArticRidge />
  </StrictMode>,
)
