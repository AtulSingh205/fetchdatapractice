import React from 'react'
import { Link } from 'react-router-dom'
import carticon from '../assets/cart.svg'

const Nav = ({cart}) => {
  return (
    <div>
      <nav className='h-10 p-2 w-[100vw] bg-[#ffafcc] flex gap-5 justify-evenly'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoitFp7z48uztKvG9I3zJuNsNYzqkbDTYp-Q&s'></img>
        <Link to='/flipcart' className='font-bold'>Flipcart</Link>
        <Link to='/' className='font-bold'>Home</Link>
        <Link to='/About'><h1 className='font-bold'>About</h1></Link>
        <Link to='/Help'><h1 className='font-bold'>Help</h1></Link>
        <Link to='/cart' className="relative h-12 w-15">
          <img className='h-12 w-12 object-contain  '  src={carticon}></img>
          <span className='absolute -top-2 -right-3 h-4 w-4 flex items-center justify-center rounded-full bg-red-500 text-white text-xs'>
            {cart.length}
          </span>
        </Link>
      </nav>
    </div>
  )
}

export default Nav
