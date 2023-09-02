import { useDispatch } from "react-redux";
import s from "./LoginButton.module.scss";
import { setUser } from "../../../redux/actions";
export default function LoginButton({ text, closeLoginModal, active, name }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (active) {
      const user = {
        name: name,
      }
      dispatch(setUser(user))
      closeLoginModal();
    }
    return;
  };

  return (
    <button
      className={`${s.loginButton} ${active && s.active}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
