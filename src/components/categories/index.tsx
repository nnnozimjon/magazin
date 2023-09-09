import React, { useState } from "react";
import Icon from "../Icon";

interface ICategories {
  className?: string;
}

interface Option {
  name: string;
  icon: string;
  data?: {
    tel?: string;
  };
}

const Categories: React.FC<ICategories> = ({ className }) => {
  const [inputValue, setInputValue] = useState("");
  //   const [filteredData, setFilteredData] = useState<Option[]>([]);
  const [showList, setShowList] = useState(false);

  const options: Option[] = [
    {
      name: "hama",
      icon: "compWithPhone",
      data: {
        tel: "telephone",
      },
    },
    // { name: "hama1", icon: "clear" },
    // { name: "hama2", icon: "clear" },
  ];

  //   const handleInputChange = (data:any) => {
  //     const newValue = .toLowerCase();
  //     setInputValue(newValue);

  //     setShowList(true);
  //   };
  const filteredItems = options.filter((item) =>
    item.name.toLowerCase().includes(item.name)
  );

  const handleBlur = () => {
    setShowList(true);
  };

  const handleItemClick = (name: string) => {
    setShowList(false); // Close the list after clicking an item
  };

  return (
    <div className="">
      <ul className={`${className}`}>
        {filteredItems.map((elem) => (
          <li
            key={elem.name}
            className="w-[20%] hover:bg-[#E5F1FF] flex justify-start cursor-pointer items-center py-2 px-3"
            onClick={() => handleItemClick(elem.name)} // Pass name directly
            onBlur={handleBlur}
          >
            <span>{<Icon name="clear" />}</span>
            <span className="mb-[2px] ml-[10px]">{elem.name}</span>
            {showList && elem.data?.tel && (
              <span className="ml-2 text-gray-500">Tel: {elem.data.tel}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
