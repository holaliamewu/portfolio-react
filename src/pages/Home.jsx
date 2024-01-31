import { useState, useEffect }  from "react";
import Footer from "../components/Footer.jsx";
import QuickAboout from "../components/QuickAbout.jsx";

export default function Home() {
    


    return(
       
        <div
        className=" md:h-[100vh] flex flex-col justify-center  ">
        
            <div className=" mt-[-150px] ">
                <h1 className="font-[900] text-[28px] md:text-[48px] text-center md:text-left mb-0" >
                    <span className="block my-[-16px] text-[50px] ">Amewu </span>Emmanuel Mensah.
                </h1>
                <h1 
                className="md:font-[600] font-[300] text-center md:text-left md:text-xl  mt-2 mb-[25px]"
                 >Front—End Dev.</h1>
            </div>

            <QuickAboout />

            <Footer />
        </div>
    )
}