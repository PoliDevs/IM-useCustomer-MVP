
import { Link } from 'react-router-dom';
import { ReactComponent as IMenu } from "../../../assets/ImenuHorizontal.svg";
import { useTranslation } from 'react-i18next';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import SubTitle from '../../atoms/SubTitle/SubTitle';
import LinkButton from '../../atoms/LinkButton/LinkButton';
import Ul from '../../molecules/Ul/Ul';
import s from "./Instruction.module.scss"

export default function Instruction() {
  const url = localStorage.getItem("QrCode");

  const [t, i18n] = useTranslation(["global"]);

  return (

    <div className={s.instrucciones}>
      <Link to={url}>
        <div className={s.arrowBack}></div>
      </Link>
      <div className={s.title}>
        <SubTitle text={t("instructions.title")}>
          <div className={s.info}></div>
        </SubTitle>
      </div>
      <Paragraph text={t("instructions.subtitle")} />
      <Ul/>
      <div className={s.bottomContent}>
      <Paragraph text={t("instructions.poweredby")} bold={true} centered={true}>
        <IMenu className={s.imenuLogo} />
      </Paragraph>
      <LinkButton
        path={"/home"}
        type={"primary"}
        text={t("instructions.order")}
        centered={true}
      />
      </div>
    </div>
  );
}
