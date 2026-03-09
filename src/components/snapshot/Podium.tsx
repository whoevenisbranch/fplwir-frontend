import PodiumItem from "./PodiumItem";
import { ManagerMetadata } from "./SnapshotContainer";
import global from "./snapshot.module.css";
import styles from "./podium.module.css";

type ManagerProps = {
  managers: ManagerMetadata[];
};

export default function Podium({ managers }: ManagerProps) {
  return (
    <div className={`${global.overview__item} ${styles.podium}`}>
      <h3 className={global.overview__item__heading}>TOP 3</h3>
      <div className={styles.podium__container}>
        <PodiumItem {...managers[1]} />
        <PodiumItem {...managers[0]} />
        <PodiumItem {...managers[2]} />
      </div>
    </div>
  );
}
