import Paragraph from '../../atoms/Paragraph/Paragraph';
import LinkButton from "../../atoms/LinkButton/LinkButton";
import LoginCheckBox from "../../atoms/LoginCheckBox/LoginCheckBox";
import s from './Language.module.scss';

export default function Language() {
  return (
    <main className={s.mainContainer}>
      <div className={s.optionContainer}>
        <div className={s.textContainer}>
          <h2>¡Bienvenido!</h2>
          <Paragraph text={"es"} />
        </div>
        <LoginCheckBox />
      </div>
      <div className={s.optionContainer}>
        <div className={s.textContainer}>
          <h2>¡Welcome!</h2>
          <Paragraph text={"en"} />
        </div>
        <LoginCheckBox />
      </div>
      <div className={s.optionContainer}>
        <div className={s.textContainer}>
          <h2>¡Bem vindo!</h2>
          <Paragraph text={"por"} />
        </div>
        <LoginCheckBox />
      </div>
      <LinkButton text={"Comenzar"} />
    </main>
  );
}
