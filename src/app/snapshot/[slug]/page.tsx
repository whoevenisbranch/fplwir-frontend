import Divider from "@/components/Divider";
import SnapshotContainer from "@/components/snapshot/SnapshotContainer";
import SnapshotTitle from "@/components/snapshot/SnapshotTitle";
import styles from "./page.module.css";

export default async function SnapshotPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  //TODO: fetch from API

  return (
    <>
      <main className={styles.main}>
        {/* <!-- LEAGUE NAME SECTION--> */}
        <SnapshotTitle leagueName={"Pain In Dias"} id={parseInt(slug)} />
        <Divider />
        <SnapshotContainer />
      </main>
    </>
  );
}
