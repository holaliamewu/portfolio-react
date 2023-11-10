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
        <div ref={ref} 
        className='w-[90%] mx-auto text-center pt-[200px] '>
            <h4 className="font-[500] text-[15px] py-2" 
            style={pureColors}>03. Want To Get In Touch ?</h4>
            <p className="font-[300] text-[14px]">Yes, I'm looking for a job so whether it's about it,<br/>
             a collaboration or you just want to say 'Hi👋',<br/> shoot it at me.
             I'll surely get back to you. </p>
            <motion.a 
            className='inline-block rounded text-[12px] my-6 border py-2 px-3'
            variants={sayHiVariant}
            whileHover='hover'
            whileTap='active'
            style={pureColors}
            href="mailto:me.amewu@gmail.com">Say Hi</motion.a>
        </div>
    )
}
