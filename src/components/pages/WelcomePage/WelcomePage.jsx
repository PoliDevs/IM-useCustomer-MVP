/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import { ReactComponent as Logo } from "../../../assets/Burgers.svg";
import { ReactComponent as ImenuLogo } from "../../../assets/ImenuHorizontal.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLogin } from "../../../utils/Functions";
import HugeTitle from "../../atoms/HugeTitle/HugeTitle";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import useFirebase from "../../../Firebase/Firebase";
import LoadingPage from "../../molecules/LoadingPage/LoadingPage";
import LoginModal from "../../molecules/LoginModal/LoginModal";
import Error from "../Error/Error";
import s from "./WelcomePage.module.scss";
import { getCommerce } from "../../../redux/actions";
import SubTitle from "../../atoms/SubTitle/SubTitle";
export default function WelcomePage({scanResult}) {
  const userInfo = useSelector((state) => state.user);
  const commerce = useSelector((state)=> state.commerce);
  const dispatch = useDispatch();
  const [name, setName] = useState(userInfo.name ? userInfo.name : "");
  const [error, setError] = useState(false);
  const { loginModal, openLoginModal, closeLoginModal } = useLogin();
  const { signInWithGoogle } = useFirebase(setError);

  const [t, i18n] = useTranslation(["global"]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getCommerce(scanResult.commerceId));
      if (!localStorage.getItem("user") && !localStorage.getItem("name"))
        openLoginModal();
    }, 2500);
  }, []);

  const handleName = (e) => {
    setName(e.target.value);
  };

  return (
    <div className={s.home}>
      {Object.keys(commerce).length ? (
        <div className={s.top}>
          {!loginModal && (name || userInfo.name) ? (
            <>
              <HugeTitle text={`${t("home.title")}`}/>
              <SubTitle
                text={`${
                  !loginModal ? (userInfo.name ? userInfo.name : name) : ""
                }`}
              />
              <SubTitle text={t("home.subtitle")} />
              <HugeTitle text={"Burger Store"} />
              <div className={s.spacing}>
                <Logo className={s.logo} />
                <SubTitle text={`${t("home.table")} 1`} />
              </div>
              <div className={s.bottomContent}>
              <Paragraph bold={true} text={t("home.poweredby")}>
                <ImenuLogo className={s.imenuLogo} />
              </Paragraph>
              <LinkButton path="/home" text={t("home.order")} />
              <LinkButton
                path="/instruction"
                text={t("home.instructions")}
                type="secundary"
              />
              </div>
            </>
          ) : (
            <Error active={error} />
          )}
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
