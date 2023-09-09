import { useState } from "react";
import Checkbox from "../Checkbox";
import Icon from "../Icon";

const Dropdown: React.FC<IDropdown.props> = ({
  options,
  type,
  className,
  checked,
}) => {
  const [chacked, setChacked] = useState<boolean>(false);
  // const filterData = (id: any) => {
  //   const filteredData = options.filter((item: any) => item.id === id);
  //   console.log(filteredData);
  // };

  const [isChecked, setIsChecked] = useState<boolean>(false); // Renamed 'chacked' to 'isChecked'

  const filterData = (id: number) => {
    const filteredData = options.filter((item: any) => item.id === id);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showList, setShowList] = useState(false);

  const handleInputChange = (event: any) => {
    const newValue = event.target.value.toLowerCase();
    setInputValue(newValue);

    const filteredItems = options.filter((item: any) =>
      item.toLowerCase().includes(newValue)
    );
    setFilteredData(filteredItems);
    setShowList(true);
  };
  const handleFocus = () => {
    setShowList(true);
  };

  const handleBlur = () => {
    setShowList(false);
  };

  const handleItemClick = (item: any) => {
    setInputValue(item);
    setShowList(false);
  };

  if (type === "multiselect") {
    return (
      <div className="w-[20%] p-2">
        <ul className="border-[1px] rounded-lg border-gray-200 shadow-md shadow-gray-500">
          {options.map((elem: any) => {
            return (
              <li
                className="hover:bg-[#E5F1FF] flex justify-start cursor-pointer items-center py-2 px-3"
                onClick={(e) => {
                  filterData(elem.id);
                }}
              >
                <input
                  type="checkbox"
                  checked={chacked}
                  className="w-[18px] h-[18px] border-2 rounded-full accent-blue-600 cursor-pointer"
                />
                <span className="mb-[2px] ml-[10px]">{elem.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else if (type === "withSearch") {
    return (
      <div className="w-[20%] p-2">
        <div className="flex flex-row items-center px-2 border-2 rounded-lg border-gray-200 my-2">
          <Icon name="search" color="gray-300" />
          <input
            type="text"
            value={inputValue}
            // onFocus={handleFocus}
            // onBlur={handleBlur}
            onChange={handleInputChange}
            placeholder="Type something..."
            className="w-full outline-none appearance-none p-2"
          />
          {/* {inputValue.length > 0 && <Icon name="clear" color="gray-300" />} */}
        </div>
        {showList && (
          <ul className="border-[1px] rounded-lg border-gray-200 shadow-md shadow-gray-500">
            {options.map((item: any) => (
              <li
                className="hover:bg-[#E5F1FF] flex justify-start cursor-pointer items-center py-2 px-3"
                key={item}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        {/* {inputValue !== "" && (
          <ul className="border-[1px] rounded-lg border-gray-200 shadow-md shadow-gray-500">
            {filteredData.map((item) => (
              <li
                className="hover:bg-[#E5F1FF] flex justify-start cursor-pointer items-center py-2 px-3"
                key={item}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )} */}
      </div>
    );
  } else if (type === "category") {
    return (
      <div className="">
        <ul className={`${className}` + ""}>
          {options.map((elem: any) => {
            return (
              <li
                className="w-[20%] hover:bg-[#E5F1FF] flex justify-start cursor-pointer items-center py-2 px-3"
                onClick={(e) => {
                  filterData(elem.id);
                }}
              >
                <span>{<Icon name={elem.icon} />}</span>
                <span className="mb-[2px] ml-[10px] px-2 ">{elem.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="">
        <ul
          className={
            `${className}` +
            "border-[1px] rounded-lg border-gray-200 shadow-md shadow-gray-500 "
          }
        >
          {options.map((elem: any) => {
            return (
              <li
                className="hover:bg-[#E5F1FF] flex justify-start cursor-pointer items-center py-2 px-3"
                onClick={(e) => {
                  filterData(elem.id);
                }}
              >
                <span>{<Icon name={elem.icon} />}</span>
                <span className="mb-[2px] ml-[10px]">{elem.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default Dropdown;
