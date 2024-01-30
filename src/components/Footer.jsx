import React, { useState } from "react"
import Rocket from "./Rocket"
import { Heart } from "lucide-react"

export default function Footer({pureColors}) {
const date = new Date();
const year = date.getFullYear()
console.log(year)

    return(
        <footer >
           <Rocket pureColors={pureColors}/>
            <cite 
            className="block font-[200] bottom-1 md:bottom-0 pt-12 text-[12px] mx-auto text-center  w-fit md:w-[30vw] "
            >Designed and Built by <bold className="font-[400]">myself</bold>.
            <span className="hidden md:inline-block"> Typeface in <span className="font-[400]" >Inter & Stretch Pro</span>. Colour inspo from <span className='font-[400]' >MonkeyType</span>. <span className="font-[400]" > Lucide</span> for icons and 
            special thanks to <span className="font-semibold" >God</span> for everything</span>
            </cite>

            <span className=" bottom-3 hidden left-1 md:flex items-center text-[13px] gap-1 ml-3">
                    <Heart fill="red" color="red" size={14}  /> {year}
                </span>
        </footer>
    )
}