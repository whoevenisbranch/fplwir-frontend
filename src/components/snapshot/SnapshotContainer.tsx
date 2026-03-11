import { ManagerDetail } from "@/types/api";
import Divider from "../Divider";
import AverageScore from "./AverageScore";
import GameweekWinner from "./GameweekWinner";
import LeagueTable from "./LeagueTable";
import Podium from "./Podium";
import SelectedTeamDisplay from "./SelectedTeamDisplay";
import styles from "./snapshotcontainer.module.css";
import {
  calculateDefaultScore,
  findTopManager,
  generateTopManagerDescription,
} from "@/helpers/snapshot";
import { ManagerMetadata, Standing } from "@/types/snapshot";

interface IProps {
  managerDetails: ManagerDetail[];
}

type Podium = {
  first: ManagerMetadata;
  second: ManagerMetadata;
  third: ManagerMetadata;
};

export default function SnapshotContainer({ managerDetails }: IProps) {
  //TODO: Some state needed here to set the selected team from the form to the selected team view

  const first: ManagerDetail = managerDetails[0];
  const second: ManagerDetail = managerDetails[1];
  const third: ManagerDetail = managerDetails[2];

  const avg = calculateDefaultScore(managerDetails);
  const topPlayer = findTopManager(managerDetails);

  const gameweekWinner = {
    teamName: topPlayer.teamName,
    points: topPlayer.eventPoints,
    description: generateTopManagerDescription(topPlayer),
  };

  const standings: Standing[] = managerDetails.map((manager) => ({
    teamName: manager.teamName,
    leagueRank: manager.snapshotRank,
    points: manager.eventPoints,
    overallRank: manager.overallRank,
    chipPlay: manager.chipPlayed,
    captain: manager.captain,
    viceCaptain: manager.viceCaptain,
  }));

  return (
    <>
      <section className={styles.overview__section}>
        <div className={styles.overview__container}>
          <Podium first={first} second={second} third={third} />
          <GameweekWinner {...gameweekWinner} />
          <AverageScore avg={avg} />
        </div>
      </section>
      <Divider />
      <section className={styles.league__table__section}>
        <LeagueTable standings={standings} />
        <Divider />
        <SelectedTeamDisplay selectedTeam={managerDetails[0]} />
      </section>
    </>
  );
}
