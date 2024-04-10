import React, { useState, useContext } from 'react';
import Header from './Header'
import { NavLink } from 'react-router-dom'
import navData from '../resources/navData'
import { Menu, Twitter, X } from 'lucide-react';
import { SeeMenuContext } from '../pages/Layout';
import MobileMenu from './MobileMenu';

export default function Navbar() {

  const [ seeMobileMenu, setSeeMobileMenu ] = useContext(SeeMenuContext);

  const linkButtons = navData.map( link => (
    <NavLink 
    style={ 
      ({ isActive }) => {
      return {
        backgroundColor: isActive ? '#D9FCF5' : 'rgba(204,251,241,0.46)',
        border: isActive ? '1px solid' : '0'
      }}
        }
    className='px-[6px] xs:hidden md:block py-[2px] rounded font-[500]  
    text-teal-600 '
    key={ link.key} 
    to={link.link} 
    > {link.title} </NavLink> 
  ))

    return ( 
      <nav 
      className=' flex justify-between items-center mt-3 mx-auto '>
        <Header />
        <span className='flex gap-1'>
          { linkButtons }
          <a 
          href='https://x.com/amewuholali_'
          target='_blank'
          className='flex mx-2  bg-[rgba(204,251,241,0.46)] text-teal-600 
          justify-center items-center px-1 rounded hover:bg-teal-100 '>
            <Twitter strokeWidth={1.5} size={20} />
          </a>
          <span 
          style={{backgroundColor: seeMobileMenu ? '#99f6e4' : 'rgba(204,251,241,0.46)'}}
          onClick={() => { setSeeMobileMenu(prev => !prev)}}
          className='p-1 ml-1 md:hidden rounded '>{
            seeMobileMenu ? 
            <X strokeWidth={1.5} size={20} /> :
            <Menu strokeWidth={1.5} size={20} />
          }
          </span>
          </span>
          <MobileMenu />
      </nav>
    )
}