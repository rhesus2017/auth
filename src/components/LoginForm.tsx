import styled from "styled-components";
import { KeyboardEvent, useState } from "react";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/userSlice";
import useGlobalModal from "../hooks/useGlobalModal";
import SignInForm from "./SignInForm";
import { EMAIL_REGEXP } from "../constants/regExpConstants";
import Input from "./Input";
import Button from "./Button";
import useAuth from "../hooks/useAuth";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { openGlobalModal, closeGlobalModal } = useGlobalModal();
  const { userDataBase } = useAuth();
  const isLoggedIn = userDataBase.filter(
    (item) => item.email === email && item.password === password
  );

  const handleLoginClick = () => {
    if (!email) {
      message.info("이메일을 입력해주세요");
      return;
    }

    if (!EMAIL_REGEXP.test(email)) {
      message.info("올바른 이메일 형식이 아닙니다");
      return;
    }

    if (!password) {
      message.info("비밀번호를 입력해주세요");
      return;
    }

    if (isLoggedIn.length) {
      dispatch(
        loginUser({
          email: email,
          password: password,
        })
      );
      closeGlobalModal();
      message.success(`${email}로 로그인했습니다`);
    } else {
      message.error("이메일 또는 비밀번호가 일치하지 않습니다");
    }
  };

  const handleJoinModalOpen = () => {
    closeGlobalModal();
    openGlobalModal({
      isOpen: true,
      headerOption: {
        headerType: "signIn",
        title: "회원가입",
        onClick: closeGlobalModal,
      },
      content: <SignInForm />,
      onClose: closeGlobalModal,
    });
  };

  const handleEnterPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") handleLoginClick();
  };

  return (
    <LoginFormStyle>
      <div className="modalContent">
        <div className="inputBox email">
          <p>이메일</p>
          <Input
            type="default"
            inputType="email"
            value={email}
            placeholder="welcome@pet-friends.co.kr"
            onChange={(event) => setEmail(event)}
            onKeyDown={handleEnterPress}
          />
        </div>
        <div className="inputBox password">
          <p>비밀번호</p>
          <Input
            type="password"
            inputType="password"
            value={password}
            placeholder="영문/숫자/특수문자 혼합 8~20자"
            onChange={(event) => setPassword(event)}
            onKeyDown={handleEnterPress}
          />
        </div>
      </div>
      <div className="buttonWrap">
        <Button
          buttonType="secondary"
          size="small"
          label="회원가입"
          onClick={handleJoinModalOpen}
        />
        <Button
          buttonType="primary"
          size="small"
          label="로그인"
          onClick={handleLoginClick}
        />
      </div>
    </LoginFormStyle>
  );
};

export default LoginForm;

const LoginFormStyle = styled.div`
  padding: 16px;
  background: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  .modalContent {
    margin-bottom: 24px;

    .inputBox {
      margin-bottom: 16px;

      &:last-of-type {
        margin-bottom: 0;
      }

      > p {
        font-weight: 400;
        font-size: 10px;
        line-height: 100%;
        color: ${({ theme }) => theme.font.tertiary};
        margin-bottom: 8px;
      }
    }
  }

  .buttonWrap {
    display: flex;
    gap: 8px;
  }
`;
