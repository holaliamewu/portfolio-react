import { useState, useEffect, useContext }  from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import QuickAboout from "../components/QuickAbout.jsx";
import { blog } from "../resources/blogData.jsx";

export default function Home() {

    return(
       
        <div
        className=" w-full md:h-[90vh] flex flex-col justify-center  ">
            <div className=" xs:mt-11 md:mt-[50px] ">
                <h1 className="font-[900] md:text-left text-[28px] xs:mt-[10px] md:mt-1 md:text-[28px] text-center  mb-0" >Amewu Emmanuel Mensah. </h1>
                <h1 
                className="md:font-[800] font-[600] text-center md:text-left md:text-[19px]  mb-[40px]"
                 >Front—End Dev.</h1>
            </div>
            <QuickAboout />
            <h4 
            className='font-[700] mt-[50px] xs:w-[100%] mx-auto md:text-[22px] xs:text-[19px] py-2 text-cente md:text-left'
            >Writings</h4>
          { blog.map( blogpost => {
            return(
                <span className="flex justify-between md:w-[70%] text-[15px] xs:w-[90%] border-b p-1 xs:mx-auto md:mx-0 " >
                     <NavLink to={`blog${blogpost.link}`} className="font-[500] hover:underline " > ~ {blogpost.title}</NavLink> 
                     <h6 className="font-[500] text-[13.5px] underline text-right">{blogpost.releaseDate}</h6>  
                 </span>
            )
          }) 
        }
           
            <Footer />
        </div>
    )
}