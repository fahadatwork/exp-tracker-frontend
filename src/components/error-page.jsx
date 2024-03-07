import React from 'react'
import { TbNetworkOff } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {

       const navigate = useNavigate();
  return (
    <>

      <div className='h-screen flex items-center justify-center'>

         <div className='flex flex-col gap-3'>
          <div className="size-[100px] md:size-[300px] flex items-center justify-center">
           
        <div className=''>
          <TbNetworkOff  className='size-[100px] mx-[45px] md:size-[200px] text-red-300 animate-pulse'/>
          <h2 className='text-md  font-serif mb-[20px] md:text-3xl text-gray-400 '>Something wrong happend</h2>
          </div>


          </div>

           <button 
           onClick={()=>{navigate('/')}}
           className='p-[10px] bg-red-200 hover:bg-red-100 text-white font-semibold rounded-md'>Reload</button>
           </div>


      </div>
    
    
    
    
    
    </>
  )
}
