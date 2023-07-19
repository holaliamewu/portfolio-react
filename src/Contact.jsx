import {useEffect, useRef} from "react";
import {motion, useInView} from 'framer-motion';

export default function Contact({pureColors, setView}){

    const ref = useRef(null);
    const isInView = useInView(ref ,{margin: '-50% 0% -50% 0%'})
    useEffect(() => {
        setView(isInView? true: false)  
    },[isInView])

const sayHiVariant = {
    hover:{
        boxShadow: `5px 5px 0 ` ,
        x: -1,
        y: -1
    },
    active:{
        boxShadow: `5px 5px 0 `,
        x: 0,
        y: 0
    }
}


    return(
        <div  id="contact" ref={ref}>
            <h4 id="contact-hd" style={pureColors}>03. Want To Get In Touch ?</h4>
            <p>Yes, I'm looking for a job so whether it's about it,<br/>
             a collaboration or you just want to say 'Hi👋',<br/> shoot it at me.
             I'll surely get back to you. </p>
            <motion.a 
            variants={sayHiVariant}
            whileHover='hover'
            whileTap='active'
            style={pureColors}
            href="mailto:me.amewu@gmail.com">Say Hi</motion.a>
        </div>
    )
}
