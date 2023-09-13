
import s from "./TextArea.module.scss";
export default function TextArea({ comment, setComment, maxLength, placeholder }) {
  return (
    <textarea
      className={s.comment}
      value={comment}
      rows="5"
      cols="25"
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={(e) => setComment(e.target.value)}
    ></textarea>
  );
}
