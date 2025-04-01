import { useRouter } from "next/router";
import { fetchMovieDetails } from "../../utils/fetchMovies";

export default function MovieDetail({ movie }) {
  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.poster_path} alt={movie.title} />
      <p>{movie.overview}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const movie = await fetchMovieDetails(context.params.id);
  return { props: { movie } };
}
