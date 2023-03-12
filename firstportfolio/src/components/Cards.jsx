import React from 'react'
import rnb from "../assets/rnb.png"

function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] wx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full'>
                <img className='' src={rnb} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Single users</h2>
                <p>B</p>
                

            </div>
        </div>

        
    </div>
  )
}

export default Cards