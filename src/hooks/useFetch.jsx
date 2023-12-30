import React, { useEffect, useState } from 'react';

const useFetch = (apiPath) => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=add348cc8b615e9c7b23e622c3d26db8`;

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
