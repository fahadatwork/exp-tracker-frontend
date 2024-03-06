import React from "react";

import { FaSearch } from "react-icons/fa";
import TransactionBanner from "./transaction-banner";


import { useState } from "react";

const Transactions = () => {
  const money = 1550
  const [type, setType ] = useState("credit")

  
  return (
    <div className="w-[820px] h-[350px] rounded-lg bg-white shadow-md">
      <div className="flex flex-row justify-between gap-3">
        <h1 className="text-pretty text-lg m-[10px] font-semibold">
          Recent transactions
        </h1>
        <div className="w-70px h-30px mt-[19px] mx-[50px]">
          <button
            onClick={() => {
              setType(type === "credit" ? "debit" : "credit");
            }}
          >
            <FaSearch className="text-gray-400 text-pretty  h-[20px] w-[20px]" />
          </button>
         {/* <select name="cars" id="cars">
            <option value="last 7 days">Volvo</option>
            <option value="Last 30 days">Saab</option>
            <option value="Last 6 Months">Mercedes</option>
            <option value="Last 12 Month">Audi</option>
          </select> */}
        </div>
      </div>

      {/*Actual transactions */}

      <TransactionBanner
        type={type}
        balance={money}
        name={"Grocery Shopping"}
      />
      <TransactionBanner
        type={type}
        balance={money}
        name={"Petfood Purchase"}
      />
      <TransactionBanner type={type} balance={money} name={"Mobile Balance"} />
    </div>
  );
};

export default Transactions;
