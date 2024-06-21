import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../context/movie.context";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movies } = useContext(MovieContext);
  const { movieId } = useParams();

  useEffect(() => {
    movies && setMovie(movies.find((curr) => curr._id === movieId));
  }, [movies, movieId]);
  return (
    <div>
      {movie ? (
        <>
          <h1>{movie.title}</h1>
          <h2>{movie.releaseYear}</h2>
          <h3>{movie.description}</h3>
        </>
      ) : (
        <h1>no movie</h1>
      )}
    </div>
  );
}