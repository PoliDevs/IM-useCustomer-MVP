import { useSelector } from "react-redux";
import { ReactComponent as Closed } from "../../../assets/closedCommerce.svg";
import { ReactComponent as Help } from "../../../assets/Help.svg";
import HugeTitle from "../../atoms/HugeTitle/HugeTitle";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import ContactFooter from "../ContactFooter/ContactFooter";
import s from "./ClosedCommerce.module.scss";
import { Link } from "react-router-dom";

export default function ClosedCommerce({fullHeight}) {
  const commerceName = useSelector((state) => state.commerce.name);
  const language = useSelector((state)=> state.language);

  return (
    <main className={`${s.closedContainer} ${fullHeight && s.fullHeight}`}>
      <div className={s.contentContainer}>
        <div className={s.iconContainer}>
          <Closed className={s.icon} />
        </div>
        <div className={s.textContainer}>
          <HugeTitle text={`${commerceName}`} centered={true} />
          <h2 className={s.isClosed}>{language.closed_isClosed}</h2>
          <SubTitle text={language.closed_comeBack} />
          <hr />
          <Paragraph text={language.welcome_poweredby} gap={true}>
            <span className={s.imenuSpan}> i menu</span>
          </Paragraph>
          <div className={s.helpContainer}>
            <Help className={s.helpIcon} />
            <Link className={s.link}>{language.closed_needHelp}</Link>
          </div>
        </div>
      </div>
      <ContactFooter />
    </main>
  );
}
