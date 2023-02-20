import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../interfae/user";

const initialState: UserType = {
  email: "",
  password: "",
  phone: "",
  birth_date: "",
  companion_animal: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setReduxUser: (_state, action: PayloadAction<UserType>) => {
      return action.payload;
    },
  },
});

export const { setReduxUser } = userSlice.actions;
export default userSlice.reducer;
