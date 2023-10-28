import { useState } from "react";
import { useTranslation } from "react-i18next";
import useFirebase from "../../../Firebase/Firebase";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import GoogleButton from "../../atoms/GoogleButton/GoogleButton";
import LoginButton from "../../atoms/LoginButton/LoginButton";
import HugeTitle from "../../atoms/HugeTitle/HugeTitle";
import Error from "../Error/Error";
import s from "./Login.module.scss";
import { useSelector } from "react-redux";

export default function Login() {
  const language = useSelector((state)=> state.language);
  const [error, setError] = useState(false);
  const [t, i18n] = useTranslation(["global"]);
  // const dispatch = useDispatch();
  const { signInWithGoogle } = useFirebase(setError);
  return (
    <main className={s.mainContainer}>
      {!error ? (
        <>
          <header className={s.loginContainer}>
            <SubTitle text={t("login.firstStep")} bold={true} />
            <Paragraph text={t("login.access")} centered={true} />
            <GoogleButton
              text={t("login.googleButton")}
              signInWithGoogle={signInWithGoogle}
            />
            <LoginButton text={t("login.noGoogleButton")} />
          </header>
          <section className={s.sloganContainer}>
            <HugeTitle
              text={t("login.slogan")}
              secundary={true}
              noWeight={true}
            />
            <h2 className={s.bigText}>{t("login.sloganBig")}</h2>
          </section>
        </>
      ) : (
        <Error active={error} />
      )}
    </main>
  );
}
