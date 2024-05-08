import React, { useState } from "react"
import { Github, Heart, Instagram, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
const date = new Date();
const year = date.getFullYear()
console.log(year)

    return(
        <footer className="flex md:w-[100%] xs:w-[90vw] absolute xs:bottom-0 md:relative  xs:text-center justify-between items-center mt-16 mx-auto py-4 border-t ">
           <span className=" left-[25vw] flex items-center  md:flex text-[13px] gap-1 ml-3">
                   <Heart fill="red" color="red" size={14}  /> {year}
             </span>
             <span className="flex gap-5" >
             <a 
             href="mailto:me.amewu@gmail.com"
             target="_blank" >
                <Mail strokeWidth={1.3} size={18} />
             </a>
             <a 
             href="https://x.com/amewuholali_/" 
             target="_blank" >
                <Twitter strokeWidth={1.3} size={18} />
             </a>
             <a 
             href="https://instagram.com/amewu.holali" 
             target="_blank" >
                <Instagram strokeWidth={1.3} size={18} />
             </a>
             <a 
             href="https://www.linkedin.com/in/amewu-emmanuel-mensah/" 
             target="_blank" >
                <Linkedin strokeWidth={1.3} size={18} />
             </a>
             <a 
             href="https://www.github.com/holaliamewu" 
             target="_blank" >
                <Github strokeWidth={1.3} size={18} />
             </a>
             </span>
            
        </footer>
    )
}