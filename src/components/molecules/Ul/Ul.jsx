
import Item from "../../atoms/Ulitem/Item";
import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';
import s from "./Ul.module.scss";

export default function Ul() {
  const language = useSelector((state)=> state.language);

    const [t, i18n] = useTranslation(["global"]);

  return (
    <ul className={s.ul}>
      <Item number={1} text={language.instructions_instruction_1} />
      <Item number={2} text={language.instructions_instruction_2} />
      <Item number={3} text={language.instructions_instruction_3} />
      <Item number={4} text={language.instructions_instruction_4} />
    </ul>
  );
}
