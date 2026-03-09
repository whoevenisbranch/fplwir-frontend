import Divider from "../Divider";
import AverageScore from "./AverageScore";
import GameweekWinner from "./GameweekWinner";
import LeagueTable from "./LeagueTable";
import Podium from "./Podium";
import SelectedTeamDisplay from "./SelectedTeamDisplay";
import styles from "./snapshotcontainer.module.css";

export type ManagerMetadata = {
  name: string;
  points: number;
  rank: string;
};

export type Standings = {
  teamName: string;
  leagueRank: number;
  points: number;
  overallRank: number;
  chipPlay: string;
  captain: string;
};

type GameweekWinner = {
  teamName: string;
  description: string;
};

export default function SnapshotContainer() {
  const managers: ManagerMetadata[] = [
    { name: "Le Saux Solid Crew", points: 1300, rank: "first" },
    { name: "jbl", points: 1200, rank: "second" },
    { name: "Mbuemo No.5", points: 1100, rank: "third" },
  ];

  const gameweekWinner: GameweekWinner = {
    teamName: "Le Saux Solid Crew",
    description:
      "Le Saux Solid Crew used no chips to get 67 points. Captain Fernandes scored 20 points.",
  };

  const standings: Standings[] = [
    {
      teamName: "Le Saux Solid Crew",
      leagueRank: 1,
      points: 67,
      overallRank: 1,
      chipPlay: "NA",
      captain: "Fernandes",
    },
    {
      teamName: "jbl",
      leagueRank: 2,
      points: 50,
      overallRank: 2,
      chipPlay: "NA",
      captain: "Haaland",
    },
    {
      teamName: "Mbuemo No.5",
      leagueRank: 3,
      points: 51,
      overallRank: 3,
      chipPlay: "NA",
      captain: "Semenyo",
    },
    {
      teamName: "JB",
      leagueRank: 4,
      points: 12,
      overallRank: 4,
      chipPlay: "NA",
      captain: "Palmer",
    },
  ];

  const sortedStandings = [...standings].sort(
    (a, b) => a.leagueRank - b.leagueRank,
  );

  return (
    <>
      <section className={styles.overview__section}>
        <div className={styles.overview__container}>
          <Podium managers={managers} />
          <GameweekWinner
            teamName={gameweekWinner.teamName}
            description={gameweekWinner.description}
          />
          <AverageScore avg={58} />
        </div>
      </section>
      <Divider />
      <section className={styles.league__table__section}>
        <LeagueTable standings={sortedStandings} />
        <Divider />
        <SelectedTeamDisplay />
      </section>
    </>
  );
}
