import React  from "react";
import { NavLink } from "react-router-dom";
import QuickAboout from "../components/QuickAbout.jsx";
import { blog } from "../resources/blogData.jsx";
import { Dot } from 'lucide-react'


export default function Home() {

    return(
        <div
        className=" w-full h-[80vh] flex flex-col justify-center  ">
            <div className=" mb-3 ">
                <h1 className="font-[900] text-left text-[28px] md:text-[30px]  mb-0" >amewu emmanuel mensah </h1>
            </div>
            <QuickAboout />
            <h4 
            className='font-[600] mt-[50px] xs:w-[100%] mx-auto text-md mb-4 text-cente md:text-left'
            ><span className="hover:underline" >writings</span> and <span className="hover:underline">randoms</span>.</h4>
          { blog.map( blogpost => {
            return(
                <span key={ blogpost.link } className="flex justify-between  text-md w-[100%] mb-2 text-[rgba(0,0,0,0.7)] hover:text-[#222] mx-auto md:mx-0 " >
                     <NavLink to={`${ blogpost.isRandom ? 'randoms' : 'blog'}${blogpost.link}`} className="flex font-[500]  " ><Dot />  {blogpost.title}</NavLink> 
                     <h6 className="font-[500] text-md  text-right">{blogpost.releaseDate}</h6>  
                 </span>
            )
          }) 
        }
        </div>
    )
}