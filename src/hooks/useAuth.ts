import { useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { useAppSelector } from "../redux/hooks";
import { logoutUser } from "../redux/userSlice";
import { joinUser } from "../redux/userDataBaseSlice";
import { getAgeFromBirthDate } from "../utils/util";
import { UserLoginInfoType } from "../models/user";
import { message } from "antd";

const useAuth = () => {
  const dispatch = useDispatch();
  const userState = useAppSelector((state: RootState) => state.user);
  const userDataBase = useAppSelector((state: RootState) => state.userDataBase);

  const handleJoin = ({
    email,
    password,
    phone,
    name,
    month,
    year,
    companionAnimal,
  }: UserLoginInfoType) => {
    dispatch(
      joinUser({
        email: email,
        password: password,
        phone: phone,
        name: name,
        age: getAgeFromBirthDate(String(year) + month),
        birth_date: String(year) + month,
        companion_animal: companionAnimal,
      })
    );

    message.success("회원가입이 완료됐습니다. 로그인을 진행해주세요");
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return { userState, userDataBase, handleJoin, handleLogout };
};

export default useAuth;
