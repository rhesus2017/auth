import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../models/user";
import { getAge } from "../utils/util";

const initialState: UserType[] = [];

export const userDataBaseSlice = createSlice({
  name: "userDataBase",
  initialState,
  reducers: {
    setReduxUserDataBase: (
      state,
      action: PayloadAction<Omit<UserType, "age">>
    ) => {
      const age = getAge(action.payload.birth_date);
      return [...state, { ...action.payload, age: age }];
    },
  },
});

export const { setReduxUserDataBase } = userDataBaseSlice.actions;
export default userDataBaseSlice.reducer;
