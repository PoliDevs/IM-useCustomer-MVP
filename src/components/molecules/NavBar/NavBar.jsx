import { useState } from "react";
import { ReactComponent as ArrowBack } from "../../../assets/ArrowBack.svg";
import { ReactComponent as Profile } from "../../../assets/Profile.svg";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import s from "./NavBar.module.scss";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [userActive, setUserActive] = useState(false);
  const [langActive, setLangActive] = useState(false);
  const navigate = useNavigate();

  const handleUser = () => {
    setUserActive(!userActive);
    setLangActive(false);
  };

  const handleLang = () => {
    setLangActive(!langActive);
    setUserActive(false);
  };

  return (
    <nav className={s.navBar}>
      <ArrowBack className={s.icon} onClick={()=>navigate("/login")} />
      <div className={s.infoContainer}>
        <Profile
          className={`${s.icon} ${userActive && s.pfActive} ${s.pfIcon}`}
          onClick={handleUser}
          onBlur={() => setUserActive(false)}
        >
        <div className={`${userActive && s.visible} ${s.userContainer}`}>
          <div className={s.userInfo}>
            <Profile className={s.icon} />
            <Paragraph text={"user.email"} />
          </div>
          <hr />
          <div className={s.logOutContainer}>
            <ArrowBack className={s.icon} />
            <Paragraph text={"Desconectar"} />
          </div>
        </div>
        </Profile>
        <div
          className={`${s.lang} ${langActive && s.lgActive}`}
          onClick={handleLang}
          onBlur={() => setLangActive(false)}
        >
          <Paragraph text={"Es"} />
          <div className={`${langActive && s.visible} ${s.langsContainer}`}>
            <div className={s.langOption}>
              <Paragraph text={"Español"} />
            </div>
            <div className={s.langOption}>
              <Paragraph text={"English"} />
            </div>
            <div className={s.langOption}>
              <Paragraph text={"Português"} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
