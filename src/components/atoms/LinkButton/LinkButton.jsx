import s from "./LinkButton.module.scss";
import { useNavigate } from "react-router-dom";

export default function WelcomeButton({ text, path, type, centered }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };

  return (
    <button className={`${s.button} ${(type === "secundary") ? s.secundary : s.primary} ${centered ? s.centered : ""}`} onClick={handleClick}>
      {text}
    </button>
  );
}

