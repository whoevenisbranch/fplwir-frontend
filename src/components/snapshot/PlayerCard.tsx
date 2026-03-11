import { getEmojiTypeFromPoints } from "@/helpers/snapshot";
import styles from "./playercard.module.css";

interface IPlayerCardProps {
  /** The player position */
  position: string;
  /** The player name to display */
  name: string;
  /** The points to display */
  points: number;
}

export default function PlayerCard({
  position,
  name,
  points,
}: IPlayerCardProps) {
  return (
    <div className={styles.player__card}>
      <p className={styles.player__position}>{position}</p>
      <p className={styles.player__emoji}>{getEmojiTypeFromPoints(points)}</p>
      <p className={styles.player__name}>{name}</p>
      <p className={styles.player__points}>{points}</p>
    </div>
  );
}
