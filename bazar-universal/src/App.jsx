import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import CajaBusqueda from "./pages/CajaBusqueda";
import ListaResultados from "./pages/ListaResultados";
import DescripcionDetalleProducto from "./pages/DescripcionDetalleProducto";
import ListaCompras from "./pages/ListaCompras";
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<CajaBusqueda />}>
          <Route path="items" element={<ListaResultados />} />
          <Route path="item/:id" element={<DescripcionDetalleProducto />} />
        </Route>

        <Route path="/sales/*" element={<ListaCompras />} />
        <Route
          path="/compras/*"
          element={<Navigate replace to="/sales"></Navigate>}
        />
        <Route path="/*" element={<Navigate replace to="/"></Navigate>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
