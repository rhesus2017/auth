import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import close from "../assets/img/close.png";
import visibilityoff from "../assets/img/visibility_off.png";

interface LoginModalProps {
  setVisible: Dispatch<SetStateAction<boolean>>;
  setJoinModalVisible: Dispatch<SetStateAction<boolean>>;
}

const LoginModal = (props: LoginModalProps) => {
  const { setVisible, setJoinModalVisible } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);

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
                />
              </div>
            </div>
            <div className="inputBox password">
              <p>비밀번호</p>
              <div className="inputWrap">
                <input
                  type={passwordVisible ? "password" : "text"}
                  value={password}
                  placeholder="비밀번호 입력"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <img
                  src={visibilityoff}
                  alt="비밀번호 확인하기"
                  onClick={() => setPasswordVisible((state) => !state)}
                />
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
            <button type="button">로그인</button>
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

            img {
              position: absolute;
              top: 50%;
              right: 12px;
              width: 24px;
              height: 24px;
              transform: translateY(-50%);
              cursor: pointer;
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
