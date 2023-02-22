import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDataBaseType } from "../models/user";

const initialState: UserDataBaseType[] = [];

export const userDataBaseSlice = createSlice({
  name: "userDataBase",
  initialState,
  reducers: {
    signInUser: (state, action: PayloadAction<UserDataBaseType>) => {
      return [...state, action.payload];
    },
  },
});

export const { signInUser } = userDataBaseSlice.actions;
export default userDataBaseSlice.reducer;
