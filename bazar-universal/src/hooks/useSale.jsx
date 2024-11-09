const useSale = () => {
  const addSale = async ({ productId, quantity }) => {
    try {
      const response = await fetch(`http://localhost:5000/api/addSale`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId, quantity }),
      });
      if (!response.ok) {
        throw new Error("Error al agregar la venta");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return { addSale };
};

export default useSale;
