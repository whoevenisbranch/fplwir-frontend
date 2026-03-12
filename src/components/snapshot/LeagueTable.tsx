import { Standing } from "@/types/snapshot";
import styles from "./leaguetable.module.css";
import { ChangeEvent } from "react";

interface ILeagueTableProps {
  standings: Standing[];
  selectedId: number;
  teamSelectionChanged: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function LeagueTable({
  standings,
  selectedId,
  teamSelectionChanged,
}: ILeagueTableProps) {
  const rows = [
    { label: "League Rank", key: "leagueRank" },
    { label: "Points", key: "points" },
    { label: "Points on Bench", key: "benchedPoints" },
    { label: "Chip Play", key: "chipPlay" },
    { label: "Captain", key: "captain" },
  ];

  return (
    <div className={styles.container__item}>
      <div className={styles.table__container}>
        <table className={styles.table}>
          <thead className={styles.table__container__table__head}>
            <tr className={styles.table__container__table__row}>
              <th className={styles.table__container__table__heading}>
                Team Name
              </th>
              {standings.map((team) => (
                <th
                  key={team.managerId}
                  className={styles.table__container__table__heading}
                >
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

                {standings.map((team) => (
                  <td
                    key={team.managerId}
                    className={styles.table__container__table__data}
                  >
                    {team[row.key as keyof Standing]}
                  </td>
                ))}
              </tr>
            ))}

            <tr className={styles.table__container__table__row}>
              <td className={styles.table__container__table__data}>Selected</td>
              {standings.map((team) => (
                <td
                  key={team.managerId}
                  className={styles.table__container__table__data}
                >
                  <input
                    type="radio"
                    name="selectedId"
                    value={team.managerId}
                    checked={selectedId === team.managerId}
                    onChange={teamSelectionChanged}
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
