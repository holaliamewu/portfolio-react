import React from 'react'
import logo from '/public/theholalicodes.png'
export default function Header(){
  return(
    <header id='hd-container'>
    <img src={logo} alt='logo'/>
    <div id='navs-container'>
      <div className='navs projects'>CHECK OUT WHAT I'VE DONE</div>
    </div>
    </header>
  )
}