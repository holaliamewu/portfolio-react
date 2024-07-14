import { useState, useEffect, useContext }  from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import QuickAboout from "../components/QuickAbout.jsx";
import { blog } from "../resources/blogData.jsx";
import { Dot } from 'lucide-react'


export default function Home() {

    return(
        <div
        className=" w-full md:h-[80vh] flex flex-col xs:mt-12 justify-center  ">
            <div className=" xs:mt-11 md:mt-[80px] mb-[20px] ">
                <h1 className="font-[700] text-left text-[28px] md:text-[30px]  mb-0" >amewu emmanuel mensah </h1>
            </div>
            <QuickAboout />
            <h4 
            className='font-[600] mt-[50px] xs:w-[100%] mx-auto md:text-[20px] xs:text-[19px] mb-6 text-cente md:text-left'
            ><span className="hover:underline" >writings</span> and <span className="hover:underline">randoms</span>.</h4>
          { blog.map( blogpost => {
            return(
                <span className="flex justify-between lg:w-[70%] text-[14px] xs:w-[90%] mb-3 text-[rgba(0,0,0,0.7)] hover:text-[#222] xs:mx-auto md:mx-0 " >
                     <NavLink to={`${ blogpost.isRandom ? 'randoms' : 'blog'}${blogpost.link}`} className="flex font-[400]  " ><Dot />  {blogpost.title}</NavLink> 
                     <h6 className="font-[400] text-[13px]  text-right">{blogpost.releaseDate}</h6>  
                 </span>
            )
          }) 
        }
           
            <Footer />
        </div>
    )
}