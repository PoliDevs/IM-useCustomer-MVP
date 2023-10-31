import { useDispatch } from "react-redux";
import s from "./LoginButton.module.scss";
import { removeUser, setUser } from "../../../redux/actions";
import { useNavigate } from "react-router-dom";
export default function LoginButton({ text, closeLoginModal, active, name }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
      navigate('/welcome');
      dispatch(removeUser());
      //?descomentar para volver al sistema de login con modal
      // closeLoginModal();
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
