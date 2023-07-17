import React from 'react';
import {motion} from 'framer-motion';

export default function About({pureColors, fadedText}) {
    return(
        <div id="about">
            <div id='about-text'>
                <h4 id='about-hd' style={pureColors}>01. Bits About Myself</h4>
                <p>After getting introduced to the computer and internet by my Uncle at young age,
                I've always been intruiged by what's behind the computer. I guess this curiosity is what got into coding in late 2021.
                I recently graduated from <a id='scrimba' style={pureColors} href='https://scrimba.com/learn/frontend' target='_blank'>Scrimba's Frontend Developer Course</a> and ready to share all I got with working space.
                currently based in Accra, Ghana. I'm currently a
                computer Science student at the Ghana Communication Technology University.</p><br/>
                <p> I effortlessly love to build intuitive and interactive web applications with readable and 
                maintainable code.</p><br/>
                <p>When I don't have my hands on the keyboard I love see new places of the world and watching soccer.
                I think I have some passion for content creating too. I'll definitely hop into it some point in my career.</p>
        </div>
        <a style={pureColors} 
        href='https://rxresu.me/holali07/amewu-emmanuel-mensah' target='_blank' id='resume'>
            <h4 >View My Résumé <motion.i
            whileHover={{x: 3}}
            id='resume-link-icon' class="fa-solid fa-arrow-right"> </motion.i></h4>
        </a>
        <div id='tech-section'>
            <h4 style={pureColors}>Technologies I Use</h4>
            <motion.div 
            // variants={contactIconsVariant}
            animate={fadedText}
            whileHover={pureColors}
            id='techstack-container'>
                <i class="fa-brands fa-html5"></i>
                <i class="fa-brands fa-css3-alt"></i>
                <i class="fa-brands fa-square-js"></i>
                <i class="fa-brands fa-react"></i>
                <span>Firebase</span>
                <span>Framer Motion</span>
            </motion.div>
        </div>
        </div>
    )
}