import { useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { useAppSelector } from "../redux/hooks";
import { loginUser, logoutUser } from "../redux/userSlice";
import { signInUser } from "../redux/userDataBaseSlice";
import { getAgeFromBirthDate } from "../utils/util";
import { UserSignInInputType, UserType } from "../models/user";
import { message } from "antd";
import useGlobalModal from "./useGlobalModal";

const useAuth = () => {
  const dispatch = useDispatch();
  const userState = useAppSelector((state: RootState) => state.user);
  const userDataBase = useAppSelector((state: RootState) => state.userDataBase);
  const { closeGlobalModal } = useGlobalModal();

  const handleSignIn = (signInInputs: UserSignInInputType) => {
    const birth_date = signInInputs.year + signInInputs.month;

    dispatch(
      signInUser({
        email: signInInputs.email,
        password: signInInputs.password,
        phone: signInInputs.phone,
        name: signInInputs.name,
        age: getAgeFromBirthDate(birth_date),
        birth_date: birth_date,
        companion_animal: signInInputs.companionAnimal,
      })
    );
    closeGlobalModal();
    message.success("회원가입이 완료됐습니다. 로그인을 진행해주세요");
  };

  const handleLogIn = (inputs: UserType) => {
    const loginAble = userDataBase.some(
      (item) => item.email === inputs.email && item.password === inputs.password
    );

    if (loginAble) {
      dispatch(loginUser(inputs));
      closeGlobalModal();
      message.success(`${inputs.email}로 로그인했습니다`);
    } else {
      message.error("이메일 또는 비밀번호가 일치하지 않습니다");
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return { userState, userDataBase, handleSignIn, handleLogIn, handleLogout };
};

export default useAuth;
