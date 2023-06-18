import React from 'react'
import myPic from '/public/myPic.jpg'

export default function About(){
    return(
    <div id="about">
        <img id='my-photo' src={myPic} alt='my-photo' />
        <div id='about-text'>
             <h3 id='about-hd'>BITS ABOUT ME</h3>
             <p>I'm <bold>Holali</bold>. A <bold>React Frontend Developer</bold> currently based in Accra, Ghana.
             After getting introduced to the computer and internet by my Uncle at a very tender age,
              I've always been intruged by what powers the computer and how it keeps working so fast 
              without tiring lol. I guess this curiosity is what got into coding just in November 2021. I'm currently a
               computer Science student at the Ghana Communication Technology University.</p>
             <p> I effortlessly love to build intuitive and interactive web applications with readable and 
             maintainable code.</p>
             <p>When I don't have my hands on the keyboard I love see new places of the world and watching soccer.
              I think I have some passion for content creating too. I'll definitely hop into it some point in my career.</p>
             <a href='#contact' id='reach-out' >Reach<br/>out</a>
        </div>
    </div>
    )
}