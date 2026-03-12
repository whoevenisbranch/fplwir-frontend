import Divider from "@/components/Divider";
import SnapshotContainer from "@/components/snapshot/SnapshotContainer";
import SnapshotTitle from "@/components/snapshot/SnapshotTitle";
import styles from "./page.module.css";

import { ManagerDetail, Root } from "@/types/api";
import { notFound } from "next/navigation";
import axios from "axios";
import { Suspense } from "react";

async function fetchSnapshot(leagueId: number): Promise<Root> {
  const response = await axios.get(
    `http:localhost:3000/api/snapshot/${leagueId}`,
  );
  return response.data;
}

export default async function SnapshotPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const regex = /^(?:[1-9]\d*)$/;
  if (!regex.test(slug)) {
    notFound();
  } else {

    const { data }: Root = await fetchSnapshot(parseInt(slug));

    const details: ManagerDetail[] = data.details;
    const sortedStandings = [...details].sort(
      (a, b) => a.snapshotRank - b.snapshotRank,
    );

    return (
      <>
        <main className={styles.main}>
          <Suspense fallback={<div>Loading...</div>}>
            <SnapshotTitle
              gameweek={data.gw}
              leagueName={data.leagueName}
              id={data.leagueId}
            />
            <Divider />
            <SnapshotContainer managerDetails={sortedStandings} />
          </Suspense>
        </main>
      </>
    );
  }
}
