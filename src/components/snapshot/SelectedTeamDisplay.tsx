import PitchRow from "./PitchRow";
import TeamStats from "./TeamStats";

export type Player = {
  /** The player position */
  position: string;
  /** The player name to display */
  name: string;
  /** The points to display */
  points: number;
};

export default function SelectedTeamDisplay() {
  var goalkeepers: Player[] = [
    { position: "GKP", name: "Dubravka", points: 2 },
  ];

  var defenders: Player[] = [
    { position: "DEF", name: "Virgil", points: 1 },
    { position: "DEF", name: "Chalobah", points: 2 },
    { position: "DEF", name: "Guehi", points: 1 },
  ];

  var midfielders: Player[] = [
    { position: "MID", name: "B.Fernandes", points: 8 },
    { position: "MID", name: "Semenyo", points: 7 },
    { position: "MID", name: "Rogers", points: 1 },
    { position: "MID", name: "Rice", points: 3 },
    { position: "MID", name: "Anderson", points: 12 },
  ];

  var forwards: Player[] = [
    { position: "FWD", name: "Haaland", points: 4 },
    { position: "FWD", name: "Bowen", points: 4 },
  ];

  var bench: Player[] = [
    { position: "GKP", name: "Roefs", points: 0 },
    { position: "DEF", name: "Saliba", points: 0 },
    { position: "FWD", name: "Kroupi.Jr", points: 1 },
    { position: "DEF", name: "Esteve", points: 1 },
  ];

  return (
    <div className="selected-team__container__item">
      <h2>Mbuemo No.5</h2>
      <TeamStats leagueRank={12} overallRank={123456789} weeklyPoints={151} />
      <div className="pitch__grid__container">
        <PitchRow players={goalkeepers} isBench={false} />
        <PitchRow players={defenders} isBench={false} />
        <PitchRow players={midfielders} isBench={false} />
        <PitchRow players={forwards} isBench={false} />
        <PitchRow players={bench} isBench={true} />
      </div>
    </div>
  );
}
