import React, { useEffect, useState } from 'react'
import Card1 from './component/Card1';
import Nav from './component/Nav';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './component/Homepage';
import Cart from './component/Cart';
import About from './component/About';
import Help from './component/Help';


const App = () => {
    const [fdata,setdata]=useState([])
    const [cart,setcat]=useState([])
    async function fetchdata() {
        let result = await fetch("https://dummyjson.com/products/category/smartphones")
        let sdata = await result.json();
        console.log(sdata)
        setdata(sdata.products)
    }
    useEffect(()=>{
        fetchdata()
    },[])
  return (
    <div>
     <BrowserRouter>
     <Nav></Nav>

     <Routes>
      <Route path='/Home1' element={<Card1 cdata={fdata}  sdata={setdata} cart={cart} setcat={setcat}/>}/>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/cart' element={<Cart cart={cart} setcat={setcat}/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Help' element={<Help/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
