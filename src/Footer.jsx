import React from "react"
import Contact from './Contact'

export default function Footer({pureColors, darkMode}) {
 
const rocketBtn = document.querySelector('.fa-rocket')
function rocketGo() {
    window.scrollTo({top: 0, behavior: 'smooth'})
}
    return(
        <footer>
        <Contact pureColors={pureColors} darkMode={darkMode}/>
        <div id="theRocket">
        <i class="fa-solid fa-rocket" onClick={rocketGo}></i>
        <span id="tooltip-rocket" onClick={rocketGo}>umo, to the top</span>
        </div>
        <cite>designed and built by yours truely.</cite>
        </footer>
    )
}