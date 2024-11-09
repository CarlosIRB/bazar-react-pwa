import { useState, useEffect } from "react";

const useSales = () => {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSales = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/Sales`);
      const data = await response.json();
      console.log(`${data.length} results found`); // Muestra el número de resultados encontrados
      setSales(data);
    } catch (err) {
      setError("Error fetching data");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSales();
  }, []);

  return { sales, loading, error };
};

export default useSales;
