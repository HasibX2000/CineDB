import React, { useEffect, useState } from 'react';
import MovieCard from '../Components/MovieCard';
import useSearch from '../hooks/useSearch';
import { useSearchParams } from 'react-router-dom';
import Button from '../Components/Button';

const Search = () => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('query');
  const { data: movies } = useSearch(queryTerm);
  useEffect(() => {
    document.title = `Search Results For ${queryTerm}`;
  });

  return (
    <main>
      <section>
        <p className="text-3xl text-slate-700 dark:text-white mb-5">
          {movies.length > 0
            ? `${movies.length} Result Found for '${queryTerm}'`
            : `No Result Found For '${queryTerm}'`}
        </p>
      </section>

      {!movies.length > 0 ? (
        <Button text="Back To Homepage" to="/" />
      ) : (
        <section className="max-w-7xl flex justify-center flex-wrap gap-5">
          {movies &&
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </section>
      )}
    </main>
  );
};

export default Search;
