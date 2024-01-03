import React, { useEffect, useState } from 'react';

const useFetch = (queryTerm) => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${
    import.meta.env.VITE_APP_API_KEY
  }&query=${queryTerm}`;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchData();
  }, [url]);
  return { data };
};

export default useFetch;
