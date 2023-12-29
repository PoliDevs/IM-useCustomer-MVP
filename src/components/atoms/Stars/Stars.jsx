
import { ReactComponent as Star } from "../../../assets/Star.svg"
import { useRating } from "../../../utils/Functions";
import s from "./Stars.module.scss";

export default function Stars({ starsArray, stars, handleStars }) {

  return (
    <main className={s.ratingContainer}>
      {starsArray.map((star, index) => {
        const currentRate = index + 1;
        return (
          <Star
            key={index}
            onClick={() => handleStars(currentRate)}
            className={s.stars}
            style={{
              fill: currentRate <= stars ? "#FFE143" : "transparent",
              color: currentRate <= stars ? "#FFE143" : "#BABABA",
            }}
          />
        );
      })}
    </main>
  );
}
