/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import { ReactComponent as Logo } from "../../../assets/Burgers.svg";
import { ReactComponent as ImenuLogo } from "../../../assets/ImenuHorizontal.svg";
import HugeTitle from "../../atoms/HugeTitle/HugeTitle";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import LinkButton from "../../atoms/LinkButton/LinkButton";
// import { useEffect, useState } from "react";
// import { getCommerce } from "../../utils/functions";
import s from "./WelcomePage.module.scss";
import { useEffect, useState } from "react";
import { useLogin } from "../../../utils/Functions";
import { signInWithGoogle } from "../../../Firebase/Firebase";
import LoadingPage from "../../molecules/LoadingPage/LoadingPage";
import LoginModal from "../../molecules/LoginModal/LoginModal";
export default function WelcomePage() {
  const [commerce, setCommerce] = useState("");
   const [name, setName] = useState("");
  const { loginModal, openLoginModal, closeLoginModal } = useLogin();

  const [t, i18n] = useTranslation(["global"]);

  useEffect(() => {
    setTimeout(() => {
      setCommerce(true);
      openLoginModal();
    }, 3500);
  }, []);

    const handleName = (e) => {
      setName(e.target.value);
    };

  return (
    <div className={s.home}>
      {commerce ? (
        <div className={s.top}>
          <HugeTitle text={t("home.title")} />
          <Paragraph text={t("home.subtitle")} />
          <HugeTitle text={"Burger Store"} />
          <div className={s.spacing}>
            <Logo className={s.logo} />
            <Paragraph text={`${t("home.table")} 1`} />
          </div>
          <Paragraph bold={true} text={t("home.poweredby")}>
            <ImenuLogo className={s.imenuLogo} />
          </Paragraph>
          <LinkButton path="/home" text={t("home.order")} />
          <LinkButton
            path="/instruction"
            text={t("home.instructions")}
            type="secundary"
          />
          {loginModal && (
            <LoginModal
              loginModal={loginModal}
              closeLoginModal={closeLoginModal}
              name={name}
              handleName={handleName}
              signInWithGoogle={signInWithGoogle}
            />
          )}
        </div>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}
