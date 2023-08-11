import OpenLocal from "../../molecules/dashboard/openLocal/OpenLocal";
import s from './dashboard.module.scss';
import { useDispatch, useSelector } from "react-redux";

export default function Dashboard() {

  const s=useSelector((state)=>state.openStore_reducer);

  return (
    <div className={s.container_dashboard}>
      <OpenLocal/>
    </div>
  )
}
