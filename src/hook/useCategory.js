// import { useQuery } from "@tanstack/react-query";
// import { useAxios } from "../Context/axiosContext";
// import React, { useEffect } from 'react';
// import axios from 'axios';
// export const useCategories = () => {
//     const axiosInstance = useAxios()
//     return useQuery('categories',async () => {
//         console.log("useCategories")
//         const {data} = await axios.get('https://api-scaloneta-store.onrender.com/api/v1/category')
//         return data
//     })
// }

import { useState, useEffect } from 'react';
import axios from 'axios';

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://api-scaloneta-store.onrender.com/api/v1/category');
        setCategories(response.data.data.result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const addCategory = (category) => {
    setCategories([...categories, category]);
  };

  const removeCategory = (category) => {
    const updatedCategories = categories.filter((c) => c !== category);
    setCategories(updatedCategories);
  };

  const getAllCategories = () => {
    return categories;
  };

  return { categories, loading, error, addCategory, removeCategory, getAllCategories };
};

export default useCategories