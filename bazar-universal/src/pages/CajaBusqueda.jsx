import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import BarraBusqueda from '../components/BarraBusqueda';

const CajaBusqueda = () => {
  const [amplio, setAmplio] = useState(true);  // Inicialmente en true
  const navigate = useNavigate();
  const location = useLocation();


  
  // Función para manejar la búsqueda
  const handleSearch = (query) => {
    if (query.trim()) {
      navigate(`/items?search=${query}`);

    }else{
      navigate('/');
    }
  };

  // Cambia amplio a false si hay contenido en el Outlet (es decir, si la ruta actual no es "/")
  useEffect(() => {
    setAmplio(location.pathname === '/');
  }, [location]);

  return (
    <div>
      <BarraBusqueda onSearch={handleSearch} amplio={amplio} />
      <Outlet />
    </div>
  );
};

export default CajaBusqueda;
