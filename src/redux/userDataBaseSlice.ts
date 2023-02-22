import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDataBaseType } from "../models/user";

const initialState: UserDataBaseType[] = [];

export const userDataBaseSlice = createSlice({
  name: "userDataBase",
  initialState,
  reducers: {
    joinUser: (state, action: PayloadAction<UserDataBaseType>) => {
      return [...state, action.payload];
    },
  },
});

export const { joinUser } = userDataBaseSlice.actions;
export default userDataBaseSlice.reducer;
