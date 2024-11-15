import React  from "react";
import { NavLink } from "react-router-dom";
import QuickAboout from "../components/QuickAbout.jsx";
import { blog } from "../resources/blogData.js";
import Experiences from "../components/Experiences.jsx";
// import MusicStand from "../components/MusicStand.jsx";
import Contact from "../components/Contact.jsx";


export default function Home() {

    return(
        <div className="mx-auto w-[90vw] max-w-[500px] text-sm font-[400] leading-[1.8] md:leading-[2] text-zinc-500 min-h-[100vh] font-['manrope'] flex flex-col mt-16  ">
            <div className=" ">
                <h1 className="font-[900] text-zinc-800 text-left text-2xl  mb-0" >amewu emmanuel mensah </h1>
            </div>
            <QuickAboout />
            {/* {<MusicStand />}             */}
<h4 
            className='mt-[50px] xs:w-[100%] mx-auto text-md mb-4 text-zinc-900 font-semibold '
            ><span className="hover:underline" >writings</span> and <span className="hover:underline">randoms</span>.</h4>
          { blog.map( blogpost => {
            return(
                <span key={ blogpost.link } className="flex justify-between  text-sm hover:text-zinc-800 w-[100%] mb-2 mx-auto md:mx-0 " >
                     <NavLink to={`${ blogpost.isRandom ? 'randoms' : 'blog'}${blogpost.link}`} className=" " >{blogpost.title}</NavLink> 
                     <h6 className="text-right">{blogpost.releaseDate}</h6>  
                 </span>
            )
          }) 
        }
        <Experiences />
        <Contact />
        </div>
    )
}