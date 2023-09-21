

import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (initialConfig) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Create an Axios instance with initial configuration
    const axiosInstance = axios.create(initialConfig);

    // Make the HTTP request
    axiosInstance
      .request()
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [initialConfig]);

  return { data, error, loading };
};

export default useAxios;




