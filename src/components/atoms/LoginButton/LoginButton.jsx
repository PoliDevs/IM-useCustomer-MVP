import { useDispatch } from "react-redux";
import s from "./LoginButton.module.scss";
import { setUser } from "../../../redux/actions";
export default function LoginButton({ text, closeLoginModal, active, name }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    // if (active) {
      const user = {
        name: null,
      }
    //   dispatch(setUser(user))
      localStorage.setItem("user", JSON.stringify(user))
      closeLoginModal();
    // }
    // return;
  };

  return (
    <button
      // className={`${s.loginButton} ${active && s.active}`}
      className={s.loginButton}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
