import Item from "../../atoms/Ul-item/item";
import { useTranslation } from "react-i18next";
import s from "./Ul.module.scss";

export default function Ul() {

    const [t, i18n] = useTranslation(["global"]);

  return (
    <ul className={s.ul}>
      <Item text={`1 ${t("instructions.instruction_1")}`} />
      <Item text={`2 ${t("instructions.instruction_2")}`} />
      <Item text={`3 ${t("instructions.instruction_3")}`} />
      <Item text={`4 ${t("instructions.instruction_4")}`} />
    </ul>
  );
}
