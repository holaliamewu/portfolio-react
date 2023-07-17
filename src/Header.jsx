import React, { useState } from 'react'
import logo from '/theholalicodes.png'
export default function Header(){




  // function scrollDown() {
  //   window.scrollTo({top: 1400, behavior: 'smooth'});
  // }

  return(
    <header id='hd-container'>
      <img id='logo' src={logo} alt='logo'/>
    </header>
  )
}