import {useEffect, useRef, useState} from "react"
import About from './About.jsx'
import Pimg1 from '/public/umo-08-06.png'
export default function MainContent() {
    useEffect(()=> {
        const Observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add("show")
                } else {
                    entry.target.classList.remove('show')
                }
            })
        })

        const hiddenElements = document.querySelectorAll('.hidden')
        hiddenElements.forEach((el) => Observer.observe(el))
    },[])

    return(
        <main>
            <div id="first-text">
                <h1 className="hidden name">Amewu Emmanuel Mensah.</h1><br/>
                <h1 className="hidden role">Frontend Developer.</h1>
            </div>
            <About />
            <h3 className="hidden" id="projects-hd">SOME OF MY PROJECTS</h3>
            <div className="project one">
                <img id="img-p1" src={Pimg1}/>
                <p >The very first project i created with a framework and being the most challenging project at the time taught me a lot. I had the opportunity to bring out all the hidden gems i had acquired the times i spent on tutorials.</p>                
                <p>This <bold>productivity dashboard</bold> i called <bold>"Umo"</bold> [ a random name that popped up while building it :) ] displays on every new tab a user opens with a picture from a category the user specifies , a clock, a weather pane,
                a menu that allows you to edit your particulars or preferences and journal that takes in your "plans" for that day.</p> <p>Umo is obviously not the most complex project I've made but I must admit that the gems I've grasped 
                 creating it is just priceless. The only thing that took most of my time is getting the weather icon to display lol [was minute but a bit tough].  
                </p>
            </div>
        </main>
    )
}