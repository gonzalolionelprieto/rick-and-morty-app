import React from 'react'
import logo from './logo.png'
export default function Header() {
  return (
    <div className='z-10 bouncing  mx-auto'>
        <img className='py-10 py-lg-10 px-lg-20  mx-auto' src={logo} alt="rick-and-morty-logo" />
    </div>
  )
}
