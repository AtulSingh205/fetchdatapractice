import React from 'react'

const Card1 = ({ cdata, sdata }) => {
    function handelId(Id){
        let store= cdata.map((val)=>val._id === Id ? {...val,isNew : !val.isNew}:val)
        sdata(store)
    }
    return (
        <div className='h-screen w-screen bg-[#cdb4db] flex items-center justify-center'>
            <div className='h-[80vh] w-[90vw] bg-[#ffc8dd] flex flex-row flex-wrap items-center gap-6 p-4 justify-center  overflow-y-auto  rounded-2xl'>
                {cdata.map((item) => (
                    <div key={item._id} className='h-72 w-60 bg-[#ffafcc]  rounded-2xl flex  flex-col items-center mb-6 p-4 hover:scale-105 duration-300 shadow-gray-500 shadow-lg '>
                     <img className='h-28 w-28 object-contain' src={item.image}></img>
                     <h1 className='mt-4 font-bold'>{item.brand}</h1>
                     <h1 className='mt-4 font-bold'>{item.price}</h1>
                     <button onClick={()=>handelId(item._id)} className={`h-8 w-auto mt-2 p-1 rounded-2xl whitespace-nowrap ${item.isNew ? "bg-[#bde0fe]" : "bg-[#a2d2ff]"}`}>{item.isNew ? "buy" : "Add to cart" }</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card1
