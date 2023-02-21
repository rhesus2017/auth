import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReactNode } from "react";

export interface ModalType {
  isOpen: boolean;
  headerOption: {
    type: "login" | "signin";
    title: string;
    onClick: () => void;
  };
  content: ReactNode;
  onClose: () => void;
}

const initialState: ModalType = {
  isOpen: false,
  headerOption: {
    type: "login",
    title: "",
    onClick: () => {},
  },
  content: undefined,
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
