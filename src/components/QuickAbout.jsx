import React from "react";

export default function QuickAbout() {
    return(
        <div className=" xs:w-[90%] md:w-[80%] mr-auto xs:font-[400] 
        md:font-[400] xs:text-[17px] text-[rgba(0,0,0,0.7)] md:text-[15px] md:tracking-wide ">
            <p className="leading-[1.8]b text-justify "
            >👋. front-end software engineer. i curate aesthetically-pleasing
             stuff on the web, paying attention to accessibillity. i'm intrigued
              by amazing uis. i'm currently exploring <span className="italic font-['Helvetica'] font-[300]">react.js</span>  and everything around it.</p>
        </div>
    )
}