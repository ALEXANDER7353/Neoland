import { useState, useEffect } from 'react';

function useFetch () {} {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const[config, setConfig] = useState({})
  const [url, setUrl] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, config);
      
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, config]);

  return { data, error, loading, setUrl, setConfig };
}

export default useFetch;