import React from 'react';
import { motion } from 'framer-motion';

export default function ThemeSwitch({pureColors, toAurora, setToAurora, darkMode, setDarkMode}) {
    return(
        <div style={pureColors} className='hidden md:block '>
            <motion.span 
                    className="border border-blue-500 p-1 rounded-full inline-block w-[60px]"
                    style={{backgrondColor: toAurora? 'white':'#011926'}}
                    transition={{duration: '1s'}}
                    >
                        <motion.i style={{color: toAurora? 'white' : '#245c69', backgroundColor: toAurora? 'transparent' : '#00e980'}}
                        class= {darkMode? "fa-solid fa-sun text-[16px]  py-1 px-1 rounded-full" : "fa-solid fa-moon text-[16px] py-1 px-1.5 rounded-full"}
                        onClick={() => {
                            setToAurora(false)
                            setDarkMode(prev => !prev)}}
                        whileTap={{rotate: -180}}
                        ></motion.i>
                        <motion.i 
                        style={{backgroundColor: toAurora? 'white' : '' }}
                        onClick={() => { 
                            setToAurora(prev => !prev)
                        }}
                        class="fa-solid fa-fire-flame-curved text-[16px] py-1 px-1.5 rounded-full"></motion.i>
                    </motion.span>
                    <span className="text-[11px] align-bottom ml-3 hover:underline cursor-pointer"
                    style={{color: toAurora? '#00e980' : darkMode? 'white' : 'black'}}
                    >{toAurora? 'aurora' : darkMode?  'charcoal dark' : 'kanea'}</span>
        </div>
    )
}