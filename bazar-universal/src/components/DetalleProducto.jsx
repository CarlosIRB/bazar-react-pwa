import PropTypes from "prop-types";
import styled from "styled-components";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { useState } from "react";

// Contenedor principal del detalle del producto
const ProductDetailContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

// Título del producto
const ProductTitle = styled.h1`
  font-size: 1.8rem;
  color: #333;
  font-weight: bold;
  margin-bottom: 10px;
`;

// Precio del producto
const ProductPrice = styled.p`
  font-size: 1.5rem;
  color: #ff6347;
  font-weight: bold;
  margin: 10px 0;
`;

// Descripción completa del producto
const ProductDescription = styled.p`
  font-size: 1rem;
  color: #555;
  width: 100%;
  line-height: 1.5;
  margin-bottom: 15px;
`;

// Información adicional (marca, stock, categoría)
const ProductInfo = styled.div`
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

// Contenedor de la galería de imágenes
const ImageGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
`;

// Imágenes individuales
const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
`;

// Botón de compra
const BuyButton = styled.button`
  background-color: #ff6347;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #e5533d;
  }
`;

// Contenedor para la puntuación en estrellas
const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2px;
`;

// Estrella activa
const StarIcon = styled(FaStar)`
  color: #ffd700;
  font-size: 0.8rem;
`;

// Estrella vacía
const EmptyStarIcon = styled(FaRegStar)`
  color: #ddd;
  font-size: 0.8rem;
`;

const HalfStarIcon = styled(FaStarHalfAlt)`
  color: #ffd700;
  font-size: 0.8rem;
`;

// Estilo del modal
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #4c4c4c;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
`;

const InputQuantity = styled.input`
  width: 50%;
  padding: 5px;
  margin-top: 10px;
  font-size: 1rem;
  text-align: center;
`;

const ConfirmButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 15px;
  cursor: pointer;
  &:disabled {
    background-color: #ddd;
  }
`;
const DismissButton = styled.button`
  background-color: #ff6347;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 15px;
  margin-left: 10px;
  cursor: pointer;
  &:disabled {
    background-color: #ddd;
  }
`;
const ProductGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

// Componente DetalleProducto
const DetalleProducto = ({
  id,
  title,
  description,
  price,
  brand,
  stock,
  category,
  images,
  rating,
  addSale,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(null);

  const renderStars = () => {
    const stars = [];
    var fullStars = Math.floor(rating); // Estrellas completas
    var hasHalfStar = false;
    if (rating % 1 >= 0.2 && rating % 1 <= 0.7) {
      hasHalfStar = true;
    }

    if (rating % 1 > 0.7) {
      fullStars++;
    }

    // Añadir estrellas completas
    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarIcon key={i} />);
    }

    // Añadir media estrella si aplica
    if (hasHalfStar) {
      stars.push(<HalfStarIcon key="half" />);
    }

    // Añadir estrellas vacías hasta completar 5
    while (stars.length < 5) {
      stars.push(<EmptyStarIcon key={stars.length} />);
    }

    return stars;
  };

  const handleBuyClick = () => {
    setShowModal(true);
  };

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleConfirmPurchase = () => {
    addSale({ productId: id, quantity });
    setShowModal(false);
    setQuantity(0);
  };

  return (
    <ProductDetailContainer>
      <ImageGallery>
        {images.map((image, index) => (
          <ProductImage key={index} src={image} alt={`Imagen ${index + 1}`} />
        ))}
      </ImageGallery>

      <ProductTitle>{title}</ProductTitle>

      <ProductDescription>{description}</ProductDescription>

      <ProductInfo>
        <span>
          <strong>Marca:</strong> {brand}
        </span>
        <span>
          <strong>Categoría:</strong> {category}
        </span>
        <span>
          <strong>Stock disponible:</strong> {stock}
        </span>
      </ProductInfo>

      <ProductGroup>
        <ProductPrice>${price}</ProductPrice>
        <RatingContainer>{renderStars()}</RatingContainer>
      </ProductGroup>
      <BuyButton onClick={handleBuyClick}>Comprar</BuyButton>

      {/* Modal de cantidad */}
      {showModal && (
        <ModalContainer>
          <ModalContent>
            <h2>Ingresa la cantidad</h2>
            <InputQuantity
              type="number"
              min="1"
              max={stock}
              value={quantity}
              onChange={handleQuantityChange}
            />
            <ConfirmButton
              onClick={handleConfirmPurchase}
              disabled={quantity <= 0 || quantity > stock}
            >
              Confirmar compra
            </ConfirmButton>
            <DismissButton
              onClick={() => setShowModal(false)}
            >
              Cancelar
            </DismissButton>
          </ModalContent>
        </ModalContainer>
      )}
    </ProductDetailContainer>
  );
};

// Definición de PropTypes
DetalleProducto.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  addSale: PropTypes.func.isRequired,
};

export default DetalleProducto;
