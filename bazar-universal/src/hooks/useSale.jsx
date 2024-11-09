const useSale = () => {
  const addSale = async ({ productId, quantity }) => {
    try {
      const response = await fetch(`https://service-bazar.onrender.com/api/addSale`, {
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
