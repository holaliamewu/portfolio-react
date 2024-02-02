import { useState, useEffect, useContext }  from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import QuickAboout from "../components/QuickAbout.jsx";
import navData from "../resources/navData.jsx";
import { SeeMenuContext } from "./Layout.jsx";

export default function Home() {
    const [ seeMobileMenu, setSeeMobileMenu ] = useContext(SeeMenuContext);
    const mobileLinkButtons = navData.map( link => (
        <div>
            <NavLink 
                style={ 
                ({ isActive }) => {
                    return {
                        backgroundColor: isActive ? '#99f6e4' : 'rgba(204,251,241,0.46)',
                        fontWeight: isActive ? '500' : '400',
                    }}}
                    className='px-[6px] py-[1px] text-teal-600 inline-block w-full '
                    key={ link.key} 
                    to={link.link} 
                    > {link.title} </NavLink> 
                    < hr className=" bg-teal-800 w-[90%] mx-auto " />
                </div>
      ))

    return(
       
        <div
        className=" w-full md:h-[90vh] flex flex-col justify-center  ">

        { seeMobileMenu && <div 
            className=" absolute top-12 w-[70px] rounded-md right-7 " >
            {mobileLinkButtons}
        </div>}
        
            <div className=" xs:mt-11 md:mt-[-100px] ">
                <h1 className="font-[900] text-[28px] md:text-[48px] text-center md:text-left mb-0" >
                    <span className="block my-[-26px] text-[50px] ">Amewu </span>Emmanuel Mensah.
                </h1>
                <h1 
                className="md:font-[700] font-[300] text-center md:text-left md:text-[18px]  mb-[40px]"
                 >Front—End Dev.</h1>
            </div>
            <QuickAboout />
            <h4 
            className='font-[700] mt-10 text-[17px] xs:text-[19px] py-2 text-center md:text-left'
            >Writings</h4>
            <span className="flex justify-between md:w-[70%] xs:w-[90%] xs:mx-auto md:mx-0 " >
                <NavLink to='' className="font-[500] hover:underline " > ~ Demystefying React Context APIs</NavLink> 
                <h6 className="font-[500] text-[14.5px] underline ">In a bit</h6>  
            </span>
            <Footer />
        </div>
    )
}