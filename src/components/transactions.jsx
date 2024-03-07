

import { FaSearch } from "react-icons/fa";
import TransactionBanner from "./transaction-banner";
import { useQuery } from "react-query";
import { useState } from "react";
import { fetchTransactions } from "./functions/api_calls";
import SkeletonLoader from "./skeletonLoader";
import { redirect, useNavigate } from "react-router-dom";
import ErrorPage from "./error-page";

const Transactions = () => {
 
  const navigate = useNavigate();
  
const { isLoading, data, isError, isSuccess } = useQuery({
  
  queryKey : ["transactions"],
  queryFn : fetchTransactions,


})

 if(isSuccess){
  console.log(data);
 }

 if(isLoading) return <SkeletonLoader />


 if(isError) {

     return navigate('/error');
 }


  
  return (
    <div className="w-[820px] h-[350px] rounded-lg bg-white shadow-md">
      <div className="flex flex-row justify-between gap-0">
        <h1 className="text-pretty text-lg font-semibold mx-[10px]">
          Recent transactions
        </h1>

        <div className="align-middle mt-[10px] flex gap-1 mx-[15px] ">
          <button className="text-gray-400 text-pretty  border-[2px] mt-[1px] size-[29px] rounded-md border-gray-400"
            onClick={() => {
              setType(type === "credit" ? "debit" : "credit");
            }}
          >
            <FaSearch  className="ml-[4px] "/>
          </button>
         <select name="cars" id="cars" className="border-[2px] h-[30px] border-gray-400 rounded-md">
            <option value="last 7 days">Last 7 Days</option>
            <option value="Last 30 days">Last 30 Days</option>
            <option value="Last 6 Months">Last Year</option>
            <option value="Last 12 Month">Last 6 Months</option>
          </select>
        </div>
      </div>

      {
        data[1].map((item) => (
          <TransactionBanner
            key={item._id} 
            type={item.type}
            date={item.date}
            name={item.type === "credit" ? "Deposit" : "Withdrawal"}
            balance={item.ammount}
          />
        ))}

      
    </div>
  );
};

export default Transactions;
