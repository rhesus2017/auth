import { useState } from "react";
import Button from "../../../components/Button";

interface LoginProps {
  onClick: () => void;
}

const Login = (props: LoginProps) => {
  const { onClick } = props;

  return (
    <Button type="primary" size="large" label="로그인하기" onClick={onClick} />
  );
};

export default Login;
