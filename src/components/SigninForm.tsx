import { KeyboardEvent, useState } from "react";
import styled from "styled-components";
import dog from "../assets/svg/iconDog.svg";
import cat from "../assets/svg/iconCat.svg";
import { MONTHS_OPTIONS, YEAR_OPTIONS } from "../constants/dateConstants";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { message } from "antd";
import useGlobalModal from "../hooks/useGlobalModal";
import Input from "./Input";
import {
  EMAIL_REGEXP,
  PASSWORD_REGEXP,
  PHONE_REGEXP,
} from "../constants/regExpConstants";
import Button from "./Button";
import useAuth from "../hooks/useAuth";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [year, setYear] = useState(YEAR_OPTIONS[0]);
  const [month, setMonth] = useState(MONTHS_OPTIONS[11]);
  const [companionAnimal, setCompanionAnimal] = useState("강아지");
  const userDataBase = useAppSelector((state: RootState) => state.userDataBase);
  const { closeGlobalModal } = useGlobalModal();
  const { handleJoin } = useAuth();

  const handleSubmitClick = () => {
    if (!EMAIL_REGEXP.test(email)) {
      message.info("올바른 이메일 형식이 아닙니다");
      return;
    }

    if (userDataBase.some((item) => item.email === email)) {
      message.info("이미 존재하는 이메일입니다");
      return;
    }

    if (!PASSWORD_REGEXP.test(password)) {
      message.info("비밀번호는 영문/숫자/특수문자 혼합 8~20자로 입력해주세요");
      return;
    }

    if (password !== passwordConfirm) {
      message.info("비밀번호 재확인이 비밀번호와 일치하지 않습니다");
      return;
    }

    if (!PHONE_REGEXP.test(phone)) {
      message.info("올바른 휴대폰 번호 형식이 아닙니다");
      return;
    }

    handleJoin({ email, password, phone, name, month, year, companionAnimal });
    closeGlobalModal();
  };

  const handleEnterPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") handleSubmitClick();
  };

  return (
    <SignInFormStyle>
      <div className="modalContent">
        <div className="inputBox">
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
        <div className="inputBox">
          <p>비밀번호</p>
          <Input
            type="password"
            inputType="password"
            value={password}
            placeholder="영문/숫자/특수만자 혼합 8~20자로 입력해주세요"
            onChange={(event) => setPassword(event)}
            onKeyDown={handleEnterPress}
          />
        </div>
        <div className="inputBox">
          <p>비밀번호 재확인</p>
          <Input
            type="password"
            inputType="password"
            value={passwordConfirm}
            placeholder="비밀번호를 한번 더 입력해주세요"
            onChange={(event) => setPasswordConfirm(event)}
            onKeyDown={handleEnterPress}
          />
        </div>
        <div className="inputBox">
          <p>휴대전화</p>
          <Input
            type="default"
            inputType="tel"
            value={phone}
            placeholder="전화번호를 입력해주세요"
            onChange={(event) => setPhone(event)}
            onKeyDown={handleEnterPress}
          />
        </div>
        <div className="inputBox">
          <p>이름</p>
          <Input
            type="default"
            inputType="text"
            value={name}
            placeholder="이름을 입력해주세요"
            onChange={(event) => setName(event)}
            onKeyDown={handleEnterPress}
          />
        </div>
        <div className="inputBox birthDate">
          <p>연도/월</p>
          <div className="inputWrap">
            <select
              placeholder="연도"
              value={year}
              onChange={(event) => setYear(Number(event.target.value))}
            >
              {YEAR_OPTIONS.map((item) => (
                <option>{item}</option>
              ))}
            </select>
            <select
              className="월"
              value={month}
              onChange={(event) => setMonth(event.target.value)}
            >
              {MONTHS_OPTIONS.map((item) => (
                <option>{item}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="inputBox companion_animal">
          <p>반려동물 선택</p>
          <div className="inputWrap companionAnimal">
            <div
              onClick={() => setCompanionAnimal("dog")}
              className={`${"dog" === companionAnimal}`}
            >
              <div>
                <img src={dog} alt="강아지" />
                <p>강아지</p>
              </div>
            </div>
            <div
              onClick={() => setCompanionAnimal("cat")}
              className={`${"고양이" === companionAnimal}`}
            >
              <div>
                <img src={cat} alt="고양이" />
                <p>고양이</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="buttonWrap">
        <Button
          buttonType="primary"
          size="large"
          label="회원가입"
          onClick={handleSubmitClick}
          disabled={!email || !password || !passwordConfirm || !phone || !name}
        />
      </div>
    </SignInFormStyle>
  );
};

export default SignInForm;

const SignInFormStyle = styled.div`
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

      .inputWrap {
        width: 100%;
        height: 43px;
        position: relative;
        display: flex;

        &.companionAnimal {
          height: 80px;
        }

        select {
          flex-grow: 1;
          height: 48px;
          border: 1px solid #f8f8f8;
          border-radius: 6px;
          padding: 16px;
          cursor: pointer;

          &:first-of-type {
            margin-right: 8px;
          }
        }

        > div {
          height: 80px;
          flex-grow: 1;
          border-radius: 8px;
          border: 1px solid #e9ebec;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;

          &.true {
            border: 1px solid #2d3035;
          }

          &:first-of-type {
            margin-right: 8px;
          }

          > div {
            img {
              width: 26px;
              display: inline-block;
              margin: 0 8px auto;
              margin-bottom: 8px;
            }

            p {
              font-size: 14px;
              font-weight: 500;
              color: #1c1e21;
            }
          }
        }
      }
    }
  }

  .buttonWrap {
    display: flex;
  }
`;
