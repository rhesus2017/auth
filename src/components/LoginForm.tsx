import styled from "styled-components";
import { useState } from "react";
import useGlobalModal from "../hooks/useGlobalModal";
import SignInForm from "./SignInForm";
import Input from "./Input";
import Button from "./Button";
import useAuth from "../hooks/useAuth";
import { UserType } from "../models/user";
import useDataValidation from "../hooks/useDataValidation";

const LoginForm = () => {
  const [loginInputs, setLoginInputs] = useState<UserType>({
    email: "",
    password: "",
  });
  const { openGlobalModal, closeGlobalModal } = useGlobalModal();
  const { handleLogIn } = useAuth();
  const { returnLoginValidation } = useDataValidation();

  const handleInputs = (type: string, value: string) => {
    setLoginInputs((state) => ({ ...state, [type]: value }));
  };

  const handleLoginButtonClick = () => {
    if (returnLoginValidation(loginInputs)) handleLogIn(loginInputs);
  };

  const handleSignInModalOpen = () => {
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

  return (
    <LoginFormStyle>
      <div className="modalContent">
        <div className="inputBox email">
          <p>이메일</p>
          <Input
            type="default"
            inputType="email"
            value={loginInputs.email}
            placeholder="welcome@pet-friends.co.kr"
            onChange={(value) => handleInputs("email", value)}
          />
        </div>
        <div className="inputBox password">
          <p>비밀번호</p>
          <Input
            type="password"
            inputType="password"
            value={loginInputs.password}
            placeholder="영문/숫자/특수문자 혼합 8~20자"
            onChange={(value) => handleInputs("password", value)}
          />
        </div>
      </div>
      <div className="buttonWrap">
        <Button
          buttonType="secondary"
          size="small"
          label="회원가입"
          onClick={handleSignInModalOpen}
        />
        <Button
          buttonType="primary"
          size="small"
          label="로그인"
          onClick={handleLoginButtonClick}
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
