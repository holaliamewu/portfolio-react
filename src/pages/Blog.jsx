import React from "react";
import { NavLink } from "react-router-dom";
import { Lollipop, Scroll } from "lucide-react";

export default function Blog() {
    return (
        <div className="flex flex-col items-center mt-12 min-h-[80vh] ">
          <h4 className="mb-8 flex items-center gap-1" ><Lollipop size={20} />Bienvenue to where i share my voice on <span className="italic" >important issues.</span></h4>
          <span className="flex flex-col justify-between md:w-[70%] text-[15px] xs:w-[90%] border-b p-1 xs:mx-auto md:mx-0 " >
          <NavLink to='/blog/coding-is-not-hard/' className="hover:underline text-2xl font-bold " > ~ Coding is not Hard: They lied and here's why.</NavLink> 
          <h6 className="font-[500] text-[13.5px] underline ">2 April, 2024.</h6>
          <h4 className="text-sm my-3" > I’m sure you’ve heard the cliché before: 'Coding is hard.' Almost every senior developer 
          I know says this at least once when giving advice to a newbie on breaking into tech and 
          landing their first job. While there's a grain of truth in this cliché...</h4>  
      </span>
      <span className="flex flex-col justify-between md:w-[70%] text-[15px] p-1 xs:w-[90%] xs:mx-auto md:mx-0 " >
          <NavLink to='' className="font-[500] hover:underline text-2xl font-bold " > ~ Demystefying React Context APIs.</NavLink> 
          <h6 className="font-[500] text-[13.5px] underline ">In a bit.</h6>  
      </span>
        </div> )
}