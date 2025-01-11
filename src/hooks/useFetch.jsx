import { useEffect, useState } from 'react';

export function useFetch(fn, param) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchByQuery = async () => {
      try {
        const res = await fn(param);

        setData(res.results || res.cast || res);
      } catch (e) {
        console.log(e);
      }
    };

    fetchByQuery();
  }, [fn, param]);

  return [data, setData];
}
