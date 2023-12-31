import React, { useEffect, useState } from 'react';

const useFetch = (apiPath) => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${
    import.meta.env.VITE_APP_API_KEY
  }`;

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
