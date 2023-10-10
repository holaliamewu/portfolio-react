import React from 'react'
import ReactDOM from 'react-dom/client'
import MainContent from './components/MainContent.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='font-["Inter"] w-[100vw] box-border'>
      <MainContent/>
    </div>
  </React.StrictMode>,
)
