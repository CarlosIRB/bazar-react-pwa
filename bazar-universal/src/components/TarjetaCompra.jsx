import PropTypes from "prop-types";
import styled from "styled-components";

const PurchaseCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px 15px;
  margin: 10px 0;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProductId = styled.h3`
  font-size: 1rem;
  color: #333;
  margin: 0 0 5px;
  font-weight: bold;
`;

const PurchaseDetail = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin: 3px 0;
`;

const TotalAmount = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #ff6347;
  margin: 5px 0;
  text-align: right;
`;

const TarjetaCompra = ({ productId, date, quantity, total, name }) => {
  return (
    <PurchaseCardContainer>
      <ProductId>Producto ID: {productId}</ProductId>
      <ProductId>{name}</ProductId>
      <PurchaseDetail>Fecha: {date}</PurchaseDetail>
      <PurchaseDetail>Cantidad: {quantity}</PurchaseDetail>
      <TotalAmount>Total: ${total.toFixed(2)}</TotalAmount>
    </PurchaseCardContainer>
  );
};

TarjetaCompra.propTypes = {
  productId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default TarjetaCompra;
