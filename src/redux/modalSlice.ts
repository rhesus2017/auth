import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalType } from "../models/modal";

const initialState: ModalType = {
  isOpen: false,
  headerOption: {
    headerType: "login",
    title: "",
    onClick: () => {},
  },
  content: null,
  onClose: () => {},
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (_, action: PayloadAction<ModalType>) => {
      return action.payload;
    },
    closeModal: () => {
      return initialState;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
