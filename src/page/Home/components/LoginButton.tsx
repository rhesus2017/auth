import Button from "../../../components/Button";

interface LoginButtonProps {
  onClick: () => void;
}

const LoginButton = (props: LoginButtonProps) => {
  const { onClick } = props;

  return (
    <Button
      buttonType="primary"
      size="large"
      label="로그인하기"
      onClick={onClick}
    />
  );
};

export default LoginButton;
