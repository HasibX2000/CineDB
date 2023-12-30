import React, { useEffect, useState } from 'react';
import MovieCard from '../Components/MovieCard';
import useFetch from '../hooks/useFetch';

const MovieList = ({ apiPath }) => {
  const { data: movies } = useFetch(apiPath);

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
