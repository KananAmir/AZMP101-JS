import React from "react";
import PropTypes from "prop-types";

const ProductListItem = ({ product }) => {
  return <li>{product.title}</li>;
};

ProductListItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
};
export default ProductListItem;
