import React from "react"
import Contact from './Contact'

export default function Footer() {
 
    return(
        <footer>
            <Contact />
            <div id="icons-container">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github"></i>
             </div>
             <cite>Designed and built by holali.a</cite>
        </footer>
    )
}