import s from "./LoginButton.module.scss";

export default function LoginButton({ text, closeLoginModal, active, name }) {
  const handleClick = () => {
    if (active) {
      localStorage.setItem("name", name);
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
