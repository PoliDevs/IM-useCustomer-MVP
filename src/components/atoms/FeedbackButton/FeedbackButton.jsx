import s from "./FeedbackButton.module.scss";

export default function FeedbackButton({text}) {
  return (
    <button className={s.feedbackButton}>{text}</button>
  )
}
