import styled from "styled-components";
import useGlobalModal from "../hooks/useGlobalModal";
import Header from "./Header";

const Modal = () => {
  const { modalState, closeGlobalModal } = useGlobalModal();
  const { content, headerOption } = modalState;

  return (
    <ModalStyled>
      <div className="modalWrap">
        <Header
          headerType={headerOption.headerType}
          title={headerOption.title}
          onClick={headerOption.onClick}
        />
        {content}
      </div>
      <div className="dimmed" onClick={closeGlobalModal}></div>
    </ModalStyled>
  );
};

export default Modal;

const ModalStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .dimmed {
    width: 100%;
    height: 100%;
    background: #1e1e1e;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;
