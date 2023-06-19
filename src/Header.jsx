import React from 'react'
import logo from '/theholalicodes.png'
export default function Header(){

  const toProjectsBtn = document.querySelector('.navs')
  const projectsElement = document.querySelector('.one')

  function scrollDown() {
    window.scrollTo({top: 1400, behavior: 'smooth'});
  }

  return(
    <header id='hd-container'>
    <img className='hidden' src={logo} alt='logo'/>
    <div  id='navs-container'>
      <div className='navs projects hidden' onClick={scrollDown}>CHECK OUT WHAT I'VE DONE</div>
    </div>
    </header>
  )
}