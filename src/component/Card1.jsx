import React, { useEffect, useState } from 'react'

const Card1 = ({ cdata, sdata ,cart ,setcat }) => {
    function handelId(Id) {
        let store = cdata.map((val) => val.id === Id ? { ...val, isNew: !val.isNew } : val)
        sdata(store)
        let clickitm = cdata.find((itm)=>itm.id===Id);
        if(clickitm){
            if(!cart.find((itm)=>itm.id==Id )){
                setcat([...cart , clickitm])
            }
             else {
                setcat(cart.filter((itm)=> itm.id!==Id ))
             }
        }
        
    }
    return (
        <div className='h-screen w-screen bg-[#cdb4db] flex items-center justify-center'>
            <div className='h-[80vh] w-[90vw] bg-[#ffc8dd] flex flex-row flex-wrap items-center gap-6 p-4 justify-center  overflow-y-auto  rounded-2xl'>
                {cdata.map((item) => (
                    <div key={item.id} className='h-72 w-60 bg-[#ffafcc]  rounded-2xl flex  flex-col items-center mb-6 p-4 hover:scale-110 duration-300 shadow-gray-500 shadow-lg  '>
                        <img
                            className='h-28 w-28 object-contain z-10  relative  hover:scale-110 group-hover/card:scale-100 transition-all duration-300'
                            src={item.images[0]}></img>
                        <h1
                            className='mt-4 font-bold'>
                            {item.brand}
                        </h1>
                        <h1
                            className='mt-4 font-bold'>
                            {item.price}
                        </h1>
                        <button
                            onClick={() => handelId(item.id)}
                            className={`h-8 w-auto mt-2 p-1 rounded-2xl whitespace-nowrap ${item.isNew ? "bg-[#bde0fe]" : "bg-[#a2d2ff]"}`}>
                            {item.isNew ? "Remove" : "Add to cart"}</button>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card1
