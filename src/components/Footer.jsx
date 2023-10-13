import React, { useState } from "react"

export default function Footer({pureColors}) {
 const [rocket, setRocket] = useState(false);
const rocketBtn = document.querySelector('.fa-rocket')
function rocketGo() {
    window.scrollTo({top: 0, behavior: 'smooth'})
}

    function showRocketTT() {
        setRocket(true)
    }
    
    function removeRocketTT() {
        setRocket(false)
    }

    return(
        <footer>
            <div 
            onMouseOver={showRocketTT} 
            onMouseOut={removeRocketTT}
            style={pureColors}>
            <i class="fa-solid fa-rocket" onClick={rocketGo}></i><br/>
            {rocket && (<span id="tooltip-rocket" onClick={rocketGo}
            >umo, to the top!</span>)}
            </div>
            <cite 
            className="text-[12px] mx-auto inline-block"
            >Designed and Built by myself.</cite>
        </footer>
    )
}