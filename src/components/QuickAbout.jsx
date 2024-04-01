import React from "react";

export default function QuickAboout() {
    return(
        <div className=" xs:w-[90%] md:w-full mx-auto xs:font-[400] md:font-[500] xs:text-[17px] md:text-[16px] tracking-wide ">
            <p className=" "
            >I curate aesthetically-pleasing stuff on the web, paying attention to accessibillity and code maintenability. </p> 
            <p className="mt-2" >I'm intrigued by amazing UIs. I'm currently exploring <span className="italic font-[500] text-[16.5px]">JavaScript</span> — <span className="italic font-[500] text-[16.5px]">Reactjs</span>  to be precise.</p>
            <p className="mt-2" > When I'm not being a dev, I'm definitely reading or watching the <a href="https://www.youtube.com/@sidemenreacts" className="md:underline " target="_blank" >Sidemen</a> or the <a href="https://youtube.com/@betasquad/" className="md:underline " target="_blank" >Beta Squad</a>.</p>
        </div>
    )
}