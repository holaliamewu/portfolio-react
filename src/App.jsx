import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import MainContent from './MainContent.jsx'
import Footer from './Footer.jsx'

/* 
  TWEAKS TO MAKE TODAY:

    -correct the positioning and the size of the side-text.
    -try to reduce the 'brightness' of the font and also make it bolder.
    -add some friendly text to below of 'want to get in touch?'
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
