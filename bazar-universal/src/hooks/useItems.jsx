import { useState, useEffect } from 'react';

const useFetchItems = (query) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`https://service-bazar.onrender.com/api/items?q=${query}`);
        const data = await response.json();
        console.log(`${data.length} results found`);
        setItems(data);
      } catch (err) {
        setError('Error fetching data');
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [query]);

  return { items, loading, error };
};

export default useFetchItems;
