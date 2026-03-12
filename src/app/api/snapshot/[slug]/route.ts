import snapshot from "@/data/snapshot.json";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  return Response.json(snapshot);
}
