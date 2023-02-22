import styled from "styled-components";
import Button from "../../../components/Button";
import { UserType } from "../../../models/user";
import { getPhoneNumberWithDash } from "../../../utils/util";
import useAuth from "../../../hooks/useAuth";

interface LogoutButtonProps {
  user: UserType;
  onClick: () => void;
}

const LogoutButton = (props: LogoutButtonProps) => {
  const { user, onClick } = props;
  const { userDataBase } = useAuth();
  const userInfo = userDataBase.filter((item) => item.email === user.email)[0];

  return (
    <LogoutButtonStyled>
      <Button
        buttonType="primary"
        size="large"
        label="로그아웃하기"
        onClick={onClick}
      />
      <p>
        <span>이름</span>: {userInfo.name}
      </p>
      <p>
        <span>휴대전화</span>: {getPhoneNumberWithDash(userInfo.phone)}
      </p>
      <p>
        <span>나이</span>: {userInfo.age}
      </p>
      <p>
        <span>반려동물</span>: {userInfo.companion_animal}
      </p>
    </LogoutButtonStyled>
  );
};

export default LogoutButton;

const LogoutButtonStyled = styled.div`
  p {
    font-weight: 500;
    font-size: 20px;
    color: #000;
    margin-bottom: 5px;

    &:first-of-type {
      margin-top: 40px;
    }

    span {
      display: inline-block;
      width: 100px;
    }
  }
`;
