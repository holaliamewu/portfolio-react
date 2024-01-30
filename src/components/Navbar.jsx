import React from 'react';
import Header from './Header'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
      <nav>
        <Header />
        <Link to='' >blog</Link>
        <Link to='' >blog</Link>
        <Link to='' >blog</Link>
      </nav>
    )
}