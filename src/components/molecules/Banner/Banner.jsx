import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../redux/actions/index";
import { useTranslation } from "react-i18next";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import burger from "../../../assets/Burgers.svg";
import s from "./Banner.module.scss";
import Paragraph from "../../atoms/Paragraph/Paragraph";

export default function Banner({ setCategory }) {
  const commerceName = useSelector((state)=> state.commerce.name)
  const dispatch = useDispatch();
  const Qr = JSON.parse(localStorage.getItem("QrCode"));
  const [t, i18n] = useTranslation(["global"]);

  return (
    <section
      className={s.banner}
      style={{ backgroundImage: `url(${burger})` }}
      onClick={() => {
        dispatch(getAllProducts());
        setCategory("");
      }}
    >
      <div className={s.content}>
        <SubTitle text={commerceName} alignment={"left"} />
        <Paragraph alignment={"left"} text={`${t("banner.table")} ${Qr.commerceTable}`} secundary={true}/>
      </div>
    </section>
  );
}
