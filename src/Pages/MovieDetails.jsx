import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Backdrop from '../assets/backdrop.jpg';

const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res =
        await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=add348cc8b615e9c7b23e622c3d26db8
      `);
      const data = await res.json();
      setMovie(data);
    }
    fetchData();
  }, [params.id]);

  console.log(movie);
  const thumbnail = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : Backdrop;

  useEffect(() => {
    document.title = `${movie.title} | CineDB`;
  });
  return (
    <main>
      <section className="flex justify-around flex-col md:flex-row">
        <div className="max-w-sm">
          <img src={thumbnail} alt={movie.title} className=" rounded " />
        </div>
        <div className="max-w-2xl ">
          <h1 className="text-3xl text-slate-500 dark:text-white font-bold mb-3">
            {movie.title}
          </h1>
          <p className="text-lg text-slate-500 dark:text-white mb-5">
            {movie.overview}
          </p>
          <div className="flex mb-5">
            {movie.genres
              ? movie.genres.map((item) => (
                  <div
                    key={item.id}
                    className="border rounded border-slate-500 w-fit px-5 py-2 text-slate-500 dark:text-white text-base mr-3"
                  >
                    {item.name}
                  </div>
                ))
              : null}
          </div>

          <div className="flex items-center mb-5">
            <svg
              className="w-5 h-5 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-lg font-medium text-slate-500 dark:text-white">
              4.95
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-lg font-medium text-slate-500 dark:text-white">
              73 reviews
            </span>
          </div>
          <div className="font-semibold text-slate-500 dark:text-white text-lg mb-5">
            Runtime: <span className="font-normal">{movie.runtime} min.</span>
          </div>
          <div className="font-semibold text-slate-500 dark:text-white text-lg mb-5">
            Budget: <span className="font-normal">{movie.budget} USD</span>
          </div>
          <div className="font-semibold text-slate-500 dark:text-white text-lg mb-5">
            Revenue: <span className="font-normal">{movie.revenue} USD</span>
          </div>
          <div className="font-semibold text-slate-500 dark:text-white text-lg mb-5">
            Release Date:{' '}
            <span className="font-normal">{movie.release_date}</span>
          </div>
          <div className="font-semibold text-slate-500 dark:text-white text-lg">
            IMDB Url: &nbsp;
            <span className="font-normal">
              <a
                className="underline"
                href={`https://imdb.com/title/${movie.imdb_id}`}
                target={`_blank`}
              >{`https://imdb.com/title/${movie.imdb_id}`}</a>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MovieDetails;
