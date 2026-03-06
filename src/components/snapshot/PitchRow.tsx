import PlayerCard from "./PlayerCard";
import { Player } from "./SelectedTeamDisplay";

type Props = {
  players: Player[];
  isBench: boolean;
};

export default function PitchRow({ players, isBench }: Props) {
  return (
    <div className={`pitch__position ${isBench ? "bench" : ""}`}>
      {players.map((player) => (
        <PlayerCard
          key={player.name}
          position={player.position}
          name={player.name}
          points={player.points}
        />
      ))}
    </div>
  );
}
