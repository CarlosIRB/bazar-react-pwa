import { useState, useEffect } from "react";

const useFetchItem = (id) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/item/${id}`);
      if (!response.ok) {
        throw new Error("Producto no encontrado");
      }
      const data = await response.json();
      setItem(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItem(id);
  }, [id]);

  return { item, loading, error, fetchItem };
};

export default useFetchItem;
