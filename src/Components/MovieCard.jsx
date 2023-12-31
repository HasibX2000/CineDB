/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Backdrop from '../assets/backdrop.jpg';

const MovieCard = ({ movie }) => {
  const { id, title, overview, poster_path } = movie;
  const thumbNail = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : Backdrop;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-900">
      <Link to={`/movie/${id}`}>
        <img className="rounded-t-lg" src={thumbNail} alt="" />
      </Link>
      <div className="p-5">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
