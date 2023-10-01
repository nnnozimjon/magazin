import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUSerProps, registerUser } from "../api/registerUser";

interface IRegisterUserState {
  storeData: IUSerProps[];
  storeLoading: boolean;
  storeError: boolean;
}

const initialState: IRegisterUserState = {
  storeData: [],
  storeLoading: false,
  storeError: false,
};

export const registerUserSlice = createSlice({
  name: "registerUserSlice",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(
      registerUser.pending,
      (state: IRegisterUserState, action: PayloadAction) => {
        state.storeLoading = true;
      }
    );
    builder.addCase(
      registerUser.fulfilled,
      (state: any, action: PayloadAction) => {
        (state.storeLoading = false),
          (state.storeData = action.payload),
          console.log(action, "pa");
      }
    );
    builder.addCase(
      registerUser.rejected,
      (state: any, action: PayloadAction) => {
        state.storeLoading = false;
        state.storeError = true;
      }
    );
  },
});

export default registerUserSlice.reducer;
