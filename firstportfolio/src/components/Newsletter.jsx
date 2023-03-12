import React from 'react'

function Newsletter() {
  return (
    <div className='max-full py-16 text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2'>
            <div className='mx-4'>
                <h1 className='md:text-4xl text-3xl font-bold py-2'>Want tips $ tricks to optimize your flock</h1>
                <p className='py-3'>Sign up to our Newsletter and stay up to date</p>
            </div>
            <div className='my-3'>
                <input type="email" className='p-3 flex w-full rounded-md text-black' placeholder='Enter Email' />
                <button className='bg-green-500 w-[200px] font-bold my-8 mx-auto px-8 text-black py-3 rounded-md duration-300 hover:bg-green-400'> Notify Me</button>
            </div>
        </div>
        
    </div>
  )
}

export default Newsletter