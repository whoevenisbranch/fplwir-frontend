import { Standings } from "./SnapshotContainer";
import styles from "./leaguetable.module.css";

interface ILeagueTableProps {
  standings: Standings[];
}

export default function LeagueTable({ standings }: ILeagueTableProps) {
  const rows = [
    { label: "League Rank", key: "leagueRank" },
    { label: "Points", key: "points" },
    { label: "Overall Rank", key: "overallRank" },
    { label: "Chip Play", key: "chipPlay" },
    { label: "Captain", key: "captain" },
  ];

  return (
    <div className={styles.container__item}>
      <div className={styles.table__container}>
        <table>
          <thead className={styles.table__container__table__head}>
            <tr className={styles.table__container__table__row}>
              <th className={styles.table__container__table__heading}>
                Team Name
              </th>
              {standings.map((team, i) => (
                <th key={i} className={styles.table__container__table__heading}>
                  {team.teamName}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row.key} className={styles.table__container__table__row}>
                <td className={styles.table__container__table__data}>
                  {row.label}
                </td>

                {standings.map((team, i) => (
                  <td key={i} className={styles.table__container__table__data}>
                    {team[row.key as keyof Standings]}
                  </td>
                ))}
              </tr>
            ))}

            <tr className={styles.table__container__table__row}>
              <td className={styles.table__container__table__data}>Selected</td>
              {standings.map((_, i) => (
                <td key={i} className={styles.table__container__table__data}>
                  <input type="checkbox" />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
