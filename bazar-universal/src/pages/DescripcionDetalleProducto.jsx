import { useParams } from "react-router-dom";
import useFetchItem from "../hooks/useItem";
import useSale from "../hooks/useSale";
import DetalleProducto from "../components/DetalleProducto";
import toast from "react-hot-toast";

const DescripcionDetalleProducto = () => {
  const { id } = useParams(); // Obtén el id desde la URL
  const { item, loading, error, fetchItem } = useFetchItem(id);
  const { addSale } = useSale();

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleAddSale = async ({ productId, quantity }) => {
    try {
      const res = await addSale({ productId, quantity });
      if (res.ok) {
        fetchItem(id);
        toast.success("Se realizó la venta.");
      } else {
        toast.error("No se realizó la venta.");
      }
    } catch (e) {
      console.error(e);
      toast.error("No se realizó la venta.");
    }
  };

  return (
    <div>
      {item ? (
        <DetalleProducto
          key={item._id}
          id={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          brand={item.brand}
          stock={item.stock}
          category={item.category}
          images={item.images}
          rating={item.rating}
          addSale={handleAddSale}
        />
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </div>
  );
};

export default DescripcionDetalleProducto;
