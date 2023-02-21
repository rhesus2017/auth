import { Dispatch, SetStateAction, KeyboardEvent, useState } from "react";
import styled from "styled-components";
import close from "../assets/img/close.png";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { message } from "antd";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { setReduxUser } from "../redux/userSlice";

const EMAIL_REGEXP = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

interface LoginModalProps {
  setVisible: Dispatch<SetStateAction<boolean>>;
  setJoinModalVisible: Dispatch<SetStateAction<boolean>>;
}

const LoginModal = (props: LoginModalProps) => {
  const { setVisible, setJoinModalVisible } = props;
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const userDataBase = useAppSelector((state: RootState) => state.userDataBase);

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
        setReduxUser({
          email: email,
          password: password,
          phone: isLoginEnabledInfo[0].phone,
          birth_date: isLoginEnabledInfo[0].birth_date,
          companion_animal: isLoginEnabledInfo[0].companion_animal,
        })
      );
      setVisible(false);
      message.success(`${email}로 로그인했습니다`);
    } else {
      message.error("이메일 또는 비밀번호가 일치하지 않습니다");
    }
  };

  const handleEnterPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") handleLoginClick();
  };

  return (
    <LoginModalStyled>
      <div className="modal">
        <div className="modalHeader">
          로그인
          <img
            src={close}
            alt="로그인 닫기"
            onClick={() => setVisible(false)}
          />
        </div>
        <div className="modalBody">
          <div className="modalContent">
            <div className="inputBox email">
              <p>이메일</p>
              <div className="inputWrap">
                <input
                  type="email"
                  value={email}
                  placeholder="welcome@pet-friends.co.kr"
                  onChange={(event) => setEmail(event.target.value)}
                  onKeyDown={handleEnterPress}
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
                  onKeyDown={handleEnterPress}
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
                setVisible(false);
                setJoinModalVisible(true);
              }}
            >
              회원가입
            </button>
            <button type="button" onClick={handleLoginClick}>
              로그인
            </button>
          </div>
        </div>
      </div>
    </LoginModalStyled>
  );
};

export default LoginModal;

const LoginModalStyled = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    width: 432px;
    background: #fff;
    border-radius: 10px;

    .modalHeader {
      width: 100%;
      height: 53px;
      line-height: 53px;
      text-align: center;
      position: relative;
      font-size: 16px;
      font-weight: 700;
      border-bottom: 1px solid #f1f1f1;

      img {
        position: absolute;
        top: 50%;
        right: 19px;
        transform: translateY(-50%);
        display: block;
        width: 19px;
        height: 19px;
        cursor: pointer;
      }
    }

    .modalBody {
      padding: 16px;

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

        button {
          flex-grow: 1;
          height: 43px;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;

          &:first-of-type {
            margin-right: 8px;
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
    }
  }
`;
