import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieList from '../Pages/MovieList';
import MovieDetails from '../Pages/MovieDetails';
import Search from '../Pages/Search';
import ErrorPage from '../Pages/404';

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<MovieList apiPath="discover/movie" title="Home" />}
      />
      <Route path="movie/:id" element={<MovieDetails />} />
      <Route
        path="movie/popular"
        element={<MovieList apiPath="movie/popular" title="Popular Movies" />}
      />
      <Route
        path="movie/top"
        element={
          <MovieList apiPath="movie/top_rated" title="Top Rated Movies" />
        }
      />
      <Route
        path="movie/upcoming"
        element={<MovieList apiPath="movie/upcoming" title="Upcoming Movies" />}
      />
      <Route path="search/movie" element={<Search />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AllRoutes;
