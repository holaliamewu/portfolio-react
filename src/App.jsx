import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import MainContent from './MainContent.jsx'
import Footer from './Footer.jsx'

/* 
  TWEAKS TO MAKE TODAY:
    -make the 'say hello' button work.
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div id='app'>
    <Header />
    <MainContent />
    <Footer />
  </div>
  </React.StrictMode>,
)
