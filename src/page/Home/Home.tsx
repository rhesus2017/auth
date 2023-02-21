import styled from "styled-components";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import Logout from "./components/Logout";
import Login from "./components/Login";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/userSlice";
import useGlobalModal from "../../hooks/useGlobalModal";
import LoginForm from "../../components/LoginForm";

const Home = () => {
  const dispatch = useDispatch();
  const userState = useAppSelector((state: RootState) => state.user);
  const { openGlobalModal, closeGlobalModal } = useGlobalModal();

  const handleLoginClick = () => {
    openGlobalModal({
      isOpen: true,
      headerOption: {
        type: "login",
        title: "로그인",
        onClick: closeGlobalModal,
      },
      content: <LoginForm />,
      onClose: closeGlobalModal,
    });
  };

  const handleLogoutClick = () => {
    dispatch(logoutUser());
  };

  return (
    <HomeStyled>
      <p className="applicantName">김태진</p>

      {userState.logged ? (
        <Logout user={userState.user} onClick={handleLogoutClick} />
      ) : (
        <Login onClick={handleLoginClick} />
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
