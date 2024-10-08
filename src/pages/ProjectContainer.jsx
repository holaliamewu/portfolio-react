import React from "react";
import Projects from "../components/Projects";
import { HardHat } from "lucide-react";

export default function ProjectContainer () {
    return(
        <div className="w-[100%] mx-auto   " >
        <h4 
        className='flex gap-1 items-center font-[900] text-xl py-2 text-center md:text-left mt-[100px] '
        >
                <HardHat size={20} strokeWidth={0.5} />
                  projects.</h4>
                  <p className="text-[14px] text-[gray] mb-[50px]" >stuff i worked on. </p>
                  <span className="grid xs:grid-cols-2 md:grid-cols-3 gap-2 " >
                    <Projects />
                </span>
        </div>
        )
}