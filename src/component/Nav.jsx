import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav className='h-6 w-[100vw] bg-[#ffafcc] flex gap-5 justify-evenly'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoitFp7z48uztKvG9I3zJuNsNYzqkbDTYp-Q&s'></img>
        <Link to='/' className='font-bold'>Flipcart</Link>
        <Link to='/Home1' className='font-bold'>Home</Link>
        <Link to='/About'><h1 className='font-bold'>About</h1></Link>
       <Link to='/Help'><h1 className='font-bold'>Help</h1></Link> 
       <Link to='/cart'><h1 className='font-bold'>Cart</h1></Link>
      </nav>
    </div>
  )
}

export default Nav
