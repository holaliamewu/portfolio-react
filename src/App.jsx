import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import MainContent from './MainContent.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div id='app'>
  <Header/>
  <MainContent/>
  </div>
  </React.StrictMode>,
)
