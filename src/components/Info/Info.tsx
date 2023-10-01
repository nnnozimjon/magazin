import { FC } from "react";

export const Info: FC<{ isError?: boolean; children: string }> = ({
  isError,
  children,
}) => {
  return (
    <div
      className={`text-xs ${
        isError ? "text-red-500" : ""
      } bg-yellow-200 px-3 py-2 rounded-md mt-6 border ${
        isError ? "border-red-500" : ""
      }`}
    >
      {children}
    </div>
  );
};
