import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { data } from "@/pages";

export interface IAddCartState {
  cart: Array<any>;
  items: any;
  totalQuantity: number;
  totalPrice: number;
}

const initialState: IAddCartState = {
  cart: [],
  items: data,
  totalQuantity: 0,
  totalPrice: 0,
};

export const addCartSlice = createSlice({
  name: "addCartSlice",
  initialState,
  reducers: {
    addToCart: (state: IAddCartState, { payload }) => {
      let find = state.cart.findIndex(
        (item: any) => item.productId === payload.productId
      );
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push({ ...payload, quantity: 1 });
      }
    },
    getCartTotal: (state) => {
      let { totalPrice, totalQuantity } = state?.cart.reduce(
        (cartTotal: any, cartItem: any) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        { totalPrice: 0, totalQuantity: 0 }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart?.filter(
        (item: any) => item.productId !== action.payload
      );
    },
    increaseItem: (state: IAddCartState, action: PayloadAction) => {
      state.cart = state.cart?.map((item: any) => {
        if (item.productId === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },

    deccreaseItem: (state: IAddCartState, action) => {
      state.cart = state.cart.map((item: any) => {
        if (item.quantity > 1 && item.productId === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
  },
});

export const {
  addToCart,
  getCartTotal,
  removeFromCart,
  increaseItem,
  deccreaseItem,
} = addCartSlice.actions;

export default addCartSlice.reducer;
