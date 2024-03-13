import { json } from "stream/consumers";

export const metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  // URL이 변경되지 않으면, 첫번째 호출을 캐싱한 데이터를 사용.
  // const response = await fetch(URL);
  const response = await fetch(URL + "?t=" + new Date().getTime());
  return response.json();
}

export default async function HomePage() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
}
