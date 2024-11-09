import { useState, useEffect } from 'react';

const useFetchItems = (query) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/items?q=${query}`);
        const data = await response.json();
        console.log(`${data.length} results found`);  // Muestra el número de resultados encontrados
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
