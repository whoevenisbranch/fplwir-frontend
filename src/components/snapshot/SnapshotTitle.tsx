interface ILeagueMetaData {
  leagueName: string;
  id: number;
}

export default function SnapshotTitle({ leagueName, id }: ILeagueMetaData) {
  return (
    <section className="league-name__container">
      <h2>
        {leagueName} (ID: {id})
      </h2>
    </section>
  );
}
