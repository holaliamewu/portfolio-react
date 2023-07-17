import React from "react";
import {motion} from 'framer-motion';

export default function Contact({pureColors}){

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
        <div  id="contact">
            <h4 id="contact-hd" style={pureColors}>03. Want To Get In Touch ?</h4>
            <p>Yes, I'm looking for a job so whether it's about it,
             a collaboration or you just want to say Hi. Shoot me a 'hi'.
              I'll do everything possible to get back to you</p>
            <motion.a 
            variants={sayHiVariant}
            whileHover='hover'
            whileTap='active'
            style={pureColors}
            href="mailto:me.amewu@gmail.com">Say Hi</motion.a>
        </div>
    )
}
