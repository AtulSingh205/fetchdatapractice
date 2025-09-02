import React, { useState } from 'react'

const Login = () => {
  const [setform,changeform]=useState({Id:0,firstname:"",lastname:"",password:""})
  const [submit,setSubmitted]=useState([])
  let handelform=(e)=>{
    console.log(e)
    e.preventDefault()
      let id=Date.now()
      setSubmitted([...submit, {...setform,ID:id}])
      setSubmitted([...submit,changeform])
      changeform({ firstname:"",lastname:"",password:""})
  }
  return (
  
    <div className='h-screen w-screen flex items-center justify-center  '>
      <div className='h-[350px] w-[300px] bg-red-500 flex items-center justify-center rounded-2xl ' >
        <form onSubmit={handelform} action="" className='flex flex-col items-center justify-center gap-5 '>
          <input value={setform.firstname} className='border-2' type='text' placeholder='firstname' onChange={(e)=>changeform({...setform,firstname:e.target.value})}></input>
          <input value={setform.lastname} className='border-2' type='text' placeholder='lastname' onChange={(e)=>changeform({...setform,lastname:e.target.value})}></input>
          <input value={setform.password} className='border-2' type='password' placeholder='Password' onChange={(e)=>changeform({...setform,password:e.target.value})}></input>
          <button className='font-bold' type='Submit'>Submit</button>
        </form>
      </div>
    </div> 
    
  )
}

export default Login
