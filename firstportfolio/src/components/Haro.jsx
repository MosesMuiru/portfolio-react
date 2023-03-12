import React from 'react'
import Typed from "react-typed"

function Haro() {

  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col'>
        <p className='text-green-500 font-bold pt-7 text-xl '>GROW WITH DATA ANALYTICTS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-white p-10'>Grow with data</h1>
        <div>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold p-3' >Fast,flexible financing for 
            <Typed className='text-4xl text-green-500 font-bold pl-3' strings={["BTB.","BTC.","SASS."]} typeSpeed={40} backSpeed={140} loop/>
            </p>
        </div>

      <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB,BTC  platforms. </p>

    <button className='bg-green-500 w-[200px] font-bold my-8 mx-auto px-8 text-black py-3 rounded-md duration-300 hover:bg-green-400'> Get Started</button>
    </div>
    </div>
  )
}

export default Haro