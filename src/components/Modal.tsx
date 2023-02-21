import styled from "styled-components";
import useGlobalModal from "../hooks/useGlobalModal";
import Header from "./Header";

const Modal = () => {
  const { modalState } = useGlobalModal();
  const { content, headerOption } = modalState;

  return (
    <ModalStyled>
      <div className="modalWrap">
        <Header
          type={headerOption.type}
          title={headerOption.title}
          onClick={headerOption.onClick}
        />
        {content}
      </div>
      {/* <div className="dimmed"></div> */}
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
  background: rgba(0, 0, 0, 0.7);

  .dimmed {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }
`;
