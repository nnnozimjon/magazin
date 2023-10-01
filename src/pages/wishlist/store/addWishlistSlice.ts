import { createSlice } from "@reduxjs/toolkit";
import { data } from "@/pages";
import { log } from "console";

export interface IAddWishlistState {
  wishlist: Array<any>;
  items: any;
}

const initialState: any = {
  wishlist: [],
  // items: data,
};

export const addWishlistSlice = createSlice({
  name: "addWishlistSlice",
  initialState,
  reducers: {
    addToWishlist: (state: IAddWishlistState, { payload }) => {
      if (state.wishlist.find((el) => el.productId === payload.productId)) {
        state.wishlist = state.wishlist.filter(
          (el) => el.productId !== payload.productId
        );
        return;
      }
      state.wishlist = [...state.wishlist, payload];
    },

    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist?.filter(
        (item: any) => item.productId !== action.payload
      );
    },
  },
  // extraReducers: (builder: any) => {
  //   builder.addCase(
  //     addWishlist.pending,
  //     (state: IAddCartState, action: PayloadAction) => {}
  //   );
  //   builder.addCase(
  //     addWishlist.fulfilled,
  //     (state: IAddCartState, action: PayloadAction) => {}
  //   );
  //   builder.addCase(
  //     addWishlist.rejected,
  //     (state: IAddCartState, action: PayloadAction) => {}
  //   );
  // },
});

export const { addToWishlist } = addWishlistSlice.actions;

export default addWishlistSlice.reducer;
