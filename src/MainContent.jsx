import {useState,useEffect, useRef} from "react";
import About from './About.jsx';
import Footer from "./Footer.jsx";
import Contact from './Contact.jsx'
import Pimg1 from '/umoImage.png';
import myPic from '/myPic.jpg';
import {useInView, motion} from 'framer-motion';


/*

4 TODAY --> :
* Fix all the small bugs around the footer section.

*/


export default function MainContent() {
    const [darkMode, setDarkMode] = useState(false);
    const [isAboutInView, setIsAboutInView] = useState(false)
    const [isProjectInView, setIsProjectInView] = useState(false)
    const [isContactInView, setIsContactInView] = useState(false)
    
    const ref= useRef(null);
    const isInView = useInView(ref ,{margin: '-50% 0% -50% 0%'})

    useEffect(() => {
        setIsProjectInView(isInView? true: false)  
    },[isInView])

    const pureColors = {
        color: darkMode? 'white' : 'black'
    }
    
    const fadedText = {
        color: darkMode? 'rgba(255, 255, 255, 0.658)' : 'rgba( 7, 7, 7, 0.7)'
    }
    
    const navVariant = {
        faded: {color: darkMode? 'rgba(255, 255, 255, 0.658)' : 'rgba( 7, 7, 7, 0.7)'},
        hover: {
            scale: 1.2,
            fontWeight: '900',
            x:5,
            color: darkMode? 'white' : 'black',
            originX: 0,
        },
        animateAbout: {
            color: isAboutInView && darkMode ? 'white' : isAboutInView? 'black' : 'gray',
             scale: isAboutInView ? '1.2' : '1', originX: 0 ,x: 5,fontWeight: isAboutInView ? '900' : '700',
             transition: {
                 type: 'spring',
                 stiffness: 120
             }
            },
        animateProject: {
            color: isProjectInView  && darkMode? 'white' : isProjectInView && !darkMode ? 'black' : 'gray',
             scale: isProjectInView ? '1.2' : '1', originX: 0 ,x: 5,fontWeight: isProjectInView ? '900' : '700',
             transition: {
                 type: 'spring',
                 stiffness: 120 
             }
            },
        animateContact: {
            color: isContactInView   && darkMode? 'white' : isContactInView && !darkMode? '#121212' : 'gray',
             scale: isContactInView ? '1.2' : '1', originX: 0 ,x: 5, fontWeight: isContactInView ? '900' : '700',
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
            backgroundColor: darkMode? '#121212' : 'white'
        }}
        >
            <div id="left-pane-container" 
            style={fadedText}
            >
             <div id="left-pane">
             <h1 id="name" style={pureColors}>Amewu Emmanuel<br/> Mensah.</h1><br/>
             <h1 id="role" style={pureColors}>Front-End Developer.</h1><br/>    
             <h4 id="short-about">I build with intuitivity, interactive and <br/>optimization in mind.</h4>
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
             <motion.i style={fadedText}
              id='theme' 
              class= {darkMode? "fa-solid fa-sun" : "fa-solid fa-moon"} onClick={() => {setDarkMode(prev => !prev)}}
              whileTap={{rotate: -180}}
              whileHover={{color: darkMode? 'white' : 'black'}}
              ></motion.i>
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
                        <img id="img-p1" src={Pimg1}/><br/>
                        <p >The very first project i created with a framework and being the most challenging project at the time taught me a lot. I had the opportunity to bring out all the hidden gems i had acquired the times i spent on tutorials.</p><br/>                
                        <p >This productivity dashboard i called "Umo" [ a random name that popped up while building it :) ] displays on every new tab a user opens with a picture from a category the user specifies , a clock, a weather pane,
                        a menu that allows you to edit your particulars or preferences and journal that takes in your "plans" for that day.</p> <br/>
                        <p >Umo is obviously not the most complex project I've made but I must admit that the gems I've grasped 
                        creating it is just priceless. The only thing that took most of my time is getting the weather icon to display lol [was minute but a bit tough].  
                        </p>
                        <div>
                        <motion.span 
                        className="usedStack"
                        animate={{color: darkMode? 'black' : '#D6EAF8', backgroundColor: darkMode? 'white' : 'black'}}
                        whileHover={{backgroundColor: '#D6EAF8'}}
                        >html5</motion.span>
                        <motion.span 
                        className="usedStack"
                        animate={{color: darkMode? 'black' : 'white', backgroundColor: darkMode? 'white' : 'black'}}
                        whileHover={{backgroundColor: '#D6EAF8'}}
                        >css3</motion.span>
                        <motion.span 
                        className="usedStack"
                        animate={{color: darkMode? 'black' : 'white', backgroundColor: darkMode? 'white' : 'black'}}
                        whileHover={{backgroundColor: '#D6EAF8'}}
                        >React.js</motion.span>
                        <motion.i id="project-link-umo"
                        class="fa-solid fa-arrow-right"
                        initial={{rotate: -45}}
                        whileHover={{x: 3, y: -3}}
                        ></motion.i>
                        </div>
                    </div>
                </div>
                <Contact pureColors={pureColors} darkMode={darkMode} setView={setIsContactInView}/>
                <Footer pureColors={pureColors} />
            </div>
        </main>
    )
}