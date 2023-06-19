import React from "react"
import Contact from './Contact'

export default function Footer() {
 
const rocketBtn = document.querySelector('.fa-rocket')
function rocketGo() {
    window.scrollTo({top: 0, behavior: 'smooth'})
}
    return(
        <footer>
        <Contact />
        <div id="theRocket">
        <i class="fa-solid fa-rocket" onClick={rocketGo}></i>
        <span id="tooltip-rocket" >umo, to the top</span>
        </div>

            <div id="icons-container">
            <a href="https://www.twitter.com/amewuholali" target="_blank"><i class="fa-brands fa-twitter"></i></a>
            <a href="https://www.instagram.com/amewuholali/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/amewu-emmanuel-mensah/" ><i target="_blank" class="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/holaliamewu" target="_blank"><i class="fa-brands fa-github"></i></a>
             </div>
             <cite>Designed and Built by holali.a</cite>
        </footer>
    )
}