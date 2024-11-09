
import useFetchItems from '../hooks/useItems'; // Importa el hook creado
import { useLocation } from 'react-router-dom';
import TarjetaProducto from '../components/TarjetaProducto'; 
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const SearchCount = styled.p`
  font-size: 1rem;
  margin:0;
  padding-left: 1rem;
`;

const ListaResultados = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('search');
  const { items, loading, error } = useFetchItems(query);

  const handleProductSelect = (id) => {
    console.log(`Producto seleccionado: ${id}`);
    navigate(`/item/${id}`);
  }

  return (
    <div>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {items.length > 0 && (
      <SearchCount>Resultados de la búsqueda {query}: {items.length}</SearchCount>
    )}
      
      {/* Mapear los productos obtenidos */}
      <div>
        {items.length > 0 ? (
          items.map((item) => (
            <TarjetaProducto
              onClick={() => handleProductSelect(item.id)}
              key={item._id}
              id={item.id.$numberInt}
              title={item.title}
              description={item.description}
              price={item.price}
              category={item.category}
              image={item.images[0]}
              rating={item.rating}
            />
          ))
        ) : (
          <SearchCount>No se encontraron productos.</SearchCount>
        )}
      </div>
    </div>
  );
};

export default ListaResultados;
