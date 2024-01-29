import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetch(url) {
  const [status, setStatus] = useState('loading');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      setStatus('loading');
      try {
        const response = await axios.get(url);
        setData(response.data);
        setStatus('success');
      } catch (err) {
        setStatus('error');
        setError(err);
      }
    };
    fetch();
  }, [url]);

  return { status, data, error };
}
