import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVidoes from "../../../../components/movie-videos";
import { getMovie } from "../../../../api";
import { Metadata } from "next";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  } as Metadata;
}

export default async function MovieDetailPage({ params: { id } }: IParams) {
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);

  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVidoes id={id} />
      </Suspense>
    </div>
  );
}
