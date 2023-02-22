import { ReactNode } from "react";

export interface ModalType {
  isOpen: boolean;
  headerOption: {
    headerType: "login" | "signIn";
    title: string;
    onClick: () => void;
  };
  content: ReactNode;
  onClose: () => void;
}
