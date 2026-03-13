import { getEmojiTypeFromPoints } from "@/helpers/snapshot";
import styles from "./playercard.module.css";

interface IPlayerCardProps {
  /** The player position */
  position: string;
  /** The player name to display */
  name: string;
  /** The points to display */
  points: number;
  isCaptain: boolean;
  chipPlayed: string;
}

export default function PlayerCard({
  position,
  name,
  points,
  isCaptain,
  chipPlayed,
}: IPlayerCardProps) {
  const captainMultiplier = chipPlayed === "3xc" ? 3 : 2;
  const pointsScored = isCaptain ? points * captainMultiplier : points;

  return (
    <div
      className={`${styles.player__card} ${isCaptain ? `${styles.captain}` : ``}`}
    >
      <p className={styles.player__position}>{position}</p>
      <p className={styles.player__emoji}>{getEmojiTypeFromPoints(points)}</p>
      <p className={styles.player__name}>{name}</p>
      <p className={styles.player__points}>{pointsScored}</p>
    </div>
  );
}
