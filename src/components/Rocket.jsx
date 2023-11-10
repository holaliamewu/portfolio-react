import { useState } from 'react';
import { motion, useScroll } from "framer-motion"

export default function Rocket({pureColors}) {
    
    const { scrollYProgress } = useScroll()
    const [rocket, setRocket] = useState(false);
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
        <div 
        className="inline-block fixed bottom-10 right-10  p-2 rounded-full "
        style={pureColors}>
        <i 
        onMouseOver={showRocketTT} 
        onMouseOut={removeRocketTT}
        class="hidden md:block fa-solid fa-rocket rotate-[315deg]" 
        onClick={rocketGo}></i>


        </div>
    )
}