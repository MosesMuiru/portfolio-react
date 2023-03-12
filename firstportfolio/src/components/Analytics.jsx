import React from 'react'
import rnb from "../assets/rnb.png"

function Analytics() {
  return (
    <div className='text-black w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-[50px]'>
            <img className='w-[500px]' src={rnb} alt="img" />

            <div className='flex flex-col items-center justify-center gap-4' >
                <p className='text-[#00df9a] text-xl'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='text-3xl capitalize font-bold '>manage data Analytics Centrally</h1>
 
                <p className='text-md pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis error natus quia, impedit, quisquam provident fuga cum doloribus excepturi assumenda repellendus perspiciatis, inventore dolorum doloremque distinctio maxime nisi aspernatur soluta. Sunt temporibus, libero odio officiis tempore vero ab ullam cupiditate quam amet corrupti veritatis. Perferendis quae neque similique totam!</p>
                <button className='bg-black w-[200px] font-bold my-8 mx-auto px-8 text-green-500 py-3 rounded-md duration-300 hover:bg-green-400 mxa'> Get Started</button>


            </div>

        </div>
    </div>
    
  )
}

export default Analytics