import styles from "./snapshot.module.css";

interface ILeagueMetaData {
  leagueName: string;
  id: number;
}

export default function SnapshotTitle({ leagueName, id }: ILeagueMetaData) {
  return (
    <section className={styles.league__name__container}>
      <h2>
        {leagueName} (ID: {id})
      </h2>
    </section>
  );
}
