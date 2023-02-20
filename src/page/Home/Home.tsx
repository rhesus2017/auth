import { useState } from "react";
import styled from "styled-components";
import JoinModal from "../../components/JoinModal";
import LoginModal from "../../components/LoginModal";

const Home = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [joinModalVisible, setJoinModalVisible] = useState(false);

  return (
    <HomeStyled>
      <p>김태진</p>
      <button type="button" onClick={() => setLoginModalVisible(true)}>
        로그인하기
      </button>
      {loginModalVisible && (
        <LoginModal
          setVisible={setLoginModalVisible}
          setJoinModalVisible={setJoinModalVisible}
        />
      )}
      {joinModalVisible && (
        <JoinModal
          visible={joinModalVisible}
          setVisible={setJoinModalVisible}
        />
      )}
    </HomeStyled>
  );
};

export default Home;

const HomeStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  > p {
    padding-top: 32px;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: -0.02em;
  }

  > button {
    width: 343px;
    height: 43px;
    background: #ff4081;
    color: #fff;
    border-radius: 6px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
`;
