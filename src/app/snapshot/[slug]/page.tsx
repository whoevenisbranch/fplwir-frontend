import SnapshotContainer from "@/components/snapshot/SnapshotContainer";
import SnapshotTitle from "@/components/snapshot/SnapshotTitle";

export default async function SnapshotPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  //TODO: fetch from API

  return (
    <>
      <main className="main">
        {/* <!-- LEAGUE NAME SECTION--> */}
        <SnapshotTitle leagueName={"Pain In Dias"} id={parseInt(slug)} />
        <SnapshotContainer />
      </main>
    </>
  );
}
