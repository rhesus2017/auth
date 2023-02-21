import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import JoinModal from "../../components/JoinModal";
import LoginModal from "../../components/LoginModal";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { setReduxUser } from "../../redux/userSlice";
import dayjs from "dayjs";

const Home = () => {
  const dispatch = useDispatch();
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [joinModalVisible, setJoinModalVisible] = useState(false);
  const user = useAppSelector((state: RootState) => state.user);

  return (
    <HomeStyled>
      <p>김태진</p>
      <div className="button">
        {user.email ? (
          <button
            type="button"
            onClick={() =>
              dispatch(
                setReduxUser({
                  email: "",
                  password: "",
                  phone: "",
                  birth_date: "",
                  companion_animal: "",
                })
              )
            }
          >
            로그아웃하기
          </button>
        ) : (
          <button type="button" onClick={() => setLoginModalVisible(true)}>
            로그인하기
          </button>
        )}

        {user.email && (
          <Fragment>
            <p>
              <span>이름: </span>
              {user.email}
            </p>
            <p>
              <span>휴대전화: </span>
              {user.phone}
            </p>
            <p>
              <span>나이: </span>
              {Math.floor(dayjs().diff(user.birth_date, "month") / 12) &&
                Math.floor(dayjs().diff(user.birth_date, "month") / 12) +
                  "년"}{" "}
              {dayjs().diff(user.birth_date, "month") % 12 &&
                (dayjs().diff(user.birth_date, "month") % 12) + "개월"}
            </p>
            <p>
              <span>반려동물: </span>
              {user.companion_animal}
            </p>
          </Fragment>
        )}
      </div>

      {loginModalVisible && (
        <LoginModal
          setVisible={setLoginModalVisible}
          setJoinModalVisible={setJoinModalVisible}
        />
      )}
      {joinModalVisible && <JoinModal setVisible={setJoinModalVisible} />}
    </HomeStyled>
  );
};

export default Home;

const HomeStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  > p {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: -0.02em;
    position: absolute;
    top: 32px;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .button {
    > button {
      width: 343px;
      height: 43px;
      background: #ff4081;
      color: #fff;
      border-radius: 6px;
      cursor: pointer;
      margin-bottom: 20px;
    }

    > p {
      font-weight: 500;
      font-size: 20px;
      color: #000;
      margin-bottom: 5px;

      span {
        display: inline-block;
        width: 100px;
      }
    }
  }
`;
