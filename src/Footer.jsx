import React from "react"
import Contact from './Contact'

export default function Footer() {
 
    return(
        <footer>
            <Contact />
            <div id="icons-container">
            <a href="https://www.twitter.com/amewuholali" target="_blank"><i class="fa-brands fa-twitter"></i></a>
            <a href=""><i target="_blank" class="fa-brands fa-instagram"></i></a>
            <a href=""><i target="_blank" class="fa-brands fa-linkedin"></i></a>
            <a href=""><i target="_blank" class="fa-brands fa-github"></i></a>
             </div>
             <cite>Designed and Built by holali.a</cite>
        </footer>
    )
}