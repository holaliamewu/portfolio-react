import React, { useState } from 'react'

export default function Header({pureColors}){

  return(
    <header className=' mt-9 text-[2em] font-[900] ml-[-50px]' >
     <h3 className=' xs:text-center md:text-left' style={pureColors}>holali.a</h3>
    </header>
  )
}