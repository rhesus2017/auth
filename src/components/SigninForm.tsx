import { useState } from "react";
import styled from "styled-components";
import iconDog from "../assets/svg/iconDog.svg";
import iconCat from "../assets/svg/iconCat.svg";
import { MONTHS_OPTIONS, YEAR_OPTIONS } from "../constants/dateConstants";
import Input from "./Input";
import Button from "./Button";
import useAuth from "../hooks/useAuth";
import { UserSignInInputType } from "../models/user";
import useDataValidation from "../hooks/useDataValidation";
import Select from "./Select";
import Radio from "./Radio";

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();

const SignInForm = () => {
  const [signInInputs, setSignInInputs] = useState<UserSignInInputType>({
    email: "",
    password: "",
    passwordConfirm: "",
    phone: "",
    name: "",
    year: "",
    month: "",
    companionAnimal: "강아지",
  });
  const { handleSignIn } = useAuth();
  const { returnSignInValidation, returnIsInputsBlank } = useDataValidation();
  const monthOption =
    Number(signInInputs.year) === currentYear
      ? MONTHS_OPTIONS.filter((item) => Number(item) <= currentMonth + 1)
      : MONTHS_OPTIONS;

  const handleInputs = (type: string, value: string) => {
    if (type === "year") {
      setSignInInputs((state) => ({ ...state, [type]: value, month: "" }));
    } else {
      setSignInInputs((state) => ({ ...state, [type]: value }));
    }
  };

  const handleSignInButtonClick = () => {
    if (returnSignInValidation(signInInputs)) handleSignIn(signInInputs);
  };

  return (
    <SignInFormStyle>
      <div className="modalContent">
        <div className="inputBox">
          <p>이메일</p>
          <Input
            type="default"
            inputType="email"
            value={signInInputs.email}
            placeholder="welcome@pet-friends.co.kr"
            onChange={(value) => handleInputs("email", value)}
          />
        </div>
        <div className="inputBox">
          <p>비밀번호</p>
          <Input
            type="password"
            inputType="password"
            value={signInInputs.password}
            placeholder="영문/숫자/특수만자 혼합 8~20자"
            onChange={(value) => handleInputs("password", value)}
          />
        </div>
        <div className="inputBox">
          <p>비밀번호 재확인</p>
          <Input
            type="password"
            inputType="password"
            value={signInInputs.passwordConfirm}
            placeholder="비밀번호를 한번 더 입력해주세요"
            onChange={(value) => handleInputs("passwordConfirm", value)}
          />
        </div>
        <div className="inputBox">
          <p>휴대전화</p>
          <Input
            type="default"
            inputType="tel"
            value={signInInputs.phone}
            placeholder="000-0000-0000 형식에 맞춰주세요"
            onChange={(value) => handleInputs("phone", value)}
          />
        </div>
        <div className="inputBox">
          <p>이름</p>
          <Input
            type="default"
            inputType="text"
            value={signInInputs.name}
            placeholder="이름을 입력해주세요"
            onChange={(value) => handleInputs("name", value)}
          />
        </div>
        <div className="inputBox birthDate">
          <p>연도/월</p>
          <div className="inputWrap">
            <Select
              value={signInInputs.year}
              placeholder="연도"
              options={YEAR_OPTIONS}
              onChange={(value: string) => handleInputs("year", value)}
            />
            <Select
              value={signInInputs.month}
              placeholder="월"
              options={monthOption}
              onChange={(value: string) => handleInputs("month", value)}
            />
          </div>
        </div>
        <div className="inputBox">
          <p>반려동물 선택</p>
          <Radio
            select={["강아지", "고양이"]}
            value={signInInputs.companionAnimal}
            icon={[iconDog, iconCat]}
            onClick={(value) => handleInputs("companionAnimal", value)}
          />
        </div>
      </div>
      <div className="buttonWrap">
        <Button
          buttonType="primary"
          size="large"
          label="회원가입"
          onClick={handleSignInButtonClick}
          disabled={returnIsInputsBlank(signInInputs)}
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
        display: flex;
        gap: 8px;
      }
    }
  }

  .buttonWrap {
    display: flex;
  }
`;
