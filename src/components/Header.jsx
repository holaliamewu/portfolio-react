import React, { useState } from 'react'

export default function Header({pureColors}){

  return(
    <header className='md:mt-9 text-[2em] p font-[900] md:ml-[-50px]' >
      <h3 className=' xs:text-center md:text-left' style={pureColors}>holali.a</h3>
    </header>
  )
}