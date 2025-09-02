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
        <Link to='/Help'><h1 className='font-bold flex items-center'>
          <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg'></img>
          Login</h1>
          </Link>
        <Link to='/cart' className='flex'>
          <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg'></img>
          <h1 className='font-bold'>Cart</h1>
          <span className='top-2 -right-3 h-4 w-4 flex items-center justify-center rounded-full bg-red-500 text-white text-xs animate-bounce'>
            {cart.length}
          </span>
        </Link>
        <Link className='font-bold' to='/Login'>Login</Link>
      </nav>
    </div>
  )
}

export default Nav
