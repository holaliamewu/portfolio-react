import React, { useState } from "react"
import Rocket from "./Rocket"

export default function Footer({pureColors}) {


    return(
        <footer>
           <Rocket pureColors={pureColors}/>
            <cite 
            className="block pt-12 text-[12px] mx-auto text-center "
            >Designed and Built by <bold className="font-semibold">myself</bold>.</cite>
        </footer>
    )
}