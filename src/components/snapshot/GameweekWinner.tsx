import global from "./snapshot.module.css";
import styles from "./gameweekwinner.module.css";

interface IGameweekWinnerProps {
  teamName: string;
  description: string;
}

export default function GameweekWinner({
  teamName,
  description,
}: IGameweekWinnerProps) {
  return (
    <div className={global.overview__item}>
      <h3 className={global.overview__item__heading}>GAMEWEEK WINNER</h3>
      <div className={styles.winner__container}>
        <p>{teamName}</p>
        <p className={styles.winner__points}>67</p>
        <p>points</p>
        <br></br>
        <p className={styles.winner__headline}>{description}</p>
        <br></br>
        <p>(Based on Top 50)</p>
      </div>
    </div>
  );
}
