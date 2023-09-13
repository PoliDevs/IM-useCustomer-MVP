/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
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

  const [t, i18n] = useTranslation(["global"]);


  return (
    <div className={`${s.loginContainer} ${loginModal && s.open}`}><section className={s.login}>
        <SubTitle text={t("loginModal.title")} centered={true} />
        {/* <div className={s.data}> */}
          {/* <div style={{ display: "contents" }}>
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
          <SubTitle text={"O bien"} /> */}
          <GoogleButton
            signInWithGoogle={signInWithGoogle}
            text={t("loginModal.googleButton")}
            closeLoginModal={closeLoginModal}
            getName={getName}
          />
          {/* <hr /> */}
          <LoginButton
            // name={name}
            // active={name.length >= 3}
            closeLoginModal={closeLoginModal}
            text={t("loginModal.omitButton")}
          />
        {/* </div> */}
      </section>
    </div>
  );
}
