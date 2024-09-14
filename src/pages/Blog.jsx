import React from "react";
import { NavLink } from "react-router-dom";
import { Lollipop } from "lucide-react";

export default function Blog() {
    return (
        <div className="flex flex-col items-center mt-12 min-h-[80vh] ">
          <h4 className="mb-8 flex items-center text-[13px] gap-1" ><Lollipop size={20} color="gray" />bienvenue to where i share my voice.</h4>
          <span className="flex flex-col justify-between md:w-[100%] text-[15px] xs:w-[90%] border-b p-1 xs:mx-auto md:mx-0 " >
          <NavLink to='/blog/coding-is-not-hard/' 
          className=" text-xl font-black " > coding is not hard: they lied and here's why.</NavLink> 
          <h6 className="font-[500] text-md underline text-[rgba(0,0,0,0.5)] ">5 april, 2024.</h6>
          <h4 className="text-md my-3 text-[rgba(0,0,0,0.9)]" > I’m sure you’ve heard the cliché before: 'coding is hard.' almost every senior developer 
          i know says this at least once when giving advice to a newbie on breaking into tech. while there's a grain of truth in this cliché...</h4>  
      </span>
      <span className="flex flex-col justify-between md:w-[100%] text-[15px] p-1 xs:w-[90%] xs:mx-auto md:mx-0 " >
          <NavLink to='' className="font-black text-xl" >  demystifying react context apis.</NavLink> 
          <h6 className="font-[500] text-md underline text-[rgba(0,0,0,0.5)] ">In a bit.</h6>  
          <h4 className="text-md my-3 text-[rgba(0,0,0,0.9)]" >coming soon...</h4>  
      </span>
    </div> )
}