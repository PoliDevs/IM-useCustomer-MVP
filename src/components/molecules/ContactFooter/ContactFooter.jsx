import { ReactComponent as FacebookLogo } from "../../../assets/FacebookIcon.svg";
import { ReactComponent as InstagramLogo } from "../../../assets/InstagramIcon.svg";
import { Link } from "react-router-dom";
import SmallText from "../../atoms/SmallText/SmallText";
import s from './ContactFooter.module.scss';
import { useSelector } from "react-redux";

export default function ContactFooter() {
  const language = useSelector((state)=> state.language);

  return (
    <footer className={s.contactFooter}>
      <Link className={s.link} to={"https://www.imenu.com.ar"}>
        <SmallText text={"www.imenu.com.ar"} smaller={true} noMargin={true} />
      </Link>
      |
      <Link className={s.link} to={"/"}>
        <SmallText
          text={language.contactFooter_contact}
          smaller={true}
          noMargin={true}
        />
      </Link>
      |
      <SmallText
        text={language.contactFooter_iMenu}
        smaller={true}
        noMargin={true}
      />
      <Link className={s.link} to={"/"}>
        <FacebookLogo className={s.icon} />
      </Link>
      <Link className={s.link} to={"/"}>
        <InstagramLogo className={s.icon} />
      </Link>
    </footer>
  );
}
