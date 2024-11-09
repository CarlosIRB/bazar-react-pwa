import styled from "styled-components";
import { FaSearch } from "react-icons/fa"; // Icono de lupa
import PropTypes from "prop-types";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.amplio ? "100vh" : "4rem")};
  background-color: ${(props) => (props.amplio ? "#f4f4f4" : "inherit")};
  transition: height 0.5s ease;
`;

const LogoImage = styled.img`
  width: 120px;
  height: 120px;
  opacity: ${(props) => (props.amplio ? "1" : "0")};
  margin-bottom: 20px;
  transition: height 0.5s ease;
`;

const AppTitle = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
  opacity: ${(props) => (props.amplio ? "1" : "0")};
  transition: height 0.5s ease;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 25px;
  padding: 5px 15px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 400px;
  transition: height 0.5s ease;
`;

const SearchIcon = styled(FaSearch)`
  color: #aaa;
  margin-right: 10px;
  cursor: pointer;
  transition: height 0.5s ease;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  padding: 10px;
  font-size: 1rem;
  border-radius: 25px;
  background-color: #f4f4f4;
  color: #333;
  transition: height 0.5s ease;

  &::placeholder {
    color: #aaa;
  }
`;

const SearchButton = styled.button`
  background-color: #ffd700;
  color: #fff;
  font-size: 1rem;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 25px;
  cursor: pointer;
  opacity: ${(props) => (props.amplio ? "1" : "0")};
  &:hover {
    background-color: #ffcc00;
  }
  transition: height 0.5s ease;
`;

const BarraBusqueda = ({ onSearch, amplio }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchClick = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    } else {
      onSearch("");
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Container amplio={amplio}>
      {amplio && (
        <>
          <LogoImage
            amplio={amplio}
            src="/android/android-launchericon-144-144.png"
            alt="Logo"
          />

          <AppTitle amplio={amplio}>Bazar Online</AppTitle>
        </>
      )}

      <SearchContainer amplio={amplio}>
        <SearchIcon onClick={handleSearchClick} />
        <SearchInput
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </SearchContainer>

      {amplio && (
        <SearchButton amplio={amplio} onClick={handleSearchClick}>
          Buscar
        </SearchButton>
      )}
    </Container>
  );
};

BarraBusqueda.propTypes = {
  onSearch: PropTypes.func.isRequired,
  amplio: PropTypes.bool.isRequired,
};

export default BarraBusqueda;
