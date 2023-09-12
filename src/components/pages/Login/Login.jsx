import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getCommerce, setTable } from "../../../redux/actions";
import useFirebase from "../../../Firebase/Firebase";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import GoogleButton from "../../atoms/GoogleButton/GoogleButton";
import LoginButton from "../../atoms/LoginButton/LoginButton";
import HugeTitle from "../../atoms/HugeTitle/HugeTitle";
import Error from "../Error/Error";
import s from "./Login.module.scss";

export default function Login() {
  const { commerceId, ...params } = useParams();
  const [error, setError] = useState(false);
  const [t, i18n] = useTranslation(["global"]);
  const dispatch = useDispatch();
  const { signInWithGoogle } = useFirebase(setError);

  //!este useEffect va a ir en pagina de seleccion de idioma
  useEffect(() => {
    dispatch(setTable(params.tableId));
    dispatch(getCommerce(commerceId));
  }, []);

  return (
    <main className={s.mainContainer}>
      {!error ? (
        <>
          <header className={s.loginContainer}>
            <SubTitle text={"Da el primer paso: "} bold={true}/>
            <Paragraph
              text={"Ingresa utilizando tu correo de Google"}
              centered={true}
            />
            <GoogleButton
              text={"Accede con Google"}
              signInWithGoogle={signInWithGoogle}
            />
            <LoginButton text={"Acceder sin registro"} />
          </header>
          <section className={s.sloganContainer}>
            <HugeTitle
              text={"La velocidad es"}
              secundary={true}
              noWeight={true}
            />
            <h2 className={s.bigText}>nuestro plato fuerte</h2>
          </section>
        </>
      ) : (
        <Error active={error} />
      )}
    </main>
  );
}
