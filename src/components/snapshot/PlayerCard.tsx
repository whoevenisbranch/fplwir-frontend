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
}

export default function PlayerCard({
  position,
  name,
  points,
  isCaptain
}: IPlayerCardProps) {

  const pointsScored = isCaptain ? points * 2 : points;

  return (
    <div className={`${styles.player__card} ${isCaptain ? `${styles.captain}` : ``}`}>
      <p className={styles.player__position}>{position}</p>
      <p className={styles.player__emoji}>{getEmojiTypeFromPoints(points)}</p>
      <p className={styles.player__name}>{name}</p>
      <p className={styles.player__points}>{pointsScored}</p>
    </div>
  );
}
