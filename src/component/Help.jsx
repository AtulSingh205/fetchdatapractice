import React, { useRef } from 'react'

const Help = () => {
    let name = useRef(null)
    let email = useRef(null)
    let password = useRef(null)

    let handelform=(e)=>{
      e.preventDefault()
      console.log(name.current.value)
    }


    return (
        <div className='h-screen w-full bg-[#ffe5ec] flex items-center justify-center '>
            <div className='h-84 w-74 p-10 bg-[#ffc2d1] rounded-2xl shadow-lg flex items-center justify-center'>
                <form action=" " onSubmit={handelform} >
                    <h1 className='font-bold'>Name-</h1>
                    <input ref={name} className='border-2' type='text' placeholder='name'></input>
                    <h1 className='font-bold'>email-</h1>
                    <input ref={email} className='border-2' type="text" placeholder="email.com"></input>
                    <h1 className='font-bold'>Creater password-</h1>
                    <input ref={password} className='border-2' type="text" placeholder="Password"></input>
                    <input className='font-bold ml-14 mt-5 bg-[#ff8fab] whitespace-normal rounded-2xl w-20 ' type='submit'/>
                </form>
            </div>

        </div>
    )
}

export default Help
