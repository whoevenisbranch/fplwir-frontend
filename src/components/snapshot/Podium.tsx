import PodiumItem from "./PodiumItem";
import global from "./snapshot.module.css";
import styles from "./podium.module.css";
import { ManagerDetail } from "@/types/api";

type IManagerProps = {
  first: ManagerDetail;
  second: ManagerDetail;
  third: ManagerDetail;
};

export default function Podium({ first, second, third }: IManagerProps) {
  return (
    <div className={`${global.overview__item} ${styles.podium}`}>
      <h3 className={global.overview__item__heading}>TOP 3</h3>
      <div className={styles.podium__container}>
        {second !== undefined && (
          <PodiumItem
            name={second.teamName}
            points={second.overallPoints}
            rank="second"
          />
        )}
        {first != undefined && (
          <PodiumItem
            name={first.teamName}
            points={first.overallPoints}
            rank="first"
          />
        )}
        {third !== undefined && (
          <PodiumItem
            name={third.teamName}
            points={third.overallPoints}
            rank="third"
          />
        )}
      </div>
    </div>
  );
}
