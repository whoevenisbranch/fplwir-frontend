interface ITeamStatsProps {
  /** The league rank */
  leagueRank: number;
  /** The overall player rank */
  overallRank: number;
  /** The points to display */
  weeklyPoints: number;
}

export default function TeamStats({
  leagueRank,
  overallRank,
  weeklyPoints,
}: ITeamStatsProps) {
  return (
    <div className="selected-team__overview">
      <p>League Rank: {leagueRank}</p>
      <p>Overall: {overallRank}</p>
      <p>Weekly Pts: {weeklyPoints}</p>
    </div>
  );
}
