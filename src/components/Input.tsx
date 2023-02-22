import { KeyboardEvent, useState } from "react";
import styled, { css } from "styled-components";
import iconVisibilityOn from "../assets/svg/iconVisibilityOn.svg";
import iconVisibilityOff from "../assets/svg/iconVisibilityOff.svg";

interface InputProps {
  type: "default" | "password";
  inputType: "email" | "password" | "tel" | "text";
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  const { type, inputType, value, placeholder, onChange, onKeyDown } = props;
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <InputStyled InputType={inputType}>
      <input
        type={passwordVisible ? "text" : inputType}
        value={
          inputType === "tel"
            ? value.replace(/[^0-9.]/g, "").replace(/(\..*?)\..*/g, "$1")
            : value
        }
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={onKeyDown}
      />
      {type === "password" && (
        <div
          className="img"
          onClick={() => setPasswordVisible((state) => !state)}
        >
          {passwordVisible ? (
            <img src={iconVisibilityOn} alt="비밀번호 보이기" />
          ) : (
            <img src={iconVisibilityOff} alt="비밀번호 숨기기" />
          )}
        </div>
      )}
    </InputStyled>
  );
};

export default Input;

const InputStyled = styled.div<{
  InputType: "email" | "password" | "tel" | "text";
}>`
  width: 100%;
  position: relative;

  input {
    display: block;
    width: 100%;
    padding: 13.5px 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.02em;
    border-radius: 6px;
    color: ${({ theme }) => theme.font.primary};
    border: 1px solid ${({ theme }) => theme.border.normal};
    ${(props) =>
      props.InputType === "password" &&
      css`
        padding-right: 45px;
      `}

    &::placeholder {
      color: ${({ theme }) => theme.font.hint};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.border.active};
      transition: 0.3s;
    }
  }

  .img {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
