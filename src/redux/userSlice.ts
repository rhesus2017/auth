import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../models/user";

const initialState: { logged: boolean; user: UserType } = {
  logged: false,
  user: {
    email: "",
    password: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
      state.logged = true;
    },
    logoutUser: () => {
      return initialState;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
