import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../models/user";

const initialState: UserType[] = [];

export const userDataBaseSlice = createSlice({
  name: "userDataBase",
  initialState,
  reducers: {
    setReduxUserDataBase: (state, action: PayloadAction<UserType>) => {
      return [...state, action.payload];
    },
  },
});

export const { setReduxUserDataBase } = userDataBaseSlice.actions;
export default userDataBaseSlice.reducer;
