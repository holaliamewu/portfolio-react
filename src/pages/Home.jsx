import { useState, useEffect, useContext }  from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import QuickAboout from "../components/QuickAbout.jsx";

export default function Home() {

    return(
       
        <div
        className=" w-full md:h-[90vh] flex flex-col justify-center  ">

        
        
            <div className=" xs:mt-11 md:mt-[-50px] ">
                <h1 className="font-[900] text-[28px] md:text-[48px] text-center md:text-left mb-0" >
                    <span className="block my-[-26px] text-[50px] ">Amewu </span>Emmanuel Mensah.
                </h1>
                <h1 
                className="md:font-[700] font-[500] text-center md:text-left md:text-[18px]  mb-[40px]"
                 >Front—End Dev.</h1>
            </div>
            <QuickAboout />
            <h4 
            className='font-[700] mt-[50px] xs:w-[90%] mx-auto md:text-[22px] xs:text-[19px] py-2 text-cente md:text-left'
            >Writings</h4>
            <span className="flex justify-between md:w-[70%] xs:w-[90%] xs:mx-auto md:mx-0 " >
                <NavLink to='' className="font-[500] hover:underline " > ~ Demystefying React Context APIs</NavLink> 
                <h6 className="font-[500] text-[14.5px] underline ">In a bit</h6>  
            </span>
            <Footer />
        </div>
    )
}