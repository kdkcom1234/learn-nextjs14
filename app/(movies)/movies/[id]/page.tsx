import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVidoes from "../../../../components/movie-videos";

export default async function MovieDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
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
