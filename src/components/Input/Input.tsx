import { EyeButton } from "@/pages/auth/assets/EyeButton";
import React from "react";

interface IInput {
  prepend?: React.ReactNode;
  append?: React.ReactNode;
  type?: string;
  label?: string;
  className?: string;
  error?: string | any;
  value?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInput> = ({
  prepend,
  append,
  type,
  error,
  className,
  label,
  placeholder,
  value,
  name,
  id,
  onChange,
  onBlur,
}: IInput) => {
  const [isHiddenPassword, setIsHiddenPassword] = React.useState<boolean>(true);
  // const [error, setError] = React.useState(true);
  if (type === "password") {
    return (
      <div className="w-full m-auto ">
        <div className="">
          <div className={`${className} text-[15px] font-bold text-left my-1`}>
            {label}
          </div>
          <div
            className={`flex  bg-white border-2 border-blue-600 rounded-md  p-2 mx-auto ${
              error ? "border border-red-600" : ""
            }`}
          >
            <input
              type={isHiddenPassword ? "password" : "text"}
              className={`w-full outline-none pl-2`}
              id={name}
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
            />
            <div className="border-black border-l-2 px-2">
              <EyeButton
                isHidden={isHiddenPassword}
                onClick={() => setIsHiddenPassword(!isHiddenPassword)}
              />
            </div>
          </div>
          {error && <p className="text-red-600 text-xs text-left">{error}</p>}
        </div>
      </div>
    );
  } else if (prepend) {
    return (
      <div className="w-full m-auto">
        <div className="w-[20%]">
          <div className={`${className} text-[15px] font-bold text-left my-1`}>
            {label}
          </div>
          <div
            className={`flex bg-white rounded-md p-2 mx-auto ${
              error
                ? "border border-red-600"
                : "focus-within:border border-blue-600"
            }`}
          >
            <div className="border-black border-r-2 px-2">{prepend}</div>
            <input
              type={type}
              className="w-full bg-transparent outline-none pl-2"
              id={name}
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
            />
          </div>
          {error && <p className="text-red-600 text-xs text-left">{error}</p>}
        </div>
      </div>
    );
  } else if (append) {
    return (
      <div className="w-full m-auto">
        <div>
          <div className={`${className} text-[15px] font-bold text-left my-1`}>
            {label}
          </div>
          <div
            className={`flex bg-white rounded-md border-2 border-blue-600 p-2 mx-auto ${
              error ? "border border-red-600" : ""
            }`}
          >
            <input
              type={type}
              className="w-full bg-transparent outline-none pl-2"
              id={name}
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
            />
            <div className="border-black border-l-2 px-2">{append}</div>
          </div>
          {error && <p className="text-red-600 text-xs text-left">{error}</p>}
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full m-auto">
        <div className="">
          <div className={`${className} text-[15px] font-bold text-left my-2`}>
            {label}
          </div>
          <div
            className={`flex bg-white rounded-md  p-2 mx-auto border-2 border-blue-600 ${
              error
                ? "border border-red-600"
                : "focus-within:border border-[#CDE1FA]"
            }`}
          >
            <input
              type={type ? type : "text"}
              className="w-full bg-transparent outline-none pl-2"
              id={name}
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
            />
          </div>
          {error && <p className="text-red-600 text-xs text-left">{error}</p>}
        </div>
      </div>
    );
  }
};

export default Input;
