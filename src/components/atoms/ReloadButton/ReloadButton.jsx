import s from './ReloadButton.module.scss';

export default function ReloadButton() {
  const reload = ()=> window.location.reload(true)
  return (
    <button className={s.reload} onClick={reload}>Recargar</button>
  )
}
