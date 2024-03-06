import React from 'react'
import { Link } from 'react-router-dom'

function MenuItem({ icon, title, active, link }) {
  return (
    <div className={`w-[300px] h-[60px] rounded-md ${active ? 'bg-red-200' : 'bg-inherit' } mt-[10px]`}>

    <div className='flex flex-row gap-4'>
        <div className='ml-[30px] mt-[13px]'>
            <span className={`${active ? 'text-white' : 'text-red-300'}`}>{icon}</span>
        </div>
        <div className={`mt-[14px] text-md text-pretty font-semibold ${active ? 'text-white' : 'text-red-300'}`}><Link to={link}>{title}</Link></div>
       
    </div>


</div>
  )
}

export default MenuItem