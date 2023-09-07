import s from './MpButton.module.scss';

export default function MpButton({text}) {
  return (
    <button className={s.mpButton}>
      {text}
    </button>
  )
}
