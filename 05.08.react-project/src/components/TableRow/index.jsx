import PropTypes from "prop-types";
import controller from "../../services/index";
import Swal from "sweetalert2";

const TableRow = ({ product, products, setProducts }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure to delete product?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await controller.deleteDataById("products", id);
        if (response.status === 200) {
          setProducts([...products.filter((q) => q.id !== id)]);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <tr>
      <td>
        <img src={product.image} alt={product.title} width={60} />
      </td>
      <td>{product.id}</td>
      <td title={product.title}>{product.title.slice(0, 20)}</td>
      <td>{product.price}</td>
      <td>{product.category}</td>
      <td title={product.description}>
        {" "}
        {product.description.slice(0, 50)}...
      </td>
      <td>
        <div>
          <button onClick={() => handleDelete(product.id)}>DELETE</button>
          <button>EDİT</button>
        </div>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
  }),
};
export default TableRow;
