import global from "./snapshot.module.css";
import styles from "./averagescore.module.css";

export default function AverageScore({ avg }: { avg: number }) {
  return (
    <div className={global.overview__item}>
      <h3 className={global.overview__item__heading}>LEAGUE AVG SCORE</h3>
      <p className={styles.avgscore__points}>{avg}</p>
      <p>points</p>
    </div>
  );
}
