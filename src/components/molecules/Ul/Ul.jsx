import Item from "../../atoms/Ul-item/item";
import { useTranslation } from "react-i18next";
import s from "./Ul.module.scss";

export default function Ul() {

    const [t, i18n] = useTranslation(["global"]);

  return (
    <ul className={s.ul}>
      <Item number={1} text={t("instructions.instruction_1")} />
      <Item number={2} text={t("instructions.instruction_2")} />
      <Item number={3} text={t("instructions.instruction_3")} />
      <Item number={4} text={t("instructions.instruction_4")} />
    </ul>
  );
}
