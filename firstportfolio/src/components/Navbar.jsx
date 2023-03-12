import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import { useState } from 'react'
function Navbar() {

    // the navbutton
    const [nav,setNav] = useState(false)

    const handleNav = ()=>{
        setNav(!nav)
        console.log("button clicked")
        console.log(nav)

    }

  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 '>
        <h2 className='w-full text-3xl font-bold text-[#00df9a]'>REACT</h2>

        <ul className='f hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>

        <div className='cursor-pointer block md:hidden' onClick={handleNav} >
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        
        </div>
        {/* if nav not true set the foollowing styles else otherwise */}
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out '}>
        <h2 className='w-full text-3xl font-bold text-[#00df9a] mt-4 ml-5'>REACT</h2>
        <ul className=' uppercase pt-12 '>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>Resources</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4 border-b border-gray-600'>Contact</li>
        </ul>
        </div>
      


    </div>
  )
}

export default Navbar