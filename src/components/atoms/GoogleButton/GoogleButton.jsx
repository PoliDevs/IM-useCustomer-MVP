import {FcGoogle} from "react-icons/fc";
import s from "./GoogleButton.module.scss";
export default function GoogleButton({ text, signInWithGoogle, closeLoginModal }) {
  return (
    <button className={s.googleButton} onClick={()=>{signInWithGoogle();
    closeLoginModal()}}>
      <FcGoogle className={s.fcGoogle} />
      {text}
    </button>
  );
}
