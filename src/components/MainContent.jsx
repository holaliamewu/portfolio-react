import { useState, useEffect, useRef }  from "react";
import About from './About.jsx';
import Footer from "./Footer.jsx";
import Contact from './Contact.jsx'
import { useInView, motion } from 'framer-motion';
import Header from "./Header.jsx";
import Navbar from "./Navbar.jsx";
import Projects from "./Projects.jsx";
import ThemeSwitch from "./ThemeSwitch.jsx";


export default function MainContent() {
    const [darkMode, setDarkMode] = useState(false);
    const [isAboutInView, setIsAboutInView] = useState(false)
    const [isProjectInView, setIsProjectInView] = useState(false)
    const [isContactInView, setIsContactInView] = useState(false)
    const [ toAurora, setToAurora ] = useState(false)

    const projectRef = useRef(null);
    const projectIsInView = useInView(projectRef ,{margin: '-50% 0% -50% 0%'})
    useEffect(() => {
        setIsProjectInView(projectIsInView? true: false)  
    },[projectIsInView])

   

    const pureColors = {
        color: toAurora? '#00e980': darkMode? 'white' : 'black',
        borderColor: toAurora? '#00e980': darkMode? 'white' : 'black',

    }
    
    const fadedText = {
        color: toAurora? ' #2e7686' : darkMode? 'rgba(255, 255, 255, 0.658)' : 'rgba( 7, 7, 7, 0.7)'
    }
    
    const navVariant = {
        faded: {color: toAurora? ' #2e7686' : darkMode? 'rgba(255, 255, 255, 0.658)' : 'rgba( 7, 7, 7, 0.7)'},
        hover: {
            fontWeight: '600',
            x: 20,
            color: toAurora? '#00e980' : darkMode? 'white' : 'black',
            originX: 0,
        },
        animateAbout: {
            color: isAboutInView && darkMode && !toAurora ? 'white' :
                    !darkMode && isAboutInView && toAurora ?  '#00e980' :
                    !darkMode && isAboutInView ?  'black' :
                    !toAurora && !isAboutInView ?  'gray' : 
                    toAurora && !isAboutInView ?   '#2e7686' : '#00e980',
                    fontWeight: isAboutInView ? 700 : 400,
                    fontSize: isAboutInView ? '13px' : '10px',
                transition: {
                    type: 'spring',
                    stiffness: 130,
                    duration: 0.4
                }
            },
        animateProject: {
            color: isProjectInView && darkMode && !toAurora ? 'white' :
            !darkMode && isProjectInView && toAurora ?  '#00e980' :
                    !darkMode && isProjectInView ?  'black' :
                    !toAurora && !isProjectInView ?  'gray' : 
                    toAurora && !isProjectInView ?   '#2e7686' : '#00e980',
                    fontWeight: isProjectInView ? '700' : '400',
                    fontSize: isProjectInView ? '13px' : '10px',
                    transition: {
                    type: 'spring',
                    stiffness: 130,
                    duration: 0.4
                }
            },
        animateContact: {
            color: isContactInView && darkMode && !toAurora ? 'white' :
            !darkMode && isContactInView && toAurora ?  '#00e980':
                    !darkMode && isContactInView ?  'black' :
                    !toAurora && !isContactInView ?  'gray' : 
                    toAurora && !isContactInView ?   '#2e7686' : '#00e980',
                fontWeight: isContactInView ? '700' : '400',
                fontSize: isContactInView ? '13px' : '10px',
                transition: {
                    type: 'spring',
                    stiffness: 130,
                    duration: 0.4
                }
            }
    }

    function toAboutSection() {
        window.scrollTo({top: 20, behavior: 'smooth'})
    }
    
    function toProjectSection() {
        window.scrollTo({top: 550, behavior: 'smooth'})
    }
    
    function toContactSection() {
        window.scrollTo({top: 2500, behavior: 'smooth'})
    }

    return(
        <main 
        style={{
            backgroundColor: toAurora? '#011926' : darkMode? '#121212' : 'white'
        }}
        className="flex md:justify-around md:w-fit flex-col md:flex-row"
        >
        <div id="left-pane-container" 
        style={{color: toAurora? '#000c13' : darkMode? 'white' : 'gray'}}
        className=" h-[100dvh] md:w-[45vw] flex flex-col justify-center md:pl-[10vw]">

        <div className=" mx-auto md:fixed">

            <Header pureColors={pureColors} toAurora={toAurora} darkmode={darkMode} />
            <Navbar />
             <h1 className="font-[600] text-[24px] md:text-4xl mt-20 mb-0" style={pureColors}>Amewu <br className="hidden md:block"/>Emmanuel Mensah.</h1>
             <h1 className="md:font-[500] font-[300] text-center md:text-left md:text-xl  mt-2 mb-[-25px]" style={pureColors}>Front-End Developer.</h1><br/>    
             <h4 className="xs:my-4 text-[14px] font-[300] italic md:py-3 py-5 md:text-left text-center" style={fadedText}>&lsquo;&lsquo;I build with readability, interactivity and <br/>optimization in mind.&rsquo;&rsquo;</h4>
             <nav className="xs:hidden md:block">
                <motion.div
                onClick={toAboutSection}        
                className="text-sm w-fit cursor-pointer"
                initial='aboutInitial'
                variants={navVariant}
                animate='animateAbout'
                whileHover='hover'
                >ABOUT</motion.div>
                <motion.div 
                onClick={toProjectSection}
                className="text-sm w-fit cursor-pointer"
                initial='projectInitial'
                variants={navVariant}
                animate='animateProject'
                whileHover='hover'
                >PROJECTS</motion.div>
                <motion.div 
                onClick={toContactSection}
                className="text-sm w-fit cursor-pointer"
                initial='contactInitial'
                variants={navVariant}
                animate='animateContact'
                whileHover='hover'
                >CONTACT</motion.div>
             </nav>   
             <div className="flex items-center gap-4 my-16 w-fit mx-auto md:ml-0">
                <a href="https://www.twitter.com/amewuholali" 
                target="_blank">
                <motion.i style={pureColors} 
                class="fa-brands fa-twitter text-[20px]"></motion.i>
                 </a>                
                
                 <a href="https://www.instagram.com/amewuholali/" target="_blank">
                <motion.i style={pureColors} 
                class="fa-brands fa-instagram text-[20px]"></motion.i>
                </a>
                
                <a href="https://www.linkedin.com/in/amewu-emmanuel-mensah/" target="_blank">
                <motion.i style={pureColors} class="fa-brands fa-linkedin text-[20px]"></motion.i>
                </a>
                
                <a href="https://github.com/holaliamewu" target="_blank">
                <motion.i style={pureColors} class="fa-brands fa-github text-[20px]"></motion.i>
                </a>
                </div>
                <ThemeSwitch 
                pureColors={pureColors}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                toAurora={toAurora}
                setToAurora={setToAurora}
                />
             </div>
            </div>


            <div id="right-pane" 
            style={fadedText}
            className="md:w-[53vw] w-full md:py-14 "
            >
                <About 
                pureColors={pureColors} 
                setView={setIsAboutInView}
                />
                <div 
                ref={projectRef}

                className="w-[80%]  mx-auto xs:py-4 md:py-12 " 
                
                >
                    <div className=" "  
                    >
                        <h4 
                        className="text-[16px] font-[500]" 
                        style={pureColors}>02. Projects.</h4>
                        
                        
                        <Projects pureColors={pureColors} />
                        
                    </div>
                </div>
                <Contact pureColors={pureColors} darkMode={darkMode} setView={setIsContactInView}/>
                <Footer pureColors={pureColors} />
            </div>
        </main>
    )
}