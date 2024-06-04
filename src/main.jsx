import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import { injectSpeedInsights  } from "@vercel/speed-insights/next"

injectSpeedInsights();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
