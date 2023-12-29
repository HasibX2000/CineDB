import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieList from '../Pages/MovieList';
import MovieDetails from '../Pages/MovieDetails';
import Search from '../Pages/Search';
import ErrorPage from '../Pages/404';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="movie/:id" element={<MovieDetails />} />
      <Route path="movie/popular" element={<MovieList />} />
      <Route path="movie/top" element={<MovieList />} />
      <Route path="movie/upcoming" element={<MovieList />} />
      <Route path="search" element={<Search />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AllRoutes;
