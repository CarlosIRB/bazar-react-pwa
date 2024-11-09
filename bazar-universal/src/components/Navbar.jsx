import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333; /* Color de fondo */
  padding: 0.5rem 0rem;
  color: #fff; /* Color de texto */
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 0.5rem;
`;

const ModuleLinks = styled.div`
  margin-right: 0rem;
`;
const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  margin: 0 1rem;

  &:hover {
    color: #ffd700; /* Color en hover */
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLink to="/">
        <LogoContainer>
          <LogoImage
            src="/android/android-launchericon-144-144.png"
            alt="Logo"
          />
        </LogoContainer>
      </NavLink>

      <ModuleLinks>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/sales">Compras</NavLink>
      </ModuleLinks>
    </NavbarContainer>
  );
};

export default Navbar;
