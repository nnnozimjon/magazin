import React from "react";
import Icon from "../Icon";

const Number: React.FC = () => {
  const [count, setCount] = React.useState<number>(0);

  return (
    <div className="flex justify-between items-center text-[25px] w-40 h-[40px] border-2 border-gray-300 rounded-l-md rounded-r-md px-4">
      <div
        className={`cursor-pointer font-bold mr-2 ${
          count == 0 ? "text-gray-300" : "text-[#0D6EFD]"
        }`}
        onClick={() => {
          count > 0 ? setCount(count - 1) : setCount(count);
        }}
      >
        <Icon name="remove" />
      </div>
      <div className="w-16 text-center border-x-2 border-gray-300 px-2">
        {count}
      </div>
      <div
        className={`text-[#0D6EFD] font-bold cursor-pointer ml-2`}
        onClick={() => setCount(count + 1)}
      >
        <Icon name="add" />
      </div>
    </div>
  );
};

export default Number;
