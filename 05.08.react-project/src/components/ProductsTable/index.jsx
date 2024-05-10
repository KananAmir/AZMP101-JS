import PropTypes from "prop-types";
import TableRow from "../TableRow";
const ProductsTable = ({ products, setProducts }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Photo</th>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Category</th>
          <th>Description</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {products &&
          products.map((product) => {
            return (
              <TableRow
                products={products}
                setProducts={setProducts}
                product={product}
                key={product.id}
              />
            );
          })}
      </tbody>
    </table>
  );
};

ProductsTable.propTypes = {
  products: PropTypes.object,
  setProducts: PropTypes.func,
};
export default ProductsTable;
