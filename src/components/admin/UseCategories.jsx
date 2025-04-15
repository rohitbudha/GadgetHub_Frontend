import axios from 'axios';
import { useEffect, useState } from 'react';

const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/admin/category')
      .then(res => setCategories(res.data))
      .catch(err => console.error("Error fetching categories", err));
  }, []);

  return categories;
};

export default useCategories;
