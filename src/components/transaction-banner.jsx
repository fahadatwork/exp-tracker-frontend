import React from "react";
import { FaCircleArrowDown } from "react-icons/fa6";
import { FaCircleArrowUp } from "react-icons/fa6";
import Chip from "./chip";
import moment from "moment";

const TransactionBanner = ({ type, balance, name }) => {
  const transactionDate = moment().format("MMMM Do YYYY . h:mm A");

  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="w-[800px] h-[60px] ml-[10px] flex flex-row gap-2 m-[20px]">
          {type === "credit" ? (
            <FaCircleArrowDown className="w-[45px] h-[45px] rounded-xl text-green-300 mx-[10px]" />
          ) : (
            <FaCircleArrowUp className="w-[45px] h-[45px] rounded-xl text-red-300 mx-[10px]" />
          )}

          <div className="flex flex-col gap-1">
            <h1 className={`text-2xl mt-0 font-sans ${type ==="credit" ? 'text-green-600' : 'text-red-300'}`}>{name}</h1>
            <span className={`text-xs font-sans font-semibold ${type ==="credit" ? 'text-green-600' : 'text-red-300'}`}>
              {transactionDate}
            </span>
          </div>
        </div>

        <h2 className="mt-[30px] mx-[15px] font-semibold text-xl">
          {type === "credit" ? (
            <div className="flex flex-col text-green-300">
         
         {balance.toLocaleString() } <Chip type={type} /> 
            </div>
          ) : (
            <div className="flex flex-col text-red-300">
        
        {balance.toLocaleString() }<Chip type={type} /> 
            </div>
          )}
        </h2>
      </div>
    </>
  );
};

export default TransactionBanner;
