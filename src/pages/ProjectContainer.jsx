import React from "react";
import Projects from "../components/Projects";
import { HardHat } from "lucide-react";

export default function ProjectContainer () {
    return(
        <div className="w-[100%] mx-auto   " >
            <span className="flex justify-center mt-[50px] mb-[50px] " >
                <HardHat size={60} strokeWidth={0.5} />
            </span>
            <h4 
                className='font-[700] text-[17px] xs:text-[19px] py-2 text-center md:text-left'
                  >Projects.</h4>
                  <span className="" >
                    <span className="" ></span>
                    <span className="" ></span>
                    <span className="" ></span>
                  </span>
                  <span className="grid xs:grid-cols-2 md:grid-cols-3 gap-2 " >
                    <Projects />
                </span>
        </div>
        )
}