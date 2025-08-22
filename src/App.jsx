import React, { useEffect, useState } from 'react'
import Card1 from './Card1';


const App = () => {
    const [fdata,setdata]=useState([])
    async function fetchdata() {
        let result = await fetch("https://fakestoreapiserver.reactbd.org/api/products/")
        let sdata = await result.json();
        console.log(sdata)
        setdata(sdata.data)
    }
    useEffect(()=>{
        fetchdata()
    },[])
  return (
    <div>
      <Card1 cdata={fdata} sdata={setdata}></Card1>
    </div>
  )
}

export default App
