import { useState, useEffect }  from "react";
import { Github, Instagram, Linkedin, Twitter, HardHat } from 'lucide-react';
import About from './About.jsx';
import Footer from "./Footer.jsx";
import Contact from './Contact.jsx'
import { motion } from 'framer-motion';
import Header from "./Header.jsx";
import Navbar from "./Navbar.jsx";
import Projects from "./Projects.jsx";


export default function MainContent() {

    const pureColors = {
        color: '#E2F1F5',
    }
    
    const fadedText = { color: '#A4D3E0'} 
    


    return(
        <main 
        className=" min-w-screen min-h-full "
        >
        <div id="left-pane-container" 
        style= {pureColors}
        className=" md:h-[100vh] flex flex-col justify-center md:pl-[10vw] ">
        
        <div className="md:mt-0 mx-auto w-[70vw] md:h-[80vh] mb-0 py-10">
            <Navbar />
            <h1 className="font-[900] text-[28px] md:text-[48px] text-center md:text-left mt-20 mb-0" style={pureColors}><span className="block my-[-16px] text-[50px] ">Amewu </span>Emmanuel Mensah.</h1>
            <h1 className="md:font-[600] font-[300] text-center md:text-left md:text-xl  mt-2 mb-[-25px]" style={pureColors}>Front—End Dev.</h1><br/>    
             
            <div className="flex items-center gap-4 my-16 w-fit mx-auto md:ml-0">
                <a href="https://www.twitter.com/amewuholali" 
                target="_blank"
                className="hover:text-[#4FCDB9]"
                >
                    <Twitter />
                 </a>                
                
                 <a href="https://www.instagram.com/amewuholali/" 
                 target="_blank"
                 className="hover:text-[#4FCDB9]"
                 >
                    <Instagram />
                </a>
                
                <a href="https://www.linkedin.com/in/amewu-emmanuel-mensah/" 
                target="_blank"
                className="hover:text-[#4FCDB9]"
                >
                    <Linkedin />
                </a>
                
                <a href="https://github.com/holaliamewu" 
                target="_blank"
                className="hover:text-[#4FCDB9]"
                >
                    <Github />
                </a>
                </div>
             </div>
            </div>

            <div id="right-pane" 
            style={fadedText}
            className=" w-full md:pt-14 md:pb-4"
            >
                <About 
                pureColors={pureColors} 
                />
                <div 
                className="mx-auto py-4 md:py-12 " 
                
                >
                    <div className="flex flex-col justify-center w-full p-0"  
                    >
                        <span className="block mx-auto w-fit mb-[100px]">
                            <HardHat size={48} strokeWidth={0.25} />
                        </span>
                        <h4 
                        className="text-[16px] font-[500] text-center md:ml-[15vw] md:text-left" 
                        style={pureColors}>02. Projects.</h4>
                        
                        
                        <Projects pureColors={pureColors} />
                        
                    </div>
                </div>
                <Contact pureColors={pureColors} />
                <Footer pureColors={pureColors} />
            </div>
        </main>
    )
}