import { ManagerMetadata } from "./SnapshotContainer";

export default function PodiumItem({ name, points, rank }: ManagerMetadata) {
  return (
    <div className="overview__podium__item">
      <p className="overview__podium__name">{name}</p>
      <div className={`overview__podium__rank ${rank}`}>
        <p className="overview__podium__rank-pos">2</p>
        <p className="overview__podium__rank-pts">{points} pts</p>
      </div>
    </div>
  );
}
