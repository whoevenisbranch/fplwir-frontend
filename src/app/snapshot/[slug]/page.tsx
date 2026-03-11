import Divider from "@/components/Divider";
import SnapshotContainer from "@/components/snapshot/SnapshotContainer";
import SnapshotTitle from "@/components/snapshot/SnapshotTitle";
import styles from "./page.module.css";

import { promises as fs } from "fs";
import { ManagerDetail, Root } from "@/types/api";

export default async function SnapshotPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  //TODO: fetch from API

  const file = await fs.readFile(
    process.cwd() + "/src/data/snapshot.json",
    "utf8",
  );
  const { data }: Root = JSON.parse(file);

  const details: ManagerDetail[] = data.details;
  const sortedStandings = [...details].sort(
    (a, b) => a.snapshotRank - b.snapshotRank,
  );

  return (
    <>
      <main className={styles.main}>
        {/* <!-- LEAGUE NAME SECTION--> */}
        <SnapshotTitle
          gameweek={data.gw}
          leagueName={data.name}
          id={parseInt(slug)}
        />
        <Divider />
        <SnapshotContainer managerDetails={sortedStandings} />
      </main>
    </>
  );
}
