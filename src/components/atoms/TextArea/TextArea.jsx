
import s from "./TextArea.module.scss";
export default function TextArea({comment, setComment }) {
 
  return (
    <textarea
      className={s.comment}
      value={comment}
      rows="5"
      cols="25"
      maxLength="140"
      placeholder="Agregá comentarios y observaciones."
      onChange={(e) => setComment(e.target.value)}
    ></textarea>
  );
}
