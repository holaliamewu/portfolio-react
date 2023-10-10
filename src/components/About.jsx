import React, {useEffect, useRef} from 'react';
import {motion, useInView} from 'framer-motion';

export default function About({pureColors, fadedText, setView}) {
    const ref = useRef(null);
    const isInView = useInView(ref ,{margin: '-50% 0% -50% 0%'})
    useEffect(() => {
        setView(isInView? true: false)  
    },[isInView])

    return(
        <div className='w-[90%] mx-auto' 
            ref={ref}>
            <div className='' >
                <h4 className='font-bold text-lg'
                  style={pureColors}>01. Bits About Myself.</h4>
                <p className='text-[14.5px]'
                >After getting introduced to the computer and internet by my Uncle at young age,
                I've always been intruiged by what's behind the computer. I guess this curiosity is what got into coding in late 2021.
                I recently graduated from <a id='scrimba' style={pureColors} href='https://scrimba.com/learn/frontend' target='_blank'>Scrimba's Frontend Developer Course</a> and ready to share all I got with working space.
                currently based in Accra, Ghana. I'm currently a
                computer Science student at the Ghana Communication Technology University.</p><br/>
                <p className='text-[14.5px]'> I effortlessly love to build intuitive and interactive web applications with readable and 
                maintainable code.</p><br/>
                <p className='text-[14.5px]'>When I don't have my hands on the keyboard I love see new places of the world and watching soccer.
                I think I have some passion for content creating too. I'll definitely hop into it some point in my career.</p>
        </div>
        <motion.a 
        className='inline-block font-semibold text-[15px] my-4' 
        style={pureColors}
        whileHover= {{ textDecoration: 'underline'}}
        href='https://rxresu.me/holali07/amewu-emmanuel-mensah' target='_blank' id='resume'>
            <motion.h4 >View My Résumé. <motion.i
            whileHover={{x: 3}}
            class="fa-solid fa-arrow-right"> </motion.i>
            </motion.h4>
        </motion.a>
        </div>
    )
}