import { useState, useEffect, useContext }  from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import QuickAboout from "../components/QuickAbout.jsx";

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
            <span className="flex justify-between md:w-[70%] text-[15px] xs:w-[90%] border-b p-1 xs:mx-auto md:mx-0 " >
                <NavLink to='' className="font-[500] hover:underline " > ~ Coding is not Hard: They lied and here's why.</NavLink> 
                <h6 className="font-[500] text-[13.5px] underline ">1 April, 2024.</h6>  
            </span>
            <span className="flex justify-between md:w-[70%] text-[15px] p-1 xs:w-[90%] xs:mx-auto md:mx-0 " >
                <NavLink to='' className="font-[500] hover:underline " > ~ Demystefying React Context APIs.</NavLink> 
                <h6 className="font-[500] text-[13.5px] underline ">In a bit.</h6>  
            </span>
            <Footer />
        </div>
    )
}