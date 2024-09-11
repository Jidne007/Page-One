import React from "react";

const TableIItem = ({ item }) => {
  const { name, user, date, time, status } = item || {};
  return (
    <div className="flex justify-between items-center border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
      <div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
        <input
          type="checkbox"
          className="w-3 h-3 rounded-sm dark:accent-violet-600"
          name="Box0"
        />
      </div>
      <div className="w-32  text-[14px] px-2 py-3 sm:p-3">{name}</div>
      <div className="w-32  text-[14px] px-2 py-3 sm:p-3">{user}</div>
      <div className="w-32  text-[14px] px-2 py-3 sm:p-3">{date}</div>
      <div className="w-32  text-[14px] px-2 py-3 sm:p-3">{time}</div>
      <div
        className={`w-32 px-2 py-3 sm:p-3 ${
          (status === "Approved" && "text-green-600") ||
          (status === "Pending..." && "text-[#FFB946]")||
          (status === "Declined" && "text-[#F22B3E]")
        }`}
      >
        {status}
      </div>
      <div className="w-32 px-2 py-3 sm:p-3">
        <button className="border border-[#FFB946] p-2">Message</button>
      </div>
    </div>
  );
};

export default TableIItem;
