import { PropTypes } from "prop-types";
import styled from "styled-components";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 10px 0;
  width: 90%;
  margin: 1rem auto;
`;

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 15px;
`;

const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h2`
  font-size: 1rem;
  margin: 0;
  color: #333;
  font-weight: bold;
`;

const ProductDescription = styled.p`
  font-size: 0.8rem;
  color: #666;
  margin: 5px 0;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #ff6347;
  margin: 5px 0;
`;

const ProductCategory = styled.span`
  font-size: 0.8rem;
  color: #888;
  margin-top: 5px;
`;

const ProductGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2px;
`;

const StarIcon = styled(FaStar)`
  color: #ffd700; /* Color dorado para la estrella activa */
  font-size: 0.8rem;
`;

const EmptyStarIcon = styled(FaRegStar)`
  color: #ddd; /* Color gris para la estrella vacía */
  font-size: 0.8rem;
`;

const HalfStarIcon = styled(FaStarHalfAlt)`
  color: #ffd700;
  font-size: 0.8rem;
`;

const TarjetaProducto = ({
  onClick,
  title,
  description,
  price,
  category,
  image,
  rating,
}) => {
  const renderStars = () => {
    const stars = [];
    var fullStars = Math.floor(rating);
    var hasHalfStar = false;
    if (rating % 1 >= 0.2 && rating % 1 <= 0.7) {
      hasHalfStar = true;
    }

    if (rating % 1 > 0.7) {
      fullStars++;
    }

    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarIcon key={i} />);
    }

    if (hasHalfStar) {
      stars.push(<HalfStarIcon key="half" />);
    }

    while (stars.length < 5) {
      stars.push(<EmptyStarIcon key={stars.length} />);
    }

    return stars;
  };

  return (
    <CardContainer onClick={onClick}>
      <ProductImage src={image} alt={title} />

      <ProductInfo>
        <ProductGroup>
          <ProductTitle>{title}</ProductTitle>

          <ProductCategory>{category}</ProductCategory>
        </ProductGroup>
        <ProductDescription>{description}</ProductDescription>
        <ProductGroup>
          <ProductPrice>${price}</ProductPrice>
          <RatingContainer>{renderStars()}</RatingContainer>
        </ProductGroup>
      </ProductInfo>
    </CardContainer>
  );
};

TarjetaProducto.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default TarjetaProducto;
