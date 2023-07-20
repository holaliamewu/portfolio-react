import {useState,useEffect, useRef} from "react";
import About from './About.jsx';
import Footer from "./Footer.jsx";
import Contact from './Contact.jsx'
import Pimg1 from '/umoImage.png';
import myPic from '/myPic.jpg';
import {useInView, motion, color, easeIn} from 'framer-motion';
import Header from "./Header.jsx";


/*

4 TODAY --> :
* Fix all the small bugs around the footer section.

*/


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

                    !darkMode && isAboutInView ?  'black' :
                    !toAurora && !isAboutInView ?  'gray' : 
                    toAurora && !isAboutInView ?   '#2e7686' : '#00e980',
                scale: isAboutInView ? '1.2' : '1', originX: 0 ,x: 5,fontWeight: isAboutInView ? '900' : '700',
                transition: {
                    type: 'spring',
                    stiffness: 120
                }
            },
        animateProject: {
            color: isProjectInView && darkMode && !toAurora ? 'white' :

                    !darkMode && isProjectInView ?  'black' :
                    !toAurora && !isProjectInView ?  'gray' : 
                    toAurora && !isProjectInView ?   '#2e7686' : '#00e980',
                scale: isProjectInView ? '1.2' : '1', originX: 0 ,x: 5,fontWeight: isProjectInView ? '900' : '700',
                transition: {
                    type: 'spring',
                    stiffness: 120
                }
            },
        animateContact: {
            color: isContactInView && darkMode && !toAurora ? 'white' :

                    !darkMode && isContactInView ?  'black' :
                    !toAurora && !isContactInView ?  'gray' : 
                    toAurora && !isContactInView ?   '#2e7686' : '#00e980',
                scale: isContactInView ? '1.2' : '1', originX: 0 ,x: 5,fontWeight: isContactInView ? '900' : '700',
                transition: {
                    type: 'spring',
                    stiffness: 120
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
        >
            <div id="left-pane-container" 
            style={{color: toAurora? '#000c13' : darkMode? 'white' : 'gray'}}
            >
             <div id="left-pane">
             <Header pureColors={pureColors} toAurora={toAurora} darkmode={darkMode} />
             <h1 id="name" style={pureColors}>Amewu Emmanuel<br/> Mensah.</h1><br/>
             <h1 id="role" style={pureColors}>Front-End Developer.</h1><br/>    
             <h4 id="short-about" style={fadedText}>I build with intuitivity, interactive and <br/>optimization in mind.</h4>
             <nav>
                <motion.div
                onClick={toAboutSection} 
                className="nav about"
                variants={navVariant}
                initial='faded'
                animate='animateAbout'
                whileHover='hover'
                >ABOUT</motion.div>
                <motion.div 
                onClick={toProjectSection}
                className="nav projects"
                variants={navVariant}
                initial='initial'
                animate='animateProject'
                whileHover='hover'
                >PROJECTS</motion.div>
                <motion.div 
                onClick={toContactSection}
                className="nav contact"
                variants={navVariant}
                initial='initial'
                animate='animateContact'
                whileHover='hover'
                >CONTACT</motion.div>
             </nav>   
             <div id="icons-container">
                <a href="https://www.twitter.com/amewuholali" 
                target="_blank">
                <motion.i style={pureColors} class="fa-brands fa-twitter"></motion.i>
                 </a>                
                <a href="https://www.instagram.com/amewuholali/" target="_blank">
                <motion.i style={pureColors} class="fa-brands fa-instagram"></motion.i>
                </a>
                <a href="https://www.linkedin.com/in/amewu-emmanuel-mensah/" target="_blank">
                <motion.i style={pureColors} class="fa-brands fa-linkedin"></motion.i>
                </a>
                <a href="https://github.com/holaliamewu" target="_blank">
                <motion.i style={pureColors} class="fa-brands fa-github"></motion.i>
                </a>
                </div>
                <motion.span
                 id='theme'
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
                <span id="theme-name"
                style={{color: toAurora? '#00e980' : darkMode? 'white' : 'black'}}
                >{toAurora? 'aurora' : darkMode?  'charcoal dark' : 'kanea'}</span>
             </div>
            </div>
            <div id="right-pane" style={fadedText}>
                <About 
                pureColors={pureColors} 
                setView={setIsAboutInView}
                />
                <div id="projects-container" 
                ref={ref}
                >
                    <div className="project one"  
                    >
                        <h4 id="projects-hd" style={pureColors}>02. Projects.</h4>
                        <div className="project-info-container" onMouseEnter={() => {setShowInfo(false)}} onMouseLeave={() => {setShowInfo(true)}}>
                           {showInfo && <div id="inner-one">
                           <h3>Umo dashboard</h3>
                           <h5>minimal productivity dashboard made with HTML, CSS & React.Js</h5>
                       </div>} 
                        </div><br/>
                        <p >The very first project i created with a framework and being the most challenging project at the time taught me a lot. I had the opportunity to bring out all the hidden gems i had acquired the times i spent on tutorials.</p><br/>                
                        <p >This productivity dashboard i called "Umo" [ a random name that popped up while building it :) ] displays on every new tab a user opens with a picture from a category the user specifies , a clock, a weather pane,
                        a menu that allows you to edit your particulars or preferences and journal that takes in your "plans" for that day.</p> <br/>
                        <p >Umo is obviously not the most complex project I've made but I must admit that the gems I've grasped 
                        creating it is just priceless. The only thing that took most of my time is getting the weather icon to display lol [was minute but a bit tough].  
                        </p>
                        <span className="link-icons" >
                            <motion.i 
                            style={pureColors}
                            class="fa-brands fa-github"
                            ></motion.i>
                            <motion.i 
                            style={pureColors}
                            class="fa-solid fa-arrow-up-right-from-square"
                            ></motion.i>
                        </span>
                    </div>
                </div>
                <Contact pureColors={pureColors} darkMode={darkMode} setView={setIsContactInView}/>
                <Footer pureColors={pureColors} />
            </div>
        </main>
    )
}