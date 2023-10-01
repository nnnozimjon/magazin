import { Axios } from "@/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { ApiAuthRoutes } from "./constants";
import { setCookie } from "nookies";

export interface loginProps {
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  "login",
  async (body: loginProps, { dispatch }) => {
    // const route: any = useRouter();
    try {
      const data = await Axios.post(ApiAuthRoutes.login, body);
      setCookie(null, "access_token", data.accessToken, {
        maxAge: 30 * 24 * 60 * 60, // Max age in seconds (e.g., 30 days)
        path: "/", // Path where the cookie is accessible (usually '/')
      });
      return data;
    } catch (err: any) {
      err = err?.data || err.message;
      toast.error(err);
      console.log("oah", err);
    }
  }
);
