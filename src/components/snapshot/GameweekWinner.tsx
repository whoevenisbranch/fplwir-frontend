interface IGameweekWinnerProps {
  teamName: string;
  description: string;
}

export default function GameweekWinner({
  teamName,
  description,
}: IGameweekWinnerProps) {
  return (
    <div className="overview__item">
      <div className="overview__item__card">
        <h3 className="overview__item__heading">GAMEWEEK WINNER</h3>
        <div className="overview__winner__container">
          <p>{teamName}</p>
          <p className="overview__winner__points">67</p>
          <p>points</p>
          <br></br>
          <p className="overview__winner__headline">{description}</p>
          <br></br>
          <p>(Based on Top 50)</p>
        </div>
      </div>
    </div>
  );
}
