import react from "react";
import { PhoneCall, Instagram, Twitter, Github, Linkedin } from "lucide-react";
import {motion} from 'framer-motion';

export default function Contact(){

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
        className=' flex flex-col xs:mt-[50px] justify-center items-center w-[80%] md:w-[350px] mx-auto text-center pt-[50px] md:pt-[70px] md:mb-[60px] '>
            <span className="block mx-auto w-fit mb-[20px]">
                <PhoneCall size={60} strokeWidth={0.5} />  
            </span>
            <h4 className="font-[700] text-[17px] py-2" 
            >Want To Get In Touch ?</h4>
            <p className="font-[400] text-[15px] text-center tracking-wider">Yes, I'm looking for a job so whether it's about it,
             a collaboration or you just want to say <span className=' font-[600] italic'> "Hi👋"</span>, shoot it at me.
             I'll surely get back to you. </p>
            <motion.a 
            className='inline-block rounded border-teal-600 text-[13px] tracking-wider my-6 border py-2 px-3'
            variants={sayHiVariant}
            whileHover='hover'
            whileTap='active'
            href="mailto:me.amewu@gmail.com">Say Hi</motion.a>
            <h3 className="font-semibold mb-5 " >or</h3>
            <span className="flex justify-around w-[50%] mx-auto " >
                <a 
                className=" p-1 bg-teal-50 hover:bg-teal-100 rounded-md " 
                href="https://instagram.com/amewu.holali" 
                target="_blank" >
                    <Instagram strokeWidth={1} />
                </a>
                <a 
                className=" p-1 bg-teal-50 hover:bg-teal-100 rounded-md " 
                href="https://x.com/amewuholali/" 
                target="_blank" >
                    <Twitter strokeWidth={1} />
                </a>
                <a 
                className=" p-1 bg-teal-50 hover:bg-teal-100 rounded-md " 
                href="https://www.github.com/holaliamewu" 
                target="_blank" >
                    <Github strokeWidth={1} />
                </a>
                <a 
                className=" p-1 bg-teal-50 hover:bg-teal-100 rounded-md " 
                href="https://www.linkedin.com/in/amewu-emmanuel-mensah/" 
                target="_blank" >
                    <Linkedin strokeWidth={1} />
                </a>
            </span>
        </div>
    )
}
