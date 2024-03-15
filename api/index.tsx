export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  // throw new Error("something broke...");
  return response.json();
}
