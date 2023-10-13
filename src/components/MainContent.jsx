import {useState,useEffect, useRef} from "react";
import About from './About.jsx';
import Footer from "./Footer.jsx";
import Contact from './Contact.jsx'
import {useInView, motion, easeIn} from 'framer-motion';
import Header from "./Header.jsx";
import Navbar from "./navbar.jsx";


export default function MainContent() {
    const [darkMode, setDarkMode] = useState(false);
    const [isAboutInView, setIsAboutInView] = useState(false)
    const [isProjectInView, setIsProjectInView] = useState(false)
    const [isContactInView, setIsContactInView] = useState(false)
    const [showInfo, setShowInfo] = useState(true)
    const [ toAurora, setToAurora ] = useState(false)

    const ref= useRef(null);
    const isInView = useInView(ref ,{margin: '-50% 0% -50% 0%'})

    useEffect(() => {
        setIsProjectInView(isInView? true: false)  
    },[isInView])

    const pureColors = {
        color: toAurora? '#00e980': darkMode? 'white' : 'black'
    }
    
    const fadedText = {
        color: toAurora? ' #2e7686' : darkMode? 'rgba(255, 255, 255, 0.658)' : 'rgba( 7, 7, 7, 0.7)'
    }
    
    const navVariant = {
        faded: {color: toAurora? ' #2e7686' : darkMode? 'rgba(255, 255, 255, 0.658)' : 'rgba( 7, 7, 7, 0.7)'},
        hover: {
            scale: 1.2,
            fontWeight: '900',
            x:5,
            color: toAurora? '#00e980' : darkMode? 'white' : 'black',
            originX: 0,
        },
        animateAbout: {
            color: isAboutInView && darkMode && !toAurora ? 'white' :
                    !darkMode && isAboutInView && toAurora ?  '#00e980' :
                    !darkMode && isAboutInView ?  'black' :
                    !toAurora && !isAboutInView ?  'gray' : 
                    toAurora && !isAboutInView ?   '#2e7686' : '#00e980',
                scale: isAboutInView ? '1.2' : '1', originX: 0 ,x: 5,fontWeight: isAboutInView ? '900' : '700',
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
                scale: isProjectInView ? '1.2' : '1', originX: 0 ,x: 5,fontWeight: isProjectInView ? '900' : '700',
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
                fontSize: isContactInView ? '1.2' : '1', originX: 0 ,x: 5,fontWeight: isContactInView ? '900' : '700',
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
        window.scrollTo({top: 1500, behavior: 'smooth'})
    }

    return(
        <main 
        style={{
            backgroundColor: toAurora? '#011926' : darkMode? '#121212' : 'white'
        }}
        className="flex justify-around"
        >
        <div id="left-pane-container" 
        style={{color: toAurora? '#000c13' : darkMode? 'white' : 'gray'}}
        className=" h-[100dvh] w-[45%] flex pl-[10vw] flex-col justify-center ">

        <div className=" mx-auto fixed">

            <Header pureColors={pureColors} toAurora={toAurora} darkmode={darkMode} />
            <Navbar />
             <h1 className="font-[800] text-3xl mt-20 mb-0" style={pureColors}>Amewu Emmanuel<br/> Mensah.</h1>
             <h1 className="font-semibold text-xl mt-2 mb-[-25px]" style={pureColors}>Front-End Developer.</h1><br/>    
             <h4 className="xs:my-4 text-[14px] font-[300] italic py-3 " style={fadedText}>&lsquo;&lsquo;I build with intuitivity, interactivity and <br/>optimization in mind.&rsquo;&rsquo;</h4>
             <nav className="xs:hidden md:block">
                <motion.div
                onClick={toAboutSection}        
                className="text-sm"
                variants={navVariant}
                initial='faded'
                animate='animateAbout'
                whileHover='hover'
                >ABOUT</motion.div>
                <motion.div 
                onClick={toProjectSection}
                className="text-sm"
                variants={navVariant}
                initial='initial'
                animate='animateProject'
                whileHover='hover'
                >PROJECTS</motion.div>
                <motion.div 
                onClick={toContactSection}
                className="text-sm"
                variants={navVariant}
                initial='initial'
                animate='animateContact'
                whileHover='hover'
                >CONTACT</motion.div>
             </nav>   
             <div className="flex items-center gap-4 my-16">
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
                <motion.span 
                className=""
                 style={{backgrondColor: toAurora? 'white':'#011926'}}
                 transition={{duration: '1s'}}
                 >
                    <motion.i style={{color: toAurora? 'white' : '#245c69', backgroundColor: toAurora? 'transparent' : '#00e980'}}
                    class= {darkMode? "fa-solid fa-sun" : "fa-solid fa-moon"} onClick={() => {
                        setToAurora(false)
                        setDarkMode(prev => !prev)}}
                    whileTap={{rotate: -180}}
                    ></motion.i>
                    <motion.i 
                    style={{backgroundColor: toAurora? 'white' : '' }}
                    onClick={() => { 
                        setToAurora(prev => !prev)
                    }}
                    class="fa-solid fa-fire-flame-curved"></motion.i>
                </motion.span>
                <span className=""
                style={{color: toAurora? '#00e980' : darkMode? 'white' : 'black'}}
                >{toAurora? 'aurora' : darkMode?  'charcoal dark' : 'kanea'}</span>
             </div>
            </div>


            <div id="right-pane" 
            style={fadedText}
            className="w-[45%] pr-14 py-14"
            >
                <About 
                pureColors={pureColors} 
                setView={setIsAboutInView}
                />
                <div className="w-[90%] mx-auto my-12" 
                ref={ref}
                >
                    <div className="project one"  
                    >
                        <h4 className="font-bold text-[17px]" style={pureColors}>02. Projects.</h4>
                        
                        <span className="inline-block my-4 p-1 rounded shadow-md border shadow-grey-100" >
                            <a
                            href="https://github.com/holaliamewu/umo-react" target='_blank'>
                                <motion.i 
                                style={pureColors}
                                class="fa-brands fa-github hover:bg-slate-300 p-2 rounded-full active:bg-white"
                                id="fa-github"
                                ></motion.i>
                            </a>
                            <a                             
                            target="_blank"
                            >
                            <motion.i 
                            style={pureColors}
                            class="fa-solid fa-arrow-up-right-from-square hover:bg-slate-300 p-2 rounded-full focus:bg-white"
                            id="fa-arrow-up-right-from-square"
                            ></motion.i>
                            </a>
                        </span>
                        <span className="absolute right-0 bottom-4">currently<br/> unavailable</span>
                    </div>
                </div>
                <Contact pureColors={pureColors} darkMode={darkMode} setView={setIsContactInView}/>
                <Footer pureColors={pureColors} />
            </div>
        </main>
    )
}