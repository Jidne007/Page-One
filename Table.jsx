import React from "react";
import TableIItem from "./TableIItem";
import tableData from "../../data/tableData";

const Table = () => {
  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">KYC</h2>

        <div className="flex justify-end mb-[10px]">
          <div></div>
          <div> <input className="text-md border-2 text-stone-300 rounded-md pe-[20px] ps-2  py-2 w-[11rem]" type="search" placeholder="All" /></div>
        </div>
        <div className="flex flex-col overflow-x-auto text-xs">
          <div className="flex justify-between font-bold border-b border-t-4 text-left bg-gray-50">
            <div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
              <input
                type="checkbox"
                name="All"
                className="w-3 h-3 rounded-sm dark:accent-violet-600"
              />
            </div>
            <div className="w-32 text-md px-2 py-3 sm:p-3">Name</div>
            <div className="w-32 text-md px-2 py-3 sm:p-3">User</div>
            <div className="w-32 text-md px-2 py-3 sm:p-3">Date</div>
            <div className="w-32 text-md px-2 py-3 sm:p-3">Time</div>
            <div className="w-32 text-md px-2 py-3 sm:p-3">Status</div>
            <div className="w-32 text-md px-2 py-3 sm:p-3">Action</div>
          </div>
          {tableData.map((item, i) => (
            <TableIItem key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
