import { useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { useAppSelector } from "../redux/hooks";
import { closeModal, openModal } from "../redux/modalSlice";
import { ModalType } from "../models/modal";

const useGlobalModal = () => {
  const dispatch = useDispatch();
  const modalState = useAppSelector((state: RootState) => state.modal);

  const openGlobalModal = ({
    isOpen,
    headerOption,
    content,
    onClose,
  }: ModalType) => {
    dispatch(
      openModal({
        isOpen,
        headerOption,
        content,
        onClose,
      })
    );
  };

  const closeGlobalModal = () => {
    dispatch(closeModal());
  };

  return { modalState, openGlobalModal, closeGlobalModal };
};

export default useGlobalModal;
