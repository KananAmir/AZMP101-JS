import { Link } from "react-router-dom";
import {
  useDeleteCategoryByIdMutation,
  useGetCategoriesQuery,
} from "../../services/categoriesApi";

const Categories = () => {
  const { data, refetch, isLoading } = useGetCategoriesQuery();
  //   console.log(data);

  const [deleteCategory, deleteResponse] = useDeleteCategoryByIdMutation();

  const handleDelete = async (id) => {
    // console.log(id);
    await deleteCategory(id);
    refetch();
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
                      <Link to={`/${q.id}`}>details</Link>
                    </td>
                    <td>
                      <Link
                        to={`/add/${q.id}`}
                        style={{ color: "green", marginLeft: "10px" }}
                      >
                        edit
                      </Link>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(q.id)}>DELETE</button>
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
