import { Player } from "@/types/snapshot";
import PlayerCard from "./PlayerCard";
import styles from "./pitchrows.module.css";

type Props = {
  players: Player[];
  isBench: boolean;
  chipPlayed: string;
};

export default function PitchRow({ players, isBench, chipPlayed }: Props) {
  return (
    <div
      className={`${styles.pitch__position} ${isBench ? `${styles.bench}` : ``} ${isBench && chipPlayed === "bboost" ? `${styles.bboost}` : ``}`}
    >
      {players.map((player) => (
        <PlayerCard
          key={player.name}
          position={player.position}
          name={player.name}
          points={player.points}
          isCaptain={player.isCaptain}
          chipPlayed={chipPlayed}
        />
      ))}
    </div>
  );
}
