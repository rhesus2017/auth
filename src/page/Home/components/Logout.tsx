import styled from "styled-components";
import Button from "../../../components/Button";
import { UserType } from "../../../models/user";
import { logoutUser } from "../../../redux/userSlice";
import { getPhoneNumberWithDash } from "../../../utils/util";

interface LogoutProps {
  user: UserType;
  onClick: () => void;
}

const Logout = (props: LogoutProps) => {
  const { user, onClick } = props;

  return (
    <LogoutStyled>
      <Button
        type="primary"
        size="large"
        label="로그아웃하기"
        onClick={onClick}
      />
      <p>
        <span>이메일</span>: {user.email}
      </p>
      <p>
        <span>휴대전화</span>: {getPhoneNumberWithDash(user.phone)}
      </p>
      <p>
        <span>이름</span>: {user.name}
      </p>
      <p>
        <span>나이</span>: {user.age}
      </p>
      <p>
        <span>반려동물</span>: {user.companion_animal}
      </p>
    </LogoutStyled>
  );
};

export default Logout;

const LogoutStyled = styled.div`
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
