"use client";

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
import { ChangeEvent, useState } from "react";

interface IProps {
  managerDetails: ManagerDetail[];
}

type Podium = {
  first: ManagerMetadata;
  second: ManagerMetadata;
  third: ManagerMetadata;
};

export default function SnapshotContainer({ managerDetails }: IProps) {
  const [selectedTeam, setSelectedTeam] = useState<ManagerDetail>(
    managerDetails[0],
  );

  // State to store the selected value
  const [selectedId, setSelectedId] = useState<number>(managerDetails[0].managerId);

  // Handle change event with type safety
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setSelectedId(value);

    const selectedManager = managerDetails.find(
      (manager) => manager.managerId === value,
    );
    if (selectedManager !== undefined) {
      setSelectedTeam(selectedManager);
    }
  };

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
    managerId: manager.managerId,
    teamName: manager.teamName,
    leagueRank: manager.snapshotRank,
    points: manager.eventPoints,
    benchedPoints: manager.benchedPoints,
    chipPlay: manager.chipPlayed,
    captain: manager.captain,
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
        <LeagueTable
          standings={standings}
          selectedId={selectedId}
          teamSelectionChanged={handleChange}
        />
        <Divider />
        <SelectedTeamDisplay selectedTeam={selectedTeam} />
      </section>
    </>
  );
}
