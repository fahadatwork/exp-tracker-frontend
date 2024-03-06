import React from 'react'
import moment from 'moment';
import { BsFillSendFill } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { CiCircleMore } from "react-icons/ci";

const Balance = () => {

    const balance = 100000;

    const currentDate = moment().format('MMMM Do YYYY . h:mm A'); 
  return (
     <>
        <div className="w-[600px] h-[410px] bg-white rounded-lg shadow-md">
                <h1 className="font-semibold text-xl text-gray-900 mt-[8px] text-center">Your Total Balance</h1>
                <h1 className="font-semibold text-6xl text-teal-600 mt-[70px] text-center">Rs {balance.toLocaleString()}</h1>
                <p className="font-semibold text-teal-600 mt-[20px] text-center">{currentDate}</p>

                <div className="mt-[30px] ml-[100px] w-[400px] h-[100px] bg-red-100 rounded-xl">
                    <div className=" flex flex-row gap-3 mx-[40px]">
                    <button className="w-[100px] h-[70px] mt-[15px] rounded-md bg-white text-teal-300 hover:shadow-lg"><BsFillSendFill className=" w-[35px] h-[35px] ml-[30px]" /> Send</button>
                    <button className="w-[100px] h-[70px] mt-[15px] rounded-md bg-white text-teal-300 hover:shadow-lg"><IoMdAddCircle className=" w-[35px] h-[35px] ml-[30px]" /> Add</button>
                    <button className="w-[100px] h-[70px] mt-[15px] rounded-md bg-white text-teal-300 hover:shadow-lg"><CiCircleMore className=" w-[35px] h-[35px] ml-[30px]" /> More</button>
                    
                    </div>
                 

                </div>

                   
  </div>
     
     
     
     
     
     </>



  )
}

export default Balance