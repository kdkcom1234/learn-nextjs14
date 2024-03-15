import Link from "next/link";
import styles from "./movie.module.css";

interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
}

export default function Movie({ title, id, poster_path }: IMovieProps) {
  return (
    <div key={id} className={styles.movie}>
      <Link href={`/movies/${id}`}>
        <img src={poster_path} alt={title} />
        {title}
      </Link>
    </div>
  );
}
