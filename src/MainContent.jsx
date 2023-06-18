import React from "react"
import About from './About.jsx'
import Pimg1 from '/public/umo-08-06.png'
export default function MainContent() {
    return(
        <main>
        <hr id="one-line"/>
        <h5 id="side-text-one">Amewu Emmanuel Mensah</h5>
        <h5 id="side-text-two">Frontend Developer</h5>

            <About />
            <div className="project one">
                <img id="img-p1" src={Pimg1}/>
                <p>The very first project i created with a framework and being the most challenging project at the time taught me a lot. I had the opportunity to bring out all the hidden gems i had acquired the times i spent on tutorials.
                <br/>This <bold>productivity dashboard</bold> i called <bold>"Umo"</bold> [ a random name that popped up while building it :) ] displays on every new tab a user opens with a picture from a category the user specifies , a clock, a weather pane,
                a menu that allows you to edit your particulars or preferences and journal that takes in your "plans" for that day.<br/>Umo is obviously not the most complex project I've made but I must admit that the gems I've grasped 
                 creating it is just priceless. The only thing that took most of my time is getting the weather icon to display lol [was minute but a bit tough].  
                </p>
            </div>
            <div className="project one">
                <img id="img-p1" src={Pimg1}/>
                <p>The very first project i created with a framework and being the most challenging project at the time taught me a lot. I had the opportunity to bring out all the hidden gems i had acquired the times i spent on tutorials.
                <br/>This productivity dashboard i called "Umo" [ a random name that popped up while building it :) ] displays on every new tab a user opens with a picture from a category the user specifies , a clock, a weather pane,
                 a menu that allows you to edit your particulars or preferences and journal that takes in your "plans" for that day. <br/>Umo is obviously not the most complex project I've made but I must admit that the gems I've grasped 
                 creating it is just priceless. The only thing that took most of my time is getting the weather icon to display lol [was minute but a bit tough].  
                </p>
            </div>
            <div className="project one">
                <img id="img-p1" src={Pimg1}/>
                <p>The very first project i created with a framework and being the most challenging project at the time taught me a lot. I had the opportunity to bring out all the hidden gems i had acquired the times i spent on tutorials.
                <br/>This productivity dashboard i called "Umo" [ a random name that popped up while building it :) ] displays on every new tab a user opens with a picture from a category the user specifies , a clock, a weather pane,
                 a menu that allows you to edit your particulars or preferences and journal that takes in your "plans" for that day. <br/>Umo is obviously not the most complex project I've made but I must admit that the gems I've grasped 
                 creating it is just priceless. The only thing that took most of my time is getting the weather icon to display lol [was minute but a bit tough].  
                </p>
            </div>

        </main>
    )
}