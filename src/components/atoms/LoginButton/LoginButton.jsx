import s from "./LoginButton.module.scss";

export default function LoginButton({text, closeLoginModal, active}) {

  const handleClick = () =>{
    closeLoginModal()
  }

  return (
    <button className={`${s.loginButton} ${active && s.active}`} onClick={handleClick}>
      {text}
    </button>
  );
}
