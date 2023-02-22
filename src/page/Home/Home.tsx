import styled from "styled-components";
import Logout from "./components/LogoutButton";
import Login from "./components/LoginButton";
import useGlobalModal from "../../hooks/useGlobalModal";
import LoginForm from "../../components/LoginForm";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { openGlobalModal, closeGlobalModal } = useGlobalModal();
  const { userState, handleLogout } = useAuth();

  const handleLoginModalOpen = () => {
    openGlobalModal({
      isOpen: true,
      headerOption: {
        headerType: "login",
        title: "로그인",
        onClick: closeGlobalModal,
      },
      content: <LoginForm />,
      onClose: closeGlobalModal,
    });
  };

  return (
    <HomeStyled>
      <p className="applicantName">김태진</p>
      {userState.logged ? (
        <Logout user={userState.user} onClick={handleLogout} />
      ) : (
        <Login onClick={handleLoginModalOpen} />
      )}
    </HomeStyled>
  );
};

export default Home;

const HomeStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .applicantName {
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    position: absolute;
    top: 32px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
