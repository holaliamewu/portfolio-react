import React, { useState } from "react"
import { Heart } from "lucide-react"

export default function Footer() {
const date = new Date();
const year = date.getFullYear()
console.log(year)

    return(
        <footer className="flex md:w-[100%] xs:w-[90vw] xs:text-center md:justify-between items-center mt-16 mx-auto py-4 border-t ">
           <span className=" left-[25vw] flex items-center xs:hidden md:flex text-[13px] gap-1 ml-3">
                   <Heart fill="red" color="red" size={14}  /> {year}
               </span>
            <p 
            className="  font-[400]  text-[13px] mx-auto text-center  w-fit md:w-[50%] "
            >By myself, using <a href="https://fonts.google.com/specimen/Dosis" target="_blank" className="font-[400]" >Dosis</a> and 
                <a href="https://lucide.dev/icons/" target="_blank" > Lucide Icons</a>.
            </p>
        </footer>
    )
}