import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiAuthRoutes } from "./constants";
import { Axios } from "@/axios";
import { useRouter } from "next/navigation";

export interface IUSerProps {
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export const registerUser = createAsyncThunk(
  "registerUser",
  async (body: IUSerProps, { dispatch }) => {
    try {
      const data = await Axios.post(ApiAuthRoutes.registerUser, body);
      return data;
    } catch (err: any) {
      err = err.response.data.message;
      console.log("error", err);
    }
  }
);
