import { useState } from 'react';
import LoginCheckBox from '../../atoms/LoginCheckBox/LoginCheckBox';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import s from './LanguageOption.module.scss';

export default function LanguageOption({text, lang, id}) {
    const [checked, setChecked] = useState(false);

  return (
    <div className={s.optionContainer}>
      <div className={s.textContainer}>
        <h2>{text}</h2>
        <Paragraph text={lang} />
      </div>
      <LoginCheckBox id={id} checked={checked} setChecked={setChecked} lang={lang}/>
    </div>
  );
}
