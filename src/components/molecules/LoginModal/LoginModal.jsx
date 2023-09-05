/* eslint-disable react/prop-types */
import SubTitle from "../../atoms/SubTitle/SubTitle";
import GoogleButton from "../../atoms/GoogleButton/GoogleButton";
import LoginButton from "../../atoms/LoginButton/LoginButton";
import NameValidation from "../../atoms/NameValidation/NameValidation";
import s from "./LoginModal.module.scss";

export default function LoginModal({
  loginModal,
  closeLoginModal,
  name,
  setName,
  handleName,
  signInWithGoogle,
  getName
}) {


  return (
    <div className={`${s.loginContainer} ${loginModal && s.open}`}><section className={s.login}>
        <SubTitle text={"Ingresá un nombre, para una mejor experiencia!"} centered={true} />
        <div className={s.data}>
          <div style={{ display: "contents" }}>
            <input
              className={s.input}
              placeholder="Tu nombre"
              type="text"
              value={name}
              onChange={handleName}
            />
            <NameValidation
              error={name.length < 3}
              text={"Minimo 3 caracteres"}
            />
          </div>
          <SubTitle text={"O bien"} />
          <GoogleButton
            signInWithGoogle={signInWithGoogle}
            text={"Accede con Google"}
            closeLoginModal={closeLoginModal}
            getName={getName}
          />
          <hr />
          <LoginButton
            name={name}
            active={name.length >= 3}
            closeLoginModal={closeLoginModal}
            text={"Ingresar"}
          />
        </div>
      </section>
    </div>
  );
}
