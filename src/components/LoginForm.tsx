import styled from "styled-components";
import { KeyboardEvent, useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { message } from "antd";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/userSlice";
import useGlobalModal from "../hooks/useGlobalModal";
import SigninForm from "./SigninForm";

const EMAIL_REGEXP = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const userDataBase = useAppSelector((state: RootState) => state.userDataBase);
  const { openGlobalModal, closeGlobalModal } = useGlobalModal();

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

    const isLoginEnabledInfo = userDataBase.filter(
      (item) => item.email === email && item.password === password
    );

    if (isLoginEnabledInfo.length) {
      dispatch(
        loginUser({
          email: email,
          password: password,
          phone: isLoginEnabledInfo[0].phone,
          name: isLoginEnabledInfo[0].name,
          birth_date: isLoginEnabledInfo[0].birth_date,
          companion_animal: isLoginEnabledInfo[0].companion_animal,
        })
      );
      closeGlobalModal();
      message.success(`${email}로 로그인했습니다`);
    } else {
      message.error("이메일 또는 비밀번호가 일치하지 않습니다");
    }
  };

  return (
    <LoginFormStyle>
      <div className="modalContent">
        <div className="inputBox email">
          <p>이메일</p>
          <div className="inputWrap">
            <input
              type="email"
              value={email}
              placeholder="welcome@pet-friends.co.kr"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>
        <div className="inputBox password">
          <p>비밀번호</p>
          <div className="inputWrap">
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              placeholder="비밀번호 입력"
              onChange={(event) => setPassword(event.target.value)}
            />
            <div
              className="img"
              onClick={() => setPasswordVisible((state) => !state)}
            >
              {passwordVisible ? (
                <EyeOutlined style={{ fontSize: 20 }} />
              ) : (
                <EyeInvisibleOutlined style={{ fontSize: 20 }} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="modalButton">
        <button
          type="button"
          onClick={() => {
            closeGlobalModal();
            openGlobalModal({
              isOpen: true,
              headerOption: {
                type: "signin",
                title: "회원가입",
                onClick: closeGlobalModal,
              },
              content: <SigninForm />,
              onClose: closeGlobalModal,
            });
          }}
        >
          회원가입
        </button>
        <button type="button" onClick={handleLoginClick}>
          로그인
        </button>
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

      p {
        font-size: 10px;
        color: #9ca1aa;
        margin-bottom: 8px;
      }

      .inputWrap {
        width: 100%;
        height: 43px;
        position: relative;

        input {
          display: block;
          width: 100%;
          height: 100%;
          padding: 0 50px 0 16px;
          font-size: 14px;
          color: #1c1e21;
          border: 1px solid #e9ebec;
          border-radius: 6px;
          font-weight: 400;

          &::placeholder {
            color: #c6c9ce;
          }

          &:focus {
            border: 1px solid #2d3035;
            transition: 0.3s;
          }
        }

        .img {
          position: absolute;
          top: 50%;
          right: 12px;
          width: 24px;
          height: 24px;
          transform: translateY(-50%);
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }

  .modalButton {
    display: flex;
    gap: 8px;

    button {
      flex-grow: 1;
      height: 43px;
      border-radius: 6px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;

      &:first-of-type {
        border: 1px solid #e9ebec;
        background: none;
        color: #1c1e21;
      }

      &:last-of-type {
        background: #ff4081;
        color: #fff;
      }
    }
  }
`;
