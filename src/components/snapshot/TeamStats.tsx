import styles from "./teamstats.module.css";

interface ITeamStatsProps {
  /** The league rank */
  leagueRank: number;
  /** The points to display */
  weeklyPoints: number;
}

export default function TeamStats({
  leagueRank,
  weeklyPoints,
}: ITeamStatsProps) {
  return (
    <div className={styles.selected__team__overview}>
      <p>League Rank: {leagueRank}</p>
      <p>Weekly Pts: {weeklyPoints}</p>
    </div>
  );
}
