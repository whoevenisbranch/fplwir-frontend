import { Player } from "@/types/snapshot";
import PlayerCard from "./PlayerCard";
import styles from "./pitchrows.module.css";

type Props = {
  players: Player[];
  isBench: boolean;
};

export default function PitchRow({ players, isBench }: Props) {
  return (
    <div
      className={`${styles.pitch__position} ${isBench ? `${styles.bench}` : ``}`}
    >
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
