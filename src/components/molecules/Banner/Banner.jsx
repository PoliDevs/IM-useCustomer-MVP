import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as ArrowBackWhite } from "../../../assets/ArrowBackWhite.svg";
import { useNavigate } from "react-router-dom";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import burger from "../../../assets/Burgers.svg";
import menu from "../../../assets/logo-imenu-full.png";
import s from "./Banner.module.scss";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import { getFileDownloadURL } from "../../../Firebase/Firebase";

//? agrego setIsLoading a navbar
export default function Banner({
  setCategory,
  ordersButton,
  arrow,
  navarrow,
  path,
  setAditionals,
  setAll,
  setIsLoading,
  containerSubtitleMargin
}) {
  const language = useSelector((state) => state.language);
  const table = useSelector((state) => state.table);
  const commerce = useSelector((state) => state.commerce);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [t, i18n] = useTranslation(["global"]);
  const [imgURL, setImgURL] = useState(false);

  useEffect(() => {
    const fetchImageURL = async () => {
      const fileName = commerce.id.toString(); // Reemplaza con el nombre de tu archivo
      const url = await getFileDownloadURL(fileName);
      setImgURL(url);
    };
    fetchImageURL();
  }, []);
  return (
    <section
      className={s.banner}
      //!cambiar url segun el comercio
      // style={{ backgroundImage: `url(${burger})` }}
      // onClick={() => {
      //   if (arrow) return;
      // }}
    >
      <div className={s.content}>
        {arrow && (
          <ArrowBackWhite
            style={{
              width: "21px",
              height: "21px",
              zIndex: "2",
              marginRight: "5px",
            }}
            onClick={() => navigate(-1)}
          />
        )}
        <div className={s.imageContainer}>
        <img
         src={imgURL}
         className={s.image}
                    />
        </div>
        <div
          className={s.conteinerSubtitle}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <SubTitle text={commerce.name} alignment={"left"} bold={true} />
          <Paragraph
            alignment={"left"}
            text={` ${t("banner.Table")} ${table && table}`}
            secundary={true}
            color={"#000000"}
          />
        </div>
        <div>
          <img src={menu} width={"130px"} height={"100px"} className={s.imagen2} />
        </div>
      </div>
    </section>
  );
}
