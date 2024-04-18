import { useDispatch, useSelector } from "react-redux";
import { getActiveMenus, getAllProducts, setFiltro } from "../../../redux/actions/index";
import { useTranslation } from "react-i18next";
import { ReactComponent as ArrowBackWhite } from "../../../assets/ArrowBackWhite.svg";
import { useNavigate } from "react-router-dom";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import burger from "../../../assets/Burgers.svg";
import s from "./Banner.module.scss";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import NavBar from "../NavBar/NavBar";

//? agrego setIsLoading a navbar
export default function Banner({ setCategory, ordersButton, arrow, navarrow, path, setAditionals, setAll, setIsLoading }) {
  const language = useSelector((state)=> state.language);
  const table = useSelector((state) => state.table);
  const commerce = useSelector((state) => state.commerce);
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
        // dispatch(getAllProducts());
        //? agregada nueva navbar a home
        // dispatch(setFiltro(""));
        // dispatch(getActiveMenus(commerce.id));
        // setCategory("");
        // setAditionals(false);
        // setAll(true);
      }}
    >
      {/* //? agrego setIsLoading a navbar */}
      {/* <NavBar ordersButton={ordersButton} path={path} navarrow={navarrow} setIsloading={setIsLoading} /> */}
      <div className={s.content}>
        {arrow && (
          <ArrowBackWhite
            style={{
              width: "21px",
              height: "21px",
              zIndex: "2",
              marginRight: "20px",
            }}
            onClick={() => navigate(-1)}
          />
        )}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <SubTitle text={commerce.name} alignment={"left"} bold={true} />
          <Paragraph
            alignment={"left"}
            text={` ${t("banner.Table")} ${table && table}`}
            secundary={true}
          />
        </div>
      </div>
    </section>
  );
}
