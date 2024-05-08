import React from "react";
import Projects from "../components/Projects";
import { HardHat } from "lucide-react";

export default function ProjectContainer () {
    return(
        <div className="w-[100%] mx-auto   " >
        <h4 
        className='flex gap-1 items-center font-[700] text-[17px] xs:text-[19px] py-2 text-center md:text-left mt-[100px]'
        >
                <HardHat size={20} strokeWidth={0.5} />
                  Projects.</h4>
                  <span className="grid xs:grid-cols-2 md:grid-cols-3 gap-2 " >
                    <Projects />
                </span>
        </div>
        )
}