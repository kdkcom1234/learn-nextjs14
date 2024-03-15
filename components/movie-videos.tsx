import { getVideos } from "../api";

export default async function MovieVidoes({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
