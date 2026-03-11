import { ManagerMetadata } from "@/types/snapshot";
import styles from "./podiumitem.module.css";

export default function PodiumItem({ name, points, rank }: ManagerMetadata) {
  switch (rank) {
    case "first":
      return (
        <div className={styles.overview__podium__item}>
          <p className={styles.overview__podium__name}>{name}</p>
          <div className={`${styles.overview__podium__rank} ${styles.first}`}>
            <p className={styles.overview__podium__rank__pos}>1</p>
            <p className={styles.overview__podium__rank__pts}>{points} pts</p>
          </div>
        </div>
      );
    case "second":
      return (
        <div className={styles.overview__podium__item}>
          <p className={styles.overview__podium__name}>{name}</p>
          <div className={`${styles.overview__podium__rank} ${styles.second}`}>
            <p className={styles.overview__podium__rank__pos}>2</p>
            <p className={styles.overview__podium__rank__pts}>{points} pts</p>
          </div>
        </div>
      );
    case "third":
      return (
        <div className={styles.overview__podium__item}>
          <p className={styles.overview__podium__name}>{name}</p>
          <div className={`${styles.overview__podium__rank} ${styles.third}`}>
            <p className={styles.overview__podium__rank__pos}>3</p>
            <p className={styles.overview__podium__rank__pts}>{points} pts</p>
          </div>
        </div>
      );
  }
}
