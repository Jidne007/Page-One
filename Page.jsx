import React from "react";
import { MdDelete } from "react-icons/md";

const Page = ({ name }) => {
  return (
    <div className="flex justify-between items-center border-b-[1px] border-gray-300 py-3">
      <p>{name}</p>
      <div className="flex items-center text-yellow-500 gap-3">
        <p>Edit</p>
        <span>
          <MdDelete className="text-red-600" />
        </span>
      </div>
    </div>
  );
};

export default Page;
