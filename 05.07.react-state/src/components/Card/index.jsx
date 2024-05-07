import PropTypes from "prop-types";

const Card = ({ product }) => {
  return (
    <div style={{ border: "2px solid red" }}>
      <h3>Title: {product.name}</h3>
      <p>Descriotion: {product.desc}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

// Card.propTypes = {
//   product: PropTypes.object,
// };
Card.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
  }),
};
export default Card;
