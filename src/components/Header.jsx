import React, { useState } from 'react'

export default function Header({pureColors}){

  return(
    <header className='ml-4 my-4 text-lg font-[700]'>
     <h3 className=' xs:text-center md:text-left' style={pureColors}>holali.a</h3>
    </header>
  )
}