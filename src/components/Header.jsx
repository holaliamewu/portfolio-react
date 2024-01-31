import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header(){

  return(
    <header className=' font-["Dosis"] w-fit  mt-0  text-[2em] font-[900]  ' >
        <Link to='/' className='text-[#4FCDB9] xs:text-center md:text-left  ' >holali.a</Link>
    </header>
  )
}