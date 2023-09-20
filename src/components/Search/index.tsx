import React from "react";
import Icon from "../Icon";

const Search: React.FC<ISearch.props> = ({
  append,
  prepend,
  type,
  className,
}) => {
  const [isActive, setIsActive] = React.useState<boolean>(false);
  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };
  if (prepend) {
    return (
      <div
        className={`${className} flex flex-row items-center px-2 border-2 rounded-lg ${
          type === "outline" && !isActive
            ? "border border-gray-300"
            : "border-blue-600"
        }`}
      >
        {prepend ? (
          <Icon
            name="search"
            color={`${
              type === "outline" && isActive
                ? "blue-600"
                : type === "primary"
                ? "blue-600"
                : "gray-300"
            }`}
          />
        ) : (
          ""
        )}
        <input
          type="search"
          placeholder="Search"
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="w-full outline-none appearance-none p-2"
        />
      </div>
    );
  } else {
    return (
      <div
        className={`${className} flex flex-row items-center px-2 border-2 rounded-lg ${
          type === "outline" && !isActive
            ? "border border-gray-300"
            : "border-blue-600"
        }`}
      >
        <input
          type="search"
          placeholder="Search"
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="w-full outline-none appearance-none p-2"
        />
        {append ? (
          <Icon
            name="search"
            color={`${
              type === "outline" && isActive
                ? "blue-600"
                : type === "primary"
                ? "blue-600"
                : "gray-300"
            }`}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
};

export default Search;
