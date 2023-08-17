import Banner from "../../molecules/Banner/Banner";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import s from "./Home.module.scss";
export default function Home() {
  return (
    <main className={s.home}>
      <Banner />
      <SearchBar />
    </main>
  );
}
