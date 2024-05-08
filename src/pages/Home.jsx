import { useState, useEffect, useContext }  from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import QuickAboout from "../components/QuickAbout.jsx";
import { blog } from "../resources/blogData.jsx";


export default function Home() {

    return(
        <div
        className=" w-full md:h-[80vh] flex flex-col xs:mt-12 justify-center  ">
            <div className=" xs:mt-11 md:mt-[150px] mb-[20px] ">
                <h1 className="font-[700] md:text-left text-[28px] xs:mt-[10px] md:mt-1 md:text-[30px] text-center  mb-0" >Amewu Emmanuel Mensah </h1>
            </div>
            <QuickAboout />
            <h4 
            className='font-[600] mt-[50px] xs:w-[100%] mx-auto md:text-[20px] xs:text-[19px] mb-6 text-cente md:text-left'
            >Writings</h4>
          { blog.map( blogpost => {
            return(
                <span className="flex justify-between lg:w-[70%] text-[14px] xs:w-[90%] mb-3 text-[rgba(0,0,0,0.7)] hover:text-[#222] xs:mx-auto md:mx-0 " >
                     <NavLink to={`blog${blogpost.link}`} className="font-[400] hover:underline  " > {blogpost.title}</NavLink> 
                     <h6 className="font-[400] text-[13px] underline  text-right">{blogpost.releaseDate}</h6>  
                 </span>
            )
          }) 
        }
           
            <Footer />
        </div>
    )
}