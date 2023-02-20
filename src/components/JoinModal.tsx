import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import back from "../assets/img/back.png";
import visibilityOff from "../assets/img/visibility_off.png";
import dog from "../assets/img/dog.png";
import cat from "../assets/img/cat.png";

interface LoginModalProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const JoinModal = (props: LoginModalProps) => {
  const { visible, setVisible } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(true);
  const [phone, setPhone] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [companionAnimal, setCompanionAnimal] = useState("dog");

  return (
    <JoinModalStyled>
      <div className="modal">
        <div className="modalHeader">
          회원가입
          <img src={back} alt="뒤로가기" onClick={() => setVisible(false)} />
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
                  placeholder="영문/숫자/특수만자 혼합 8~20자"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <img
                  src={visibilityOff}
                  alt="비밀번호 확인하기"
                  onClick={() => setPasswordVisible((state) => !state)}
                />
              </div>
            </div>
            <div className="inputBox passwordConfirm">
              <p>비밀번호 재확인</p>
              <div className="inputWrap">
                <input
                  type={passwordConfirmVisible ? "password" : "text"}
                  value={passwordConfirm}
                  placeholder="비밀번호를 한번 더 입력해주세요"
                  onChange={(event) => setPasswordConfirm(event.target.value)}
                />
                <img
                  src={visibilityOff}
                  alt="비밀번호 확인하기"
                  onClick={() => setPasswordConfirmVisible((state) => !state)}
                />
              </div>
            </div>
            <div className="inputBox phone">
              <p>휴대전화</p>
              <div className="inputWrap">
                <input
                  type="tel"
                  value={phone}
                  placeholder="전화번호 입력"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
            </div>
            <div className="inputBox birthDate">
              <p>연도/월</p>
              <div className="inputWrap">
                <select
                  placeholder="연도"
                  value={year}
                  onChange={(event) => setYear(event.target.value)}
                >
                  <option>1992</option>
                  <option>1991</option>
                  <option>1990</option>
                </select>
                <select
                  className="월"
                  value={month}
                  onChange={(event) => setMonth(event.target.value)}
                >
                  <option>1992</option>
                  <option>1991</option>
                  <option>1990</option>
                </select>
              </div>
            </div>
            <div className="inputBox companion_animal">
              <p>반려동물 선택</p>
              <div className="inputWrap">
                <div onClick={() => setCompanionAnimal("dog")}>
                  <div>
                    <img src={dog} alt="강아지" />
                    <p>강아지</p>
                  </div>
                </div>
                <div onClick={() => setCompanionAnimal("cat")}>
                  <div>
                    <img src={cat} alt="고양이" />
                    <p>고양이</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modalButton">
            <button
              type="button"
              onClick={() => {
                setVisible(false);
              }}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </JoinModalStyled>
  );
};

export default JoinModal;

const JoinModalStyled = styled.div`
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
    width: 375px;
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
        left: 19px;
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
            display: flex;

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

            > img {
              position: absolute;
              top: 50%;
              right: 12px;
              width: 24px;
              height: 24px;
              transform: translateY(-50%);
              cursor: pointer;
            }

            select {
              flex-grow: 1;
              height: 48px;
              border: 1px solid #f8f8f8;
              border-radius: 6px;
              padding: 16px;

              &:first-of-type {
                margin-right: 8px;
              }
            }

            > div {
              flex-grow: 1;
              border: 1px solid #2d3035;
              display: flex;
              justify-content: center;
              align-items: center;

              &:first-of-type {
                margin-right: 8px;
              }
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
