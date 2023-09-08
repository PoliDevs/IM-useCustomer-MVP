import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../redux/actions/index";
import { useTranslation } from "react-i18next";
import { ReactComponent as ArrowBackWhite } from "../../../assets/ArrowBackWhite.svg";
import { useNavigate } from "react-router-dom";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import burger from "../../../assets/Burgers.svg";
import s from "./Banner.module.scss";
import Paragraph from "../../atoms/Paragraph/Paragraph";

export default function Banner({ setCategory, arrow }) {
  const table = useSelector((state)=> state.table);
  const commerceName = useSelector((state) => state.commerce.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [t, i18n] = useTranslation(["global"]);

  return (
    <section
      className={s.banner}
      //!cambiar url segun el comercio
      style={{ backgroundImage: `url(${burger})` }}
      onClick={() => {
        if (arrow) return;
        dispatch(getAllProducts());
        setCategory("");
      }}
    >
      <div className={s.content}>
        {arrow && (
          <ArrowBackWhite
            style={{
              width: "21px",
              height: "21px",
              zIndex: "2",
              marginRight: "20px",
            }}
            onClick={() => navigate("/home")}
          />
        )}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <SubTitle text={commerceName} alignment={"left"} />
          <Paragraph
            alignment={"left"}
            text={`${t("banner.table")} ${table}`}
            secundary={true}
          />
        </div>
      </div>
    </section>
  );
}
