import { Link } from "react-router-dom";
import {
  useDeleteCategoryByIdMutation,
  useGetCategoriesQuery,
} from "../../services/categoriesApi";

import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../services/favoritesSlice";
import { addToBasket } from "../../services/basketSlice";

const Categories = () => {
  const { data, refetch, isLoading } = useGetCategoriesQuery();
  const [deleteCategory, deleteResponse] = useDeleteCategoryByIdMutation();

  const favorites = useSelector((state) => state.favorites.items);
  const basket = useSelector((state) => state.basket.items);

  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    await deleteCategory(id);
    refetch();
  };

  const handleAddToFavs = (category) => {
    dispatch(addToFavorites(category));
  };
  const handleRemoveFromFavs = (category) => {
    dispatch(removeFromFavorites(category));
  };
  const handleBasket = (category) => {
    dispatch(addToBasket(category));
    console.log(basket);
  };

  return (
    <div>
      <h1>Categories List</h1>

      {isLoading ? (
        "LOADING..."
      ) : (
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((q) => {
                return (
                  <tr key={q.id}>
                    <td>{q.id}</td>
                    <td>{q.name}</td>
                    <td>{q.description}</td>

                    <td>
                      <Link to={`/${q.id}`}>
                        <FaInfoCircle />
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(q.id)}
                        style={{ color: "red" }}
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                    <td>
                      <Link
                        to={`/add/${q.id}`}
                        style={{ color: "green", marginLeft: "10px" }}
                      >
                        <FaEdit />
                      </Link>
                    </td>

                    <td>
                      <button onClick={() => handleBasket(q)}>
                        <FaShoppingCart style={{ color: "teal" }} />
                      </button>
                    </td>
                    <td>
                      {favorites.some((category) => category.id === q.id) ? (
                        <button onClick={() => handleRemoveFromFavs(q)}>
                          <FaHeart style={{ color: "red" }} />
                        </button>
                      ) : (
                        <button onClick={() => handleAddToFavs(q)}>
                          <FaRegHeart style={{ color: "red" }} />
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Categories;
