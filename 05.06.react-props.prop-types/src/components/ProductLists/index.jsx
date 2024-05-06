// import ProductListItem from "../ProductListItem";
// import PropTypes from "prop-types";

// const ProductLists = ({ products }) => {
//   return (
//     <ul>
//       {products &&
//         products.map((product) => {
//           return <ProductListItem product={product} key={product.id} />;
//         })}
//     </ul>
//   );
// };

// ProductLists.propTypes = {
//   products: PropTypes.arrayOf(PropTypes.object),
// };
// export default ProductLists;

import React from "react";
import PropTypes from "prop-types";

const ProductLists = ({ children }) => {
  console.log(children);
  return <ul>{children}</ul>;
};

ProductLists.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ProductLists;
