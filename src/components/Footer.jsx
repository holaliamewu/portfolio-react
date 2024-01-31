import React, { useState } from "react"
import Rocket from "./Rocket"
import { Heart } from "lucide-react"

export default function Footer() {
const date = new Date();
const year = date.getFullYear()
console.log(year)

    return(
        <footer className="flex w-[50%] absolute bottom-1 justify-between items-center  mx-auto py-4  ">
           <Rocket />
           <span className=" hidden left-[25vw] md:flex items-center text-[13px] gap-1 ml-3">
                   <Heart fill="red" color="red" size={14}  /> {year}
               </span>
            <p 
            className="  font-[300]  text-[13px] mx-auto text-center  w-fit md:w-[50%] "
            >Designed and Built by <bold className="font-[400]">myself</bold>.
                <span className="hidden md:inline-block"> typeface in <span className="font-[400]" >Dosis</span> &
                <span className="font-[400]" > Lucide</span> for Icons.
                </span>
            </p>
            <div>.</div>
        </footer>
    )
}