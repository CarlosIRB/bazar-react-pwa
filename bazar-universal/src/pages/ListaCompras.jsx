import styled from "styled-components";
import useFetchCompras from "../hooks/useSales";
import TarjetaCompra from "../components/TarjetaCompra";

const ListaComprasContainer = styled.div`
  padding: 20px;
`;

const ListaCompras = () => {
  const { sales, loading, error } = useFetchCompras();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ListaComprasContainer>
      <h2>Lista de Compras</h2>
      {sales.length > 0 ? (
        sales.map((compra) => (
          <TarjetaCompra
            key={compra._id}
            productId={compra.productId}
            date={compra.date}
            quantity={compra.quantity}
            total={compra.total}
            name={compra.name}
          />
        ))
      ) : (
        <p>No hay compras registradas.</p>
      )}
    </ListaComprasContainer>
  );
};

export default ListaCompras;
