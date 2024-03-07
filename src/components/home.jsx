import React from "react";
import Sidebar from "./sidebar";
import { FaMoon } from "react-icons/fa";
import ChartBox from "./chatbox";
import { FaBell } from "react-icons/fa6";
import Balance from "./balance";
import Transactions from "./transactions";
import { GoKebabHorizontal } from "react-icons/go";
import CircularProgress from "./circularProgress";
import { useState } from "react";
import SkeletonLoader from "./skeletonLoader";
import BalLoader from "./balLoader";



function Home() {

     const [progress, setProgress] = useState(50)
  return (
    <>
    <div className="flex flex-row gap-0">
      <Sidebar />
      <div className="w-screen h-screen bg-red-50">
        <div className="mx-[30px] flex flex-row justify-between h-[80px] mt-[53px]">
          <div className="flex flex-col text-red-300">
            <h1 className="text-3xl font-sans font-bold">
              Welcome to StashSpot
            </h1>
            <span className="text-xl">Hi User, Welcome Back</span>
          </div>
          <div className="mt-[15px] flex flex-row gap-4 mx-[40px]">
            <button className="w-[50px] h-[50px] rounded-lg shadow-md bg-white">
              <FaMoon className="w-[24px] h-[24px] m-[15px] text-gray-400" />
            </button>
            <button className="w-[50px] h-[50px] rounded-lg shadow-md bg-white">
              <FaBell className="w-[24px] h-[24px] m-[15px] text-gray-400" />
            </button>
            <img
              src="https://api.multiavatar.com/Binx Bond.png"
              alt=""
              className="w-[50px] h-[50px]"
            />
          </div>
        </div>
        <div className="flex flex-row gap-8 m-[25px]">
          <ChartBox />
            <Balance />
           {/* <BalLoader /> */}
        </div>

        <div className="flex flex-row gap-8 m-[25px]">
          <Transactions />
      

          <div className="w-[600px] h-[350px] bg-white rounded-lg  shadow-md">
            <div className="flex flex-row justify-between">
              <span className="m-[15px] font-md font-semibold">
                Expense Goal Tracker
              </span>
              <button >
                <GoKebabHorizontal className="text-dark w-[25px] h-[25px] mx-[10px] text-teal-600" />
              </button>
            </div>
            <div className="mx-[200px] mt-[10px]">
            <CircularProgress progress={progress}/>
            <div className="mx-[30px] w-[160px] h-[50px] mt-[10px] rounded-md">

              <p className="text-center text-3xl font-bold text-pretty text-red-300 align-middle">Rs. 50,000</p>

            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
