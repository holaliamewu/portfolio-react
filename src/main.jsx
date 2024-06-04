import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import { SpeedInsights  } from "@vercel/speed-insights/next"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SpeedInsights />
    <App />
  </React.StrictMode>,
)
