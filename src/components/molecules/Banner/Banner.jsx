/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import menu from "../../../assets/logo-imenu-full.png";
import s from "./Banner.module.scss";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import { getFileDownloadURL } from "../../../Firebase/Firebase";
import { capitalizeFirstLetter } from "../../../utils/Functions";

//? agrego setIsLoading a navbar
export default function Banner() {
  const showBanner = useSelector((state) => state.statusBanner);
  const table = useSelector((state) => state.table);
  const commerce = useSelector((state) => state.commerce);
  const [t] = useTranslation(["global"]);
  const [imgURL, setImgURL] = useState(false);

  useEffect(() => {
    const fetchImageURL = async () => {
      const fileName = commerce.id.toString(); // Reemplaza con el nombre de tu archivo
      const url = await getFileDownloadURL(fileName);
      setImgURL(url);
    };
    fetchImageURL();
  }, [commerce.id]);
  return (
    <section
      className={`${s.banner} ${showBanner ? s.fadeIn : s.fadeOut}`}
      //!cambiar url segun el comercio
      // style={{ backgroundImage: `url(${burger})` }}
      // onClick={() => {
      //   if (arrow) return;
      // }}
    >
      <div className={s.content}>
        {/* {arrow && (
          <ArrowBackWhite
            style={{
              width: "21px",
              height: "21px",
              zIndex: "2",
              marginRight: "5px",
            }}
            onClick={() => navigate(-1)}
          />
        )} */}
        <div className={s.imageContainer}>
          <img
            src={imgURL ? imgURL : menu}
            className={s.image}
            width={menu ? "53.8px" : "53.8px"}
            height={"53.8"}
          />

          <div
            className={s.conteinerSubtitle}
            // style={{
            //   display: "flex",
            //   flexDirection: "column",
            // }}
          >
            <SubTitle
              text={capitalizeFirstLetter(commerce.name)}
              alignment={"left"}
              bold={true}
              size={3}
            />
            <Paragraph
              alignment={"left"}
              text={` ${t("banner.Table")} ${table && table}`}
              secundary={true}
              color={"#000000"}
            />
          </div>
        </div>

        <div>
          <img
            src={menu}
            width={"100px"}
            height={"100px"}
            className={s.imagen2}
          />
        </div>
      </div>
    </section>
  );
}
