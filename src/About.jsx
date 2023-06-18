import React from 'react'

export default function About() {
    return(
        <div id="about">
            <div id='about-text'>
                <h3 id='about-hd' className='hidden'>BITS ABOUT ME</h3>
                <p className='hidden'>I'm <bold>Holali</bold>. A <bold>Frontend Developer</bold> currently based in Accra, Ghana. I'm currently a
                computer Science student at the Ghana Communication Technology University.</p>
                <p className='hidden'>After getting introduced to the computer and internet by my Uncle at young age,
                I've always been intruiged by what's behind the computer. I guess this curiosity is what got into coding in late 2021.
                I recently graduated from <bold>Scrimba's Frontend Developer Course</bold> and ready to share all I got with working space.
                </p>
                <p className='hidden'> I effortlessly love to build intuitive and interactive web applications with readable and 
                maintainable code.</p>
                <p className='hidden'>When I don't have my hands on the keyboard I love see new places of the world and watching soccer.
                I think I have some passion for content creating too. I'll definitely hop into it some point in my career.</p>
            
    
            <a href='#contact' id='reach-out' >Reach<br/>out</a>
        </div>
        <a href='https://rxresu.me/holali07/amewu-emmanuel-mensah' id='resume'>
            <h4>SEE MY RESUME <i class="fa-solid fa-arrow-up-right-from-square"></i></h4>
        </a>
        <div id='tech-section'>
            <h4>TECHNOLOGIES I USE</h4>
            <div id='techstack-container'>
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css3-alt"></i>
            <i class="fa-brands fa-square-js"></i>
            <i class="fa-brands fa-react"></i>
        </div>
        </div>
    </div>
    )
}