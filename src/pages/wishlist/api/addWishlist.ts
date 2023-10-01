import { Axios } from "@/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiWishlistRoutes } from "./constants";

export interface IAddWishlistProps {
  productId: number;
}

export interface IAddWishlistResponse {
  code: number;
  message: string;
  payload: {
    totalProducts: number;
    productData: {
      productId: number;
      productName: string;
      description: null;
      price: string;
      discount: string;
      images: [];
    }[];
  };
}

export const addWishlist = createAsyncThunk(
  "addWishlist/addWishlistSlice",
  async (body: IAddWishlistProps, { dispatch }) => {
    try {
      const data = await Axios.post(
        ApiWishlistRoutes.addWishlist + `?productId=${body.productId}`,
        {
          productId: body.productId,
        }
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
