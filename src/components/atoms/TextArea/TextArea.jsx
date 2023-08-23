import s from "./TextArea.module.scss";
export default function TextArea({comment, handleChange}) {
  return (
    <textarea
      className={s.comment}
      value={comment}
      rows="5"
      cols="30"
      placeholder="Agregá comentarios y observaciones."
      onChange={handleChange}
    ></textarea>
  );
}
