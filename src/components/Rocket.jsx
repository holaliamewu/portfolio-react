import { useState } from 'react';
import { ChevronsUp } from 'lucide-react';
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
        onMouseOver={showRocketTT} 
        onMouseOut={removeRocketTT}
        onClick={rocketGo} 
        className="bg-red-500 fixed bottom-10 right-10  p-2 rounded-full hidden "
        style={pureColors}>
        <ChevronsUp />


        </div>
    )
}