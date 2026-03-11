import { ManagerDetail } from "@/types/api";
import PitchRow from "./PitchRow";
import TeamStats from "./TeamStats";

import styles from "./selectedteamdisplay.module.css";
import { Player } from "@/types/snapshot";

interface Props {
  selectedTeam: ManagerDetail;
}

export default function SelectedTeamDisplay({ selectedTeam }: Props) {
  const goalkeepers: Player[] = selectedTeam.picks.filter(
    (pick) => pick.position === "GKP" && !pick.isBenched,
  );

  const defenders: Player[] = selectedTeam.picks.filter(
    (pick) => pick.position === "DEF" && !pick.isBenched,
  );

  const midfielders: Player[] = selectedTeam.picks.filter(
    (pick) => pick.position === "MID" && !pick.isBenched,
  );

  const forwards: Player[] = selectedTeam.picks.filter(
    (pick) => pick.position === "FWD" && !pick.isBenched,
  );

  const bench: Player[] = selectedTeam.picks.filter((pick) => pick.isBenched);

  return (
    <div className={styles.selected__team__container__item}>
      <h2>{selectedTeam.teamName}</h2>
      <TeamStats
        leagueRank={selectedTeam.snapshotRank}
        overallRank={selectedTeam.overallPoints}
        weeklyPoints={selectedTeam.eventPoints}
      />
      <div className={styles.pitch__grid__container}>
        <PitchRow players={goalkeepers} isBench={false} />
        <PitchRow players={defenders} isBench={false} />
        <PitchRow players={midfielders} isBench={false} />
        <PitchRow players={forwards} isBench={false} />
        <PitchRow players={bench} isBench={true} />
      </div>
    </div>
  );
}
