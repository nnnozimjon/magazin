import { SetStateAction } from "react";

declare namespace IPagination {
  interface props {
    size: number;
    setSize: React.Dispatch<SetStateAction<number>>
  }
}

export default IPagination
