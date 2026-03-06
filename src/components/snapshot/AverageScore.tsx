export default function AverageScore({ avg }: { avg: number }) {
  return (
    <div className="overview__item">
      <div className="overview__item__card">
        <h3 className="overview__item__heading">LEAGUE AVG SCORE</h3>
        <div className="overview__avgscore__container">
          <p className="overview__avgscore__points">{avg}</p>
          <p>points</p>
          <br></br>
          <p>(Based on Top 50)</p>
        </div>
      </div>
    </div>
  );
}
