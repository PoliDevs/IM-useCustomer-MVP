import { ReactComponent as FacebookLogo } from "../../../assets/FacebookIcon.svg";
import { ReactComponent as InstagramLogo } from "../../../assets/InstagramIcon.svg";
import { Link } from "react-router-dom";
import SmallText from "../../atoms/SmallText/SmallText";
import s from './ContactFooter.module.scss';
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function ContactFooter() {
  const language = useSelector((state)=> state.language);
  const [t, i18n] = useTranslation(["global"]);

  return (
    <footer className={s.contactFooter}>
      <Link className={s.link} to={"https://www.imenu.com.ar"}>
        <SmallText text={"www.imenu.com.ar"} smaller={true} noMargin={true} />
      </Link>
      |
      <Link className={s.link} to={"/"}>
        <SmallText
          text={t("contactFooter.contact")}
          smaller={true}
          noMargin={true}
        />
      </Link>
      |
      <SmallText
        text={t("contactFooter.imenu")}
        smaller={true}
        noMargin={true}
      />
      <Link className={s.link}>
        <FacebookLogo className={s.icon} />
      </Link>
      <Link className={s.link}>
        <InstagramLogo className={s.icon} />
      </Link>
    </footer>
  );
}
