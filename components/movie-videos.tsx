import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  // throw new Error("something broke...");
  return response.json();
}

export default async function MovieVidoes({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
