import React, { useState } from 'react';
import Header from './Header'
import { NavLink } from 'react-router-dom'
import navData from '../resources/navData'
import { Menu, Twitter, X } from 'lucide-react';

export default function Navbar() {
  const [ seeMobileMenu, setSeeMobileMenu ] = useState(false);

  const linkButtons = navData.map( link => (
    <NavLink 
    style={ ({ isActive }) => {
      return {
        backgroundColor: isActive ? '#99f6e4' : 'rgba(204,251,241,0.46)',
        fontWeight: isActive ? '500' : '400',
      }
        }
        }
    className='px-[6px] xs:hidden md:block py-[2px] rounded bg-[rgba(204,251,241,0.46)] 
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
          href='https://x.com/amewuholali'
          target='_blank'
          className='flex mx-2  bg-[rgba(204,251,241,0.46)] text-teal-600 
          justify-center items-center px-1 rounded hover:bg-teal-100 '>
            <Twitter strokeWidth={1.5} size={20} />
          </a>
          <span 
          onClick={() => { setSeeMobileMenu(prev => !prev)}}
          className='px-1 ml-1 md:hidden '>{
            seeMobileMenu ? 
            <X strokeWidth={1.5} size={20} /> :
            <Menu strokeWidth={1.5} size={20} />
          }
          </span>
          </span>
      </nav>
    )
}