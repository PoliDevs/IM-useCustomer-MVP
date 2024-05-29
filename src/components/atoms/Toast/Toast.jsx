import s from "./Toast.module.scss";
import { Link } from "react-router-dom";
function Toast({ text, link, numerocount }) {
  return (
    <Link to={`/${link}`} className={s.link}>
      <div className={s.container}>
        <p className={s.title}>{text}</p>
        <span className={s.numero}>{numerocount}</span>
        {/* <span className={s.close}>&times;</span> */}
      </div>
    </Link>
  );
}

export default Toast;
