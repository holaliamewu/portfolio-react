import React, { useState } from "react"
import Rocket from "./Rocket"
import { Heart } from "lucide-react"

export default function Footer() {
const date = new Date();
const year = date.getFullYear()
console.log(year)

    return(
        <footer className="flex md:w-[50%] xs:w-[90vw] absolute bottom-1 xs:text-center md:justify-between items-center  mx-auto py-4  ">
           <Rocket />
           <span className=" left-[25vw] flex items-center xs:hidden md:flex text-[13px] gap-1 ml-3">
                   <Heart fill="red" color="red" size={14}  /> {year}
               </span>
            <p 
            className="  font-[400]  text-[13px] mx-auto text-center  w-fit md:w-[50%] "
            >Designed and Built by <span className="font-[600]">myself</span> .
                <span className="hidden md:inline-block"> Typeface in <a href="https://fonts.google.com/specimen/Dosis" target="_blank" className="font-[400]" >Dosis</a> 
                <a href="https://lucide.dev/icons/" target="_blank" className="font-[600]" > Lucide</a> for Icons.
                </span>
            </p>
            <div className=" xs:hidden  " >.</div>
        </footer>
    )
}