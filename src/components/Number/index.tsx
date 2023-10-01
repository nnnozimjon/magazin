import React from "react";
import Icon from "../Icon";

interface INumber {
  count: number;
  decrement: () => void;
  increment: () => void;
}

const Number: React.FC<INumber> = ({
  count,
  decrement,
  increment,
}: INumber) => {
  return (
    <div className="flex justify-between items-center text-[25px] w-40 h-[40px] border-2 border-gray-300 rounded-l-md rounded-r-md px-4">
      <div
        className={`font-bold mr-2 ${
          count === 1
            ? "text-gray-300 cursor-not-allowed"
            : "text-[#0D6EFD] cursor-pointer"
        }`}
        onClick={decrement}
      >
        <Icon name="remove" />
      </div>
      <div className="w-16 text-center border-x-2 border-gray-300 px-2">
        {count}
      </div>
      <div
        className={`text-[#0D6EFD] font-bold cursor-pointer ml-2`}
        onClick={increment}
      >
        <Icon name="add" />
      </div>
    </div>
  );
};

export default Number;
