import React, { useEffect, useState } from 'react';
import MovieCard from '../Components/MovieCard';

const MovieList = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=add348cc8b615e9c7b23e622c3d26db8`
      );
      const data = await response.json();
      setMovies(data.results);
    }
    fetchData();
  }, []);
  return (
    <main>
      <section className="max-w-7xl flex justify-center flex-wrap gap-5">
        {movies &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </section>
    </main>
  );
};

export default MovieList;
