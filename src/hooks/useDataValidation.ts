import { message } from "antd";
import {
  EMAIL_REGEXP,
  PASSWORD_REGEXP,
  PHONE_REGEXP,
} from "../constants/regExpConstants";
import { UserSignInInputType, UserType } from "../models/user";
import useAuth from "./useAuth";

const useDataValidation = () => {
  const { userDataBase } = useAuth();

  const returnLoginValidation = (loginInputs: UserType) => {
    if (!loginInputs.email) {
      message.info("이메일을 입력해주세요");
    } else if (!EMAIL_REGEXP.test(loginInputs.email)) {
      message.info("올바른 이메일 형식이 아닙니다");
    } else if (!loginInputs.password) {
      message.info("비밀번호를 입력해주세요");
    } else {
      return true;
    }
  };

  const returnSignInValidation = (signInInputs: UserSignInInputType) => {
    if (!EMAIL_REGEXP.test(signInInputs.email)) {
      message.info("올바른 이메일 형식이 아닙니다");
    } else if (userDataBase.some((item) => item.email === signInInputs.email)) {
      message.info("이미 존재하는 이메일입니다");
    } else if (!PASSWORD_REGEXP.test(signInInputs.password)) {
      message.info("비밀번호는 영문/숫자/특수문자 혼합 8~20자로 입력해주세요");
    } else if (signInInputs.password !== signInInputs.passwordConfirm) {
      message.info("비밀번호 재확인이 비밀번호와 일치하지 않습니다");
    } else if (!PHONE_REGEXP.test(signInInputs.phone)) {
      message.info("올바른 휴대폰 번호 형식이 아닙니다");
    } else {
      return true;
    }
  };

  const returnIsInputsBlank = (signInInputs: UserSignInInputType) => {
    return (
      !signInInputs.email ||
      !signInInputs.password ||
      !signInInputs.passwordConfirm ||
      !signInInputs.phone ||
      !signInInputs.name ||
      !signInInputs.year ||
      !signInInputs.month
    );
  };

  return { returnLoginValidation, returnSignInValidation, returnIsInputsBlank };
};

export default useDataValidation;
