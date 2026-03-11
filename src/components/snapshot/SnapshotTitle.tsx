import styles from "./snapshot.module.css";

interface ILeagueMetaData {
  gameweek: number;
  leagueName: string;
  id: number;
}

export default function SnapshotTitle({
  gameweek,
  leagueName,
  id,
}: ILeagueMetaData) {
  return (
    <section className={styles.league__name__container}>
      <h2>
        {leagueName} (ID: {id})
      </h2>
      <p>GW: {gameweek}</p>
    </section>
  );
}
