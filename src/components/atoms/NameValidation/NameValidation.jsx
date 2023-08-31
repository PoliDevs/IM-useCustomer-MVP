import s from "./NameValidation.module.scss";

export default function NameValidation({text, error}) {
  return <p className={`${s.nameValidation} ${error && s.visible}`}>{text}</p>
}
