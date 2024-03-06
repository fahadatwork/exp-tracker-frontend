import React from "react";
import Chart from "./chart";
import { GoKebabHorizontal } from "react-icons/go";

function ChartBox() {
  return (
    <div className="bg-white shadow-md w-[820px] h-[410px] rounded-xl">
      <div className="flex flex-row justify-between">
        <span className="m-[15px] font-md font-semibold">Expenses by Month</span>
        <button>
          <GoKebabHorizontal className="text-dark w-[25px] h-[25px] mx-[10px] text-teal-600" />
        </button>
      </div>
      <div>
        <Chart />
      </div>
    </div>
  );
}

export default ChartBox
