import PodiumItem from "./PodiumItem";
import { ManagerMetadata } from "./SnapshotContainer";

type ManagerProps = {
  managers: ManagerMetadata[];
};

export default function Podium({ managers }: ManagerProps) {
  return (
    <div className="overview__item podium">
      <div className="overview__item__card">
        <h3 className="overview__item__heading">TOP 3</h3>
        <div className="overview__podium__container">
          <PodiumItem {...managers[1]} />
          <PodiumItem {...managers[0]} />
          <PodiumItem {...managers[2]} />
        </div>
      </div>
    </div>
  );
}
