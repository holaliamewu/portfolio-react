import react from "react";
import { PhoneCall } from "lucide-react";
import {motion} from 'framer-motion';

export default function Contact({ pureColors }){

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
        <div 
        className='w-[80%] md:w-[450px] mx-auto text-center pt-[50px] md:pt-[100px] md:mb-[60px] '>
            <span className="block mx-auto w-fit mb-[100px]">
                <PhoneCall size={48} strokeWidth={0.25} />  
            </span>
            <h4 className="font-[700] text-[17px] py-2" 
            style={pureColors}>03. Want To Get In Touch ?</h4>
            <p className="font-[200] text-[14px] text-center tracking-wider">Yes, I'm looking for a job so whether it's about it,
             a collaboration or you just want to say <span className='italic'>' Hi👋 '</span>, shoot it at me.
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
