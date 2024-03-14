import Link from "next/link";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  // URL이 변경되지 않으면, 첫번째 호출을 캐싱한 데이터를 사용.
  // const response = await fetch(API_URL);
  // const response = await fetch(API_URL + "?t=" + new Date().getTime());

  // 캐시 사용하지 않음
  const response = await fetch(API_URL, { cache: "no-store" });
  return response.json();
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
